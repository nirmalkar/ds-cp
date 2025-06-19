# 3. Merge K Sorted Lists

## 🧩 Problem Statement

You are given an array of `k` linked lists, each list is sorted in ascending order.

Your task is to **merge all the linked lists into one sorted linked list** and return the merged list.

---

## 📥 Input

-   `lists`: ListNode[] — an array of `k` linked lists, each sorted in ascending order.

---

## 📤 Output

-   A single merged linked list that is also sorted in ascending order.

---

## 🔍 Examples

### Example 1

**Input:**

```
lists = [
  1 -> 4 -> 5,
  1 -> 3 -> 4,
  2 -> 6
]
```

**Output:**  
`1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6`

---

### Example 2

**Input:**  
`lists = []`  
**Output:**  
`[]`

---

### Example 3

**Input:**  
`lists = [[]]`  
**Output:**
