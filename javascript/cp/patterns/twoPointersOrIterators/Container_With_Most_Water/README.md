# 6. Container With Most Water

## 🧩 Problem Statement

You are given an integer array `height` of length `n`.  
Each `height[i]` represents a vertical line drawn at position `i`.

Choose two lines such that they, together with the x-axis, form a container that **holds the most water**.

Return the **maximum amount of water** a container can store.

---

## 📥 Input

-   `height`: number[] — array of non-negative integers representing vertical lines

---

## 📤 Output

-   number — maximum area (water) that can be contained

---

## 🔍 Example

**Input:**  
height = [1,8,6,2,5,4,8,3,7]

**Output:**  
49

**Explanation:**

-   Best container is between index 1 and 8 → min(8,7) × (8 - 1) = 49

---

## 🧠 Strategy

Use the **two-pointer shrink** approach:

-   `left = 0`, `right = height.length - 1`
-   Compute area = `min(height[left], height[right]) × (right - left)`
-   Move the pointer pointing to the **shorter** line inward, hoping for a taller one

Repeat until `left >= right`, always tracking the max area.

### Why this works:

Moving the taller pointer can’t increase the area because width shrinks and height doesn't improve.

---

## 🧪 Time & Space Complexity

-   Time: O(n)
-   Space: O(1)

---

## 🔧 Constraints

-   `2 <= height.length <= 10⁵`
-   `0 <= height[i] <= 10⁴`

---
