# Binary Watch

## Problem Description

A binary watch has 10 LEDs: 4 LEDs represent the hours (0–11) and 6 LEDs represent the minutes (0–59). Each LED represents a binary digit (0 or 1), where the least significant bit is on the right.

Given an integer `turnedOn` which indicates the number of LEDs that are currently on, return all possible times the watch could represent.

You may return the answer in any order. The hour should not have leading zeros (e.g., "01:00" is not valid, should be "1:00"), but minutes must be two digits with leading zeros if necessary (e.g., "3:07").

## Input Format

-   An integer `turnedOn`, where `0 <= turnedOn <= 10`.

## Output Format

-   A list of strings representing valid times in the format `"H:MM"`.

## Examples

### Example 1

```
Input: turnedOn = 1
Output: [
  "0:01","0:02","0:04","0:08","0:16","0:32",
  "1:00","2:00","4:00","8:00"
]
```

### Example 2

```
Input: turnedOn = 9
Output: []
```
