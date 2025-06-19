# 🌲 Depth-First Search (DFS) Pattern

## 4. Number of Islands (DFS Version)

### 📝 Problem Description

Given a 2D grid map of `'1'`s (land) and `'0'`s (water), return the **number of islands**.

An island is surrounded by water and is formed by connecting adjacent lands **horizontally or vertically**.  
You may assume all four edges of the grid are surrounded by water.

---

### 📥 Input

-   `grid`: string[][] — 2D grid of characters: `'1'` (land) or `'0'` (water)

**Constraints:**

-   `1 <= grid.length, grid[0].length <= 300`
-   `grid[i][j]` is `'0'` or `'1'`

---

### 📤 Output

-   Return a number — total number of distinct islands.

---

### 🔁 Examples

#### Example 1

**Input:**

```
grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
```

**Output:**  
`1`

---

#### Example 2

**Input:**

```
grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
```

**Output:**
