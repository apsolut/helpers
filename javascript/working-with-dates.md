#### working with dates started

```js
let x;
let d = new Date();
```

#### internationalization

```js
let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth(); // zero based 0-11 - January is 0
x = d.getMonth() + 1; // zero based 0-11 - January is 0
x = d.getDate();
// getDay() returns the day of the week. You can however use the getDate() method.
x = d.getDay(); //0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.
// x = d.getHours();
// x = d.getMinutes();
x = `${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
// more modarn way
x = Intl.DateTimeFormat('default').format(d); // default
x = Intl.DateTimeFormat('en-US').format(d); // USA
x = Intl.DateTimeFormat('gb-GB').format(d); // GB
x = Intl.DateTimeFormat('de-DE').format(d); // Germany
x = Intl.DateTimeFormat('de-DE', { month: 'long' }).format(d); // Germany
x = d.toLocaleString(); // default
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  //hour: 'numeric',
  //minutes: 'numeric',
  //second: 'numeric',
  timeZone: 'Europe/Berlin',
};
x = d.toLocaleString('default', options); // default

console.log(x);
```