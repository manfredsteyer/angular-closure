export class MathTools {
  static sign(num: number) {
    if (num > 0) {
      console.log('Positiv');
      return 1;
    }
    else {
      console.log('Negativ')
      return -1;
    }
  }
}

export function sign(num: number) {
  return MathTools.sign(num);
}