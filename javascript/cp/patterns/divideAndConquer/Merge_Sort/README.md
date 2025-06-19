# 1. Merge Sort

## 🧩 Problem Statement

Implement the **Merge Sort** algorithm to sort an array of integers in **ascending order** using the **Divide and Conquer** approach.

Your task is to recursively divide the array, sort the subarrays, and merge them back to produce a fully sorted array.

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
`nums = [5, 2, 3, 1]`  
**Output:**  
`[1, 2, 3, 5]`

---

### Example 2

**Input:**  
`nums = [5, 1, 1, 2, 0, 0]`  
**Output:**  
`[0, 0, 1, 1, 2, 5]`

---

## 🧠 Divide and Conquer Strategy

1. **Divide**: Split the array into two halves.
2. **Conquer**: Recursively sort both halves.
3. **Combine**: Merge the two sorted halves into a single sorted array.

---

## 🔧 Constraints

-   `1 <= nums.length <= 10^5`
-   `-10^5 <= nums[i] <= 10^5`

---

## 📦 Output Characteristics

-   The original array should remain unmodified (return a new array).
-   Must use recursion and follow divide-and-conquer strategy.
