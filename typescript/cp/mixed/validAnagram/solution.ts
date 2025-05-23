// Input: s = "anagram", t = "nagaram"
// Output: True

// Input: s = "rat", t = "car"
// Output: False

const checkIfAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) return false;
    const strMapS: Record<string, number> = {};
    const strMapT: Record<string, number> = {};
    for (let i = 0; i < s.length; i++) {
        if (strMapS[s[i]] !== undefined) {
            strMapS[s[i]]++;
        } else {
            strMapS[s[i]] = 0;
        }
        if (strMapT[t[i]] !== undefined) {
            strMapT[t[i]]++;
        } else {
            strMapT[t[i]] = 0;
        }
    }
    const sKeys: string[] = Object.keys(strMapS);
    for (const key of sKeys) {
        if (strMapS[key] !== strMapT[key]) return false;
    }
    return true;
};
const s: string = "anagram";
const t: string = "nagaram";

const resultCheckIfAnagram = checkIfAnagram(s, t);
console.log(resultCheckIfAnagram);
