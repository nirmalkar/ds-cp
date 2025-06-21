# Satisfiability of Equality Equations

## 🧩 Problem Statement

You are given an array of strings `equations` where each element is of the form:

-   `"a==b"` meaning variable `a` is equal to variable `b`
-   `"a!=b"` meaning variable `a` is **not** equal to variable `b`

Return `true` if it is possible to assign variables such that all the equations are satisfied, or `false` otherwise.

---

## 📥 Input

-   `equations`: string[] — list of equality or inequality relationships (only lowercase letters a–z)

---

## 📤 Output

-   A boolean — `true` if equations can be satisfied, else `false`

---

## 🔍 Example

**Input:**  
`equations = ["a==b", "b!=a"]`  
**Output:**  
`false`  
**Explanation:**  
If `a == b`, then `b != a` is a contradiction.

---

**Input:**  
`equations = ["b==a", "a==b"]`  
**Output:**  
`true`

---

## 🧠 Strategy

Use **Union-Find (Disjoint Set Union)** to process equalities and inequalities:

### Steps:

1. **First pass**:  
   For every equation `a==b`, perform `union(a, b)`

2. **Second pass**:  
   For every equation `a!=b`, if `find(a) === find(b)`, it’s a contradiction → return `false`

3. If no contradictions are found, return `true`

### Details:

-   Map 26 lowercase letters `a` to `z` to indices `0–25`
-   Use standard DSU with path compression

---

## 🧪 Time & Space Complexity

-   Time: O(N × α(26)) ≈ O(N)
-   Space: O(1) → Fixed array size (26 variables)

---

## 🔧 Constraints

-   `1 <= equations.length <= 500`
-   Each equation is of the form `"a==b"` or `"a!=b"`
-   Variables are lowercase English letters

---
