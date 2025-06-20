# Replace Words

## 🧩 Problem Statement

In English, we have a concept of **root words** — shorter words that can represent longer words if they are a prefix.

Given a dictionary of root words and a sentence, **replace all words in the sentence with the shortest possible root** from the dictionary that is a prefix of the word.

If no root applies, keep the original word.

---

## 📥 Input

-   `dictionary`: string[] — list of root words
-   `sentence`: string — sentence of space-separated words

---

## 📤 Output

-   A string — the transformed sentence with words replaced by roots where possible

---

## 🔍 Example

**Input:**  
`dictionary = ["cat", "bat", "rat"]`  
`sentence = "the cattle was rattled by the battery"`

**Output:**  
`"the cat was rat by the bat"`

---

## 🧠 Strategy

1. Build a **Trie** from the root dictionary.
2. For each word in the sentence:
    - Traverse the Trie to find the **shortest root prefix**.
    - Replace the word if a root is found; otherwise keep it unchanged.
3. Join the transformed words into the final sentence.

This avoids repeatedly scanning all roots for every word.

---

## 🔧 Constraints

-   `1 <= dictionary.length <= 1000`
-   `1 <= dictionary[i].length <= 100`
-   `1 <= sentence.length <= 10⁶`
-   The sentence only contains lowercase English letters and spaces

---
