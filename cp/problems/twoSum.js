/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Example 1:Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * Constraints:
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 * Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

const nums = [2, 7, 11, 15];
const target = 9;

// Brute force
// Algo
// 1. go through all the elements in the first loop of array nums 
// 2. add another loop inside the first loop using the same array.
// 3. in second loop take each element from first loop and add one by one to the elements of another loop.
// finally if sum of any two numbers are equal to the desired target, return the indices of those two numbers.

const twoSum = () => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
        return null
    }
}

const result = twoSum()
console.log(result)

// Optimized 
const idxAndVal = {}

const twoSumOptimized = () => {
    for (let j = 0; j < nums.length; j++) {
        const complement = target - nums[j]
        if (idxAndVal[complement] !== undefined) {
            return [idxAndVal[complement], j]
        } else {
            idxAndVal[nums[j]] = j
        }
    }
}
console.log(twoSumOptimized())

const idxAndValMap = new Map()

// Optimized solution using hashmap!
const twoSumOptimizedWithHashMap = () => {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (idxAndValMap.has(complement)) {
            return [idxAndValMap.get(complement), i]
        } else {
            idxAndValMap.set(nums[i], i)
        }
    }
}
console.log(twoSumOptimizedWithHashMap())