class Node {
    constructor() {
        this.children = {};
        this.wordEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new Node();
    }
    addWord(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new Node();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.wordEnd = true;
    }
    search(word) {
        const wordExists = (i, node) => {
            let currentNode = node;
            for (let j = i; j < word.length; j++) {
                const char = word[j];
                if (char === ".") {
                    for (let child of Object.values(currentNode.children)) {
                        if (wordExists(j + 1, child)) return true;
                    }
                    return false;
                } else {
                    if (!currentNode.children[char]) return false;
                    currentNode = currentNode.children[char];
                }
            }
            return currentNode.wordEnd;
        };
        return wordExists(0, this.root);
    }
}
const wordDict = new WordDictionary();
wordDict.addWord("mad");
wordDict.addWord("sad");
wordDict.addWord("dad");
wordDict.addWord("cool");
wordDict.addWord("fool");
wordDict.addWord("fun");
wordDict.addWord("school");
console.log(wordDict.search(".un")); // true
console.log(wordDict.search("scho.l")); // true
console.log(wordDict.search("pad")); // false
