# Most interesting browser APIs _(in 2023)_

[`DevConf 2023, Brno, Saturday, June 17 • 5:00pm - 5:35pm`](https://devconfcz2023.sched.com/event/1MYeB)

At DevConf 2020 I gave a talk about the most useful browser APIs.
Now I will talk about the most interesting, unexpected and unusual things you can do directly in the browser app.





-   [**Web Speech API**](10-web-speech-api): For using the user's voice to control the web apps.
-   [**Sensor APIs**](10-web-speech-api): Provides access to different sensors on a user's device, such as an accelerometer or gyroscope.
-   [**WebXR**](30-webxr.md): Allows developers to create virtual and augmented reality experiences in the browser.
-   [**Internationalisation API**](40-internationalisation-api.md): Provides a way to format dates, times, numbers, currencies, and more.
-   [**Offscreen Canvas API**](50-offscreen-canvas-api.md): Allows developers to perform graphics operations outside of the main thread, improving performance.
-   [**File system access API**](60-file-system-access-api.md): Provides a way for web applications to read and write files on a user's device.


<iframe src="https://developer.mozilla.org/en-US/docs/Web/API" style"width:100%; height:2000px"></iframe>



## Slide 1: Web Speech API

- **Description:** For using the user's voice to control web apps.
- **Code Sample:**
  ```javascript
  const recognition = new SpeechRecognition();
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    console.log('User said:', transcript);
  };
  recognition.start();
  ```
- **Pros:** Enables voice-controlled interfaces and accessibility options.
- **Cons:** Accuracy may vary depending on the user's accent and pronunciation.
- *Interesting Fact:* The Web Speech API can be used to develop voice assistants and speech-to-text applications.

---

## Slide 2: Sensor APIs

- **Description:** Provides access to different sensors on a user's device, such as an accelerometer or gyroscope.
- **Code Sample:**
  ```javascript
  if ('Accelerometer' in window) {
    const sensor = new Accelerometer();
    sensor.addEventListener('reading', () => {
      console.log('Acceleration along the X-axis: '+ sensor.x);
      console.log('Acceleration along the Y-axis: '+ sensor.y);
      console.log('Acceleration along the Z-axis: '+ sensor.z);
    });
    sensor.start();
  }
  ```
- **Pros:** Enables the development of motion-based applications and games.
- **Cons:** Availability and support for specific sensors may vary across devices and browsers.
- *Interesting Fact:* The Sensor APIs can be used to create immersive experiences and detect device movements.

---

## Slide 3: WebXR

- **Description:** Allows developers to create virtual and augmented reality experiences in the browser.
- **Code Sample:**
  ```javascript
  navigator.xr.requestSession('immersive-vr').then((session) => {
    // Create and configure your VR scene
    // ...
    session.requestAnimationFrame(render);
  });

  function render(timestamp, frame) {
    // Render your VR scene
    // ...
    session.requestAnimationFrame(render);
  }
  ```
- **Pros:** Enables VR/AR experiences without requiring additional software installations.
- **Cons:** Limited browser and device support for the WebXR API.
- *Interesting Fact:* The WebXR API can be used to build interactive virtual tours, immersive games, and educational experiences.

---

## Slide 4: Internationalisation API

- **Description:** Provides a way to format dates, times, numbers, currencies, and more.
- **Code Sample:**
  ```javascript
  const date = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  console.log('Formatted date:', formattedDate);
  ```
- **Pros:** Simplifies internationalization and localization of web applications.
- **Cons:** May have limited support for certain locales and formatting options.
- *Interesting Fact:* The Internationalisation API helps developers create user-friendly and culturally adapted web experiences.

---

## Slide 5: Offscreen Canvas API

- **Description:** Allows developers to perform graphics operations outside of the main thread, improving performance.
- **Code Sample:**
  ```javascript
  const offscreen = document.createElement('canvas').transferControlToOffscreen();
  const worker = new Worker('worker.js');
  worker.postMessage({ canvas: offscreen }, [offscreen]);
  ```
- **Pros:** Boosts performance by offloading graphics processing to a separate thread.
- **Cons:** Requires careful synchronization between the main thread and offscreen rendering.
- *Interesting Fact:* The Offscreen Canvas API is particularly useful for complex visualizations and resource-intensive graphics rendering.

---

## Slide 6: File System Access API

- **Description:** Provides a way for web applications to read and write files on a user's device.
- **Code Sample:**
  ```javascript
  const fileHandle = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  const content = await file.text();
  console.log('File content:', content);
  ```
- **Pros:** Enables file manipulation and integration with local storage.
- **Cons:** Requires user permission and may have limited access to certain file types.
- *Interesting Fact:* The File System Access API can be used to create file editors, image uploaders, and file management tools within the browser.

---

## Slide 7: Conclusion

- Recap of the most interesting browser APIs in 2023.
- These APIs provide powerful capabilities for voice control, sensor integration, VR/AR experiences, internationalization, offscreen rendering, and file system access.
- Developers can leverage these APIs to create innovative and immersive web applications.
- Continued advancements in browser technology open up new possibilities for web development.
- Stay tuned for future updates and explore the exciting world of browser APIs.

Note: The provided code samples are simplified for brevity and may require additional configuration and error handling in real-world applications.




<!--
```javascript
console.log(`Hello`);
```

```javascript
// Download pdf file

async function save() {
    const fileHandle = await window.showSaveFilePicker({
        types: [
            {
                description: 'PDF files',
                accept: {
                    'application/pdf': ['.pdf'],
                },
            },
        ],
    });
}

save();
```
-->

