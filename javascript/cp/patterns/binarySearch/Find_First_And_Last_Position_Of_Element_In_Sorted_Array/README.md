Find First and Last Position of Element in Sorted Array

Problem Description

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Input Format

An array of integers nums sorted in ascending order

An integer target to search for

Output Format

Return an array of two integers: [firstIndex, lastIndex]

Examples

Example 1

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3

Input: nums = [], target = 0
Output: [-1,-1]

Constraints

0 <= nums.length <= 10^5

-10^9 <= nums[i], target <= 10^9

nums is a non-decreasing sorted array

Approach Outline

Use two modified binary searches:

First to find the first occurrence of the target

Second to find the last occurrence of the target

Both searches should use standard binary search logic but adjust the condition to continue searching in one direction even if the target is found

Time and Space Complexity

Time Complexity: O(log n)

Space Complexity: O(1)

Edge Cases

Empty array

Target not found

Only one occurrence of the target

All elements equal to target
