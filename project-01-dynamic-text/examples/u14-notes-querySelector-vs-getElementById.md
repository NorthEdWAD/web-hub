## Intro to JavaScript
### Reading: getElementById() & querySelector() Methods Compared

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Selectors Example</title>
    <style>
        /* Default paragraph style */
        p {
            font-size: 16px;
            color: black;
        }
    </style>
</head>
<body>
    <!-- Paragraph with an ID for targeting -->
    <p id="demoParagraph">This is a sample paragraph.</p>

    <script>
        // Using getElementById()
        // This method directly targets an element by its ID.
        // It is fast and simple, but only works with IDs.
        const paragraphById = document.getElementById("demoParagraph");
        paragraphById.style.color = "blue";
        paragraphById.style.fontSize = "20px";

        // Using querySelector()
        // This method uses a CSS selector to target elements.
        // It is more flexible and can target IDs, classes, or any CSS selector.
        // Here, we use the ID selector (#demoParagraph) to target the same paragraph.
        const paragraphByQuery = document.querySelector("#demoParagraph");
        paragraphByQuery.style.color = "red";
        paragraphByQuery.style.fontWeight = "bold";
    </script>
</body>
</html>
```

---

### Key Points To Remember:
- **`getElementById()`**: Directly targets an element by its ID. It is simple and efficient but limited to IDs.
- **`querySelector()`**: Uses a CSS selector (e.g., `#demoParagraph`, `.className`, `div p`). It is more flexible and can target any element using any valid CSS selector.

---
