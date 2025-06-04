# 4. Subarrays with Exactly K Different Integers

**Category:** Sliding Window (Variable-Size Window)  
**Difficulty:** Hard

---

## Problem Statement

Given an integer array `A` and an integer `K`, return the number of contiguous subarrays of `A` that contain exactly `K` distinct integers.

---

## Input

-   `A`: An array of positive integers (e.g., `[1, 2, 1, 2, 3]`)
-   `K`: A positive integer representing the required number of distinct integers in each subarray (e.g., `2`)

---

## Output

-   An integer representing the count of subarrays in `A` that have exactly `K` distinct integers.

---

## Example

**Input:**  
`A = [1, 2, 1, 2, 3]`, `K = 2`

**Output:**  
`7`

**Explanation:**  
The 7 subarrays that contain exactly 2 distinct integers are:  
`[1,2]`, `[2,1]`, `[1,2]`, `[2,3]`, `[1,2,1]`, `[2,1,2]`, `[1,2,1,2]`
