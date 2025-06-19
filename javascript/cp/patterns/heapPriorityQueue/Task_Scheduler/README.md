# 5. Task Scheduler

## 🧩 Problem Statement

You are given a list of tasks represented by characters `tasks`, and a non-negative integer `n` representing the **cooldown period** between the same tasks.

Each task takes **1 unit of time**, and you must schedule the tasks such that the **same task must be separated by at least `n` units of time**.

You can insert idle time if necessary. Return the **minimum total time** required to finish all tasks.

---

## 📥 Input

-   `tasks`: string[] — an array of uppercase English letters (A-Z) representing tasks.
-   `n`: number — cooldown time between two same tasks.

---

## 📤 Output

-   An integer — the minimum number of units of time to finish all tasks.

---

## 🔍 Examples

### Example 1

**Input:**  
`tasks = ["A","A","A","B","B","B"]`  
`n = 2`  
**Output:**  
`8`  
**Explanation:**  
A -> B -> idle -> A -> B -> idle -> A -> B

---

### Example 2

**Input:**  
`tasks = ["A","A","A","B","B","B"]`  
`n = 0`  
**Output:**  
`6`  
**Explanation:**  
No cooldown → schedule without idles.

---

### Example 3

**Input:**  
`tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"]`  
`n = 2`  
**Output:**  
`16`

---

## 🧠 Goal

Use a **Max Heap** to always schedule the task with the highest remaining frequency, and a **cooldown queue** to manage waiting tasks.
