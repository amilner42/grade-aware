import {Student} from 'student';
import {Class} from 'student';

export class StudentService {

  // Mock student
  private student = {
    firstName: 'John',
    lastName: 'Smith',
    classes: [
      {
        name: 'Chemistry 12',
        grades: [
          {
            'score': 0,
            'bin': 'Homework',
            'date': '02/05/2016'
          },
          {
            'score': 0,
            'bin': 'Exam',
            'date': '03/05/2016'
          }
        ],
        attendances: [
          {
            'type': 'l',
            'date': '03/05/2015'
          },
          {
            'type': 'a',
            'date': '22/01/2016'
          }
        ],
        comments: [
          {
            'rating': 5,
            'comment': 'Doing fantastic in class',
            'date': '02/05/2016'
          },
          {
            'rating': 2,
            'comment': 'Stopped doing his homework, he needs to start paying attention',
            'date': '22/05/2016'
          }
        ]
      },
      {
        name: 'French 12',
        grades: [
          {
            'score': 100,
            'bin': 'Homework',
            'date': '02/05/2016'
          },
          {
            'score': 100,
            'bin': 'Exam',
            'date': '03/05/2016'
          }
        ],
        attendances: [
          {
            'type': 'l',
            'date': '03/05/2015'
          },
          {
            'type': 'a',
            'date': '22/01/2016'
          }
        ],
        comments: [
          {
            'rating': 5,
            'comment': 'Doing fantastic in class',
            'date': '02/05/2016'
          },
          {
            'rating': 2,
            'comment': 'Stopped doing his homework, he needs to start paying attention',
            'date': '22/05/2016'
          }
        ]
      },
      {
        name: 'Physics 11',
        grades: [
          {
            'score': 99,
            'bin': 'Homework',
            'date': '02/05/2016'
          },
          {
            'score': 100,
            'bin': 'Exam',
            'date': '03/05/2016'
          }
        ],
        attendances: [
          {
            'type': 'l',
            'date': '03/05/2015'
          },
          {
            'type': 'a',
            'date': '22/01/2016'
          }
        ],
        comments: [
          {
            'rating': 5,
            'comment': 'Doing fantastic in class',
            'date': '02/05/2016'
          },
          {
            'rating': 2,
            'comment': 'Stopped doing his homework, he needs to start paying attention',
            'date': '22/05/2016'
          }
        ]
      },
      {
        name: 'Music 12',
        grades: [
          {
            'score': 92,
            'bin': 'Homework',
            'date': '02/05/2016'
          },
          {
            'score': 81,
            'bin': 'Exam',
            'date': '03/05/2016'
          }
        ],
        attendances: [
          {
            'type': 'l',
            'date': '03/05/2015'
          },
          {
            'type': 'a',
            'date': '22/01/2016'
          }
        ],
        comments: [
          {
            'rating': 5,
            'comment': 'Doing fantastic in class',
            'date': '02/05/2016'
          },
          {
            'rating': 2,
            'comment': 'Stopped doing his homework, he needs to start paying attention',
            'date': '22/05/2016'
          }
        ]
      },
      {
        name: 'Drama 12',
        grades: [
          {
            'score': 92,
            'bin': 'Homework',
            'date': '02/05/2016'
          },
          {
            'score': 81,
            'bin': 'Exam',
            'date': '03/05/2016'
          }
        ],
        attendances: [
          {
            'type': 'l',
            'date': '03/05/2015'
          },
          {
            'type': 'a',
            'date': '22/01/2016'
          }
        ],
        comments: [
          {
            'rating': 99,
            'comment': 'Doing fantastic in class',
            'date': '02/05/2016'
          },
          {
            'rating': 100,
            'comment': 'Stopped doing his homework, he needs to start paying attention',
            'date': '22/05/2016'
          }
        ]
      },
      {
        name: 'English 12',
        grades: [
          {
            'score': 10,
            'bin': 'Homework',
            'date': '02/05/2016'
          },
          {
            'score': 12,
            'bin': 'Exam',
            'date': '03/05/2016'
          }
        ],
        attendances: [
          {
            'type': 'l',
            'date': '03/05/2015'
          },
          {
            'type': 'a',
            'date': '22/01/2016'
          }
        ],
        comments: [
          {
            'rating': 5,
            'comment': 'Doing fantastic in class',
            'date': '02/05/2016'
          },
          {
            'rating': 2,
            'comment': 'Stopped doing his homework, he needs to start paying attention',
            'date': '22/05/2016'
          }
        ]
      },
      {
        name: 'Socials 11',
        grades: [
          {
            'score': 50,
            'bin': 'Homework',
            'date': '02/05/2016'
          },
          {
            'score': 13,
            'bin': 'Exam',
            'date': '03/05/2016'
          }
        ],
        attendances: [
          {
            'type': 'l',
            'date': '03/05/2015'
          },
          {
            'type': 'a',
            'date': '22/01/2016'
          }
        ],
        comments: [
          {
            'rating': 5,
            'comment': 'Doing fantastic in class',
            'date': '02/05/2016'
          },
          {
            'rating': 2,
            'comment': 'Stopped doing his homework, he needs to start paying attention',
            'date': '22/05/2016'
          }
        ]
      }
    ]
  };

  public orderClassesByAverageGrade(student: Student): void {
    student.classes.sort((a, b) => {
      if (this.averageGradeForClass(a) < this.averageGradeForClass(b)) {
        return -1;
      } else if (this.averageGradeForClass(a) > this.averageGradeForClass(b)) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  public averageGradeForClass(classWithGrades: Class): number {
    var total = 0;
    for (var i = 0; i < classWithGrades.grades.length; i++) {
      total += classWithGrades.grades[i].score;
    }

    total /= classWithGrades.grades.length;
    return total;
  }

  public get(): Student {
    return this.student;
  }
}


