# 🌲 Depth-First Search (DFS) Pattern

## 3. Flood Fill

### 📝 Problem Description

An image is represented by a 2D array of integers, where `image[i][j]` is the **pixel value** of the image at row `i` and column `j`.

You are given a starting pixel (`sr`, `sc`) and a new color, and you should **recolor** the entire area connected to that starting pixel (horizontally or vertically) with the same original color.

Return the modified image after performing the flood fill.

---

### 📥 Input

-   `image`: number[][] — 2D array of integers
-   `sr`: number — starting row
-   `sc`: number — starting column
-   `newColor`: number — the color to apply

**Constraints:**

-   `1 <= image.length, image[0].length <= 50`
-   `0 <= image[i][j], newColor < 65536`

---

### 📤 Output

-   Return the updated image as a 2D array after flood fill.

---

### 🔁 Examples

#### Example 1

**Input:**

```
image = [
  [1,1,1],
  [1,1,0],
  [1,0,1]
]
sr = 1, sc = 1, newColor = 2
```

**Output:**

```
[
  [2,2,2],
  [2,2,0],
  [2,0,1]
]
```

---

#### Example 2

**Input:**

```
image = [
  [0,0,0],
  [0,0,0]
]
sr = 0, sc = 0, newColor = 0
```

**Output:**

```
[
  [0,0,0],
  [0,0,0]
]
```
