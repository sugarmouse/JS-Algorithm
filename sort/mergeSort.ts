/**
 * 归并排序
 * Mozillia Firefox 浏览器对 Array.prototype.sort 的实现
 * 1. 分
 *  1.1 将数组从中间一步一步分成只有一个元素的数组
 * 2. 合
 *  2.1 两个数组合并的时候，比较两者第一个元素，小的放前面
 *  2.2 全部合并完毕则完成了排序
 * 
*/
import { isBigger } from './_lib.js';


/**
 * We split the array into two halves, recursively sort each half, and then merge the two sorted halves
 * @param {any[]} array - the array to be sorted
 * @param compareFN - a function that takes two parameters and returns a boolean.
 * @returns The sorted array.
 */

export const mergeSort = (array: any[], compareFN = isBigger) => {
  if (array.length <= 1) return array;
  
  const middle = Math.floor(array.length / 2);
  const leftArr = mergeSort(array.slice(0, middle), compareFN);
  const rightArr = mergeSort(array.slice(middle, array.length), compareFN);
  array = merge(leftArr, rightArr, compareFN);

  return array;
};


/**
 * It takes two sorted arrays and merges them into one sorted array
 * @param {any[]} leftArr - the left half of the array
 * @param {any[]} rightArr  - the right array to merge
 * @param compareFN - a function that takes two parameters and returns true if the first parameter is
 * greater than the second parameter.
 * @returns The result of the merge function is an array of the two arrays merged together.
 */
const merge = (leftArr: any[], rightArr: any[], compareFN: (a: any, b: any) => boolean) => {
  const result = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    compareFN(leftArr[0], rightArr[0]) ? result.push(rightArr.shift()) : result.push(leftArr.shift());
  }
  return result.concat(leftArr.length > 0 ? leftArr : rightArr);
};


console.log(mergeSort([2, 3, 4, 1]));