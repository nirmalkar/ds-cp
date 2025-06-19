# 🌲 Depth-First Search (DFS) Pattern

## 1. Maximum Depth of Binary Tree

### 📝 Problem Description

Given the `root` of a binary tree, return **its maximum depth**.

The **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

A **leaf** is a node with no children.

---

### 📥 Input

-   `root`: `TreeNode | null` — The root node of a binary tree.

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

-   Return an integer representing the maximum depth of the binary tree.

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
`3`

**Explanation:**  
The longest path from root to leaf is 3 → 20 → 15 (or 3 → 20 → 7), so the maximum depth is 3.

---

#### Example 2

**Input:**  
`root = [1,null,2]`

**Tree:**

```
1
 \
  2
```

**Output:**  
`2`

---

#### Example 3

**Input:**  
`root = []`
