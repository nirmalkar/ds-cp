# 4. Minimum Number of Coins

## 🧩 Problem Statement

You are given an array of coin denominations and a target amount. Your task is to find the **minimum number of coins** needed to make up that amount.

You can use **unlimited coins** of each denomination.

If the amount cannot be made up by any combination of the coins, return `-1`.

---

## 📥 Input

-   `coins`: An array of integers representing available coin denominations.
-   `amount`: An integer representing the total amount of money.

---

## 📤 Output

-   An integer:
    -   Minimum number of coins required to make up the given amount.
    -   Return `-1` if it is not possible.

---

## 🔍 Examples

### Example 1

**Input:**  
`coins = [1, 2, 5]`  
`amount = 11`  
**Output:**  
`3`  
**Explanation:**  
11 can be made with 5 + 5 + 1 = 3 coins.

---

### Example 2

**Input:**  
`coins = [2]`  
`amount = 3`  
**Output:**  
`-1`  
**Explanation:**  
It is not possible to make 3 with only denomination 2.

---

### Example 3

**Input:**  
`coins = [1]`  
`amount = 0`  
**Output:**  
`0`  
**Explanation:**  
No coins are needed to make amount 0.
