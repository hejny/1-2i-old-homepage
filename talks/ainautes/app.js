// Get the canvas element
const canvas = document.getElementById('renderCanvas');

// Create the Babylon.js engine
const engine = new BABYLON.Engine(canvas, true);

// Create a scene
const scene = new BABYLON.Scene(engine);

scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

// Create a camera
const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, false);

// Create a light
const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

scene.debugLayer.show();

//==============================================

function plotPoint(t, u, v) {
    return [0, 0, 0];
}
plotPoint.range = [0, 1];

/**/
// Create a ribbon mesh for black hole topology
let ribbon = BABYLON.MeshBuilder.CreateRibbon(
    'ribbon',
    {
        pathArray: generateRibbonPath(plotPoint, 0),
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
        updatable: true,
    },
    scene,
);

// Note: Detect last plot function in window scope
const plotFunctionNames = Object.keys(window).filter(
    (key) => key !== 'plotPoint' && key.startsWith('plot') && typeof window[key] === 'function',
);

// Update the ribbon mesh each frame
let t = 0;
scene.registerBeforeRender(function () {
    const plot = window[plotFunctionNames[Math.floor(t / 100) % plotFunctionNames.length]];

    ribbon = BABYLON.MeshBuilder.CreateRibbon(
        'ribbon',
        {
            pathArray: generateRibbonPath(plot, t++),
            sideOrientation: BABYLON.Mesh.DOUBLESIDE,
            instance: ribbon,
        },
        scene,
    );
});

// Create a material for the ribbon
const ribbonMaterial = new BABYLON.StandardMaterial('ribbonMaterial', scene);
ribbonMaterial.emissiveColor = BABYLON.Color3.White();
ribbonMaterial.backFaceCulling = false;
ribbonMaterial.wireframe = true;
ribbon.material = ribbonMaterial;

/**/
// Rotate the the ribbon
scene.registerBeforeRender(function () {
    ribbon.rotation.y -= 0.01;
});
/**/

// Function to generate the path for the ribbon
function generateRibbonPath(plot, t) {
    let range = plot.range;

    if (!range) {
        range = [0, 1];
    }

    const path = [];
    const segments = 20;
    const step = (range[1] - range[0]) / segments;

    for (var v = range[0]; v <= range[1]; v += step) {
        const subPath = [];

        for (var u = range[0]; u <= range[1]; u += step) {
            const [z, x, y] = plot(t, u, v);
            subPath.push(new BABYLON.Vector3(x, y, z));
        }

        path.push(subPath);
    }

    return path;
}

//==============================================

// Render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Handle window resize
window.addEventListener('resize', function () {
    engine.resize();
});
