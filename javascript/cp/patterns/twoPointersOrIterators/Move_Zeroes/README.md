# Move Zeroes

## 🧩 Problem Statement

Given an integer array `nums`, move all `0`'s to the **end** of the array while maintaining the **relative order** of the non-zero elements.

Do this **in-place** without making a copy of the array.

---

## 📥 Input

-   `nums`: number[] — array of integers (can include 0s and non-0s)

---

## 📤 Output

-   No return value — modify the array in-place

---

## 🔍 Example

**Input:**  
nums = [0,1,0,3,12]

**Output:**  
[1,3,12,0,0]

**Explanation:**  
Non-zero values keep their order. All zeroes are moved to the end.

---

## 🧠 Strategy

Use **two pointers**:

-   `insertPos`: points to where the next non-zero should be placed
-   `i`: scans through the array

### Steps:

1. Loop through the array:
    - If `nums[i] !== 0`, assign it to `nums[insertPos]` and increment `insertPos`
2. After all non-zero elements are placed,
    - Fill remaining positions with `0`s from `insertPos` to end

---

## 🔄 In-place Update Example

Before:  
[0, 1, 0, 3, 12]  
^ ^  
i insertPos

After:  
[1, 3, 12, 0, 0]

---

## 🧪 Time & Space Complexity

-   Time: O(n)
-   Space: O(1)

---

## 🔧 Constraints

-   `1 <= nums.length <= 10⁴`
-   `-2³¹ <= nums[i] <= 2³¹ - 1`

---
