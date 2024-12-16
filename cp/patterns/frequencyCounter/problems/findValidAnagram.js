function validAnagram(strOne, strTwo) {
    if (strOne.length !== strTwo.length) return false
    const letterCount = {}
    for (let i = 0; i < strOne.length; i++) {
        if (letterCount[strOne[i]]) {
            letterCount[strOne[i]] += 1
        }
        else {
            letterCount[strOne[i]] = 1
        }
    }

    for (let j = 0; j < strTwo.length; j++) {
        if (!letterCount[strTwo[j]]) {
            return false
        }
        letterCount[strTwo[j]] -= 1
    }
    return true
}

console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true

// Algorithm
// 1. we will be solving this problem using frequency counter of str characters.
// 2. Creatging a function, that would accept two strings.
// 3. we will careate two objects which will be storing letters and it's frequency(occurrence count) for strOne and strTwo.
// 4. looping throught string one (strOne) and storing the letters and it's occurrence.
// 5. looping through the string two (strTwo) and storing the letters and it's occurrence.
// 6. we have to add an edge case at the very fist line of the function validAnagram, that if strOne is equal to strTwo then only proceed otherwise return false.
// 7. finally we need to check the if the occurrence count of similart characters in the both of the string is same or not, if same then we will be returning true otherwise returning false

// Time complexity 
// first loop: loop through strOne and strOneOcc Object creation = O(n)
// second loop: loop through strTwo O(n)
/* The `//` is used to write comments in the code. Comments are lines in the code that are not executed
by the computer but are meant for human readers to understand the code better. In JavaScript,
anything after `//` on a line is considered a comment and is ignored by the interpreter. Comments
are useful for explaining the code logic, documenting functions, or providing context for future
developers working on the code. */
// Over all O(n) + O(n) = O(n)


// Space complexity
// letterCount will store count for unique characters as it's worst, so O(n)
// Over all complexity O(n)
