
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
    const z = Math.sin(u * 2 + t / 30) / 2 + Math.cos(v * 2 + t / 30) / 2;
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

/**/ 


