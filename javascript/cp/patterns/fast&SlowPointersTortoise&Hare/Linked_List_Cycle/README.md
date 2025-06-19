# 1. Linked List Cycle

## 📝 Problem Statement

Given the `head` of a linked list, determine if the linked list has a **cycle** in it.

There is a cycle in a linked list if some node in the list can be reached again by continuously following the `next` pointer.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

---

## 📥 Input

-   A singly linked list represented by its `head` node.

---

## 📤 Output

-   A boolean value: `true` if a cycle exists, otherwise `false`.

---

## 🔍 Examples

### Example 1

**Input:**  
`head = [3,2,0,-4], pos = 1`  
**Output:**  
`true`  
**Explanation:**  
The tail connects to the second node.

---

### Example 2

**Input:**  
`head = [1,2], pos = 0`  
**Output:**  
`true`  
**Explanation:**  
The tail connects to the first node.

---

### Example 3

**Input:**  
`head = [1], pos = -1`  
**Output:**  
`false`  
**Explanation:**  
No cycle.

---

## ✅ Constraints

-   The number of nodes in the list is in the range `[0, 10^4]`.
-   `-10^5 <= Node.val <= 10^5`
-   `pos` is the index of the node that the tail connects to. If `pos == -1`, then there is no cycle.

---
