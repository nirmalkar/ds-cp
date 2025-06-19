# 3. Binary Search

## 🧩 Problem Statement

Given a **sorted array** of integers and a target value, implement **Binary Search** to find the index of the target value.

If the target is found, return its index. Otherwise, return `-1`.

Use the **Divide and Conquer** strategy by repeatedly dividing the search space in half.

---

## 📥 Input

-   `nums`: number[] — a sorted array of integers in ascending order
-   `target`: number — the value to search for

---

## 📤 Output

-   An integer — the index of the target value in the array, or `-1` if not found

---

## 🔍 Examples

### Example 1

**Input:**  
`nums = [-1, 0, 3, 5, 9, 12]`  
`target = 9`  
**Output:**  
`4`  
**Explanation:**  
Value 9 is at index 4.

---

### Example 2

**Input:**  
`nums = [-1, 0, 3, 5, 9, 12]`  
`target = 2`  
**Output:**  
`-1`  
**Explanation:**  
Value 2 is not in the array.

---

## 🧠 Divide and Conquer Strategy

1. **Divide**: Find the middle index of the current subarray.
2. **Conquer**:
    - If `target === nums[mid]`, return `mid`
    - If `target < nums[mid]`, search the **left half**
    - If `target > nums[mid]`, search the **right half**
3. **Repeat** until the subarray is empty.

---

## 🔧 Constraints

-   `1 <= nums.length <= 10^5`
-   `-10^4 <= nums[i], target <= 10^4`
-   The input array is guaranteed to be **sorted** in ascending order.

---
