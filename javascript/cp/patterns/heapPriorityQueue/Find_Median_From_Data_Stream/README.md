# 4. Find Median from Data Stream

## 🧩 Problem Statement

Design a data structure that supports the following operations:

-   `addNum(num: number)`: Adds a number to the data stream.
-   `findMedian()`: Returns the **median** of all elements added so far.

You must implement a class `MedianFinder` with these methods, optimized for **real-time median calculation**.

---

## 📥 Input

A series of operations:

-   Method calls like `["MedianFinder", "addNum", "addNum", "findMedian"]`
-   And their respective arguments: `[[], [1], [2], []]`

---

## 📤 Output

-   Return an array of results for the `findMedian` calls only.

---

## 🔍 Example 1

**Input:**

```
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
```

**Output:**  
`[null, null, null, 1.5, null, 2.0]`

**Explanation:**

-   Add 1 → [1]
-   Add 2 → [1, 2]
-   Median → (1 + 2) / 2 = 1.5
-   Add 3 → [1, 2, 3]
-   Median → 2.0

---
