# Heap / Priority Queue

## 🧠 What is a Heap?

A **heap** is a special tree-based data structure that satisfies the **heap property**:

-   In a **Min Heap**, the parent node is always less than or equal to its children.
-   In a **Max Heap**, the parent node is always greater than or equal to its children.

Heaps are commonly implemented using **arrays** and allow fast access to the **minimum or maximum element**.

## 📦 What is a Priority Queue?

A **priority queue** is an abstract data type similar to a regular queue, but with each element having a **priority**.

-   Elements with higher priority are dequeued before elements with lower priority.
-   Internally, priority queues are typically implemented using **heaps**.

## ⏱️ Time Complexities

| Operation       | Time Complexity |
| --------------- | --------------- |
| Insert (push)   | O(log n)        |
| Extract min/max | O(log n)        |
| Peek (min/max)  | O(1)            |

## ✅ When to Use Heap / Priority Queue

-   When you need quick access to the smallest or largest item.
-   When processing elements in order of priority.
-   Ideal for problems like:
    -   Finding K largest/smallest elements
    -   Dijkstra’s shortest path
    -   A\* Search Algorithm
    -   Merging K sorted lists
    -   Scheduling and CPU task management

## 🛠️ Common Libraries

### JavaScript / TypeScript

JavaScript doesn't have a built-in PriorityQueue, but you can use a custom implementation or third-party libraries like:

-   `heapify`
-   `js-priority-queue`

### Python

```python
import heapq

min_heap = []
heapq.heappush(min_heap, 10)
heapq.heappush(min_heap, 5)
heapq.heappop(min_heap)  # returns 5
```
