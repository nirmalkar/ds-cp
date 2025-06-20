# Implement Trie (Prefix Tree)

## 🧩 Problem Statement

Design and implement a Trie (Prefix Tree) with the following methods:

-   `insert(word: string): void` — Inserts a word into the trie.
-   `search(word: string): boolean` — Returns `true` if the word is in the trie.
-   `startsWith(prefix: string): boolean` — Returns `true` if there is any word in the trie that starts with the given prefix.

---

## 📥 Input

A series of method calls and arguments.

### Operations

-   `insert(word: string)`
-   `search(word: string)`
-   `startsWith(prefix: string)`

---

## 📤 Output

Return values of `search` and `startsWith` operations (boolean); `insert` has no output.

---

## 🔍 Example

**Input:**  
`["Trie", "insert", "search", "search", "startsWith", "insert", "search"]`  
`[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]`

**Output:**  
`[null, null, true, false, true, null, true]`

**Explanation:**

-   `insert("apple")`
-   `search("apple")` → true
-   `search("app")` → false
-   `startsWith("app")` → true
-   `insert("app")`
-   `search("app")` → true

---

## 🧠 Strategy

Use a **TrieNode** class for each node in the Trie:

-   `children`: a map or array of 26 characters (a–z)
-   `isEndOfWord`: marks if the current path is a full word

### Key Methods

1. **insert(word)**:  
   Traverse and create new nodes for characters not present.

2. **search(word)**:  
   Traverse through all characters. If any character is missing, return false. At the end, check `isEndOfWord`.

3. **startsWith(prefix)**:  
   Same as `search`, but no need to check `isEndOfWord`.

---

## 🔧 Constraints

-   `1 <= word.length, prefix.length <= 2000`
-   Words consist of only lowercase English letters
-   `insert`, `search`, and `startsWith` will be called at most `3 * 10^4` times

---
