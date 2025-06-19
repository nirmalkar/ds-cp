# 5. Build System / Task Ordering (Lexicographically Smallest Topo Sort)

## 🧩 Problem Statement

You are given `n` tasks labeled from `1` to `n`, and a list of dependencies where `dependencies[i] = [a, b]` means **task `a` must be done before task `b`**.

Return a valid **task execution order** such that all dependencies are met.  
If multiple valid orders exist, return the **lexicographically smallest** one.

---

## 📥 Input

-   `n`: number — total number of tasks
-   `dependencies`: number[][] — list of prerequisite pairs `[a, b]`

---

## 📤 Output

-   A number[] — a valid task ordering that satisfies dependencies
-   Must be **lexicographically smallest** among all possible valid orders

---

## 🔍 Examples

### Example 1

**Input:**  
`n = 4`  
`dependencies = [[1, 2], [1, 3], [3, 4]]`  
**Output:**  
`[1, 2, 3, 4]`  
**Explanation:**  
Multiple valid orders exist, but [1, 2, 3, 4] is the smallest.

---

### Example 2

**Input:**  
`n = 3`  
`dependencies = [[1, 2], [2, 3], [3, 1]]`  
**Output:**  
`[]`  
**Explanation:**  
There's a cycle → topological sort not possible.

---

## 🧠 Strategy

Perform a **topological sort with priority**:

-   Build a graph (adjacency list) and track in-degrees
-   Use a **min-heap (priority queue)** to always process the **smallest task ID** with in-degree 0
-   Continue processing until all tasks are ordered
-   If cycle detected (not all tasks are processed), return `[]`

---

## 🧪 Time & Space Complexity

-   Time: `O(V + E + log V)` due to min-heap operations
-   Space: `O(V + E)` for graph and in-degree tracking

---

## 🔧 Constraints

-   `1 <= n <= 10^5`
-   `0 <= dependencies.length <= 2 * 10^5`
-   Tasks are labeled from `1` to `n`
