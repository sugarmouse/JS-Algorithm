interface IsBigger {
  (a: number, b: number): boolean;
}
export const isBigger: IsBigger = (a: number, b: number): boolean => {
  return a > b ? true : false;
};


interface Swap {
  (arr: Array<any>, i: number, j: number): void;
}
export const swap: Swap = (arr, i, j) => {
  [arr[j], arr[i]] = [arr[i], arr[j]];
};