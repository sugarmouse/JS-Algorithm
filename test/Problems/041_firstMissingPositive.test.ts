import { firstMissingPositive } from '../../problems/041_firstMissingPositive';


describe("041_firstMissingPositive", () => {
  it("通过", () => {
    const input = [
      [1, 2, 3, 4],
      [0],
      [1],
      [-3, -4, -2, -1]
    ];
    const output = [5, 1, 2, 1];
    for (let i = 0; i < input.length; i++) {
      expect(firstMissingPositive(input[i])).toEqual(output[i]);
    }
  });
});
