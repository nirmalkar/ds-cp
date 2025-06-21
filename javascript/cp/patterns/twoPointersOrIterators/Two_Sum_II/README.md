# Two Sum II – Input Array is Sorted

## 🧩 Problem Statement

Given a **1-indexed** array of integers `numbers` that is **sorted in non-decreasing order**, find two numbers such that they add up to a specific target number.

Return the **indices** of the two numbers such that they add up to the target.  
You must use **exactly one solution**, and you **may not use the same element twice**.

Return the answer as an array `[index1, index2]`, where `1 <= index1 < index2 <= numbers.length`.

---

## 📥 Input

-   `numbers`: number[] — sorted array in non-decreasing order
-   `target`: number — the target sum to find

---

## 📤 Output

-   number[] — indices of the two numbers (1-indexed)

---

## 🔍 Example 1

**Input:**  
numbers = [2,7,11,15], target = 9

**Output:**  
[1,2]

**Explanation:**  
`numbers[0] + numbers[1] == 9`

---

## 🔍 Example 2

**Input:**  
numbers = [2,3,4], target = 6

**Output:**  
[1,3]

---

## 🧠 Strategy

Use the **two-pointer** technique on the sorted array:

1. Set `left = 0`, `right = numbers.length - 1`
2. While `left < right`:
    - Calculate `sum = numbers[left] + numbers[right]`
    - If `sum == target`, return `[left + 1, right + 1]`
    - If `sum < target`, move `left++`
    - If `sum > target`, move `right--`

Since the array is sorted, this approach is efficient.

---

## 🧪 Time & Space Complexity

-   Time: O(n)
-   Space: O(1)

---

## 🔧 Constraints

-   `2 <= numbers.length <= 3 * 10⁴`
-   `-1000 <= numbers[i] <= 1000`
-   `numbers` is sorted
-   Exactly one solution exists

---
