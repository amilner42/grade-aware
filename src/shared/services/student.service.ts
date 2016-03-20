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
            'description': 'Midterm 1',
            'score': 65,
            'bin': 'Exam',
            'date': '02/05/2016'
          },
          {
            'description': 'Midterm 2',
            'score': 81,
            'bin': 'Exam',
            'date': '03/05/2016'
          }, {
            'description': 'Pop quiz on chemical naming',
            'score': 58,
            'bin': 'Exam',
            'date': '15/05/2016'
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
            'description': 'Read 1 full french novel',
            'score': 100,
            'bin': 'Homework',
            'date': '02/05/2016'
          },
          {
            'description': 'Write an essay about the novel',
            'score': 100,
            'bin': 'Homework',
            'date': '03/05/2016'
          },
          {
            'description': 'Midterm',
            'score': 88,
            'bin': 'Exam',
            'date': '12/05/2016'
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
            'description': 'Lab 1 - Electromagnets',
            'score': 40,
            'bin': 'Lab',
            'date': '02/05/2016'
          },
          {
            'description': 'Lab 2 - Friction',
            'score': 87,
            'bin': 'Exam',
            'date': '03/05/2016'
          },
          {
            'description': 'Lab 3 - Momentum',
            'score': 81,
            'bin': 'Lab',
            'date': '08/05/2016'
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
            'description': 'Listening Quiz',
            'score': 75,
            'bin': 'Exam',
            'date': '02/05/2016'
          },
          {
            'description': 'Technical Audio Exam',
            'score': 84,
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
            'description': 'Monologue',
            'score': 92,
            'bin': 'Exam',
            'date': '02/05/2016'
          },
          {
            'description': 'Final Play',
            'score': 95,
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
            'description': 'Write an essay about Romeo and Juliet',
            'score': 70,
            'bin': 'Homework',
            'date': '02/05/2016'
          },
          {
            'description': 'Write an essay about The Tempest',
            'score': 73,
            'bin': 'Homework',
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
            'description': 'Midterm 1',
            'score': 50,
            'bin': 'Exam',
            'date': '02/05/2016'
          },
          {
            'description': 'Midterm 2',
            'score': 55,
            'bin': 'Exam',
            'date': '03/05/2016'
          },
          {
            'description': 'Draw a map of Canada',
            'score': 88,
            'bin': 'Homework',
            'date': '04/05/2016'
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


