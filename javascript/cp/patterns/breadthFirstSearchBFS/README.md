# 🌳 Breadth-First Search (BFS) Pattern

## 📘 Introduction

Breadth-First Search (BFS) is a fundamental traversal algorithm used in **trees** and **graphs**.  
It explores all nodes at the current depth before moving to the next level, making it ideal for solving problems involving **shortest paths**, **level-wise processing**, or **finding minimal steps**.

---

## 🛠️ How It Works

-   BFS uses a **queue (FIFO)** to track the nodes to visit.
-   You start from a root/source node, explore all its immediate neighbors, then their neighbors, and so on.
-   A **visited set** is used in graphs to prevent revisiting nodes.

---

## ✅ BFS is Best For:

-   Finding **shortest path** in an unweighted graph
-   **Level-order traversal** in trees
-   **Multi-source expansion** (e.g. rotting oranges, word ladder)
-   Problems involving **minimum steps or transformation**

---

## 🧱 Common Patterns

-   Level-by-level traversal
-   Multi-source BFS
-   Bi-directional BFS (advanced)
-   BFS with visited set/grid marking

---

## 🔗 Data Structures Often Used

-   `Queue`: For traversal
-   `Set` or `boolean[][]`: To track visited nodes
-   `Graph`, `Grid`, or `Tree` as input structure

---

## 🧠 Time Complexity

-   **O(V + E)** for graphs — V = vertices, E = edges
-   **O(n)** for trees — n = number of nodes
