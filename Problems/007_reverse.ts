/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/reverse-integer
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number} x
 * @return {number}
 */
export const reverse = function (x: number) {
  const isNagetive = x < 0 ? true : false;
  let temp = Math.abs(x);
  let tempRes = Number(temp.toString().split('').reverse().join(''));
  let res = isNagetive ? -tempRes : tempRes;
  return (res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) ? 0 : res;
};

console.log(reverse(123))
