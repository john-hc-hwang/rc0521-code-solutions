/* exported getStudentNames */

function getStudentNames(students) {
  var studs = [];
  for (var i = 0; i < students.length; i++) {
    studs.push(students[i].name);
  }
  return studs;
}
