import { isBigger, switchPlace } from './_lib.js';

interface BubbleSort {
  (array: Array<any>, compareFn?: (a: any, b: any) => any): Array<any>;
}

export const bubbleSort: BubbleSort = (array, compareFn = isBigger) => {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1])) switchPlace(array, j, j + 1);
    }
  }
  return array;
};
