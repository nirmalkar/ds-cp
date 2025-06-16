# Classic Binary Search

## Problem Description

Given a sorted array of distinct integers and a target value, return the index of the target if it exists in the array. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

## Input Format

-   An array of integers `nums`, sorted in ascending order.
-   An integer `target`, the value to search for.

## Output Format

-   Return the index of the `target` in the array `nums`.
-   If the `target` is not found, return `-1`.

## Examples

### Example 1

```
Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4.
```

### Example 2

```
Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
Output: -1
Explanation: 2 does not exist in nums, so return -1.
```

## Constraints

-   `1 <= nums.length <= 10^4`
-   `-10^4 < nums[i], target < 10^4`
-   All values in `nums` are **unique**.
-   `nums` is sorted in **strictly increasing** order.

## Approach Outline

-   Use binary search to repeatedly divide the sorted array in half.
-   Narrow down the search range by comparing the middle element with the target.

## Time and Space Complexity

-   **Time Complexity:** O(log n) — because we halve the search space each time.
-   **Space Complexity:** O(1) — constant space.

## Edge Cases

-   Array of length 1: `nums = [3]`, `target = 3` → return 0.
-   Target is less than all elements → return -1.
-   Target is greater than all elements → return -1.
-   Target is not present → return -1.
