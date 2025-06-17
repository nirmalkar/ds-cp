# Number of 1 Bits

### 📝 Problem Description

Write a function that takes an **unsigned integer** and returns the **number of '1' bits** it has (also known as the [Hamming weight](https://en.wikipedia.org/wiki/Hamming_weight)).

---

### 📥 Input

-   `n`: number — A 32-bit unsigned integer.

**Constraints:**

-   The input must be treated as an unsigned 32-bit integer.
-   `0 <= n <= 2³² - 1`

---

### 📤 Output

-   Return the number of `'1'` bits in the binary representation of the integer.

---

### 🔁 Examples

**Example 1**  
Input: `n = 00000000000000000000000000001011`  
Output: `3`

**Example 2**  
Input: `n = 00000000000000000000000010000000`  
Output: `1`

**Example 3**  
Input: `n = 11111111111111111111111111111101`  
Output: `31`
