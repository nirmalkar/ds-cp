# 3. House Robber

## 📝 Problem Statement

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, represented as a non-negative integer array `nums`.

However, you **cannot rob two adjacent houses** because the police will be alerted.

Given an integer array `nums`, return the **maximum amount of money** you can rob tonight **without alerting the police**.

---

## 📥 Input

-   An array of integers `nums`  
    **Range:** `1 <= nums.length <= 100`  
    **Value Range:** `0 <= nums[i] <= 400`

---

## 📤 Output

-   An integer — the maximum amount of money that can be robbed without robbing two adjacent houses.

---

## 🔍 Examples

### Example 1

**Input:**  
`nums = [1, 2, 3, 1]`  
**Output:**  
`4`  
**Explanation:**  
Rob house 1 (1) and house 3 (3), total = 1 + 3 = 4.

---

### Example 2

**Input:**  
`nums = [2, 7, 9, 3, 1]`  
**Output:**  
`12`  
**Explanation:**  
Rob house 1 (2), house 3 (9), and house 5 (1): 2 + 9 + 1 = 12.

---

## ✅ Constraints

-   `1 <= nums.length <= 100`
-   `0 <= nums[i]
