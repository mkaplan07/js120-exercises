function createSchool() {
  return {
    students: [],
    courses: [],
    courseList: [], // helper

    createStudent(name, year, courses) {
      if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
        return {
          name,
          year,
          courses // array of objects
        };
      }
      return null;
    },

    addStudent(name, year, courses) {
      let student = this.createStudent(name, year, courses);
      if (student) { // if the year is valid
        this.students.push(student);
        this.updateCourses(student);
      } else {
        console.log('Invalid year');
      }
    },

    updateCourses(student) {
      student.courses.forEach(course => {
        if (!this.courseList.includes(course.name)) {
          this.courseList.push(course.name);
          this.courses.push({name: course.name, students: []});
        }
      });
    },

    enrollStudent(courseName, studentName) {
      this.courses.forEach(course => {
        if (course.name === courseName) {
          this.students.forEach(student => {
            if (student.name === studentName) {
              course.students.push(student);
            }
          });
        }
      });
    },

    addGrade(studentName, courseName, grade) {
      this.students.forEach(student => {
        if (student.name === studentName) {
          student.courses.forEach(course => {
            if (course.name === courseName) {
              course.grade = grade;
            }
          });
        }
      });
    },

    getReportCard(studentName) {
      this.students.forEach(student => {
        if (student.name === studentName) {
          console.log(`\n${student.name}'s Grades`);
          student.courses.forEach(course => {
            if (!course.grade) {
              course.grade = 'In progress';
            }
            console.log(`${course.name}: ${course.grade}`);
          });
        }
      });
    },

    courseReport(name) {
      if (!this.courseList.includes(name)) {
        console.log('\n' + name + ' ' + undefined);
      }

      this.courses.forEach(course => {
        if (course.name === name) {
          console.log(`\n${course.name} Grades`);
          let sum = 0;
          let students = 0;
          course.students.forEach(student => {
            let studentName = student.name;
            student.courses.forEach(course => {
              // must be part of student object

              if (course.name === name) {
                console.log(`${studentName}: ${course.grade}`);
                if (typeof course.grade === 'number') {
                  sum += course.grade;
                  students += 1;
                }
              }
            });
          });
          if (!sum / students) {
            console.log('\nNo grades yet...');
          } else {
            console.log(`---\nAverage: ${sum / students}`);
          }
        }
      });
    }
  };
}

let school = createSchool();
school.addStudent('Alice', '1st', [{name: 'English'}]);
school.addStudent('near my', '7th'); // 'Invalid year'
school.addStudent('Bob', '2nd',
  [{name: 'Math'}, {name: 'English', grade: 99}]);

school.addStudent('Catty', '3rd', [{name: 'English', grade: 85}]);
school.addStudent('Dingo', '4th', [{name: 'Math'}]);

school.addGrade('Alice', 'English', 90);
school.addGrade('Bob', 'Math', 95);

school.enrollStudent('English', 'Alice');
school.enrollStudent('Math', 'Bob');
school.enrollStudent('English', 'Bob');
school.enrollStudent('English', 'Catty');
school.enrollStudent('Math', 'Dingo');

school.enrollStudent('Math', 'Catty'); // test

school.courses.forEach(course => console.log(course.students));
// Catty enrolled in Math, but it isn't in her obj

school.getReportCard('Alice');
school.getReportCard('Bob');
school.getReportCard('Catty');
school.getReportCard('Dingo');

school.courseReport('English');
school.courseReport('Math');
school.courseReport('Physics'); // undefined

/*
let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', grade: 95, },
    { name: 'Advanced Math', grade: 90, },
    { name: 'Physics' }
  ],
}

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', grade: 91, },
  ],
}

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', grade: 93, },
    { name: 'Advanced Math', grade: 90, },
   ],
}

let school = createSchool();
school.addStudent(foo.name, foo.year, foo.courses);
school.addStudent(bar.name, bar.year, bar.courses);
school.addStudent(qux.name, qux.year, qux.courses);

school.enrollStudent('Math', 'foo');
school.enrollStudent('Advanced Math', 'foo');
school.enrollStudent('Physics', 'foo');
school.enrollStudent('Math', 'bar');
school.enrollStudent('Math', 'qux');
school.enrollStudent('Advanced Math', 'qux');

school.getReportCard('foo');
school.getReportCard('bar');
school.getReportCard('qux');

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
*/
