import { type } from 'os';
import { twoSum } from '../../problems/twoSum';


type Input = [number[], number][];
type Output = number[][]


describe("两数之和", () => {

  it("通过", () => {
    const input: Input = [
      [[3, 2, 4], 6],
      [[2, 7, 11, 15], 9]
    ];
    const output = [
      [1, 2],
      [0, 1]
    ];
    for (let i = 0; i < input.length; i++) {
      expect(twoSum(input[i][0], input[i][1])).toEqual(output[i]);
    }
  });
});