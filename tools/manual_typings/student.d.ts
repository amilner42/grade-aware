declare module 'student' {

  export interface Student {
    firstName: string,
    lastName: string,
    classes: Class[]
    attendanceMonths: AttendanceMonth[];
  }

  export interface Class {
    name: String;
    grades: Grade[];
    comments: Comment[];
  }

  export interface Grade {
    description: string;
    score: number;
    bin: string;
    date: string;
  }

  export interface Comment {
    rating: number;
    comment: string;
    date: string;
  }

  export interface AttendanceMonth {
    monthName: string;
    year: number;
    lates?: AttendanceCard[];
    absents?: AttendanceCard[];
  }

  export interface AttendanceCard {
    day: number;
    className: string;
  }
}
