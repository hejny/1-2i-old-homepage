# Offscreen Canvas API

Allows developers to perform graphics operations outside of the main thread, improving performance.

```javascript
const offscreen = document.createElement('canvas').transferControlToOffscreen();
const worker = new Worker('worker.js');
worker.postMessage({ canvas: offscreen }, [offscreen]);

// Receive the offscreen canvas from the worker and display it on the visible canvas
worker.onmessage = function (event) {
    const visibleCanvas = document.getElementById('canvas');
    const visibleCtx = visibleCanvas.getContext('2d');
    visibleCtx.drawImage(event.data.canvas, 0, 0);
};

// no-run
```

```javascript
// worker.js
self.onmessage = function (event) {
    const canvas = event.data.canvas;
    const ctx = canvas.getContext('2d');

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
};

// no-run
```

-   **Pros:** Boosts performance by offloading graphics processing to a separate thread.
-   **Cons:** Requires careful synchronization between the main thread and offscreen rendering.
-   _Interesting Fact:_ The Offscreen Canvas API is particularly useful for complex visualizations and resource-intensive graphics rendering.

## More

-   [OffscreenCanvas on MDN](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)
-   [Canvas API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
-   [Web Workers API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
