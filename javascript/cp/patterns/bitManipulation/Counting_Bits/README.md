Counting Bits

### 📝 Problem Description

Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` in the range `[0, n]`, `ans[i]` is the **number of `1`'s** in the binary representation of `i`.

---

### 📥 Input

-   `n`: number — A non-negative integer representing the range limit.

**Constraints**:

-   `0 <= n <= 10⁵`

---

### 📤 Output

-   Return an array of integers where each element at index `i` is the number of 1's in the binary representation of `i`.

---

### 🔁 Examples

#### Example 1

Input: n = 2
Output: [0, 1, 1]
Explanation:
0 --> 0 (0 ones)
1 --> 1 (1 one)
2 --> 10 (1 one)

#### Example 2

Input: n = 5
Output: [0, 1, 1, 2, 1, 2]
