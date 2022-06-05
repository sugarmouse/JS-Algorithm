/**
 * leetcode 28
 * link: https://leetcode.cn/problems/implement-strstr/
 * 实现 strStr() 函数。
 * 给你两个字符串 haystack 和 needle 
 * 请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）
 * 如果不存在，则返回  -1 
*/

// 暴力解法
export const strStr = (haystack: string, needle: string) => {
  if (needle.length <= 0) return 0;

  for (let i = 0; i + needle.length <= haystack.length; i++) {
    let flag = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return i;
  }
  return -1;

};

// todo KMP解法，目前不会(有点难)
