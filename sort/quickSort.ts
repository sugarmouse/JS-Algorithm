import { isBigger } from "./_lib.js";

export const quickSort = (array: any[], compareFN = isBigger): any[] => {
  const { length } = array;
  if (length <= 1) return array;

  const middle = Math.floor(length / 2);
  const pivot = array[middle];

  const lesser = [];
  const greater = [];
  for (let i = 0; i < length; i++) {
    if (i === middle) continue;
    compareFN(array[i], pivot) ? greater.push(array[i]) : lesser.push(array[i]);
  }
  const sortedArr = [...quickSort(lesser, compareFN), pivot, ...quickSort(greater, compareFN)];
  return sortedArr;
};