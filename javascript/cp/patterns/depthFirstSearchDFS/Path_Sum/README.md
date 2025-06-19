# 🌲 Depth-First Search (DFS) Pattern

## 2. Path Sum

### 📝 Problem Description

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf path** such that adding up all the values along the path equals `targetSum`. Otherwise, return `false`.

A **leaf** is a node with no children.

---

### 📥 Input

-   `root`: `TreeNode | null` — The root node of a binary tree.
-   `targetSum`: `number` — The target sum to check for a root-to-leaf path.

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

-   Return `true` if there exists a root-to-leaf path with sum equal to `targetSum`, otherwise return `false`.

---

### 🔁 Examples

#### Example 1

**Input:**  
`root = [5,4,8,11,null,13,4,7,2,null,null,null,1]`  
`targetSum = 22`

**Tree:**

```
      5
     / \
    4   8
   /   / \
 11  13  4
 / \       \
7   2       1
```

**Output:**  
`true`

**Explanation:**  
There exists a root-to-leaf path 5 → 4 → 11 → 2 which sums to 22.

---

#### Example 2

**Input:**  
`root = [1,2,3]`  
`targetSum = 5`

**Output:**  
`false`

---

#### Example 3

**Input:**  
`root = []`  
`targetSum = 0`

**Output:**  
`false`
