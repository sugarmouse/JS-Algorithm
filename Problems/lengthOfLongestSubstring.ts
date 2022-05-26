// 循环嵌套的解法
export const lengthOfLongestSubstring = (s: string) => {
  if (s.length <= 1) return s.length;
  let p1 = 0;
  let p2 = 1;
  let maxLength = 1;
  while (p2 < s.length) {
    for (let i = p1; i < p2; i++) {
      if (s[i] === s[p2]) {
        p1 = i + 1;
        break;
      }
    }
    let tempMax = s[p1] === s[p2] ? p2 - p1 : p2 - p1 + 1;
    maxLength = Math.max(tempMax, maxLength);
    p2++;
  }
  return maxLength;
};

// 用 map 解法
export const lengthOfLongestSubstring2 = (s: string) => {

  let p1 = 0;
  let p2 = 0;
  let maxLength = 0;
  const map = new Map();
  while (p2 < s.length) {
    if (map.has(s[p2]) && map.get(s[p2])>=p1) {
      p1 = map.get(s[p2]) + 1;
    }
    const windowLength = p2 - p1 + 1;
    maxLength = Math.max(windowLength, maxLength);
    map.set(s[p2], p2);
    p2++;
  }
  return maxLength;
};
