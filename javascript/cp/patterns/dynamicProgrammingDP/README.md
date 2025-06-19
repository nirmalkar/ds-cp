# 🧠 Dynamic Programming (DP)

## 📘 Introduction

Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems and solving each subproblem just once, storing its result for future reference (also called **memoization**). It is particularly effective for problems that exhibit two key properties:

1. **Overlapping Subproblems**: The problem can be broken down into smaller, reusable subproblems.
2. **Optimal Substructure**: The solution to the overall problem can be constructed from optimal solutions of its subproblems.

Unlike greedy or divide-and-conquer approaches, DP ensures that all possibilities are explored efficiently, often converting exponential time brute-force solutions into polynomial time ones.

## 🧩 Common Problem Types

-   **Fibonacci Numbers**
-   **0/1 Knapsack**
-   **Longest Common Subsequence**
-   **Longest Increasing Subsequence**
-   **Coin Change**
-   **Matrix Path Problems**
-   **Palindrome Substrings**

## 💡 Approaches in DP

1. **Top-Down (Memoization)**

    - Uses recursion and stores the result of each subproblem.
    - Easy to implement.
    - May lead to stack overflow for deep recursions.

2. **Bottom-Up (Tabulation)**
    - Builds the solution iteratively using a table.
    - More space/time efficient in most cases.
    - Eliminates function call overhead.

## 📦 Template for Solving DP Problems

1. Identify the **problem type** (e.g., subsequence, knapsack, paths).
2. Define the **state**: What parameters define a subproblem?
3. Define the **transition**: How is the result of a state computed from others?
4. Decide between **memoization** or **tabulation**.
5. Initialize base cases.
6. Build the solution and optimize space if possible.

## 🔧 Example: Fibonacci Number

```js
const fib = (n: number, memo: Record<number, number> = {}): number => {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

const fibTab = (n: number): number => {
    if (n <= 1) return n;
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
```
