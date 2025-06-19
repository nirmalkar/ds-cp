# 2. Fractional Knapsack

## 🧩 Problem Statement

Given weights and values of `n` items, and a knapsack with capacity `W`, the goal is to **maximize the total value in the knapsack**, allowing you to **take fractions of an item** if necessary.

This is different from the 0/1 Knapsack, where you must take the **whole item or leave it**.

---

## 📥 Input

-   An array of items, each with:
    -   `value`: number — The value of the item
    -   `weight`: number — The weight of the item
-   An integer `W` — The capacity of the knapsack

---

## 📤 Output

-   A number — the maximum total value that can be put in the knapsack (rounded to two decimal places if needed)

---

## 🔍 Example

**Input:**

```
Items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
]
Capacity W = 50
```

**Output:**  
`240.00`

**Explanation:**  
Take the whole items 2 and 3, and 2/3 of item 1 (or the optimal combination by value/weight ratio).

---

## 💡 Greedy Strategy

-   Calculate the value-to-weight ratio for each item.
-   Sort items by this ratio in descending order.
-   Take as much as possible of the item with the highest ratio, then move to the next, until the knapsack is full.
