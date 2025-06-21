# Lexicographically Smallest Equivalent String

## 🧩 Problem Statement

You are given two strings `s1` and `s2` of the same length, and a third string `baseStr`.

The strings `s1` and `s2` define equivalence relationships:

-   `s1[i]` is equivalent to `s2[i]`
-   Equivalence is **transitive** and **symmetric**

Return the **lexicographically smallest equivalent string** of `baseStr` by replacing each character with the **smallest equivalent character** it can be mapped to.

---

## 📥 Input

-   `s1`: string — first equivalence string
-   `s2`: string — second equivalence string (same length as `s1`)
-   `baseStr`: string — target string to transform

---

## 📤 Output

-   A string — lexicographically smallest equivalent version of `baseStr`

---

## 🔍 Example

**Input:**  
s1 = "parker"  
s2 = "morris"  
baseStr = "parser"

**Output:**  
"makkek"

**Explanation:**

Equivalence classes formed:

-   p = m, a = o, r = r, k = i, e = s  
    Lexicographically smallest choices:
-   p/m → m, a/o → a, r → r, k/i → i, e/s → e

---

## 🧠 Strategy

Use **Union-Find** to group all equivalent characters (total 26 lowercase letters).

### Steps:

1. For each pair `(s1[i], s2[i])`, `union(s1[i], s2[i])`
    - Always make the **lexicographically smaller** char the parent/root
2. For each character in `baseStr`, find its **root** (smallest equivalent character)
3. Build the transformed result string

This approach ensures that every character is replaced by the **lex smallest equivalent** in its group.

---

## 🧪 Time & Space Complexity

-   Time: O(N + M × α(26))  
    (N = baseStr.length, M = s1.length)
-   Space: O(26)

---

## 🔧 Constraints

-   `1 <= s1.length == s2.length <= 1000`
-   `1 <= baseStr.length <= 1000`
-   All strings consist of lowercase

---
