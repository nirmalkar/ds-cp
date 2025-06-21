# Number of Provinces (a.k.a. Friend Circles)

## 🧩 Problem Statement

There are `n` cities labeled from `0` to `n - 1`.  
You are given an `n x n` matrix `isConnected` where:

-   `isConnected[i][j] = 1` means city `i` and city `j` are directly connected
-   `isConnected[i][j] = 0` means they are not connected

Return the **number of provinces**.

A **province** is a group of **directly or indirectly connected cities** (i.e., a connected component in the graph).

---

## 📥 Input

-   `isConnected`: number[][] — an `n x n` symmetric matrix of `0` or `1`

---

## 📤 Output

-   An integer — number of provinces

---

## 🔍 Example

**Input:**

```
isConnected = [
  [1,1,0],
  [1,1,0],
  [0,0,1]
]
```

**Output:**  
2

**Explanation:**

-   Province 1: Cities 0 and 1
-   Province 2: City 2

---

## 🧠 Strategy

Use **Union-Find (Disjoint Set Union)** to group connected cities.

### Steps:

1. For every `i < j`, if `isConnected[i][j] == 1`, perform `union(i, j)`
2. After all unions, count the number of unique root parents → number of provinces

### Optimization:

-   Use **path compression** and **union by rank**

---

## 🧪 Time & Space Complexity

-   Time: O(N² × α(N))
-   Space: O(N)

---

## 🔧 Constraints

-   `1 <= n <= 200`
-   `isConnected[i][j]` is either `1` or `0`
-   `isConnected[i][i] == 1`
-   `isConnected[i][j] == isConnected[j][i]`

---
