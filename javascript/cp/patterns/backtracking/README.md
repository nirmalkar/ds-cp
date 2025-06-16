# Backtracking Problem Solving Pattern

## 📘 Introduction

Backtracking is a **systematic way to explore all possible configurations** of a solution space. It's typically used to solve problems that require:

-   Generating permutations, combinations, or subsets.
-   Finding all solutions to constraint satisfaction problems (like Sudoku, N-Queens).
-   Building solutions incrementally and abandoning them (backtrack) when constraints are violated.

Backtracking is essentially a **depth-first search (DFS)** on a decision tree, with the added mechanism to **backtrack** — undo the last choice and try a new path.

---

## 🔍 When to Use Backtracking?

Use backtracking when:

-   You need to explore multiple potential solutions and pick valid ones.
-   You must try out all possibilities (generate all permutations, subsets, combinations, etc.).
-   The problem involves "choose or don't choose", "place or not place", "pick a number and explore" kind of decisions.
-   Constraints are present (e.g., sum == target, no duplicates, board boundaries).

---

## ⚙️ General Template

```js
function backtrack(path, options):
    if base_condition_met(path):
        save(path)
        return

    for option in options:
        make_a_choice(option)
        backtrack(updated_path, updated_options)
        undo_the_choice(option)
```
