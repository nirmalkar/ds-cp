# Restore IP Addresses

## Problem Description

Given a string `s` containing only digits, return all possible valid IP addresses that can be obtained by inserting three dots into `s`. You are not allowed to reorder or remove any digits in `s`. You may return the valid IP addresses in any order.

A valid IP address consists of exactly four integers (each between `0` and `255`, inclusive) separated by single dots, and cannot have leading zeros (except for the number `0` itself).

## Input Format

-   A string `s` of length `1` to `12`, consisting only of digit characters `'0'`–`'9'`.

## Output Format

-   A list of strings, each representing a valid IP address in the format `"X.X.X.X"`.

## Examples

### Example 1

```
Input: s = "25525511135"
Output: [
  "255.255.11.135",
  "255.255.111.35"
]
Explanation:
Possible splits that yield valid segments.
```

### Example 2

```
Input: s = "0000"
Output: ["0.0.0.0"]
Explanation: All segments are "0".
```

### Example 3

```
Input: s = "101023"
Output: [
  "1.0.10.23",
  "1.0.102.3",
  "10.1.0.23",
  "10.10.2.3",
  "101.0.2.3"
]
```

## Constraints

-   `1 <= s.length <= 12`
-   `s` consists only of digits.

## Approach: Backtracking

Use backtracking to place three dots and validate segments:

1. Define a helper function `isValid(segment)` that returns `true` if:

    - The segment is non-empty and at most 3 characters.
    - No leading zero unless the segment is exactly "0".
    - Integer value of the segment (`0`–`255`) is within range.

2. Create a list `result` to store valid IPs.
3. Define recursive function `backtrack(start, dots, path)`:

    - `start`: current index in string `s`.
    - `dots`: number of dots placed so far.
    - `path`: the current constructed string (with dots).

4. **Base case:** If `dots == 3`, check the final segment `s[start:]`. If valid, append `path + lastSegment` to `result` and return.
5. **Recursion:** For `len` in `1..3`:

    - If `start + len > s.length`, break.
    - Extract `segment = s.substring(start, start + len)`.
    - If `isValid(segment)`:

        - Recurse with `backtrack(start + len, dots + 1, path + segment + '.')`.
