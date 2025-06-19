# 2. Maximum Subarray (Divide and Conquer)

## 🧩 Problem Statement

Given an integer array `nums`, find the **contiguous subarray (containing at least one number)** which has the **largest sum**, and return its sum.

You must implement this using the **Divide and Conquer** approach — not Kadane’s algorithm.

---

## 📥 Input

-   `nums`: number[] — an array of integers

---

## 📤 Output

-   A single integer — the maximum possible subarray sum

---

## 🔍 Examples

### Example 1

**Input:**  
`nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`  
**Output:**  
`6`  
**Explanation:**  
The subarray `[4, -1, 2, 1]` has the largest sum = 6

---

### Example 2

**Input:**  
`nums = [1]`  
**Output:**  
`1`

---

## 🧠 Divide and Conquer Strategy

1. **Divide** the array into left and right halves.
2. **Conquer**:
    - Recursively calculate the max subarray sum in the left half
    - Recursively calculate the max subarray sum in the right half
    - Calculate the max subarray sum **crossing the middle**
3. **Combine**: Return the max of all three values.

### Key Insight:

The max subarray **must lie entirely in the left**, **entirely in the right**, or **cross the middle**.

---

## 🔧 Constraints

-   `1 <= nums.length <= 10^5`
-   `-10^4 <= nums[i] <= 10^4`
