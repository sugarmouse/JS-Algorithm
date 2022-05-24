
const defaultCompareFn = (a, b) => {
  return a > b ? true : false

}

const switchPlace = (arr, i, j) => {
  [arr[j], arr[i]] = [arr[i], arr[j]]
}

const bubbleSort = (array, compareFn = defaultCompareFn) => {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1])) switchPlace(array, j, j + 1)
    }
  }
  return array
}