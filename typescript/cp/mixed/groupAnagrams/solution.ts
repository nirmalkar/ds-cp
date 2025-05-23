// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output: [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

const groupAnagrams = (strArr: string[]): string[][] => {
    const anagramFreqMap: Record<string, string[]> = {};
    for (let i = 0; i < strArr.length; i++) {
        const str = strArr[i].split("").sort().join("");
        if (!anagramFreqMap[str]) {
            anagramFreqMap[str] = [];
        }
        anagramFreqMap[str].push(strArr[i]);
    }
    console.log(anagramFreqMap);
    return Object.values(anagramFreqMap);
};

const anagramInput = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(anagramInput);
console.log(groupedAnagrams);
