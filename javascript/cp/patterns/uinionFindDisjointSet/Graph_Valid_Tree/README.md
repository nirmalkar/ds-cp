# Graph Valid Tree

## 🧩 Problem Statement

Given `n` nodes labeled from `0` to `n - 1` and a list of undirected edges, determine if the graph is a **valid tree**.

A graph is a **tree** if:

1. It is **fully connected** (all nodes are reachable)
2. It has **no cycles**

---

## 📥 Input

-   `n`: number — number of nodes
-   `edges`: number[][] — list of undirected edges `[u, v]`

---

## 📤 Output

-   A boolean — `true` if the graph is a valid tree, else `false`

---

## 🔍 Examples

### Example 1

**Input:**  
n = 5  
edges = [[0,1],[0,2],[0,3],[1,4]]

**Output:**  
true

**Explanation:**  
The graph is connected and contains no cycles.

---

### Example 2

**Input:**  
n = 5  
edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]

**Output:**  
false

**Explanation:**  
There is a cycle: 1-2-3-1

---

## 🧠 Strategy

Use **Union-Find** to detect cycles and check connectivity.

### Steps:

1. Initialize Union-Find with `n` nodes.
2. For each edge `[u, v]`:
    - If `find(u) === find(v)` → cycle found → return `false`
    - Else `union(u, v)`
3. After processing all edges:
    - If total edges ≠ `n - 1`, it’s not a valid tree → return `false`
    - Otherwise → return `true`

---

## 🧪 Time & Space Complexity

-   Time: O(N × α(N))
-   Space: O(N)

---

## 🔧 Constraints

-   `1 <= n <= 2000`
-   `edges.length == n - 1` (for valid trees)
-   Nodes are numbered from `0` to `n - 1`
