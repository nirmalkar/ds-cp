# 1. Count Inversions in an Array

## 🧩 Problem Statement

You are given an array of integers `nums`. An **inversion** is a pair of indices `(i, j)` such that:

-   `i < j`, and
-   `nums[i] > nums[j]`

Your task is to count the total number of **inversions** in the array.

Brute force takes O(n²). Can you do it in **O(n log n)** time using Divide and Conquer?

---

## 📥 Input

-   `nums`: number[] — an array of integers

---

## 📤 Output

-   A single integer — the total number of inversion pairs

---

## 🔍 Examples

### Example 1

**Input:**  
`nums = [2, 4, 1, 3, 5]`  
**Output:**  
`3`  
**Explanation:**  
Inversions are: (2, 1), (4, 1), (4, 3)

---

### Example 2

**Input:**  
`nums = [5, 4, 3, 2, 1]`  
**Output:**  
`10`  
**Explanation:**  
All pairs are inverted → maximum inversions

---

## 🧠 Divide and Conquer Strategy

1. **Divide** the array into two halves.
2. **Count** inversions in the left half and right half recursively.
3. **Count cross-inversions** while merging both halves.
4. **Combine** and return the total count.

Similar to Merge Sort, but with inversion counting logic in the merge step.

---

## 🔧 Constraints

-   `1 <= nums.length <= 10^5`
-   `-10^9 <= nums[i] <= 10^9`
