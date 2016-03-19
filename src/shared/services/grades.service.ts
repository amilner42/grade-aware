import {Class} from 'grades';

export class GradesService {

  // Mock grades
  private grades = [
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
      ]
    }
  ];

  public get(): Class[] {
    return this.grades;
  }

}


