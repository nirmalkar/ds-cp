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
