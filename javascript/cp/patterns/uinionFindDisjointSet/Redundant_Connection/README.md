# Redundant Connection

## 🧩 Problem Statement

In this problem, you are given a tree with `n` nodes labeled from `1` to `n`, but with **one extra edge** added.

Return the **edge that can be removed** so that the resulting graph is still a tree of `n` nodes.

If there are multiple answers, return the **last one** that occurs in the input.

---

## 📥 Input

-   `edges`: number[][] — a list of `n` edges `[u, v]`

---

## 📤 Output

-   A number[] — the redundant edge `[u, v]` to remove

---

## 🔍 Example

**Input:**  
edges = [[1,2], [1,3], [2,3]]

**Output:**  
[2,3]

**Explanation:**  
Edge `[2,3]` forms a cycle. Removing it makes the graph a valid tree.

---

## 🧠 Strategy

Use **Union-Find** to detect cycles in an undirected graph.

### Steps:

1. Initialize each node as its own parent
2. For each edge `[u, v]`:
    - If `find(u) === find(v)` → cycle detected → return `[u, v]`
    - Else `union(u, v)`
3. Since you're guaranteed to have one cycle, the edge that creates the cycle is the answer

### Optimizations:

-   **Path Compression** in `find`
-   **Union by Rank/Size**

---

## 🧪 Time & Space Complexity

-   Time: O(N × α(N))
-   Space: O(N)

---

## 🔧 Constraints

-   `n == edges.length`
-   `1 <= n <= 1000`
-   `edges[i].length == 2`
-   Graph is connected and has exactly one cycle

---
