import { isBigger, swap } from './_lib.js';

interface SelectionSort {
  (array: Array<any>, comparaFn?: (a: any, b: any) => boolean): Array<any>;
}

export const selectionSort: SelectionSort = function (array: Array<any>, comparaFn = isBigger) {
  const { length } = array;
  let minIndex;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i; j < length; j++) {
      if (comparaFn(array[minIndex], array[j])) { minIndex = j; };
    }
    if (minIndex !== i) swap(array, minIndex, i);
  }
  return array;
};

console.log(selectionSort([4, 3, 2, 1])); 