# 2. Top K Frequent Elements

## 🧩 Problem Statement

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

You may return the answer in **any order**.

---

## 📥 Input

-   `nums`: number[] — an array of integers.
-   `k`: number — the number of top frequent elements to return.

---

## 📤 Output

-   An array of `k` integers — the most frequent elements in any order.

---

## 🔍 Examples

### Example 1

**Input:**  
`nums = [1, 1, 1, 2, 2, 3]`  
`k = 2`  
**Output:**  
`[1, 2]`  
**Explanation:**  
1 appears 3 times, 2 appears 2 times → top 2 frequent elements.

---

### Example 2

**Input:**  
`nums = [1]`  
`k = 1`  
**Output:**  
`[1]`  
**Explanation:**  
Only one element exists.

---

## 🧠 Goal

Use a **HashMap** to count the frequencies and a **Min Heap of size k** to keep the top `k` frequent elements.

---

## 🔧 Constraints

-   `1 <= nums.length <= 10^5`
-   `-10^4 <= nums[i] <= 10^4`
-   The answer must be of length
