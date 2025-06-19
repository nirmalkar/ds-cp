# 5. Intersection of Two Linked Lists

## 📝 Problem Statement

Given the heads of two singly linked lists `headA` and `headB`, return the **node at which the two lists intersect**. If the two linked lists have no intersection, return `null`.

The linked lists must retain their original structure after the function returns.

It is guaranteed that there are no cycles in the entire linked structure.

---

## 📥 Input

-   Two singly linked lists: `headA` and `headB`

---

## 📤 Output

-   The reference to the node where the two lists intersect, or `null` if they do not intersect.

---

## 🔍 Examples

### Example 1

**Input:**  
ListA = [4,1,8,4,5]  
ListB = [5,6,1,8,4,5]  
**Output:** Reference to node with value 8

---

### Example 2

**Input:**  
ListA = [1,9,1,2,4]  
ListB = [3,2,4]  
**Output:** Reference to node with value 2

---

### Example 3

**Input:**  
ListA = [2,6,4]  
ListB = [1,5]  
**Output:** null

---

## ✅ Constraints

-   The number of nodes in both lists is in the range `[0, 10^4]`.
-   `-10^5 <= Node.val <= 10^5`
-   Both lists may be empty and do not
