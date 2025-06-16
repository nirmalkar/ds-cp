# Sudoku Solver

## Problem Description

Write a program to solve a given 9x9 Sudoku puzzle by filling the empty cells. A valid Sudoku solution must satisfy:

1. Each of the digits `1-9` must occur exactly once in each row.
2. Each of the digits `1-9` must occur exactly once in each column.
3. Each of the digits `1-9` must occur exactly once in each of the nine 3x3 sub-boxes of the grid.

The Sudoku board is represented as a two-dimensional array of characters:

-   Digits `'1'` to `'9'` indicate filled cells.
-   The character `'.'` indicates empty cells to be filled.

Modify the input board in-place to produce a valid solution. It is guaranteed that the given puzzle has one unique solution.

## Input Format

-   A 9×9 array `board` of characters, where:

    -   `board[i][j]` is a digit `'1'`–`'9'` or `'.'`.

## Output Format

-   The same 9×9 array `board`, but with all `'.'` cells replaced by digits `'1'`–`'9'` to form a valid, completed Sudoku.

## Example

### Example 1

```
Input:
[  ['5','3','.','.','7','.','.','.','.'],
   ['6','.','.','1','9','5','.','.','.'],
   ['.','9','8','.','.','.','.','6','.'],
   ['8','.','.','.','6','.','.','.','3'],
   ['4','.','.','8','.','3','.','.','1'],
   ['7','.','.','.','2','.','.','.','6'],
   ['.','6','.','.','.','.','2','8','.'],
   ['.','.','.','4','1','9','.','.','5'],
   ['.','.','.','.','8','.','.','7','9']
]

Output (one possible):
[  ['5','3','4','6','7','8','9','1','2'],
   ['6','7','2','1','9','5','3','4','8'],
   ['1','9','8','3','4','2','5','6','7'],
   ['8','5','9','7','6','1','4','2','3'],
   ['4','2','6','8','5','3','7','9','1'],
   ['7','1','3','9','2','4','8','5','6'],
   ['9','6','1','5','3','7','2','8','4'],
   ['2','8','7','4','1','9','6','3','5'],
   ['3','4','5','2','8','6','1','7','9']
]
```
