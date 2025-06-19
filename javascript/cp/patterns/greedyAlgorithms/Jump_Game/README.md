# 3. Jump Game

## 🧩 Problem Statement

You are given an array of non-negative integers `nums`, where each element represents your **maximum jump length** at that position.

You are initially positioned at the **first index** of the array. Your goal is to determine whether you can reach the **last index**.

Write a function that returns `true` if you can reach the last index, or `false` otherwise.

---

## 📥 Input

-   An array of integers `nums` where:
    -   `nums[i]` represents the maximum number of steps you can jump forward from index `i`.

---

## 📤 Output

-   A boolean value:
    -   `true` if it is possible to reach the last index.
    -   `false` otherwise.

---

## 🔍 Examples

### Example 1

**Input:**  
`nums = [2, 3, 1, 1, 4]`  
**Output:**  
`true`  
**Explanation:**

-   Jump 1 step from index 0 to 1.
-   Then 3 steps from index 1 to the last index.

---

### Example 2

**Input:**  
`nums = [3, 2, 1, 0, 4]`  
**Output:**  
`false`  
**Explanation:**  
No matter what you do, you’ll get stuck at index 3 with `0` jump length before reaching the last index.

---
