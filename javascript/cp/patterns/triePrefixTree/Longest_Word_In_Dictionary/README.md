# Longest Word in Dictionary

## 🧩 Problem Statement

Given a list of words, return the **longest word** in the list that can be **built one character at a time** by other words in the list.

If there are multiple results, return the **lexicographically smallest** one.

All words are made of lowercase English letters.

---

## 📥 Input

-   `words`: string[] — a list of unique lowercase words

---

## 📤 Output

-   A string — the longest word that can be built one character at a time

---

## 🔍 Example

**Input:**  
`words = ["w","wo","wor","worl","world"]`

**Output:**  
`"world"`

**Explanation:**  
"world" can be built from:

-   "w" → "wo" → "wor" → "worl" → "world"

---

## 🔍 Example 2

**Input:**  
`words = ["a","banana","app","appl","ap","apply","apple"]`

**Output:**  
`"apple"`

**Explanation:**  
"apple" and "apply" both valid, "apple" is smaller.

---

## 🧠 Strategy

1. Insert all words into a **Trie**.
2. For each word, verify if all prefixes of that word exist in the Trie as complete words.
3. Use **DFS** on the Trie to explore all valid paths and find the **longest** valid word (or smallest if tie).

Trie traversal ensures prefix existence is checked efficiently.

---

## 🔧 Constraints

-   `1 <= words.length <= 10⁵`
-   `1 <= words[i].length <= 30`
-   All `words[i]` consist of lowercase English letters
-   All words are unique
