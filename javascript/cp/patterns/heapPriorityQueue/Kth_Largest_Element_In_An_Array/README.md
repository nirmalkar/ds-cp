nums = [3, 2, 1, 5, 6, 4]
k = 2

makefile
Copy
Edit

**Output:**
5

pgsql
Copy
Edit

**Explanation:**
The sorted array in descending order is [6, 5, 4, 3, 2, 1]. The 2nd largest is 5.

## 🔍 Example 2

**Input:**
nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
k = 4

makefile
Copy
Edit

**Output:**
4

markdown
Copy
Edit

**Explanation:**
The sorted array in descending order is [6, 5, 5, 4, 3, 3, 2, 2, 1]. The 4th largest is 4.

## 🧠 Goal

Use a **Min Heap of size k** to keep track of the k largest elements while iterating. The root of the heap will be the kᵗʰ largest element.

## 🔧 Constraints

-   `1 <= k <= nums.length <= 10^5`
-   `-10^4 <= nums[i] <= 10^4`
