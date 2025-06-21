# Find First Pair That Sums to Zero

## 🧩 Problem Statement

Write a function called `sumZero` which accepts a **sorted array** of integers.

The function should find the **first pair** where the sum is `0`.

Return an array that includes both values that sum to zero, or `undefined` if no such pair exists.

---

## 📥 Input

-   `arr`: number[] — a sorted array of integers (can include negative and positive values)

---

## 📤 Output

-   number[] or `undefined` — first pair that sums to 0, or `undefined` if no such pair exists

---

## 🔍 Example 1

**Input:**  
arr = [-3, -2, -1, 0, 1, 2, 3]

**Output:**  
[-3, 3]

---

## 🔍 Example 2

**Input:**  
arr = [-2, 0, 1, 3]

**Output:**  
undefined

---

## 🧠 Strategy: Two Pointers

Since the array is **sorted**, we can take advantage of that:

-   Initialize two pointers:
    -   `left = 0`
    -   `right = arr.length - 1`
-   While `left < right`:
    -   Compute `sum = arr[left] + arr[right]`
    -   If `sum === 0`, return `[arr[left], arr[right]]`
    -   If `sum > 0`, move `right--` (too big)
    -   If `sum < 0`, move `left++` (too small)

---

## 🔒 Constraints

-   Input array must be sorted
-   The array may contain both negative and positive numbers

---
