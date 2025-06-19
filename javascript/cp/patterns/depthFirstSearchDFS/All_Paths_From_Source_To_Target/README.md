# 🌲 Depth-First Search (DFS) Pattern

## 5. All Paths From Source to Target

### 📝 Problem Description

Given a **directed acyclic graph (DAG)** of `n` nodes, where each node is labeled from `0` to `n - 1`, and the graph is represented as an adjacency list, return **all possible paths** from node `0` to node `n - 1`.

---

### 📥 Input

-   `graph`: number[][] — A list where `graph[i]` is a list of all nodes you can visit from node `i`.

**Constraints:**

-   `n == graph.length`
-   `2 <= n <= 15`
-   `0 <= graph[i][j] < n`
-   `graph[i][j] != i` (no self-loops)
-   The graph is a **DAG** (no cycles)

---

### 📤 Output

-   Return all paths from `0` to `n - 1` as an array of arrays.

---

### 🔁 Examples

#### Example 1

**Input:**  
`graph = [[1,2],[3],[3],[]]`

**Output:**  
`[[0,1,3],[0,2,3]]`

---

#### Example 2

**Input:**  
`graph = [[4,3,1],[3,2,4],[3],[4],[]]`

**Output:**  
`[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]`
