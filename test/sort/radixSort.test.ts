import { radixSort } from '../../sort/radixSort';


describe("radixSort", () => {
  it("通过", () => {
    const input = [
      [1, 4, 54, 5423, 65, 7, 765, 897, 43, 654, 432, 3, 445, 32, 5, 7, 2, 4, 5, 654, 7, 5],
      [4, 5, 3, 2, 1, 7, 9, 8]
    ];

    const output = [
      [1, 2, 3, 4, 4, 5, 5, 5, 7, 7, 7, 32, 43, 54, 65, 432, 445, 654, 654, 765, 897, 5423],
      [1, 2, 3, 4, 5, 7, 8, 9]
    ];

    for (let i = 0; i < input.length; i++) {
      expect(radixSort(input[i])).toEqual(output[i]);
    }
  });
});

