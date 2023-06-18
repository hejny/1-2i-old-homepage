# File system access API

Provides a way for web applications to read and write files on a user's device.

The File System Access API can be used to create file editors, image uploaders, and file management tools within the browser.

```javascript
// Note: Pick one text file and I will show its content

const fileHandles = await window.showOpenFilePicker({ multiple: false });
const file = await fileHandles[0].getFile();
const content = await file.text();
console.log('File content ' + content);
```

-   **Pros:** Enables file manipulation and integration with local storage.
-   **Cons:** Requires user permission and may have limited access to certain file types.
