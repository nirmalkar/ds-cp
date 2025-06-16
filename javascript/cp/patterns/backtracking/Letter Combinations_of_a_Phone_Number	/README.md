# Letter Combinations of a Phone Number

## Problem Description

Given a string of digits from `2` to `9` inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

On a telephone keypad, each digit maps to a set of letters as follows (digit 1 does not map to any letters):

```
2 → "abc"
3 → "def"
4 → "ghi"
5 → "jkl"
6 → "mno"
7 → "pqrs"
8 → "tuv"
9 → "wxyz"
```

You may return the combinations in any order. If the input digit string is empty, return an empty list.

## Input Format

-   A single string `digits` representing the sequence of digits (each character is between `'2'` and `'9'`).

## Output Format

-   A list of strings, where each string represents a possible letter combination in lexicographical order (optional, any order is acceptable unless otherwise specified).

## Examples

### Example 1

```
Input: digits = "23"
Output: [
  "ad","ae","af",
  "bd","be","bf",
  "cd","ce","cf"
]
Explanation:
Digit '2' maps to ["a","b","c"].
Digit '3' maps to ["d","e","f"].
All combinations: ["ad","ae","af","bd","be","bf","cd","ce","cf"].
```

### Example 2

```
Input: digits = ""
Output: []
Explanation: No digits provided, so no combinations.
```

### Example 3

```
Input: digits = "7"
Output: ["p","q","r","s"]
Explanation: Digit '7' maps to ["p","q","r","s"].
```
