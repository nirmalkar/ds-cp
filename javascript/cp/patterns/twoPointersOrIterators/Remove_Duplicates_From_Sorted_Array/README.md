# 3. Remove Duplicates from Sorted Array

## 🧩 Problem Statement

Given an integer array `nums` **sorted in non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once.

Return the new length of the array after removing duplicates.  
The relative order of the elements should be kept the same.

You must do this using **O(1)** extra memory.

---

## 📥 Input

-   `nums`: number[] — a sorted array of integers

---

## 📤 Output

-   number — new length `k` of the array with unique elements at the start  
    (The first `k` elements of `nums` should hold the unique elements.)

---

## 🔍 Example

**Input:**  
nums = [0,0,1,1,1,2,2,3,3,4]

**Output:**  
5

**Explanation:**  
The first 5 elements after removing duplicates are: `[0,1,2,3,4]`

---

## 🧠 Strategy

Use **Two Pointers**:

-   `slow`: points to the last unique element
-   `fast`: scans through the array

### Steps:

1. Initialize `slow = 0`
2. Iterate `fast` from index `1` to `n-1`
3. If `nums[fast] !== nums[slow]`:
    - Increment `slow`
    - Copy `nums[fast]` to `nums[slow]`
4. Return `slow + 1` as the new length

This approach **overwrites** duplicates and keeps the array compact in-place.

---

## 🧪 Time & Space Complexity

-   Time: O(n)
-   Space: O(1)

---

## 🔧 Constraints

-   `1 <= nums.length <= 3 * 10⁴`
-   `-100 <= nums[i] <= 100`
-   `nums` is sorted in non-decreasing order

---
