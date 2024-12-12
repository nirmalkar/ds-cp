//check if the square of the number in one array is present in another array
// sample input:
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr2 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// sample output:
// true
// sample input:
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr2 = [1, 6, 9, 16, 25, 36, 49, 64, 81, 100]
// sample output:
// false

const checkSquare = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false
    const frequencyObj = {}
    for (let i = 0; i < arr1.length; i++) {
        if (frequencyObj[arr1[i] ** 2]) {
            frequencyObj[arr1[i] ** 2] = frequencyObj[arr1[i] ** 2]++
        } else {
            frequencyObj[arr1[i] ** 2] = 1
        }
    }
    let lenCheck = 0
    for (let i = 0; i < arr2.length; i++) {
        if (frequencyObj[arr2[i]]) {
            lenCheck += frequencyObj[arr2[i]]
        }
    }
    return arr1.length === lenCheck
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(checkSquare(arr1, arr2))
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr4 = [1, 6, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(checkSquare(arr3, arr4))