# Word Search II

## 🧩 Problem Statement

Given an `m x n` board of characters and a list of strings `words`, return **all words** on the board that appear in the word list.

Each word must be constructed from letters of sequentially adjacent cells, where “adjacent” cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a single word.

---

## 📥 Input

-   `board`: string[][] — 2D grid of lowercase letters
-   `words`: string[] — list of words to search for

---

## 📤 Output

-   A string[] — all words from `words` that can be formed on the board (in any order)

---

## 🔍 Example

**Input:**

```
board = [
  ["o","a","a","n"],
  ["e","t","a","e"],
  ["i","h","k","r"],
  ["i","f","l","v"]
]
words = ["oath","pea","eat","rain"]
```

**Output:**  
`["eat","oath"]`

---

## 🧠 Strategy

1. **Build a Trie** of all `words` for fast prefix checks.
2. **DFS + Backtracking** from each cell:
    - Track the current Trie node
    - If current path forms a word (`isEndOfWord`), add to result and mark to avoid duplicates
    - Explore 4 directions (up/down/left/right)
    - Mark cell as visited during exploration, then backtrack

This ensures you prune DFS whenever the current path has no matching prefix in the Trie.

---

## 🔧 Constraints

-   `m == board.length`
-   `n == board[i].length`
-   `1 <= m, n <= 12`
-   `board[i][j]` is a lowercase English letter
-   `1 <= words.length <= 3 * 10⁴`
-   `1 <= words[i].length <= 10`
-   All `words[i]` are unique
