# Accounts Merge

## 🧩 Problem Statement

Given a list of accounts where each account is a list of strings:

-   The **first element** is the person's name
-   The **rest** are email addresses

Two accounts are considered the **same person** if they share **at least one email**.

Merge the accounts and return them in the format:

```
[
  [name1, email1, email2, ...],
  [name2, email3, email4, ...],
  ...
]
```

-   Emails should be in **sorted order**
-   You can return the accounts in **any order**

---

## 📥 Input

-   `accounts`: string[][] — list of accounts.  
    Each account contains a name followed by 1 or more emails.

---

## 📤 Output

-   A string[][] — merged account list with sorted emails per person

---

## 🔍 Example

**Input:**

```
accounts = [
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["John", "johnnybravo@mail.com"],
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["Mary", "mary@mail.com"]
]
```

**Output:**

```
[
  ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
  ["John", "johnnybravo@mail.com"],
  ["Mary", "mary@mail.com"]
]
```

**Explanation:**

-   The first and third accounts belong to the same person (shared email: `johnsmith@mail.com`)
-   They are merged and emails sorted.

---

## 🧠 Strategy

Use **Union-Find** to group emails that belong to the same person.

### Steps:

1. For each account:

    - Union the first email with all other emails in that account
    - Store a map from email → name

2. After unioning all emails:
    - Group all emails by their **root parent**
    - Sort each group and prepend the person’s name

---

## 🧪 Time & Space Complexity

-   Time: O(N _ M _ α(N))  
    (N = accounts, M = max emails per account)
-   Space: O(N \* M)

---

## 🔧 Constraints

-   `1 <= accounts.length <= 1000`
-   `1 <= accounts[i].length <= 10`
-   `1 <= accounts[i][j].length <= 30`
-   `accounts[i][0]` is a name (letters only)
-   `accounts[i][j]` (for `j > 0`) is a valid email

---
