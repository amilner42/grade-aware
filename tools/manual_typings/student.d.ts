declare module 'student' {

  export interface Student {
    firstName: string;
    lastName: string;
    classes: Class[];
    attendanceMonths: AttendanceMonth[];
    commentMonths: CommentMonth[];
  }

  export interface Class {
    name: String;
    grades: Grade[];
  }

  export interface Grade {
    description: string;
    score: number;
    bin: string;
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

  export interface CommentMonth {
    monthName: string;
    year: number;
    comments: Comment[];
  }

  export interface Comment {
    teacherFirstName: string;
    teacherLastName: string;
    className: string;
    title: string;
    comment: string;
    day: number;
    rating: number;
  }

}
