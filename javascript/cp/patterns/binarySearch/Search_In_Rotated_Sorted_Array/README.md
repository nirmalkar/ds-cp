# Search in Rotated Sorted Array

## Problem Description

There is an integer array `nums` sorted in ascending order (with **distinct** values), which is **rotated at an unknown pivot** index `k` such that:

```
nums = [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
```

Given the array `nums` after the rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with O(log n) runtime complexity.

## Input Format

-   An array of integers `nums` sorted in ascending order then rotated.
-   An integer `target` to search.

## Output Format

-   Return the index of the target element, or `-1` if it doesn't exist.

## Examples

### Example 1

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

### Example 2

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

### Example 3

```
Input: nums = [1], target = 0
Output: -1
```

## Constraints

-   `1 <= nums.length <= 5000`
-   `-10^4 <= nums[i], target <= 10^4`
-   All values of `nums` are **unique**
-   `nums` is a rotated version of a sorted array

## Approach Outline

-   Use binary search with a check for which half is sorted:

    -   Compute `mid = Math.floor((low + high) / 2)`
    -   Check if `nums[mid] == target`
    -   Determine if the left half is sorted:

        -   If `nums[low] <= nums[mid]`, then:

            -   If `nums[low] <= target < nums[mid]`, search left
            -   Else search right

        -   Else right half is sorted:

            -   If `nums[mid] < target <= nums[high]`, search right
            -   Else search left

## Time and Space Complexity

-   **Time Complexity:** O(log n)
-   **Space Complexity:** O(1)

## Edge Cases

-   Single element array
-   Array not rotated (sorted normally)
-   Target not present
-   Target at pivot point
