const express = require('express');
const app = express();

app.use(express.json()); // for POST, PUT, PATCH

const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select "gradeId",
          "name",
          "course",
          "score",
          "createdAt"
  from "grades"
`;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

// Example for reference lines 37-66
app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  if (isNaN(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
  }
  const sql = `
  select "gradeId",
          "name",
          "course",
          "score",
          "createdAt"
  from "grades"
  where "gradeId" = $1
  `;
  // 👆 We are NOT putting the user input directly into our query
  // 👆 instead, we are sending the user input in a separate array
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'missing name, course, or score' });
  } else if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({ error: 'score is not an integer from 0 to 100' });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ('${req.body.name}', '${req.body.course}', '${req.body.score}')
    returning *
    `;

    db.query(sql)
      .then(result => {
        const newGrade = result.rows[0];
        res.status(201).json(newGrade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  if (isNaN(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
  } else if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'missing name, course, or score' });
  } else if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({ error: 'score is not an integer from 0 to 100' });
  } else {
    const sql = `
      update "grades"
      set "name" = '${req.body.name}',
          "course" = '${req.body.course}',
          "score" = '${req.body.score}'
      where "gradeId" = $1
      returning *
    `;

    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const updatedGrade = result.rows[0];
        if (!updatedGrade) {
          res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.status(200).json(updatedGrade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  if (isNaN(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
  }

  const params = [gradeId];
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;

  db.query(sql, params)
    .then(result => {
      const deletedGrade = result.rows[0];
      if (!deletedGrade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
