# Greedy Algorithms

Greedy Algorithms are a fundamental problem-solving pattern where decisions are made step-by-step, choosing the most optimal option available at each step without considering the global situation. The hope is that this local optimum leads to a global optimum.

## 🧠 Core Idea

At each step:

-   Make the **locally optimal choice** (i.e., the best decision at that moment).
-   Do **not reconsider** your decisions.
-   Hope that a series of locally optimal choices results in a **globally optimal solution**.

## ✅ When to Use

Greedy algorithms work best when:

-   The problem has an **optimal substructure**.
-   **Greedy choice property** holds (a global optimum can be arrived at by choosing local optimums).

To verify if a greedy approach will work, check:

-   Does choosing the best option now **guarantee** the best outcome later?
-   Can the problem be broken down into **independent subproblems**?

## 🚩 Common Pitfalls

-   Greedy does **not always yield optimal solutions** for every problem.
-   It’s essential to **prove** correctness (often with a proof by contradiction or greedy-stays-ahead argument).

## 🛠️ Problem Types Often Solved with Greedy

-   Activity/Interval Scheduling
-   Huffman Encoding
-   Fractional Knapsack (but not 0/1 Knapsack)
-   Minimum Spanning Tree (Kruskal’s and Prim’s algorithms)
-   Dijkstra’s Shortest Path Algorithm
-   Job Scheduling with Deadlines
-   Gas Station / Jump Game problems

## 🧪 Strategy to Solve Greedy Problems

1. **Understand the problem.**
2. **Identify the greedy choice.**
3. **Prove that the greedy choice leads to an optimal solution.**
4. **Implement with an efficient sorting or priority queue strategy.**

## 📦 Example Template

```ts
function greedyExample(input: number[]): number {
    // Sort or prioritize based on greedy rule
    input.sort((a, b) => a - b);

    let result = 0;
    for (let i = 0; i < input.length; i++) {
        // Apply greedy choice
        result += input[i]; // Example logic
    }

    return result;
}
```
