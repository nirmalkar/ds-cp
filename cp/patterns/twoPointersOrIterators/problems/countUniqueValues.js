/**
 * Problem
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 * Example:
 * Input: [1,2,3,4,4,4,7,7,12,12,13] Output: 7
 * Input: [-2,-1,-1,0,1] Output: 4
 */


/**
 * Algorithm
 * Create a function called countUniqueValues that accepts a sorted array (arr)
 * if array is empty then return 0
 * create two pointers p1 and p2 inside countUniqueValues
 * create a temp array (tempArr)
 * push the first index value of the array inside tempArr.
 * create a loop through the array.
 * implement following conditions.
 * if current index and next index of array is the same then, p1=index and p2=index + 1
 * if current and next index are different then set p1 = p2, push p2 index value from array in to the temp array and p2 = index + 1
 *
 */

const countUniqueValues = (arr) => {
    if (!arr.length) return 0
    let p1 = 0
    let p2 = 1
    const tempArr = [arr[p1]]
    for (let i = 0; i < arr.length; i++) {
        if (arr[p1] !== arr[p2] && arr[p2] !== 'undefined') {
            p1 = p2
            tempArr.push(arr[p1])
        }
        p2 = i + 1
    }
    return tempArr
}
const arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] // Output: 7
const arr2 = [-2, -1, -1, 0, 1]
console.log("arr output: ", countUniqueValues(arr))
console.log("arr1 output: ", countUniqueValues(arr2))

/**
 * Time and space complexity
 * Time Complexity
 * Loop: iterates through arr, taking O(n)
 * if condition, updating pointers, pushing to the array has O(n)
 * So Overall time complexity will be O(n)
 * 
 * Space Complexity
 * let's say space complexity is like depends on the number of uniques elements in the array so, 
 * if would be O(k) where the k is the number of unique elements in the array.
 */

