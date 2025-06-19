# 1. Course Schedule

## 🧩 Problem Statement

There are `numCourses` courses labeled from `0` to `numCourses - 1`. You're given an array `prerequisites` where each element is a pair `[a, b]`, meaning **to take course `a` you must first complete course `b`**.

Determine if it is possible to finish all courses.

This is a **cycle detection problem** on a **Directed Graph** — if there's a cycle, it's impossible to complete all courses.

---

## 📥 Input

-   `numCourses`: number — total number of courses (vertices in graph)
-   `prerequisites`: number[][] — list of prerequisite pairs `[a, b]`

---

## 📤 Output

-   `true` if it's possible to finish all courses (i.e., the graph has **no cycles**)
-   `false` if not (i.e., the graph has **at least one cycle**)

---

## 🔍 Examples

### Example 1

**Input:**  
`numCourses = 2`  
`prerequisites = [[1, 0]]`  
**Output:**  
`true`  
**Explanation:** You can take course 0, then course 1.

---

### Example 2

**Input:**  
`numCourses = 2`  
`prerequisites = [[1, 0], [0, 1]]`  
**Output:**  
`false`  
**Explanation:** There is a cycle between course 0 and 1.

---

## 🧠 Strategy

Use **Topological Sort with cycle detection**:

### Approach 1: DFS

-   Build an adjacency list
-   Use a visited array:
    -   0 → not visited
    -   1 → visiting (on current DFS path)
    -   2 → visited and safe
-   If you revisit a `visiting` node → cycle detected → return `false`

### Approach 2: Kahn’s Algorithm (BFS + In-Degree)

-   Build an adjacency list and in-degree map
-   Start with nodes that have `in-degree = 0`
-   Gradually remove and reduce in-degrees of neighbors
-   If you process all nodes → valid (no cycle)
-   If any nodes remain → cycle exists

---

## 🔧 Constraints

-   `1 <= numCourses <= 2000`
-   `0 <= prerequisites.length <= 5000`
-   All prerequisites are valid course indices.
