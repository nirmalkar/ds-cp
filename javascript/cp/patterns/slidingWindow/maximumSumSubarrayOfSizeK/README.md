# 1. Maximum Sum Subarray of Size K

**Category:** Sliding Window (Fixed-Size Window)  
**Difficulty:** Easy

---

## Problem Statement

Given an array of integers and a positive integer `k`, find the maximum sum of any contiguous subarray of length `k`.

-   **Input:**
    -   `nums`: an array of integers (e.g., `[2, 1, 5, 1, 3, 2]`)
    -   `k`: a positive integer representing the window size (e.g., `3`)
-   **Output:**
    -   An integer representing the maximum sum of any subarray of length `k`.
    -   If the array’s length is less than `k`, return `null` or an appropriate indicator (e.g., `0` or error), depending on requirements.

**Example:**

nums = [2, 1, 5, 1, 3, 2]
k = 3
Output: 9 # Subarray [5, 1, 3] has the largest sum among all length-3 windows.
