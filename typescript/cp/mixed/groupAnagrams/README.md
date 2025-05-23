# Problem: Group Anagrams

## Description

Given an array of strings, group the anagrams together. Two strings are anagrams if they contain the same characters in the same frequency, but possibly in a different order.

Return the grouped anagrams in any order. Each group should contain all strings from the input that are anagrams of one another.

---

## Function Signature

```typescript
function groupAnagrams(strs: string[]): string[][];
```

---

## Input

-   `strs`: an array of lowercase alphabetic strings
    -   `1 <= strs.length <= 10^4`
    -   `0 <= strs[i].length <= 100`

---

## Output

-   A 2D array (array of string arrays), where each inner array contains all the input strings that are anagrams of each other.
-   The order of the groups and the order of strings within each group does not matter.

---

## Examples

### Example 1

**Input:**

```typescript
["eat", "tea", "tan", "ate", "nat", "bat"];
```

**Output:**

```typescript
[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
```

**Explanation:**

-   "eat", "tea", and "ate" all sort to "aet".
-   "tan" and "nat" both sort to "ant".
-   "bat" sorts to "abt" on its own.

---

### Example 2

**Input:**

```typescript
[""];
```

**Output:**

```typescript
[[""]];
```

**Explanation:**  
A single empty string is its own group.

---

### Example 3

**Input:**

```typescript
["a"];
```

**Output:**

```typescript
[["a"]];
```
