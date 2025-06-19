# 🍊 Breadth-First Search (BFS) Pattern

## 4. Rotting Oranges

### 📝 Problem Description

You are given an `m x n` grid where each cell can have one of three values:

-   `0` — Empty cell
-   `1` — Fresh orange
-   `2` — Rotten orange

Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.

Return the **minimum number of minutes** that must elapse until no cell has a fresh orange.  
If this is impossible, return `-1`.

---

### 📥 Input

-   `grid`: number[][] — A 2D array representing the box of oranges.

**Constraints:**

-   `m == grid.length`
-   `n == grid[i].length`
-   `1 <= m, n <= 10`
-   `grid[i][j]` is `0`, `1`, or `2`.

---

### 📤 Output

-   Return the minimum number of minutes that must elapse until no cell has a fresh orange, or `-1` if impossible.

---

### 🔁 Examples

#### Example 1

**Input:**  
`grid = [[2,1,1],[1,1,0],[0,1,1]]`

**Output:**  
`4`

**Explanation:**  
All oranges become rotten in 4 minutes.

---

#### Example 2

**Input:**  
`grid = [[2,1,1],[0,1,1],[1,0,1]]`

**Output:**  
`-1`

**Explanation:**  
Some fresh oranges will never be rotten because they are isolated.

---

#### Example 3

**Input:**  
`grid = [[0,2]]`

**Output:**  
`0`

**Explanation:**  
No fresh oranges
