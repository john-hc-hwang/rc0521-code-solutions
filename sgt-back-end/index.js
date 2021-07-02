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
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  if (isNaN(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
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
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ('${req.body.name}', '${req.body.course}', '${req.body.score}')
  `;

  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'missing name, course, or score' });
  } else if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({ error: 'score is not an integer from 0 to 100' });
  } else {
    db.query(sql)
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
    const sql2 = `
    select "gradeId",
            "name",
            "course",
            "score",
            "createdAt"
    from "grades"
    `;
    db.query(sql2)
      .then(result => {
        const newGrade = result.rows[result.rows.length - 1];
        res.status(201).json(newGrade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
