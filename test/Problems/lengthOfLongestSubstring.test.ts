import { lengthOfLongestSubstring, lengthOfLongestSubstring2} from '../../problems/lengthOfLongestSubstring';


describe("无重复字符的最长子串", () => {
  it("循环嵌套法通过", () => {
    const input=[
      "abcabcbb",
      "bbbbb",
      "pwwkew"
    ];
    const output = [
      3,
      1,
      3
    ];
    for(let i=0;i<input.length;i++){
      expect( lengthOfLongestSubstring(input[i])).toEqual(output[i]);
    }
  });
  it("map解法通过", () => {
    const input=[
      "abcabcbb",
      "bbbbb",
      "pwwkew"
    ];
    const output = [
      3,
      1,
      3
    ];
    for(let i=0;i<input.length;i++){
      expect( lengthOfLongestSubstring2(input[i])).toEqual(output[i]);
    }
  });
});
