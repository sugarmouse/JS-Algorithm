/**
 * 计数排序
 * 只能用来对于整数数组进行排序
 * 
 * 1. 找出原数组出现的最大值，创建临时记数数组
 * 2. 原数组的元素作为记数数组的下标，出现次数作为原数组的对应下标的值
 * 3. 遍历记数数组对原数组进行排序
*/


export const countingSort = (array: any[], findMaxValue = defaultFindMaxValue) => {
  if (array.length <= 1) return array;
  const maxValue = findMaxValue(array);
  const tempCounteArray = new Array(maxValue + 1);

  array.map((item, index) => {
    if (!tempCounteArray[item]) tempCounteArray[item] = 0;
    tempCounteArray[item]++;
  });
  let res:number[] = [];
  tempCounteArray.map((amount, index) => {
      for (let i = 0; i < amount; i++) {
        res.push(index)
    }
  });
  return res
};

const defaultFindMaxValue = (array: number[]) => {
  let max = -1;
  for (let i = 0; i < Array.length; i++) {
    max = array[i] > max ? array[i] : max;
  }
  return max;
};

console.log(countingSort([2,3,4,4,5,5,6,6,7,7,8,8,9,91,3,4,4]))
