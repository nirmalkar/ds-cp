# First Bad Version

## Problem Description

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check.

Since each version is developed based on the previous one, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API:

```ts
boolean isBadVersion(version: number);
```

which returns whether `version` is bad.

Implement a function to find the first bad version. You should minimize the number of calls to the API.

## Input Format

-   An integer `n` indicating the number of versions.
-   A helper function `isBadVersion(version: number)` is available for use.

## Output Format

-   Return the first bad version number.

## Examples

### Example 1

```
Input: n = 5, bad = 4
API: isBadVersion(version) returns true if version >= 4
Output: 4
```

### Example 2

```
Input: n = 1, bad = 1
Output: 1
```

## Constraints

-   `1 <= bad <= n <= 2^31 - 1`

## Approach Outline

-   Use binary search:

    -   Keep a search range between `1` and `n`.
    -   If `isBadVersion(mid)` is true, move to the left half (mid might be the answer).
    -   If `isBadVersion(mid)` is false, move to the right half.

-   Continue until you find the first version that is bad.

## Time and Space Complexity

-   **Time Complexity:** O(log n) — binary search reduces the range in half each step.
-   **Space Complexity:** O(1)

## Edge Cases

-   First version is bad (bad = 1)
-   Last version is the only bad one (bad = n)
-   All versions are bad
-   Only one version exists
