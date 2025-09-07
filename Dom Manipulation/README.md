# 📘 README – DOM Manipulation Basics

## 📌 What is the DOM?
- **DOM** stands for **Document Object Model**.  
- It is a **tree-like structure** of an HTML document.  
- Every element in HTML (`<h1>`, `<p>`, `<button>`, etc.) becomes a **node** in the DOM.  
- JavaScript can **access, modify, add, or delete** these nodes.  
- This process is called **DOM Manipulation**.

---

## 📌 Why DOM Manipulation?
- Makes web pages **dynamic** instead of static.  
- Allows you to **change content, styles, and structure** at runtime.  
- Enables interactive features like forms, buttons, animations, etc.  

---

## 📌 Ways to Select Elements
Before manipulating, we need to **select elements**.

```js
// Select by ID
document.getElementById("myId");

// Select by class
document.getElementsByClassName("myClass");

// Select by tag
document.getElementsByTagName("p");

// Modern selectors
document.querySelector(".myClass");     // first match
document.querySelectorAll("p");         // all <p>
```

---

## 📌 Common DOM Manipulations

### 1. Change Content
```js
document.getElementById("demo").textContent = "New Text!";
document.getElementById("demo").innerHTML = "<b>Bold Text</b>";
```

### 2. Change Styles
```js
let p = document.getElementById("demo");
p.style.color = "red";
p.style.fontSize = "20px";
```

### 3. Add & Remove Elements
```js
// Create and add
let newP = document.createElement("p");
newP.textContent = "I am new!";
document.body.appendChild(newP);

// Remove
newP.remove();
```

### 4. Handle Events
```js
let btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

## 📌 Example Code
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <h2 id="title">Hello, World!</h2>
  <button id="btn">Click Me</button>

  <script>
    let title = document.getElementById("title");
    let btn = document.getElementById("btn");

    btn.addEventListener("click", function() {
      title.textContent = "You clicked the button!";
      title.style.color = "blue";
    });
  </script>
</body>
</html>
```

---

## 📌 Key Points
- **DOM = HTML structure in memory.**
- **DOM Manipulation = Changing that structure with JavaScript.**
- You can **select, change, add, remove, and listen** to elements.  
- Makes your page **interactive and dynamic**.  
