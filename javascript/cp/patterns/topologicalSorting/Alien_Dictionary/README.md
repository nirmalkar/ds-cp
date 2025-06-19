# 3. Alien Dictionary

## 🧩 Problem Statement

You are given a list of words from an alien language sorted **lexicographically** (according to the rules of this language).

Return a **string** representing the characters in the **correct order** based on the alien dictionary.

If the order is invalid or it’s impossible to determine, return `""` (an empty string).

---

## 📥 Input

-   `words`: string[] — a list of words sorted according to alien dictionary rules

---

## 📤 Output

-   A string — the characters in the correct alien dictionary order
-   If no valid order exists (e.g. due to a cycle), return `""`

---

## 🔍 Examples

### Example 1

**Input:**  
`words = ["wrt","wrf","er","ett","rftt"]`  
**Output:**  
`"wertf"`  
**Explanation:**  
From the order of words, we get relationships like:

-   w < e
-   r < t
-   t < f  
    A valid topological sort would be: "wertf"

---

### Example 2

**Input:**  
`words = ["z", "x", "z"]`  
**Output:**  
`""`  
**Explanation:**  
There is a cycle: z → x → z

---

## 🧠 Strategy

1. Build a **graph** of characters (edges from earlier to later chars).
2. Perform **topological sort** to determine valid ordering.

### ✅ Steps:

-   Compare adjacent words to derive `char1 < char2` rules.
-   Build an adjacency list and in-degree map.
-   Use **Kahn’s Algorithm (BFS)** to generate a valid order.
-   If a cycle is detected (not all nodes visited), return `""`.

---

## 🧨 Edge Cases

-   If a word is a prefix of another and comes after it (e.g., `["abc", "ab"]`), the order is invalid → return `""`

---

## 🔧 Constraints

-   `1 <= words.length <= 100`
-   `1 <= words[i].length <= 100`
-   `words[i]` consists of lowercase English letters

---
