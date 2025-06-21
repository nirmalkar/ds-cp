# 3Sum

## 🧩 Problem Statement

Given an integer array `nums`, return all **unique triplets** `[nums[i], nums[j], nums[k]]` such that:

-   `i != j`, `i != k`, `j != k`
-   `nums[i] + nums[j] + nums[k] == 0`

You must not return duplicate triplets.

---

## 📥 Input

-   `nums`: number[] — array of integers (may include negative and positive values)

---

## 📤 Output

-   number[][] — list of triplets that sum to zero

---

## 🔍 Example

**Input:**  
nums = [-1,0,1,2,-1,-4]

**Output:**  
[[-1,-1,2], [-1,0,1]]

**Explanation:**

-   The triplets [-1, -1, 2] and [-1, 0, 1] both sum to zero.
-   No duplicates are included.

---

## 🧠 Strategy

Use a combination of **sorting + two pointers**:

1. Sort the array
2. Fix one number `nums[i]`
3. Use two pointers `left = i + 1` and `right = n - 1` to find pairs such that:
    - `nums[i] + nums[left] + nums[right] === 0`

### Handle Duplicates:

-   Skip duplicate values for `i`, `left`, and `right` to avoid duplicate triplets

---

## ⚙️ Step-by-Step

1. Sort `nums`
2. Loop through each `i` from `0` to `n - 3`
    - Skip if `nums[i] === nums[i - 1]`
    - Set `left = i + 1`, `right = n - 1`
    - While `left < right`:
        - If sum == 0 → store triplet, move both pointers (skip duplicates)
        - If sum < 0 → move left++
        - If sum > 0 → move right--

---

## 🧪 Time & Space Complexity

-   Time: O(n²)
-   Space: O(1) (excluding result list)

---

## 🔧 Constraints

-   `3 <= nums.length <= 3000`
-   `-10⁵ <= nums[i] <= 10⁵`

---
