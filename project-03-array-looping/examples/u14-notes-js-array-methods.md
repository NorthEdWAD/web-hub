# 📄 JavaScript Array Methods Cheat Sheet

## **1. Basic Array Methods**

### **`length`** (a JavaScript PROPERTY, not an array method)
- **What it does:** Returns the number of elements in an array.
- **Example:**
  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.length); // 3
  ```

---

### **`push()`**
- **What it does:** Adds one or more elements to the **end** of an array.
- **Example:**
  ```javascript
  const fruits = ['apple', 'banana'];
  fruits.push('orange');
  console.log(fruits); // ['apple', 'banana', 'orange']
  ```

---

### **`pop()`**
- **What it does:** Removes the **last element** from an array.
- **Example:**
  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  fruits.pop();
  console.log(fruits); // ['apple', 'banana']
  ```

---

### **`shift()`**
- **What it does:** Removes the **first element** from an array.
- **Example:**
  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  fruits.shift();
  console.log(fruits); // ['banana', 'orange']
  ```

---

### **`unshift()`**
- **What it does:** Adds one or more elements to the **beginning** of an array.
- **Example:**
  ```javascript
  const fruits = ['banana', 'orange'];
  fruits.unshift('apple');
  console.log(fruits); // ['apple', 'banana', 'orange']
  ```

---

### **`indexOf()`**
- **What it does:** Returns the **first index** at which a given element can be found, or `-1` if not present.
- **Example:**
  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.indexOf('banana')); // 1
  ```

---

## **2. Iterating Over Arrays**

### **`for` Loop**
- **What it does:** Executes a block of code for each element in an array.
- **Example:**
  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  ```

---

### **`forEach()`**
- **What it does:** Calls a function for each element in an array.
- **Example:**
  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  fruits.forEach(fruit => {
    console.log(fruit);
  });
  ```

---

### **Tips for Success**
- Use `push()`/`pop()` for the **end** of an array.
- Use `shift()`/`unshift()` for the **beginning** of an array.
- Use `forEach()` for clean, readable iteration.

---
