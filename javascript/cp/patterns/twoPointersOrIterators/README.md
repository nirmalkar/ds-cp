# Two Pointers Or Iterators Pattern

-   The two pointers technique (or iterators) is a common approach in algorithm design, particularly for problems involving arrays or linked lists. It is an efficient way to solve problems by iterating through the data structure with one or two "pointers" (indexes or iterators).

## When to Use

1. Sorted Arrays or Lists:
   Problems involving sums, differences, or conditions between pairs of elements.
   Example: Find two numbers that add up to a specific target.

2. Partitioning Arrays:
   Rearrange elements based on conditions, like grouping all even numbers before odd numbers.

3. Finding Subarrays:
   Finding maximum/minimum subarray lengths that satisfy a condition.
4. Merging:
   Merge two sorted arrays.

5. Sliding Window Problems:
   Adjusting the range dynamically while iterating.

## Types of Two Pointers Techniques

1. Opposite Direction (Converging)
   Start one pointer at the beginning and the other at the end, and move them toward each other.
   Useful for problems like:
   Pair-sum problems.
   Palindrome checking.
   Example: Two Sum (sorted array).
2. Same Direction (Sliding Window)
   Both pointers move from the beginning to the end of the array but at different speeds or in different conditions.
   Used for problems involving subarrays or sequences.
   Example: Find the smallest subarray with a sum greater than a given value.

## 📦 Typical Pointer Variants

1. **Start & End pointers**
    - Move inward: `left = 0`, `right = n - 1`
2. **Fast & Slow pointers**
    - `slow` lags behind `fast`, used for detecting cycles or shifting values
3. **Scan & Fill**
    - Scan with one, overwrite/insert with the other

---

## 📚 Why It Matters

-   Reduces time complexity compared to brute force
-   Enables **in-place** modifications → saves space
-   Often combines well with other techniques like **binary search**, **greedy**, or **sliding window**

---

## 🧪 Time & Space Efficiency

| Approach      | Time Complexity | Space Complexity |
| ------------- | --------------- | ---------------- |
| Typical Usage | O(n)            | O(1)             |

---

## 🧠 Common Two Pointers Problems

| #   | Problem Name                        | Variant             |
| --- | ----------------------------------- | ------------------- |
| 1   | Valid Palindrome                    | Left/right inward   |
| 2   | Two Sum II (Sorted Array)           | Left + Right        |
| 3   | Remove Duplicates from Sorted Array | Fast/Slow           |
| 4   | Move Zeroes                         | Overwrite with slow |
| 5   | Reverse String/Words in-place       | Two-end swap        |
| 6   | Container With Most Water           | Shrink towards max  |
| 7   | 3Sum                                | Two Pointers + Sort |

---
