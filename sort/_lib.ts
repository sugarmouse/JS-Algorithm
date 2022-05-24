interface DefaultCompareFn {
  (a: number, b: number): boolean;
}
interface SwitchPlace {
  (arr: Array<any>, i: number, j: number): void;
}


export const defaultCompareFn: DefaultCompareFn = (a: number, b: number): boolean => {
  return a > b ? true : false;

};

export const switchPlace: SwitchPlace = (arr, i, j) => {
  [arr[j], arr[i]] = [arr[i], arr[j]];
};