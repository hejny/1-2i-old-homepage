# Most interesting browser APIs _(in 2023)_

[`Saturday, June 17 • 5:00pm - 5:35pm`](https://devconfcz2023.sched.com/event/1MYeB)

At DevConf 2020 I gave a talk about the most useful browser APIs.
Now I will talk about the most interesting, unexpected and unusual things you can do directly in the browser app.

-   [**Web Speech API**](10-web-speech-api): For using the user's voice to control the web apps.
-   [**Sensor APIs**](10-web-speech-api): Provides access to different sensors on a user's device, such as an accelerometer or gyroscope.
-   [**WebXR**](30-webxr.md): Allows developers to create virtual and augmented reality experiences in the browser.
-   [**Internationalisation API**](40-internationalisation-api.md): Provides a way to format dates, times, numbers, currencies, and more.
-   [**Offscreen Canvas API**](50-offscreen-canvas-api.md): Allows developers to perform graphics operations outside of the main thread, improving performance.
-   [**File system access API**](60-file-system-access-api.md): Provides a way for web applications to read and write files on a user's device.

```
const converter = new showdown.Converter({
    /*
    Note: !!!!
    extensions: [
        showdownHighlight({
            // Whether to add the classes to the <pre> tag, default is false
            pre: true,
            // Whether to use hljs' auto language detection, default is true
            auto_detection: true,
        }),
    ],
    */
});
converter.setFlavor('github');

/* not await */ updateArticle();

async function updateArticle() {
    const contentElement = document.getElementById('content');
    const src = contentElement.dataset.markdownSource;
    const response = await fetch(src);
    const markdown = await response.text();

    const html = converter.makeHtml(markdown);

    contentElement.innerHTML = html;

    hljs.highlightAll();
}

```
