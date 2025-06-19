# 🌳 Breadth-First Search (BFS) Pattern

## 2. Minimum Depth of Binary Tree

### 📝 Problem Description

Given the `root` of a binary tree, return its **minimum depth**.

The **minimum depth** is the number of nodes along the shortest path from the root node down to the nearest leaf node.

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

-   Return an integer representing the minimum depth of the binary tree.

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
`2`

**Explanation:**  
The minimum depth is 2 (from root 3 to leaf 9).

---

#### Example 2

**Input:**  
`root = [2,null,3,null,4,null,5,null,6]`

**Tree:**

```
2
 \
  3
   \
    4
     \
      5
       \
        6
```

**Output:**  
`5`

**Explanation:**  
The minimum depth is 5 (from root 2 to leaf 6).

---

#### Example 3

**Input:**  
`root = []`
