import { reverse } from '../../problems/007_reverse';


describe("007_reverse", () => {
  it("通过", () => {
    const input = [123, 0, -123, 2147483649];
    const output = [321, 0, -321, 0];
    for (let i = 0; i < input.length; i++) {
      expect(reverse(input[i])).toEqual(output[i]);
    }
  });
});
