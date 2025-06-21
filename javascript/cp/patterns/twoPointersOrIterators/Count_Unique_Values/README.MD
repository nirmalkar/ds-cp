# Count Unique Values

## 🧩 Problem Statement

Implement a function called `countUniqueValues`, which accepts a **sorted array** of integers (can be negative, zero, or positive), and returns the **number of unique values** in the array.

The array may contain duplicates, but you **must not use additional data structures** (i.e., solve it in-place if possible).

---

## 📥 Input

-   `arr`: number[] — a **sorted** array of integers

---

## 📤 Output

-   number — count of unique values in the array

---

## 🔍 Example 1

**Input:**  
arr = [1, 1, 1, 1, 1, 2]

**Output:**  
2

---

## 🔍 Example 2

**Input:**  
arr = [-2, -1, -1, 0, 1]

**Output:**  
4

---

## 🧠 Strategy: Two Pointers (Fast & Slow)

Since the array is **sorted**, all duplicates are adjacent.

We use:

-   `i`: slow pointer to track the last unique value
-   `j`: fast pointer to scan the array

### Steps:

1. Start `i = 0`
2. Iterate `j = 1` to `end of array`
3. If `arr[j] !== arr[i]`, increment `i` and assign `arr[i] = arr[j]`
4. After loop, return `i + 1` as the count of unique values

This overwrites the array in-place if needed and returns the count.

---

## 🧪 Time & Space Complexity

-   **Time:** O(n)
-   **Space:** O(1) (in-place, no extra memory used)

---

## 🔧 Constraints

-   Array is **sorted**
-   Values can be negative or positive
-   Try to solve it with constant space

---
