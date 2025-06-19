# 🔤 Breadth-First Search (BFS) Pattern

## 5. Word Ladder

### 📝 Problem Description

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the **length of the shortest transformation sequence** from `beginWord` to `endWord`, such that:

-   Only one letter can be changed at a time.
-   Each transformed word must exist in the word list.

**Note:**  
Return `0` if there is no such transformation sequence.

---

### 📥 Input

-   `beginWord`: string — The starting word.
-   `endWord`: string — The target word.
-   `wordList`: string[] — A list of allowed words.

**Constraints:**

-   `1 <= beginWord.length <= 10`
-   `endWord.length == beginWord.length`
-   `1 <= wordList.length <= 5000`
-   All words consist of lowercase English letters.

---

### 📤 Output

-   Return the length of the shortest transformation sequence, or `0` if no such sequence exists.

---

### 🔁 Examples

#### Example 1

**Input:**  
`beginWord = "hit"`  
`endWord = "cog"`  
`wordList = ["hot","dot","dog","lot","log","cog"]`

**Output:**  
`5`

**Explanation:**  
One shortest transformation sequence is `"hit" -> "hot" -> "dot" -> "dog" -> "cog"`, which is 5 steps.

---

#### Example 2

**Input:**  
`beginWord = "hit"`  
`endWord = "cog"`  
`wordList = ["hot","dot","dog","lot","log"]`

**Output:**  
`0`

**Explanation:**  
`endWord` ("cog") is not in `wordList`, so no transformation is possible.

---
