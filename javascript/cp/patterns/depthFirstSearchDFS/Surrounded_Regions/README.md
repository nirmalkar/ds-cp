# 🌲 Depth-First Search (DFS) Pattern

## 6. Surrounded Regions

### 📝 Problem Description

Given an `m x n` 2D board containing `'X'` and `'O'`, capture all regions surrounded by `'X'`.

A region is captured by flipping all `'O'`s into `'X'`s **in that surrounded region**.

A surrounded region is one where all `'O'`s are **completely surrounded by `'X'`s** in all four directions and **not connected to the border**.

---

### 📥 Input

-   `board`: `string[][]` — a 2D matrix of `'X'` and `'O'`

**Constraints:**

-   `m == board.length`
-   `n == board[i].length`
-   `1 <= m, n <= 200`

---

### 📤 Output

-   Modify the input board **in-place** by flipping captured regions.

---

### 🔁 Example

#### Example 1

**Input:**

```
board = [
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
]
```

**Output:**

```
[
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","O","X","X"]
]
```
