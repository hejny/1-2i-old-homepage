// Get the canvas element
const canvas = document.getElementById('renderCanvas');

// Create the Babylon.js engine
const engine = new BABYLON.Engine(canvas, true);

// Create a scene
const scene = new BABYLON.Scene(engine);

// Create a camera
const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, false);

// Create a light
const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

scene.debugLayer.show();

//==============================================

/*/
// Create a sphere representing the planet
const planet = BABYLON.MeshBuilder.CreateSphere('planet', { diameter: 2, segments: 4 }, scene);

// Create a material for the planet
const planetMaterial = new BABYLON.StandardMaterial('ribbonMaterial', scene);
planetMaterial.emissiveColor = BABYLON.Color3.White();
planetMaterial.backFaceCulling = false;
planetMaterial.wireframe = true;
planetMaterial.diffuseTexture = new BABYLON.Texture('textures/saturn.jpg', scene);
planet.material = planetMaterial;

// Rotate the planet
scene.registerBeforeRender(function () {
    planet.rotation.y += 0.01;
});
/**/

//==============================================

/**/
// Create a ribbon mesh for black hole topology
let ribbon = BABYLON.MeshBuilder.CreateRibbon(
    'ribbon',
    {
        pathArray: generateRibbonPath(plotSphere, 0),
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
        updatable: true,
    },
    scene,
);

// Note: Detect last plot function in window scope
const plotFunctionNames = Object.keys(window).filter(
    (key) => key.startsWith('plot') && typeof window[key] === 'function',
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

/*/
// Rotate the the ribbon
scene.registerBeforeRender(function () {
    ribbon.rotation.y += 0.01;
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

/*
















*/

// Sphere
function plotSphere(t, u, v) {
    const x = Math.cos(u) * Math.sin(v);
    const y = Math.sin(u) * Math.sin(v);
    const z = Math.cos(v);
    return [x, y, z];
}
plotSphere.range = [0, Math.PI * 2];

/*/
// Cone
function plotCone(t, u, v) {
    const x = u * Math.cos(v);
    const y = u * Math.sin(v);
    const z = u;
    return [x, y, z];
}
plotCone.range = [-10, 10];
/**/

/*



























*/

// ------

// Torus
function plotTorus(t, u, v) {
    const x = (2 + Math.cos(v)) * Math.cos(u);
    const y = (2 + Math.cos(v)) * Math.sin(u);
    const z = Math.sin(v);
    return [x, y, z];
}
plotTorus.range = [0, Math.PI * 2];

// ------

// Waves
function plotWaves(t, u, v) {
    const x = u;
    const y = v;
    const z = Math.sin(u * 2 + t / 100) / 2 + Math.cos(v * 2 + t / 100) / 2;
    return [x, y, z];
}
plotWaves.range = [-3, 3];

// ------

/*/
// Hyperbolic Paraboloid

function plotHyperbolicParaboloid(t, u, v) {
    const x = u;
    const y = v;
    const z = u * v;
    return [x, y, z];
}
plotHyperbolicParaboloid.range = [-10, 10];

/**/ /*
















*/
// Torus
// Hyperbolic Paraboloid
// Black Hole

/**/

//==============================================

// Render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Handle window resize
window.addEventListener('resize', function () {
    engine.resize();
});
