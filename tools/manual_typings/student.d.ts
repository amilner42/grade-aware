declare module 'student' {

  export interface Student {
    firstName: string,
    lastName: string,
    classes: Class[]
  }

  export interface Class {
    name: String;
    grades: Grade[];
    attendances: Attendance[];
    comments: Comment[];
  }

  export interface Grade {
    description: string;
    score: number;
    bin: string;
    date: string;
  }

  export interface Attendance {
    type: string;
    date: string;
  }

  export interface Comment {
    rating: number;
    comment: string;
    date: string;
  }
}
