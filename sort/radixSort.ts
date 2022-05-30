/**
 * 基数排序
 * LSD least Significant Digit Sort
*/
export const radixSort = (array: number[], radix = 10) => {
  let significantDigit = 1;
  let temp = JSON.parse(JSON.stringify(array));

  //找最大值，确定循环次数
  let maxValue = array[0];
  for (let number of array) {
    maxValue = number > maxValue ? number : maxValue;
  }

  while (maxValue > 1) {
    //创建收集数据的桶
    // 放在循环内部是为了每次分配收集完成之后，进入下一次循环开始要清空 buckets
    const buckets: number[][] = new Array(radix);
    for (let i = 0; i < radix; i++) {
      buckets[i] = [];
    }

    // 分配数据
    for (let i = 0; i < temp.length; i++) {
      let index = (Math.floor(temp[i] / significantDigit)) % radix;
      buckets[index].push(temp[i]);
    }
    // 收集数据
    temp = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i].length < 1) continue;
      temp = temp.concat(buckets[i]);
    }

    // 控制循环条件
    significantDigit *= radix;
    maxValue /= radix;
  }
  return temp;

};

