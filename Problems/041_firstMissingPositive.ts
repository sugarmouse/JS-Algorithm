

/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 

示例 1：

输入：nums = [1,2,0]
输出：3
示例 2：

输入：nums = [3,4,-1,1]
输出：2
示例 3：

输入：nums = [7,8,9,11,12]
输出：1
 

提示：

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/first-missing-positive
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * 利用数组代替 hashMap, index+1 作为键，array[index] 的正负作为值（判断标准）
 * 1. 遍历数组，<= 0 的数字变成 array.length + 1
 * 2. 遍历数组，Math.abs(array[i]) 在 [1,array.length]范围内的话，修改array[array[i]]为负（如果已经为负则不变）
 * 3. 返回第一个正数元素的下标加 1
*/
export const firstMissingPositive = (nums: number[]) => {

  for (const i in nums) {
    if (nums[i] <= 0) nums[i] = nums.length + 1;
  }
  console.log(nums);
  for (const i in nums) {
    if (Math.abs(nums[i]) >= 1 && Math.abs(nums[i]) <= nums.length && nums[Math.abs(nums[i]) - 1] > 0) nums[Math.abs(nums[i]) - 1] = - nums[Math.abs(nums[i]) - 1];
  }
  console.log(nums);
  return nums.findIndex(item => item > 0) >= 0 ? nums.findIndex(item => item > 0) + 1 : nums.length + 1;
};
console.log(firstMissingPositive([1000]));

