# 4. Parallel Courses (Minimum Semesters)

## 🧩 Problem Statement

You are given `n` courses labeled from `1` to `n`, and a list of `relations` where `relations[i] = [a, b]` means **course `a` must be completed before course `b`**.

In each semester, you can take **any number of courses** as long as all their prerequisites are completed.

Return the **minimum number of semesters** needed to complete all courses.

If there’s a **cycle** and it’s impossible to finish all courses, return `-1`.

---

## 📥 Input

-   `n`: number — total number of courses (1-indexed)
-   `relations`: number[][] — list of prerequisite pairs `[a, b]`

---

## 📤 Output

-   A single integer — the **minimum number of semesters** needed
-   Or `-1` if a cycle exists

---

## 🔍 Examples

### Example 1

**Input:**  
`n = 3`  
`relations = [[1,3],[2,3]]`  
**Output:**  
`2`  
**Explanation:**

-   Semester 1: take courses 1 and 2
-   Semester 2: take course 3

---

### Example 2

**Input:**  
`n = 3`  
`relations = [[1,2],[2,3],[3,1]]`  
**Output:**  
`-1`  
**Explanation:**  
There’s a cycle: 1 → 2 → 3 → 1

---

## 🧠 Strategy

This is a variation of **Topological Sorting**, where we compute the **longest path length** in the DAG (each level = 1 semester).

### 🔸 Approach: Kahn’s Algorithm (BFS Level Order)

-   Build a graph and compute in-degrees.
-   For each level (semester), process all nodes with in-degree 0.
-   Decrease in-degrees of neighbors.
-   Count levels as semesters.
-   If all nodes are processed, return the semester count; otherwise return `-1`.

---

## 🔧 Constraints

-   `1 <= n <= 500`
-   `1 <= relations.length <= 5000`
-   `relations[i].length == 2`
-   `1 <= a, b <= n`
-   All course numbers are unique and valid
