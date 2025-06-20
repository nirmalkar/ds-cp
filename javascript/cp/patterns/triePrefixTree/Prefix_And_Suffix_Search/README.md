# Prefix and Suffix Search

## 🧩 Problem Statement

Design a special data structure that supports **searching for words by both prefix and suffix**.

Implement the `WordFilter` class with:

-   `WordFilter(words: string[])`: Constructor initializes the data structure with the given words.
-   `f(prefix: string, suffix: string): number`: Returns the **index of the word** with the given prefix and suffix.  
    If more than one word matches, return the index of the word with the **largest index**. If no word matches, return `-1`.

---

## 📥 Input

-   Constructor: `words`: string[] — list of words
-   Method: `f(prefix: string, suffix: string)`

---

## 📤 Output

-   Returns `number` — index of word that matches both prefix and suffix, or `-1` if not found

---

## 🔍 Example

**Input:**

```ts
WordFilter wf = new WordFilter(["apple"]);
wf.f("a", "e"); // returns 0
wf.f("b", "e"); // returns -1
```

---

## 🧠 Optimized Approach: Trie with Combined Keys

Brute force (scanning all words for each query) is too slow for large inputs.

**Trie Solution:**  
For each word `w` at index `i`, store all combinations of `suffix + "#" + prefix` in a Trie.

-   While querying `f(prefix, suffix)`, search for key: `suffix + "#" + prefix`
-   This transforms the 2D search problem into a 1D lookup in a Trie.

**Example:**  
For word `"apple"`, store:

-   `e#apple`, `le#apple`, `ple#apple`, ..., `#apple`
-   and so on for each suffix/prefix combo.

---

## 🔧 Constraints

-   `1 <= words.length <= 15,000`
-   `1 <= words[i].length <= 10`
-   `words[i]` contains lowercase letters
-   `1 <= prefix.length, suffix.length <= 10`
-   Up to 15,000 calls to `f()`

---
