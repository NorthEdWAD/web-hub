# getElementById() vs querySelector()

**getElementById()** is the older, simpler method that finds an element by its `id` attribute only. It returns a single element or `null` if not found.

```javascript
const myDiv = document.getElementById('myDiv');
```

**querySelector()** is the modern, more flexible method that uses CSS selectors to find elements. It returns the *first* element matching the selector or `null` if not found.

```javascript
const myDiv = document.querySelector('#myDiv');
const button = document.querySelector('.my-button');
const input = document.querySelector('input[type="text"]');
```

---

## Key Differences

| Aspect | getElementById() | querySelector() |
|--------|------------------|-----------------|
| **Selector Type** | ID only | Any CSS selector |
| **Return Value** | Single element or null | First matching element or null |
| **Flexibility** | Low — IDs only | High — classes, attributes, pseudo-selectors, etc. |
| **Performance** | Slightly faster | Slightly slower (more parsing) |
| **Browser Support** | All browsers | Modern browsers (IE 8+) |

---

## When to Use Each

**Use getElementById()** when you specifically need to find something by ID and want the most straightforward, readable code for that single use case.

**Use querySelector()** for modern projects because it's more versatile — you can target IDs, classes, attributes, and complex selectors all with one method. Most developers today prefer it for consistency.