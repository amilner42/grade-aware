export class DateService {

  private RD_SUFFIX = [3, 23];
  private ST_SUFFIX = [1, 21, 31];
  private ND_SUFFIX = [2, 22];
  private TH_SUFFIX = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                      20, 24, 25, 26, 27, 28, 29, 30];


  // Get the proper suffix for the day of the month. Eg, 1 --> 1st, 2 --> 2nd
  public dayToString(day: number): string {
    if(day < 1 || day > 31) {
      throw new Error('Day must be between 1 and 31, not: '.concat(day.toString()));
    }

    if(this.RD_SUFFIX.includes(day)) {
      return day.toString().concat('rd');
    } else if (this.ST_SUFFIX.includes(day)) {
      return day.toString().concat('st');
    } else if (this.ND_SUFFIX.includes(day)) {
      return day.toString().concat('nd');
    } else if (this.TH_SUFFIX.includes(day)) {
      return day.toString().concat('th');
    } else {
      throw new Error(day.toString().concat(' is not a valid day'));
    }
  }
}
