# 🧠 Problem Solving Patterns for Coding Interviews & Competitive Programming

This guide covers the **14 essential problem-solving patterns** that are commonly used in coding interviews and online judges like LeetCode, HackerRank, and Codeforces.

---

## 1. Sliding Window

**Use when:** Working with contiguous subarrays or substrings.

**Common problems:** Max sum subarray, longest substring without repeating characters.

**Key idea:** Move a window of variable size over the input to optimize time complexity.

**Example:**

-   LeetCode 3: Longest Substring Without Repeating Characters

---

## 2. Two Pointers

**Use when:** Need to compare elements from both ends or search pairs in a sorted array.

**Common problems:** Reverse array, 3Sum, remove duplicates.

**Key idea:** Move two pointers inward/outward based on conditions.

**Example:**

-   LeetCode 167: Two Sum II - Input array is sorted

---

## 3. Fast & Slow Pointers

**Use when:** Need to detect cycles or midpoints in linked structures.

**Common problems:** Cycle detection in linked list, palindrome check.

**Key idea:** Move pointers at different speeds to detect patterns.

**Example:**

-   LeetCode 141: Linked List Cycle

---

## 4. Binary Search

**Use when:** Input is sorted or answer lies in a monotonic space.

**Common problems:** Search in sorted array, peak element, kth smallest.

**Key idea:** Divide search space in half recursively or iteratively.

**Example:**

-   LeetCode 704: Binary Search

---

## 5. Depth First Search (DFS)

**Use when:** Exploring all possibilities, paths, or components.

**Common problems:** Graph traversal, backtracking, maze solving.

**Key idea:** Explore deeply before backtracking.

**Example:**

-   LeetCode 200: Number of Islands

---

## 6. Breadth First Search (BFS)

**Use when:** Need shortest path or level-order traversal.

**Common problems:** Shortest path in unweighted graph, tree level order.

**Key idea:** Explore all neighbors level-by-level using a queue.

**Example:**

-   LeetCode 102: Binary Tree Level Order Traversal

---

## 7. Backtracking

**Use when:** Need to explore all valid combinations or permutations.

**Common problems:** N-Queens, Sudoku solver, subsets.

**Key idea:** Recursively try options, undoing ("backtrack") when needed.

**Example:**

-   LeetCode 46: Permutations

---

## 8. Dynamic Programming (DP)

**Use when:** Subproblems overlap and have optimal substructure.

**Common problems:** Knapsack, LCS, Fibonacci, coin change.

**Key idea:** Store and reuse results of solved subproblems.

**Example:**

-   LeetCode 70: Climbing Stairs

---

## 9. Greedy Algorithm

**Use when:** Making the locally optimal choice leads to global optimum.

**Common problems:** Interval scheduling, minimum platforms, Huffman coding.

**Key idea:** Greedily select the best choice at each step.

**Example:**

-   LeetCode 452: Minimum Number of Arrows to Burst Balloons

---

## 10. Union-Find (Disjoint Set)

**Use when:** Handling dynamic connectivity in graph problems.

**Common problems:** Find connected components, cycle detection.

**Key idea:** Use union-by-rank and path compression.

**Example:**

-   LeetCode 547: Number of Provinces

---

## 11. Topological Sort

**Use when:** You need a valid order of tasks with dependencies.

**Common problems:** Course schedule, build system.

**Key idea:** Sort nodes of a DAG based on dependency rules.

**Example:**

-   LeetCode 207: Course Schedule

---

## 12. Trie (Prefix Tree)

**Use when:** Efficient prefix or word search operations are needed.

**Common problems:** Word dictionary, autocomplete.

**Key idea:** Tree-like structure where paths represent words.

**Example:**

-   LeetCode 208: Implement Trie (Prefix Tree)

---

## 13. Bit Manipulation

**Use when:** Working with binary representation or sets.

**Common problems:** Find single number, subsets, XOR tricks.

**Key idea:** Use AND, OR, XOR, shifting for bitwise operations.

**Example:**

-   LeetCode 136: Single Number

---

## 14. Heap / Priority Queue

**Use when:** Need quick access to smallest/largest element.

**Common problems:** Merge k sorted lists, top-k frequent elements.

**Key idea:** Use a min/max heap to maintain order efficiently.

**Example:**

-   LeetCode 215: Kth Largest Element in an Array

---
