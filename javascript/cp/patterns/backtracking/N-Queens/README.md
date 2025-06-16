# N-Queens

## Problem Description

The N-Queens puzzle is the problem of placing `N` queens on an `N x N` chessboard so that no two queens attack each other. A queen can attack horizontally, vertically, and diagonally. Given an integer `n`, return all distinct solutions to the `n`-queens puzzle.

Each solution contains a distinct board configuration of the `n`-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space respectively.

## Input Format

-   An integer `n`, representing both the number of queens to place and the dimensions of the chessboard (`n x n`).

## Output Format

-   A list of board configurations. Each configuration is a list of `n` strings, each string of length `n`, representing one row of the board:

    -   `'Q'` indicates a queen.
    -   `'.'` indicates an empty square.

## Examples

### Example 1

```
Input: n = 4
Output:
[
 [".Q..",
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There are two distinct solutions to the 4-queens puzzle.
```

### Example 2

```
Input: n = 1
Output: [["Q"]]
Explanation: Only one cell, place one queen.
```
