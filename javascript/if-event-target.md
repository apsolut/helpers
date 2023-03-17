#### if event target getAttribute

```js
document.addEventListener("click", function(event) {
    if (event.target.getAttribute("id") != 'divOne' && event.target.getAttribute("id") != 'divTwo') {
        document.getElementById("divOne").style.display = "none"
    }
});
```
