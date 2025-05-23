# 🔢 Problem: Valid Anagram

Prompt:
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

## ✅ Example:

python
Copy
Edit
Input: s = "anagram", t = "nagaram"
Output: True

Input: s = "rat", t = "car"
Output: False

## 🧠 Constraints:

Both strings contain only lowercase letters.
You should aim for O(n) time complexity.

## 💡 Hints:

Use a hash map (Counter) to count character frequencies.
Alternatively, sort both strings and compare them (less optimal).

## 🧠 Time Complexity:

O(n) if using Counter.
O(n log n) if using sorted strings.
