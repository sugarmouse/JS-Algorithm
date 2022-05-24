interface DefaultCompareFn {
  (a: number, b: number): boolean;
}
interface SwitchPlace {
  (arr: Array<any>, i: number, j: number): void;
}
interface BubbleSort {
  (array: Array<any>, compareFn?: (a: any, b: any) => any):Array<any>;
}

// 辅助函数
const defaultCompareFn: DefaultCompareFn = (a: number, b: number): boolean => {
  return a > b ? true : false;

};

const switchPlace: SwitchPlace = (arr, i, j) => {
  [arr[j], arr[i]] = [arr[i], arr[j]];
};

//冒泡排序
export const bubbleSort:BubbleSort = (array, compareFn = defaultCompareFn) => {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1])) switchPlace(array, j, j + 1);
    }
  }
  return array;
};

// module.exports = bubbleSort
