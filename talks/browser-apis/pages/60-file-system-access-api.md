# File system access API

Provides a way for web applications to read and write files on a user's device.

The File System Access API can be used to create file editors, image uploaders, and file management tools within the browser.

```javascript
const fileHandle = await window.showOpenFilePicker();
const file = await fileHandle.getFile();
const content = await file.text();
console.log('File content '+ content);
```

- **Pros:** Enables file manipulation and integration with local storage.
- **Cons:** Requires user permission and may have limited access to certain file types.
