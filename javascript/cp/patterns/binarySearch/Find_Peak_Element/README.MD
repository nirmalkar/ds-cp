# Find Peak Element

## Problem Description

A peak element is an element that is strictly greater than its neighbors.

Given an integer array `nums`, find a peak element and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine `nums[-1] = nums[n] = -∞`.

You must write an algorithm that runs in O(log n) time.

## Input Format

-   An array of integers `nums`

## Output Format

-   Return the index of any peak element

## Examples

### Example 1

```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and its index is 2.
```

### Example 2

```
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: 6 is a peak element and its index is 5.
```

## Constraints

-   `1 <= nums.length <= 10^5`
-   `-2^31 <= nums[i] <= 2^31 - 1`
-   `nums[i] != nums[i + 1]` for all valid `i`

## Approach Outline

-   Use binary search:

    -   Let `mid` be the middle index
    -   If `nums[mid] > nums[mid + 1]`, then the peak is in the **left half** (including `mid`)
    -   Else, the peak is in the **right half**

-   Continue until `low == high` — that index is the peak

## Time and Space Complexity

-   **Time Complexity:** O(log n)
-   **Space Complexity:** O(1)

## Edge Cases

-   Single element array → it is the peak
-   Strictly increasing array → last element is the peak
-   Strictly decreasing array → first element is the peak
