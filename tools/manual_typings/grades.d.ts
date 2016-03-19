declare module 'grades' {

  export interface Class {
    name: String;
    grades: Grade[];
    attendances: Attendance[];
  }

  export interface Grade {
  score: number;
  bin: string;
  date: string;
}


  export interface Attendance {
    type: string;
    date: string;
  }
}
