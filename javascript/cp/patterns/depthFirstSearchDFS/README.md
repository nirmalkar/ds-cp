# 🌲 Depth-First Search (DFS) Pattern

## 📘 Introduction

**Depth-First Search (DFS)** is a fundamental graph and tree traversal algorithm that explores as far as possible along each branch before backtracking.

DFS dives **deep into a branch** before moving to another, unlike BFS which explores level-by-level.

---

## 🛠️ How DFS Works

-   DFS is typically implemented using **recursion** or an **explicit stack**
-   It explores nodes by moving forward (deeper) as much as possible
-   Once it reaches a dead-end, it **backtracks** to explore other paths

---

## ✅ DFS is Best For:

-   **Traversing or exploring** entire tree/graph structures
-   Solving **backtracking problems** (e.g., combinations, permutations, sudoku)
-   Checking **connected components** in a graph or grid
-   Performing **topological sort** or **cycle detection**
-   Problems with **"Explore all paths"** or **"Can we reach...?"** patterns

---

## 🔧 Data Structures Often Used

-   `Recursion Stack` (via function calls)
-   `Explicit Stack` (for iterative DFS)
-   `Visited Set` or `boolean[][]` (to avoid cycles)

---

## 🧱 DFS Variants

-   **Recursive DFS** (most common)
-   **Iterative DFS** (using an explicit stack)
-   **Postorder / Preorder / Inorder Traversals** (tree-specific DFS variants)
-   **DFS with Backtracking** (undo state when returning from a recursive call)

---

## 🧠 Time and Space Complexity

| Complexity | Tree/Graph Description           |
| ---------- | -------------------------------- |
| ⏱ Time     | O(V + E) — Visit every node/edge |
| 💾 Space   | O(H) for trees (H = height)      |
|            | O(V) for graphs (visited set)    |

---

## 📚 Common DFS Problem Categories

| Category                   | Examples                                |
| -------------------------- | --------------------------------------- |
| Tree traversal             | Preorder, Postorder, Inorder            |
| Grid problems              | Island count, Flood fill, Maze path     |
| Backtracking problems      | Combinations, Permutations, N-Queens    |
| Graph cycle detection      | Detecting cycles in directed/undirected |
| Pathfinding / Reachability | Can we reach target node?               |
| Topological sort           | Ordering tasks with prerequisites       |
