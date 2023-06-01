#### objects

```js
// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
// https://web.dev/structured-clone/

const myOriginal = {
    someProp: "with a string value",
    anotherProp: {
        withAnotherProp: 1,
        andAnotherProp: true
    }
};

// const myShallowCopy = {...myOriginal};
const myDeepCopy = structuredClone(myOriginal); // no ref to original
```
