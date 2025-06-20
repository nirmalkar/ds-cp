# Palindrome Pairs

## 🧩 Problem Statement

Given a list of unique words, return all pairs of indices `(i, j)` such that the concatenation `words[i] + words[j]` is a **palindrome**.

---

## 📥 Input

-   `words`: string[] — a list of **unique** lowercase words

---

## 📤 Output

-   A number[][] — list of index pairs `[i, j]` such that `words[i] + words[j]` is a palindrome

---

## 🔍 Example

**Input:**  
`words = ["abcd", "dcba", "lls", "s", "sssll"]`

**Output:**  
`[[0,1],[1,0],[3,2],[2,4]]`

**Explanation:**

-   "abcd" + "dcba" → palindrome
-   "s" + "lls" → "slls" → palindrome
-   "lls" + "sssll" → palindrome

---

## 🧠 Strategy

### Brute Force (O(n² \* k)) — Inefficient

-   Try all pairs and check if concatenation is a palindrome

### ✅ Optimized Trie + Reverse Matching

1. Build a **Trie** of all reversed words
2. For each word:
    - Check if there’s a reversed prefix in the Trie (i.e., suffix forms a palindrome)
    - Check if there’s a reversed suffix in the Trie (i.e., prefix forms a palindrome)
3. Handle edge cases where:
    - One word is an empty string
    - Words are substrings of palindromes

Use a helper to check palindromes and store indexes in Trie nodes for fast matching.

---

## 🔧 Constraints

-   `1 <= words.length <= 5000`
-   `0 <= words[i].length <= 300`
-   All words are lowercase English letters
-   All words are **unique**
