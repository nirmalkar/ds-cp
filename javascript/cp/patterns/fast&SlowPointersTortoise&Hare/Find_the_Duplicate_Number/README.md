# 4. Find the Duplicate Number

## 📝 Problem Statement

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive, there is **exactly one duplicate number** in the array.

Return the duplicate number **without modifying the array** and using only **constant extra space**.

---

## 📥 Input

-   An array `nums` of length `n + 1`  
    **Range:** `1 <= nums.length <= 10^5`  
    **Value Range:** `1 <= nums[i] <= n`, where `n = nums.length - 1`

## 📤 Output

-   An integer — the duplicate number

---

## 🔍 Example

### Example 1:

Input: nums = [1,3,4,2,2]
Output: 2

shell
Copy
Edit

### Example 2:

Input: nums = [3,1,3,4,2]
Output: 3

yaml
Copy
Edit

---

## ✅ Constraints

-   `1 <= nums.length <= 10^5`
-   `1 <= nums[i] <= nums.length - 1`
-   Only one repeated number exists.
-   The input array must **not be modified**.
-   Uses only **constant extra space**.

---
