# Reverse String

## 🧩 Problem Statement

Write a function that reverses the input string in-place.  
You must do this by modifying the input array directly.

---

## 🔁 Input

-   `s`: string[] — array of characters (not a string object)

---

## 📤 Output

-   No return value — modify the input array `s` in-place

---

## 🔍 Example

**Input:**
s = ["h","e","l","l","o"]

markdown
Copy
Edit

**Output (after modification):**
["o","l","l","e","h"]

yaml
Copy
Edit

---

## 🧠 Strategy

Use the **Two Pointers** approach:

-   `left` starts at beginning (`0`)
-   `right` starts at end (`s.length - 1`)
-   Swap characters while `left < right`

### Steps:

1. Set `left = 0`, `right = s.length - 1`
2. While `left < right`:
    - Swap `s[left]` and `s[right]`
    - Increment `left`, decrement `right`

---

## ⛏️ Tools

-   Destructuring swap: `[a, b] = [b, a]`

---

## 🧪 Time & Space Complexity

-   Time: O(n)
-   Space: O(1) — in-place

---

## 🔧 Constraints

-   `1 <= s.length <= 10⁵`
-   `s[i]` is a printable ASCII character

---
