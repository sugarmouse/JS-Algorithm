import { isBigger, swap } from "./_lib.js";

/**
 * method 1
 * 不断产生新的数组并且展开的方法
 * We take an array, find the middle element, and then compare each element to the middle element. If
 * the element is less than the middle element, we put it in the lesser array. If the element is
 * greater than the middle element, we put it in the greater array. We then recursively call quickSort
 * on the lesser and greater arrays, and then concatenate the lesser array, the middle element, and the
 * greater array
 * @param {any[]} array - the array to be sorted
 * @param compareFN - a function that takes two parameters and returns a boolean.
 * @returns A sorted array
 */
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

/**
 * method 2
 * 指针索引不断修改原数组的方式
*/
/**
 * It takes an array, a left index, a right index, and a compare function, and returns the index of the
 * pivot
 * @param {any[]} array - the array to be sorted
 * @param {number} left - the left index of the array
 * @param {number} right - the right-most index of the array
 * @param compareFN - a function that takes two parameters and returns true if the first parameter is
 * greater than the second parameter.
 * @returns The index of the pivot.
 */
const partition = (array: any[], left: number, right: number, compareFN: (a: any, b: any) => boolean) => {
  const pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (compareFN(pivot, array[i])) {
      i++;
    }
    while (compareFN(array[j], pivot)) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
};


const quick = (array: any[], left: number, right: number, compareFN: (a: any, b: any) => boolean) => {
  if (array.length <= 1) return array;

  let pivot = partition(array, left, right, compareFN);
  if (left < pivot - 1) {
    quick(array, left, pivot - 1, compareFN);
  }
  if (pivot < right) {
    quick(array, pivot, right, compareFN);
  }
  return array;
};

export const quickSort2 = (array: any[], compareFn = isBigger) => {
  return quick(array, 0, array.length - 1, compareFn);
};