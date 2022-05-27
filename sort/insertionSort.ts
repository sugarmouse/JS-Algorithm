/**
 * 插入排序
 * 1. 假设最左端的元素已经排序号
 * 2. 右边的元素与左边的元素进行比较。右边小于左边，则交换位置；右边大于左边或者左边不再有元素，停止
 * 3. 继续重复以上操作，直到所有元素都被遍历一遍
 *  - 
*/
import { isBigger, swap } from './_lib.js';

export const insertionSort = (array: any[], compareFN = isBigger) => {
  const { length } = array;
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (isBigger(array[j - 1], array[j])) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
};

/**
 * 修改：上面的写法多比较的很多次
 * break 减少不必要的循环
 */
export const insertionSort2 = (array: any[], compareFN = isBigger) => {
  const { length } = array;
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (isBigger(array[j - 1], array[j])) {
        swap(array, j - 1, j);
      } else {
        break;
      }
    }
  }
  return array;
};

