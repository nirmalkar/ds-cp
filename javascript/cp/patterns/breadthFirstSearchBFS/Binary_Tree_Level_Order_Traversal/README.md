# 🌳 Breadth-First Search (BFS) Pattern

## 1. Binary Tree Level Order Traversal

### 📝 Problem Description

Given the `root` of a binary tree, return the **level order traversal** of its nodes' values (i.e., from left to right, level by level).

---

### 📥 Input

-   `root`: `TreeNode | null` — The root node of a binary tree

**TreeNode structure:**

```typescript
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}
```

---

### 📤 Output

-   Return a 2D array: `number[][]`, where each inner array represents values at a specific tree level.

---

### 🔁 Examples

#### Example 1

**Input:**  
`root = [3,9,20,null,null,15,7]`

**Tree:**

```
    3
   / \
  9  20
     / \
    15  7
```

**Output:**  
`[[3], [9, 20], [15, 7]]`

---

#### Example 2

**Input:**  
`root = [1]`

**Output:**  
`[[1]]`

---

#### Example 3

**Input:**  
`root = []`

**Output:**  
`[]`
