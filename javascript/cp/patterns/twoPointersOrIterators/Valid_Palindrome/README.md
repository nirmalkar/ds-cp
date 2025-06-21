# Valid Palindrome

## 🧩 Problem Statement

Given a string `s`, determine if it is a **palindrome**, considering **only alphanumeric characters** and **ignoring cases**.

A palindrome reads the same forward and backward after removing non-alphanumeric characters.

---

## 📥 Input

-   `s`: string — input string (can contain letters, digits, spaces, punctuation)

---

## 📤 Output

-   A boolean — `true` if the string is a valid palindrome, else `false`

---

## 🔍 Example 1

**Input:**  
s = "A man, a plan, a canal: Panama"

**Output:**  
true

**Explanation:**  
After cleaning: `"amanaplanacanalpanama"` is a palindrome.

---

## 🔍 Example 2

**Input:**  
s = "race a car"

**Output:**  
false

---

## 🧠 Strategy

Use **two pointers** to move from both ends of the string:

-   Skip non-alphanumeric characters
-   Compare characters after lowercasing

### Steps:

1. Set `left = 0`, `right = s.length - 1`
2. While `left < right`:
    - Skip non-alphanumeric chars from both sides
    - Compare `s[left]` and `s[right]` (lowercased)
    - If mismatch → return `false`
3. If loop completes → return `true`

---

## ⛏️ Tools

-   `isAlphaNumeric(c)` — checks if character is letter or digit
-   `toLowerCase()` — normalize characters before comparing

---

## 🧪 Time & Space Complexity

-   Time: O(n)
-   Space: O(1) — in-place, no extra string created

---

## 🔧 Constraints

-   `1 <= s.length <= 2 * 10⁵`
-   String `s` consists of printable ASCII characters
