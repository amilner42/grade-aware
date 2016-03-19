export class ColorService {

  public getColorFromScore(score: number): string {
    var R = Math.round((255 * (100 - score)) / 100);
    var G = Math.round((255 * score) / 100);
    var B = 0;

    return 'rgb(' + R + ',' + G + ',' + B + ')';
  }
}
