# 6. Permutation in String

**Category:** Sliding Window (Fixed-Size Window with Character Counts)  
**Difficulty:** Medium

---

## Problem Statement

Given two strings `s1` and `s2`, determine if `s2` contains a permutation of `s1`. In other words, check if there is a substring in `s2` that is an anagram of `s1`. Return `true` if such a substring exists, otherwise return `false`.

---

## Input

-   `s1`: A string of characters (e.g., `"ab"`)
-   `s2`: A string of characters in which we search for any permutation of `s1` (e.g., `"eidbaooo"`)

---

## Output

-   A boolean (`true` or `false`) indicating whether any permutation of `s1` exists as a contiguous substring in `s2`.

---

## Example

**Input:**  
`s1 = "ab"`, `s2 = "eidbaooo"`

**Output:**  
`true`

**Explanation:**  
`s2` contains the substring `"ba"`, which is a permutation of `"ab"`.
