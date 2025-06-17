# Single Number II

### 📝 Problem Description

Given an integer array `nums` where every element **appears exactly three times** except for **one element** that appears only **once**,  
return the single element that appears only once.

You must implement a solution with **linear runtime complexity** and use **only constant extra space**.

---

### 📥 Input

-   `nums`: number[] — An array of integers where:
    -   `1 <= nums.length <= 3 * 10⁴`
    -   `-2³¹ <= nums[i] <= 2³¹ - 1`
    -   Every element appears **three times**, except for one.

---

### 📤 Output

-   Return the element that appears only once.

#### Example 1

Input: nums = [2, 2, 3, 2]
Output: 3

#### Example 2

Input: nums = [0, 1, 0, 1, 0, 1, 99]
Output: 99
