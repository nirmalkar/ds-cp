# 🏝️ Breadth-First Search (BFS) Pattern

## 6. Number of Islands

### 📝 Problem Description

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water),  
return the **number of islands**.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.  
You may assume all four edges of the grid are all surrounded by water.

---

### 📥 Input

-   `grid`: string[][] — A 2D array of `'1'`s (land) and `'0'`s (water).

**Constraints:**

-   `m == grid.length`
-   `n == grid[i].length`
-   `1 <= m, n <= 300`
-   `grid[i][j]` is `'0'` or `'1'`.

---

### 📤 Output

-   Return the number of islands.

---

### 🔁 Examples

#### Example 1

**Input:**  
`grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`

**Output:**  
`1`

---

#### Example 2

**Input:**  
`grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`

**Output:**  
`3`

---
