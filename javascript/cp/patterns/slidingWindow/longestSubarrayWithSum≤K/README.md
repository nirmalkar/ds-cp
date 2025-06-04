# 5. Longest Subarray with Sum ≤ K

**Category:** Sliding Window (Variable-Size Window)  
**Difficulty:** Medium

---

## Problem Statement

Given an array of non-negative integers `nums` and an integer `K`, find the length of the longest contiguous subarray whose sum is less than or equal to `K`. If no such subarray exists, return `0`.

---

## Input

-   `nums`: An array of non-negative integers  
    Example: `[3, 1, 2, 1, 4]`
-   `K`: A non-negative integer representing the target sum  
    Example: `6`

---

## Output

-   An integer representing the length of the longest contiguous subarray of `nums` whose sum is ≤ `K`.
-   If all elements are greater than `K` (i.e., no valid subarray), return `0`.

---

## Example

**Input:**

```
nums = [3, 1, 2, 1, 4]
K = 6
```

**Output:**

```
3
```

**Explanation:**  
The longest subarrays with sum ≤ 6 are `[3, 1, 2]` or `[1, 2, 1]`, both of length 3.

---

## Constraints

-   `1 <= nums.length <= 10^5`
-   `0 <= nums[i] <= 10^4`
-   `0 <= K <= 10^9`
