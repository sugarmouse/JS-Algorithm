import { strStr } from '../../problems/strStr';


describe("strStr", () => {
  it("通过", () => {
    const input = [
      ['a','a'],
      ['aaaa','bba'],
      ['hello','ll']
    ];
    const output = [0,-1,2];
    for (let i = 0; i < input.length; i++) {
      expect(strStr(input[i][0],input[i][1])).toEqual(output[i]);
    }
  });
});
