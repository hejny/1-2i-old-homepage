# Internationalisation API

Provides a way to format dates, times, numbers, currencies, and more.

```javascript
const date = new Date();
const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
};
const formattedDate = date.toLocaleDateString('en-US', options);
console.log('Formatted date: ' + formattedDate);
```

-   **Pros:** Simplifies internationalization and localization of web applications.
-   **Cons:** May have limited support for certain locales and formatting options.

## More

-   [Intl on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
-   [Moment.js library](https://momentjs.com/)
