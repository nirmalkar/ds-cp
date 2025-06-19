# 2. Linked List Cycle II

## 📝 Problem Statement

Given the `head` of a linked list, return the **node where the cycle begins**. If there is **no cycle**, return `null`.

There is a cycle in a linked list if some node in the list can be reached again by continuously following the `next` pointer.

You must solve it **without modifying the linked list**, and using **constant extra space**.

---

## 📥 Input

-   A singly linked list represented by its `head` node.

---

## 📤 Output

-   The node where the cycle begins, or `null` if there is no cycle.

---

## 🔍 Examples

### Example 1

**Input:**  
`head = [3,2,0,-4], pos = 1`  
**Output:**  
Reference to node with value 2  
**Explanation:**  
The cycle begins at node 2.

---

### Example 2

**Input:**  
`head = [1,2], pos = 0`  
**Output:**  
Reference to node with value 1

---

### Example 3

**Input:**  
`head = [1], pos = -1`  
**Output:**  
`null`  
**Explanation:**  
No cycle.

---

## ✅ Constraints

-   The number of nodes in the list is in the range `[0, 10^4]`.
-   `-10^5 <= Node.val <= 10^5`
-   `pos` is the index of the node that the tail connects to. If `pos == -1`, then there is no
