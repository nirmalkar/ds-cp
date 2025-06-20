# 🌲 Trie (Prefix Tree)

## 🧠 What is a Trie?

A **Trie**, also known as a **Prefix Tree**, is a specialized tree data structure used to **store and retrieve strings efficiently**, especially for prefix-based operations.

Each node in a Trie represents a **character** of a word. Paths from the root to the nodes form words or prefixes.

---

## 🔍 Key Use Cases

-   Auto-complete
-   Spell checking
-   Word filtering
-   Prefix searching
-   IP routing (binary Trie)
-   Efficient string lookups in dictionaries

---

## ⚙️ How it Works

1. Each node stores a **map of characters to child nodes**
2. A boolean flag `isEndOfWord` (or `isWord`) indicates if a complete word ends at that node
3. Insert, search, and prefix operations traverse the tree from root to leaf

---

## 🧪 Time Complexities

| Operation          | Time Complexity |
| ------------------ | --------------- |
| Insert(word)       | O(L)            |
| Search(word)       | O(L)            |
| StartsWith(prefix) | O(P)            |

Where:

-   `L` is the length of the word
-   `P` is the length of the prefix

All operations are independent of the number of words stored.

---

## 🔧 Basic Operations

-   `insert(word: string): void`
-   `search(word: string): boolean`
-   `startsWith(prefix: string): boolean`

---

## 📚 Common Trie Problems

| #   | Problem Name                 | Type                       |
| --- | ---------------------------- | -------------------------- |
| 1   | Implement Trie (Prefix Tree) | Basic insert/search/prefix |
| 2   | Word Search II               | DFS + Trie + backtracking  |
| 3   | Replace Words                | Sentence parsing + Trie    |
| 4   | Longest Word in Dictionary   | DFS + Trie                 |
| 5   | Prefix and Suffix Search     | Advanced Trie              |
| 6   | Palindrome Pairs             | Trie + reverse strings     |
| 7   | Design Add and Search Word   | Trie + regex-like wildcard |

---

## ✍️ Trie vs HashMap for Words

| Feature            | Trie                    | HashMap/Set           |
| ------------------ | ----------------------- | --------------------- |
| Prefix Search      | ✅ Very efficient       | ❌ Inefficient (O(n)) |
| Full Word Search   | ✅                      | ✅                    |
| Memory             | ❌ High for sparse data | ✅ More compact       |
| Regex or Wildcards | ✅ (customizable)       | ❌ Not suited         |
