
import { insertionSort } from "./insertionSort.js";

/**
 * 1. 创建桶
 *  1.1 找到数组的最大值和最小值，用以确定桶的个数
 *  1.2 原数组的元素放入桶中，按大小区间存放
 * 2. 排序合并
 *  2.1 对单个 bucket 排序
 *  2.2 排序后的每一个 bucket 合并，组成最终排序后的数组
*/

export const bucketSort = (array: number[], bucketSize = 5) => {
  if (array.length <= 1) return array;
  const buckets = createBuckets(array, bucketSize);
  return sortBuckts(buckets);

};

/**
 * It takes an array and a bucket size, and returns an array of arrays, where each sub-array is a
 * bucket
 * 
 * @param array The array to sort
 * @param bucketSize The size of each bucket.
 * 
 * @return An array of arrays.
 */
const createBuckets = (array: number[], bucketSize: number) => {
  const buckets: number[][] = [];
  const { min, max } = findMinAndMax(array);
  console.log(min,max)
  const bucketCount = Math.floor((max - min) / 2) + 1;
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - min) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
};

/**
 * find out the minValue and maxValue of a number array
 * @param array number[] - an array of numbers
 * 
 * @return An object with two properties, min and max.
 */
const findMinAndMax = (array: number[]) => {
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }
   return { min, max };
};

/**
 * It takes an array of buckets, each of which contains an array of numbers, and returns a single array
 * of numbers that is sorted
 * 
 * @param buckets number[][] - an array of number arrays, each number array is a bucket
 * 
 * @return An array of sorted numbers
 */
const sortBuckts = (buckets: number[][]) => {
  const sortedArr: number[] = [];
  buckets.forEach(bucket => {
    sortedArr.push(...bucket.sort((a,b)=>a-b));
  });
  return sortedArr;
};
