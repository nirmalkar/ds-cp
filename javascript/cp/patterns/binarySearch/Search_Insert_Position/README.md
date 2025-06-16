# Search Insert Position

## Problem Description

Given a sorted array of distinct integers and a target value, return the index if the target is found.

If not, return the index where it would be if it were inserted in order.

## Input Format

-   An array of integers `nums` sorted in ascending order.
-   An integer `target` to search or insert.

## Output Format

-   Return an integer representing the index where the `target` is or should be inserted.

## Examples

### Example 1

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

### Example 2

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

### Example 3

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

### Example 4

```
Input: nums = [1,3,5,6], target = 0
Output: 0
```

## Constraints

-   `1 <= nums.length <= 10^4`
-   `-10^4 <= nums[i], target <= 10^4`
-   `nums` contains **distinct** values
-   `nums` is sorted in **ascending** order

## Approach Outline

-   Use binary search:

    -   If `target` is found at `mid`, return `mid`
    -   If `target` is less than `mid` value, move `high` to `mid - 1`
    -   If `target` is greater, move `low` to `mid + 1`

-   When loop ends, `low` will be the correct insert position

## Time and Space Complexity

-   **Time Complexity:** O(log n)
-   **Space Complexity:** O(1)

## Edge Cases

-   Insert at beginning (target < all elements)
-   Insert at end (target > all elements)
-   Insert in middle between two elements
-   Target is already present
