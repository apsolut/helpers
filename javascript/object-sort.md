#### object sort

```js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
const names = [
    'John',
    'Paul',
    'George',
]

names.sort((a, b) => {
    return -a.localeCompare(b)
} )
console.log( names );
```
