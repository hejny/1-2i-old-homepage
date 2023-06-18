# WebXR

Allows developers to create virtual and augmented reality experiences directly in the browser.

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

## With Babylon.js:

> Raw API vs Library

```javascript
const canvas = document.getElementById('scene');
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4.FromHexString('#000000ff');

const VRHelper = scene.createDefaultVRExperience();

var light1 = new BABYLON.PointLight('light', new BABYLON.Vector3(1, 1, 1), scene);

for (let i = 0; i < 666; i++) {
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {}, scene);
    sphere.position = new BABYLON.Vector3(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
    );
    const size = Math.random() * 2.5;
    sphere.scaling = new BABYLON.Vector3(size, size, size);
}

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener('resize', function () {
    engine.resize();
});
```

<canvas id="scene" style="border: 2px solid var(--palette-1)"></canvas>

<style>
    #scene {
        width: 100%;
        height: 70vh;
        background-color: #111;
    }
</style>

## More

-   [WebXR Device API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)
-   [Babylonjs library](https://www.babylonjs.com/)
-   [Threejs library](https://threejs.org/)
-   [A-frame library](https://aframe.io/)
-   [3D/VR Sample in Babylon](https://codepen.io/hejny/pen/PLjpZG)
