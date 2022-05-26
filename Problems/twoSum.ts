/**
 * leetcode 01
 * 思路
 * 1. 一个空的map
 * 2. 遍历数组，看 map 中是否有 target - nums[i]
 * 3. 有则直接返回[ 当前下标，map[target - nums[i]] ] ,无 map.set(nums[i], i)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function (nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
};