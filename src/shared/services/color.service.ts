import {AttendanceMonth} from 'student';

export class ColorService {

  private LATE_WEIGHT = 2.5;
  private ABSENT_WEIGHT = 10;
  private colorGradient = [
    '#FF0000', // Red
    '#FF1100',
    '#FF2300',
    '#FF3400',
    '#FF4600',
    '#FF5700',
    '#FF6900',
    '#FF7B00',
    '#FF8C00',
    '#FF9E00',
    '#FFAF00',
    '#FFC100',
    '#FFD300',
    '#FFE400',
    '#FFF600', // Yellow
    '#F7FF00',
    '#E5FF00',
    '#D4FF00',
    '#C2FF00',
    '#B0FF00',
    '#9FFF00',
    '#8DFF00',
    '#7CFF00',
    '#6AFF00',
    '#58FF00',
    '#47FF00',
    '#35FF00',
    '#24FF00',
    '#12FF00',
    '#00FF00'  // Green
  ];

  // Takes in a score out of 100, picks a color along the gradient where 50% is
  // red and 100% is green. Returns a string representing a color in the
  // standard css color format: '#332F00'
  public getColorFromScore(score: number): string {
    var ratio = 100 / (this.colorGradient.length - 1);
    var indexInGradient = Math.max(0, Math.round((100 -  (100 - score) * 2) / ratio));
    return this.colorGradient[indexInGradient];
  }

  // Given an attendanceMonth return a color (as a string) representing how well
  // you are doing, where green is 0 absents and 0 lates and the more absents or
  // lates the more red it gets.
  public getColorFromAttendanceMonth(attendanceMonth: AttendanceMonth): string {
    var numLates = 0;
    var numAbsents = 0;

    if(attendanceMonth.lates !== undefined) {
      numLates = attendanceMonth.lates.length;
    }

    if(attendanceMonth.absents !== undefined) {
      numAbsents = attendanceMonth.absents.length;
    }

    var score = Math.max(0 , 100 - this.LATE_WEIGHT * numLates - this.ABSENT_WEIGHT * numAbsents);
    var ratio = 100 / (this.colorGradient.length - 1);
    console.log(score / ratio);
    var indexInGradient = Math.round(score / ratio);
    return this.colorGradient[indexInGradient];
  }

}
