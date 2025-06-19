# 5. Unique Paths

## 📝 Problem Statement

A robot is located at the top-left corner of an `m x n` grid (marked as `(0, 0)`). The robot can only move **either down or right** at any point in time.

The robot is trying to reach the bottom-right corner of the grid (marked as `(m - 1, n - 1)`).

How many **unique paths** are there from start to finish?

---

## 📥 Input

-   Two integers `m` and `n`  
    **Range:** `1 <= m, n <= 100`

---

## 📤 Output

-   An integer — the total number of unique paths.

---

## 🔍 Examples

### Example 1

**Input:**  
`m = 3, n = 7`  
**Output:**  
`28`

---

### Example 2

**Input:**  
`m = 3, n = 2`  
**Output:**  
`3`  
**Explanation:**  
From top-left corner to bottom-right corner, the robot can take 3 paths:

-   → → ↓
-   → ↓ →
-   ↓ → →

---

## ✅ Constraints

-   `1 <= m, n <= 100`
-   The answer is guaranteed to be less than or equal to `2 * 10^9`.

---
