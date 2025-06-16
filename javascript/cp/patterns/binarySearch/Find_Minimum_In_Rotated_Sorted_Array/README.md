# Find Minimum in Rotated Sorted Array

## Problem Description

Suppose an array of length `n` sorted in ascending order is rotated between 1 and `n` times. For example, the array `[0,1,2,4,5,6,7]` might become:

-   `[4,5,6,7,0,1,2]` if it was rotated 4 times.

Given the rotated sorted array with **unique** elements, return the minimum element.

You must write an algorithm that runs in O(log n) time.

## Input Format

-   An array of integers `nums` that was originally sorted and then rotated.

## Output Format

-   Return the minimum element in the array.

## Examples

### Example 1

```
Input: nums = [3,4,5,1,2]
Output: 1
```

### Example 2

```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
```

### Example 3

```
Input: nums = [11,13,15,17]
Output: 11
```

## Constraints

-   `1 <= nums.length <= 5000`
-   `-5000 <= nums[i] <= 5000`
-   All elements are **unique**
-   The array is rotated at some pivot unknown to you beforehand

## Approach Outline

-   Use binary search:

    -   Initialize `low = 0`, `high = nums.length - 1`
    -   If `nums[mid] > nums[high]`, minimum is in the right half
    -   Else, minimum is in the left half (including mid)

-   Loop until `low == high`, that index is the minimum

## Time and Space Complexity

-   **Time Complexity:** O(log n)
-   **Space Complexity:** O(1)

## Edge Cases

-   No rotation (array already sorted)
-   Rotation at last element
-   Smallest element is at index 0 or end
