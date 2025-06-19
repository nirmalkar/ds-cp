# 1. Fibonacci Number

## 📝 Problem Statement

The Fibonacci numbers form a sequence where each number is the sum of the two preceding ones, starting from `0` and `1`. That is:

-   F(0) = 0
-   F(1) = 1
-   F(n) = F(n - 1) + F(n - 2), for n > 1

Given an integer `n`, return the `n`-th Fibonacci number.

---

## 📥 Input

-   A single integer `n`  
    **Range:** `0 <= n <= 30`

---

## 📤 Output

-   An integer — the `n`-th Fibonacci number

---

## 🔍 Examples

### Example 1

**Input:**  
`n = 2`  
**Output:**  
`1`  
**Explanation:**  
F(2) = F(1) + F(0) = 1 + 0 = 1

---

### Example 2

**Input:**  
`n = 3`  
**Output:**  
`2`  
**Explanation:**  
F(3) = F(2) + F(1) = 1 + 1 = 2

---

### Example 3

**Input:**  
`n = 10`  
**Output:**  
`55`

---

## ✅ Constraints

-   `0 <= n <= 30`
-   The answer is guaranteed to fit in a 32-bit signed integer.

---
