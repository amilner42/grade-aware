import {Student} from 'student';

export class StudentService {

  // Mock student
  private student = {
    firstName: 'John',
    lastName: 'Smith',
    classes: [
      {
        name: 'chemistry 12',
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
      }
    ]
  };

  public get(): Student {
    return this.student;
  }
}


