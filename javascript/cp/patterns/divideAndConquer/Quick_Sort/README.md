# 2. Quick Sort

## 🧩 Problem Statement

Implement the **Quick Sort** algorithm to sort an array of integers in **ascending order** using the **Divide and Conquer** technique.

Quick Sort picks a **pivot** element and partitions the array into two halves:

-   One with elements **less than** the pivot
-   One with elements **greater than or equal to** the pivot

It then recursively sorts the partitions.

---

## 📥 Input

-   `nums`: number[] — an unsorted array of integers

---

## 📤 Output

-   A new array: number[] — the sorted version of the input array

---

## 🔍 Examples

### Example 1

**Input:**  
`nums = [10, 7, 8, 9, 1, 5]`  
**Output:**  
`[1, 5, 7, 8, 9, 10]`

---

### Example 2

**Input:**  
`nums = [4, 2, 6, 1, 3]`  
**Output:**  
`[1, 2, 3, 4, 6]`

---

## 🧠 Divide and Conquer Strategy

1. **Divide**: Choose a pivot and partition the array.
2. **Conquer**: Recursively sort the left and right subarrays.
3. **Combine**: Concatenate the sorted left + pivot + sorted right.

### 🔑 Notes:

-   Different pivot strategies (first, last, random, median).
-   In-place version is space-efficient.

---

## 🔧 Constraints

-   `1 <= nums.length <= 10^5`
-   `-10^5 <= nums[i] <= 10^5`

---

## 📦 Output Characteristics

-   Return a new sorted array (or modify in-place).
-   Must follow recursive divide-and-conquer structure.
