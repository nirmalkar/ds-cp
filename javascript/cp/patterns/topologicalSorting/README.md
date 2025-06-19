# Topological Sorting

## 🧠 What is Topological Sort?

**Topological Sort** is a linear ordering of vertices in a **Directed Acyclic Graph (DAG)** such that for every directed edge `u → v`, vertex `u` comes **before** vertex `v` in the ordering.

### Key Points:

-   Only works on **DAGs** (Directed Acyclic Graphs)
-   Often used in:
    -   **Dependency resolution**
    -   **Task scheduling**
    -   **Build systems**
    -   **Course prerequisite planning**

---

## 🔧 Techniques

There are two standard ways to perform Topological Sorting:

### 1. **DFS-based (Depth-First Search)**

-   Perform DFS and push nodes onto a stack **after visiting all their neighbors**
-   Final ordering is the **reverse of the finished stack**

### 2. **BFS-based (Kahn’s Algorithm)**

-   Count **in-degrees** of each node
-   Repeatedly add nodes with `in-degree = 0` to the result
-   Reduce in-degrees of neighbors

---

## 🧪 Time & Space Complexity

| Method       | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| DFS          | O(V + E)        | O(V)             |
| Kahn’s (BFS) | O(V + E)        | O(V + E)         |

Where:

-   `V` = number of vertices
-   `E` = number of edges

---

## ✅ Conditions to Apply Topological Sort

-   The graph must be **directed**
-   The graph must be **acyclic**
-   If a cycle is detected, topological sort is **not possible**

---

## 📚 Common Topological Sort Problems

| #   | Problem Title                     | Type             |
| --- | --------------------------------- | ---------------- |
| 1   | Course Schedule (Detect Cycle)    | Cycle Detection  |
| 2   | Course Schedule II (Return Order) | Topo Sort        |
| 3   | Alien Dictionary                  | Custom order     |
| 4   | Parallel Course Scheduling        | Time Scheduling  |
| 5   | Build System or Task Ordering     | Dependency graph |

---

## 🔍 Coming Up: Problem 1 — Course Schedule

We’ll implement both:

-   **Cycle detection using DFS**
-   **Topological Sort using Kahn’s Algorithm**
