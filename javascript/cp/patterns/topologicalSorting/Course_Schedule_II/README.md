# 2. Course Schedule II

## 🧩 Problem Statement

You are given `numCourses` courses labeled from `0` to `numCourses - 1`, and an array `prerequisites` where `prerequisites[i] = [a, b]` means **to take course `a`, you must first complete course `b`**.

Return an array representing **a valid order to complete all courses**. If it's impossible (due to a cycle), return an **empty array**.

This is a **Topological Sorting** problem on a **Directed Acyclic Graph (DAG)**.

---

## 📥 Input

-   `numCourses`: number — total number of courses (vertices in graph)
-   `prerequisites`: number[][] — list of prerequisite pairs `[a, b]`

---

## 📤 Output

-   A number[] — a valid topological ordering of all courses
-   If not possible, return `[]`

---

## 🔍 Examples

### Example 1

**Input:**  
`numCourses = 4`  
`prerequisites = [[1,0],[2,0],[3,1],[3,2]]`  
**Output:**  
`[0,2,1,3]` or `[0,1,2,3]`  
**Explanation:**  
Both are valid topological orderings. Take 0 first, then 1 and 2 in any order, and finally 3.

---

### Example 2

**Input:**  
`numCourses = 2`  
`prerequisites = [[1,0],[0,1]]`  
**Output:**  
`[]`  
**Explanation:**  
There is a cycle; it's not possible to complete all courses.

---

## 🧠 Strategy

Use **Topological Sorting** to return the valid course order.
