# Divide and Conquer

## 🧠 What is Divide and Conquer?

**Divide and Conquer** is a powerful algorithmic pattern that works by recursively breaking a problem into **smaller subproblems**, solving each independently, and then **combining** their results to form the final solution.

This approach is especially effective when:

-   The problem can be split into subproblems of the same type.
-   Subproblems can be solved independently.
-   Subproblem results can be combined efficiently.

---

## 🛠️ Three Main Steps

1. **Divide**: Split the problem into two or more smaller subproblems.
2. **Conquer**: Solve each subproblem recursively.
3. **Combine**: Merge the solutions from subproblems to solve the original problem.

---

## ⏱️ Time Complexity Pattern

Many Divide and Conquer problems follow a recurrence relation like:  
T(n) = 2T(n/2) + O(n)  
which solves to:  
T(n) = O(n log n)

---

## ✅ When to Use

Use **Divide and Conquer** when:

-   The problem is recursive in nature.
-   It can be broken into **smaller independent subproblems**.
-   You can **combine** the solutions from subproblems efficiently.

---

## 📚 Famous Divide and Conquer Algorithms

| Problem                     | Algorithm/Strategy                  |
| --------------------------- | ----------------------------------- |
| Sorting                     | Merge Sort, Quick Sort              |
| Searching                   | Binary Search                       |
| Selection                   | QuickSelect (Kth Element)           |
| Array Tricks                | Count Inversions, Max Subarray (DC) |
| Computational Geometry      | Closest Pair of Points              |
| Numerical Algorithms        | Karatsuba Multiplication            |
| Searching in Matrices       | Search a 2D Matrix                  |
| Median of Two Sorted Arrays | Divide + Binary Search              |

---
