# Offscreen Canvas API


Allows developers to perform graphics operations outside of the main thread, improving performance.



```javascript
const offscreen = document.createElement('canvas').transferControlToOffscreen();
const worker = new Worker('worker.js');
worker.postMessage({ canvas: offscreen }, [offscreen]);
  ```


- **Pros:** Boosts performance by offloading graphics processing to a separate thread.
- **Cons:** Requires careful synchronization between the main thread and offscreen rendering.
- *Interesting Fact:* The Offscreen Canvas API is particularly useful for complex visualizations and resource-intensive graphics rendering.
