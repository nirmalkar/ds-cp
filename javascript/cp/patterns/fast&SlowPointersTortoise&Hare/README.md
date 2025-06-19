# 🐢🐇 Fast & Slow Pointers (Tortoise & Hare)

## 📘 Introduction

The **Fast and Slow Pointers** technique (also known as the **Tortoise and Hare** algorithm) is a powerful pattern used to detect cycles or find middle points in **linked lists**, **arrays**, or similar structures where traversal is possible.

It involves using two pointers:

-   A **slow pointer** that moves one step at a time.
-   A **fast pointer** that moves two steps at a time.

The difference in speed between the two pointers creates opportunities to:

-   Detect **cycles** in data structures.
-   Find **middle elements** of linked lists.
-   Detect **intersections** or repeated patterns.
-   Optimize **time and space** in certain problems.

---

## 🧠 When to Use

-   You need to **detect cycles** in a linked list or array.
-   You need to find the **middle element** of a list in a single pass.
-   You're asked to **identify repeated patterns** or states in a traversal.
-   You want to optimize space and time over brute force solutions.

---

## 🧩 Common Problem Types

-   Detect cycle in a linked list
-   Find the starting point of the cycle
-   Find the middle of a linked list
-   Happy number detection
-   Linked list intersection

---

## 🧪 How It Works

The basic idea:

1. Initialize two pointers: `slow` and `fast`.
2. Move `slow` one step and `fast` two steps at a time.
3. If there’s a cycle, eventually `fast` will meet `slow`.
4. If `fast` reaches the end (`null` or out of bounds), there is **no cycle**.

---

## 📦 Example Use Case: Detect Cycle in Linked List

**Goal**: Detect if a linked list contains a cycle.

-   Initialize `slow` and `fast` at the head.
-   Move `slow` by one and `fast` by two steps in a loop.
-   If `slow === fast`, there is a cycle.
-   If `fast` or `fast.next` is `null`, there is no cycle.

---

> The Tortoise & Hare pattern is simple but incredibly effective, and mastering it can help solve many seemingly complex problems efficiently.
