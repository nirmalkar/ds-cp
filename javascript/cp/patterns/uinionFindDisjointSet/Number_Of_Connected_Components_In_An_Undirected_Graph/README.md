# Number of Connected Components in an Undirected Graph

## 🧩 Problem Statement

You are given `n` nodes labeled from `0` to `n - 1` and a list of undirected edges.  
Return the **number of connected components** in the graph.

---

## 📥 Input

-   `n`: number — number of nodes
-   `edges`: number[][] — list of undirected edges `[u, v]`

---

## 📤 Output

-   An integer — number of connected components in the graph

---

## 🔍 Example

**Input:**  
n = 5  
edges = [[0, 1], [1, 2], [3, 4]]

**Output:**  
2

**Explanation:**

-   Component 1: 0-1-2
-   Component 2: 3-4

---

## 🧠 Strategy

Use **Union-Find (Disjoint Set)** to dynamically connect nodes and count the number of connected components.

### Steps:

1. Initialize each node as its own parent
2. For each edge `[u, v]`, perform `union(u, v)`
3. After all unions, count the number of unique root parents (disjoint sets)

### Optimizations:

-   Use **Path Compression** during `find`
-   Use **Union by Rank or Size** to keep trees flat

---

## 🧪 Time & Space Complexity

-   Time: O(E × α(N))
-   Space: O(N)  
    Where `E` = number of edges, `N` = number of nodes, `α` = inverse Ackermann (very small)

---

## 🔧 Constraints

-   `1 <= n <= 2000`
-   `0 <= edges.length <= 5000`
-   No duplicate edges
-   No self-loops

---
