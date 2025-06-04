# 3. Minimum Window Substring

**Category:** Sliding Window (Variable-Size Window)  
**Difficulty:** Hard

---

## Problem Statement

Given two strings `s` and `t`, find the smallest substring in `s` that contains all the characters in `t` (including duplicates). If no such substring exists, return an empty string.

---

## Input

-   `s`: A string of characters (e.g., `"ADOBECODEBANC"`)
-   `t`: A string of characters representing the set of required characters (e.g., `"ABC"`)

---

## Output

-   A string representing the smallest substring of `s` that contains all characters of `t` (with correct frequencies).
-   If there is no valid window, return an empty string `""`.

---

## Example

**Input:**  
`s = "ADOBECODEBANC", t = "ABC"`

**Output:**  
`"BANC"`

**Explanation:**  
The smallest substring of `s` that contains `'A'`, `'B'`, and `'C'` is `"BANC"`.
