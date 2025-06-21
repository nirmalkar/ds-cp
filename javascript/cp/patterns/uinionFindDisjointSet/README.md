# 🔗 Union-Find / Disjoint Set Union (DSU)

## 🧠 What is Union-Find?

**Union-Find**, also known as **Disjoint Set Union (DSU)**, is a data structure that keeps track of **a set of elements partitioned into disjoint (non-overlapping) subsets**.

It is mainly used to:

-   **Track connected components**
-   **Detect cycles in a graph**
-   **Perform union and find operations efficiently**

---

## 📦 Core Operations

| Operation         | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `find(x)`         | Returns the representative (root) of the set containing `x` |
| `union(x, y)`     | Merges the sets containing `x` and `y`                      |
| `connected(x, y)` | Returns `true` if `x` and `y` are in the same set           |

---

## ⚙️ Optimizations

To make operations efficient (near constant time):

### 1. **Path Compression (in `find`)**

-   Flatten the tree during `find` calls
-   Makes each node point directly to its root

### 2. **Union by Rank / Size**

-   Always attach the smaller tree under the root of the larger tree

With these optimizations, both `find` and `union` run in:  
O(α(n)) → nearly constant time (inverse Ackermann function)

---

## 📚 Use Cases

-   Finding cycles in an **undirected graph**
-   Counting **connected components**
-   **Kruskal’s algorithm** for Minimum Spanning Tree
-   Dynamic connectivity problems
-   Grouping related items (e.g., accounts merge, friend circles, etc.)

---

## 🧪 Time & Space Complexity

| Operation      | Time (Optimized) | Space |
| -------------- | ---------------- | ----- |
| `find(x)`      | O(α(n))          | O(n)  |
| `union(x, y)`  | O(α(n))          | O(n)  |
| Initialization | O(n)             | O(n)  |

---

## 📚 Common Union-Find Problems

| #   | Problem Name                                 | Pattern              |
| --- | -------------------------------------------- | -------------------- |
| 1   | Number of Connected Components               | Basic Union-Find     |
| 2   | Redundant Connection                         | Cycle Detection      |
| 3   | Graph Valid Tree                             | Union or DFS         |
| 4   | Friend Circles / Provinces                   | Grouping             |
| 5   | Accounts Merge                               | Mapping + Union      |
| 6   | Lexicographically Smallest Equivalent String | Mapping + DSU        |
| 7   | Satisfiability of Equality Equations         | Constraints with DSU |

---
