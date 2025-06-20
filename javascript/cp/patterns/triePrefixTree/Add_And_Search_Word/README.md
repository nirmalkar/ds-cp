# Add and Search Word – Data Structure Design

## 🧩 Problem Statement

Design a data structure that supports adding new words and searching for words, where a search word may contain the **dot character `'.'`**, which matches **any single letter**.

Implement the `WordDictionary` class with:

-   `addWord(word: string): void` → Adds `word` to the data structure.
-   `search(word: string): boolean` → Returns `true` if `word` matches any previously added word (may contain `.` wildcard).

---

## 📥 Input

-   `addWord(word: string)`
-   `search(word: string)` — word may contain lowercase letters and `.` wildcard

---

## 📤 Output

-   Boolean result for `search` method

---

## 🔍 Example

**Input:**

```ts
WordDictionary wordDict = new WordDictionary();
wordDict.addWord("bad");
wordDict.addWord("dad");
wordDict.addWord("mad");

wordDict.search("pad"); // false
wordDict.search("bad"); // true
wordDict.search(".ad"); // true
wordDict.search("b.."); // true
```

---

## 🧠 Strategy

### Trie + Recursive DFS

-   Implement a standard **Trie**
-   For `addWord`, insert each character into the Trie
-   For `search`, use a recursive helper to:
    -   Match each character normally
    -   If `.` is found, **try all children nodes** recursively

The wildcard `.` introduces branching, similar to regex or backtracking.

---

## 🔧 Constraints

-   `1 <= word.length <= 25`
-   Total calls to `addWord` and `search` will not exceed `3 * 10⁴`
-   All inputs are lowercase English letters or `.`

---
