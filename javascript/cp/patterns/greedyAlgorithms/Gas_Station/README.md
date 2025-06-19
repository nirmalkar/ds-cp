# 5. Gas Station

## 🧩 Problem Statement

There are `n` gas stations arranged in a circle. Each station `i` has:

-   `gas[i]`: the amount of gas available at station `i`.
-   `cost[i]`: the amount of gas required to travel from station `i` to station `i + 1` (the next station, and the last station wraps around to the first).

You start with an empty tank at any station and want to **complete the circuit** once. Return the index of the starting gas station if you can travel around the circuit once in the clockwise direction, otherwise return `-1`.

It is guaranteed that the answer is **unique** if a solution exists.

---

## 📥 Input

-   `gas`: number[] — amount of gas at each station.
-   `cost`: number[] — gas required to go to the next station.

---

## 📤 Output

-   An integer:
    -   The starting station index (0-based) to complete the circuit.
    -   `-1` if it is not possible.

---

## 🔍 Examples

### Example 1

**Input:**  
`gas = [1, 2, 3, 4, 5]`  
`cost = [3, 4, 5, 1, 2]`  
**Output:**  
`3`  
**Explanation:**  
Start at station 3:

-   Get 4 gas, cost 1 → left = 3
-   Get 5 gas, cost 2 → left = 6
-   Get 1 gas, cost 3 → left = 4
-   Get 2 gas, cost 4 → left = 2
-   Get 3 gas, cost 5 → left = 0 (complete circuit)

---

### Example 2

**Input:**  
`gas = [2, 3, 4]`  
`cost = [3, 4, 3]`  
**Output:**  
`-1`  
**Explanation:**  
No starting station allows you to complete the circuit.

---

## 🧠 Goal

Find a **starting point** such that you can travel through all the stations and return to the starting station with non-negative gas in the tank.
