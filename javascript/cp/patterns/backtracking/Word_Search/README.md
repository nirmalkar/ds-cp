# Word Search

## Problem Description

Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

## Input Format

-   `board`: A 2D array of characters of size `m x n`.
-   `word`: A string to search for in the grid.

## Output Format

-   A boolean value: `true` if `word` exists in `board`, otherwise `false`.

## Examples

### Example 1

```
Input:
board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED"

Output: true

Explanation: The word "ABCCED" can be constructed as follows:
A → B → C → C → E → D
```

### Example 2

```
Input:
board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "SEE"

Output: true

Explanation: "SEE" can be formed by S → E → E.
```

### Example 3

```
Input:
board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCB"

Output: false

Explanation: You cannot reuse the same letter cell twice.
```
