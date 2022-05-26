// LeetCode 2


export const addTwoNumbers = function (l1: string, l2: string):string {

  const maxLength = Math.max(l1.length, l2.length);
  let isOverTen = false;
  let sum = '';
  for (let i = 1; i <= maxLength; i++) {
    const l1LastItem: string = l1[l1.length - i] || '0';
    const l2LastItem: string = l2[l2.length - i] || '0';
    let addItem: number = parseInt(l1LastItem) + parseInt(l2LastItem) + (isOverTen ? 1 : 0);
    isOverTen = addItem >= 10;
    addItem = isOverTen ? addItem - 10 : addItem;
    sum = addItem.toString() + sum;
  }
  return sum = isOverTen ? '1' + sum : sum;
};