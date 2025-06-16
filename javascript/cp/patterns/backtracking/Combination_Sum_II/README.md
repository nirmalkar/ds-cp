# 6. Combination Sum II (No Reuse, With Duplicates)

**Category:** Backtracking  
**Difficulty:** Medium  
**Pattern:** Backtracking – Combinations with Constraints

---

## 🧩 Problem Statement

Given a collection of integers `candidates` (which **may include duplicates**) and a target integer `target`, return **all unique combinations** where the chosen numbers sum to `target`.

Each number in `candidates` may **only be used once** in the combination.

---

### 📝 Input:

-   `candidates`: array of integers (may contain duplicates)
-   `target`: positive integer

### 🧾 Output:

-   A list of all unique combinations that sum up to `target`.  
    Each number can be used **at most once**.

---

### 💡 Example

**Input:**
candidates = [10, 1, 2, 7, 6, 1, 5], target = 8

**Output:**
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
