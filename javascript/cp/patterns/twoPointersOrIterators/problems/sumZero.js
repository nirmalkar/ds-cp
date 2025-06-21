// Sum Zero sorted Numbers Array!

// Algorithm
// 1. Create a sumZero function which will accept sorted nums array.
// 2. create two pointer p1 and p2 inside sumZero function and assign value of p1 and p2 as 0 and last index of array respectively.
// 3. create a for loop and put following conditions in it.
// if arr[p1] + arr[p2] = 0 then return [p1, p2]
// else if arr[p1] + arr[p2] = 0 then return [p1, p2] then set  p1 = p1 + 1
// else if numArr[p1] + numArr[p2] < 0 then set   p2 = p2 - 1
// if there is no pair with sum zero return 'No pair found'
const sumZero = (numArr) => {
    if (!numArr1.length) return "Array should have sorted numbers in it.";
    let p1 = 0;
    let p2 = numArr.length - 1;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[p1] + numArr[p2] === 0 && p1 !== p2) {
            return [numArr[p1], numArr[p2]];
        } else if (numArr[p1] + numArr[p2] > 0) {
            p2 -= 1;
        } else if (numArr[p1] + numArr[p2] < 0) {
            p1 += 1;
        }
    }
    return "No pair found";
};
const numArr1 = [-8, -5, -4, -1, 1, 3, 5, 8]; // O/P: [ -8, 8 ]
const numArr2 = [-5, -4, -1, 1, 3, 5, 8]; // O/P: [ -5, 5 ]
const numArr3 = [-10, -5, -3, 0, 2, 4, 6, 8]; // O/P: 'No pair found'
const numArr4 = [1, 2, 3, 4, 5]; // O/P: 'No pair found'

console.log("Solution for input numArr1", sumZero(numArr1));
console.log("Solution for input numArr2", sumZero(numArr2));
console.log("Solution for input numArr3", sumZero(numArr3));
console.log("Solution for input numArr4", sumZero(numArr4));

/**
 * Time complexity
 * for p1 and p2 both have time complexity of O(1)
 * then there is a for loop, which has complexity of O(n), because it will run max of n times.
 * pointer movement will increase or decrease by 1 so this mean pointer will move maximum of n times.
 * if and else if statement inside the loop run constant time O(1)
 * finally return has time complexity of O(1)
 * overall time complexity for the solution is O(n)
 *
 * Space Complexity:
 * p1 and p2 are consuming O(1) space
 * nothing consuming space apart from pointers.
 * Overall space complexity is O(1)
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */

/**
 * The above solution has one extra iteration which we can avoid if we use while loop.
 */

/**
 * Algorithm
 * 1. create a function sumZeroWhileLoop which will take sorted array
 * 2. create two pointers p1 and p2 in sumZeroWhileLoop which will hold first index and last index of the given array.
 * 3. run a while loop with condition, while(p1 < p2)
 * 4. if sum of value of index p1 and p2 of numArr is equals to 0 return both the values [numArr[p1], numArr[p2]].
 * 5. if sum of value of index p1 and p2 of numArr is greater than 0 return decrease p2 by
 * 6. else increase p1 by 1
 * finally if there is no pair with sum zero return 'No pair found'
 */
const sumZeroWhileLoop = (numArr1) => {
    if (!numArr1.length) return "Array should have sorted numbers in it.";
    let p1 = 0;
    let p2 = numArr1.length - 1;
    while (p1 < p2) {
        const sum = numArr1[p1] + numArr1[p2];
        if (sum === 0) {
            return [numArr1[p1], numArr1[p2]];
        } else if (sum > 0) {
            p2--;
        } else {
            p1++;
        }
    }
    return "No pair found";
};

console.log(
    "Solution for input numArr1 (sumZeroWhileLoop)",
    sumZeroWhileLoop(numArr1)
);
console.log(
    "Solution for input numArr2 (sumZeroWhileLoop)",
    sumZeroWhileLoop(numArr2)
);
console.log(
    "Solution for input numArr3 (sumZeroWhileLoop)",
    sumZeroWhileLoop(numArr3)
);
console.log(
    "Solution for input numArr4 (sumZeroWhileLoop)",
    sumZeroWhileLoop(numArr4)
);
console.log(
    "Solution for input numArr4 (sumZeroWhileLoop)",
    sumZeroWhileLoop(numArr4)
);
console.log(
    "Solution for input numArr5 (sumZeroWhileLoop)",
    sumZeroWhileLoop([])
);

/**
 * Time complexity
 * for p1 and p2 both have time complexity of O(1)
 * then there is a while loop, which has complexity of O(n), because it will run max of n times util p1 < p2.
 * pointer movement will increase or decrease by 1 so this mean pointer will move maximum of n times.
 * if and else if statement inside the loop run constant time O(1)
 * finally return has time complexity of O(1)
 * overall time complexity for the solution is O(n)
 *
 * Space Complexity:
 * p1 and p2 are consuming O(1) space
 * nothing consuming space apart from pointers.
 * Overall space complexity is O(1)
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
