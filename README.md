# Data Structures & Competitive Programming

## 📖 Overview

This repository is a comprehensive Data Structures & Competitive Programming resource, containing learning materials, practice problems, and solutions in both JavaScript and Python. It is organized to help you learn core data structures, strengthen problem-solving skills, and prepare for coding interviews and contests.

---

## 🚀 Table of Contents

-   [Repository Structure](#-repository-structure)
-   [Getting Started](#-getting-started)
-   [How to Use](#-how-to-use)
-   [Contributing](#-contributing)

---

# ⚠️ Important Note

-   To run **TypeScript** files (`.ts`):

    ```sh
    npx ts-node filename.ts
    ```

-   To run **JavaScript** files (`.js`):

    ```sh
    node filename.js
    ```

-   To run **Python** files (`.py`):

    -   **On Mac/Linux:**
        ```sh
        python3 filename.py
        ```
    -   **On Windows:**
        ```sh
        python filename.py
        ```

> **Note:** `npx` comes bundled with Node.js (v8.2.0+). If you don't have it, [install Node.js](https://nodejs.org/).

---

## 📂 Repository Structure

### JavaScript

```
javascript/
├── README.md                   # Project overview and instructions
├── cp/                         # Competitive programming patterns & problems
│   └── patterns/
│       ├── frequencyCounter/
│       │   ├── checkSquare.js
│       │   ├── findValidAnagram.js
│       │   └── README.md
│       └── twoPointersOrIterators/
│           ├── countUniqueValues.js
│           ├── sumZero.js
│           └── README.md
│
├── ds/                         # Data structures implementations & demos
│   ├── doublyLinkedList/
│   │   ├── push.js
│   │   ├── pop.js
│   │   ├── shift.js
│   │   ├── unshift.js
│   │   ├── get.js
│   │   ├── remove.js
│   │   ├── reverse.js
│   │   ├── setup.js
│   │   ├── index.html
│   │   └── README.md
│   │
│   ├── graph/
│   │   ├── traversalBFS.js
│   │   ├── traversalDFS.js
│   │   ├── traversalIterative.js
│   │   └── README.md
│   │
│   ├── linkedList/
│   │   ├── insert.js
│   │   ├── remove.js
│   │   ├── pop.js
│   │   ├── push.js
│   │   ├── get.js
│   │   ├── reverse.js
│   │   ├── setup.js
│   │   └── README.md
│   │
│   ├── oops/
│   │   ├── class.js
│   │   └── README.md
│   │
│   ├── queue/
│   │   ├── index.html
│   │   ├── main.js
│   │   └── README.md
│   │
│   ├── recursion/
│   │   ├── collectOdd.js
│   │   ├── factorial.js
│   │   ├── isPalindrome.js
│   │   ├── power.js
│   │   ├── reverse.js
│   │   └── README.md
│   │
│   ├── searching/
│   │   ├── binarySearch.js
│   │   └── README.md
│   │
│   ├── sorting/
│   │   ├── bubbleSort.js
│   │   ├── quickSort.js
│   │   ├── selectionSort.js
│   │   ├── selSort.js
│   │   └── README.md
│   │
│   ├── stack/
│   │   ├── index.html
│   │   ├── setup.js
│   │   └── README.md
│   │
│   └── tree/
│       ├── BFS.js
│       ├── BST.js
│       ├── DFSInOrder.js
│       ├── DFSPostOrder.js
│       ├── DFSPreOrder.js
│       ├── index.html
│       └── README.md
│
└── mixed/                      # Miscellaneous folder for standalone challenges

```

### Typescript

```
typescript/
├── README.md
├── cp/                         # Competitive programming patterns & problems
│   └── patterns/
│       ├── frequencyCounter/
│       │   ├── checkSquare.ts
│       │   ├── findValidAnagram.ts
│       │   └── README.md
│       └── twoPointersOrIterators/
│           ├── countUniqueValues.ts
│           ├── sumZero.ts
│           └── README.md
│
├── ds/                         # Data structures implementations & demos
│   ├── doublyLinkedList/
│   │   ├── push.ts
│   │   ├── pop.ts
│   │   ├── shift.ts
│   │   ├── unshift.ts
│   │   ├── get.ts
│   │   ├── remove.ts
│   │   ├── reverse.ts
│   │   ├── setup.ts
│   │   ├── index.html
│   │   └── README.md
│   │
│   ├── graph/
│   │   ├── traversalBFS.ts
│   │   ├── traversalDFS.ts
│   │   ├── traversalIterative.ts
│   │   └── README.md
│   │
│   ├── linkedList/
│   │   ├── insert.ts
│   │   ├── remove.ts
│   │   ├── pop.ts
│   │   ├── push.ts
│   │   ├── get.ts
│   │   ├── reverse.ts
│   │   ├── setup.ts
│   │   └── README.md
│   │
│   ├── oops/
│   │   ├── class.ts
│   │   └── README.md
│   │
│   ├── queue/
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── README.md
│   │
│   ├── recursion/
│   │   ├── collectOdd.ts
│   │   ├── factorial.ts
│   │   ├── isPalindrome.ts
│   │   ├── power.ts
│   │   ├── reverse.ts
│   │   └── README.md
│   │
│   ├── searching/
│   │   ├── binarySearch.ts
│   │   └── README.md
│   │
│   ├── sorting/
│   │   ├── bubbleSort.ts
│   │   ├── quickSort.ts
│   │   ├── selectionSort.ts
│   │   ├── selSort.ts
│   │   └── README.md
│   │
│   ├── stack/
│   │   ├── index.html
│   │   ├── setup.ts
│   │   └── README.md
│   │
│   └── tree/
│       ├── BFS.ts
│       ├── BST.ts
│       ├── DFSInOrder.ts
│       ├── DFSPostOrder.ts
│       ├── DFSPreOrder.ts
│       ├── index.html
│       └── README.md
│
└── mixed/
```

### Python

```
python/
├── cp/
│   ├── companies/
│   ├── mixed/
│   └── patternsAndProblems/
│
├── ds/
│   ├── algorithmic-data-structures/
│   │   ├── disjoint-set-union-find/
│   │   ├── segment-tree-fenwick-tree/
│   │   └── trie-prefix-tree/
│   ├── custom/
│   └── inbuilt/
│
├── foundation/
│   ├── basics/
│   ├── functions/
│   ├── loops-and-conditions/
│   ├── object-oriented/
│   └── exception-handling/
│
└── libraries/
```

---

## 🛠 Getting Started

1. **Clone the repository**

    ```sh
    git clone https://github.com/nirmalkar/ds-cp.git
    cd ds-cp
    ```

---

## 📚 How to Use

-   **Learn Concepts:** Start with folders under `ds/` to explore data structure implementations.
-   **Practice Patterns:** Navigate to `javascript/cp/patterns/`, `python/cp/patterns/` or `typescript/cp/patterns/` for pattern-based practice and read the accompanying `README.md` in each pattern folder.
-   **Solve Problems:** Try solving the problems yourself first, then compare with provided solutions.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create a feature branch**
    ```sh
    git checkout -b feature/YourFeature
    ```
3. **Commit your changes**
    ```sh
    git commit -m "Add new problem"
    ```
4. **Push to the branch**
    ```sh
    git push origin feature/YourFeature
    ```
5. **Open a pull request**

**Please follow existing folder structure and naming conventions.**

---
