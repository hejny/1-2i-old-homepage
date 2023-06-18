# Sensor APIs

Provides access to different sensors on a user's device, such as an accelerometer or gyroscope.

There is also an separate Geologation API.

## Accelerometer

```javascript
if (!('Accelerometer' in window)) {
    console.log('Accelerometer not aviable');
    return;
}

const sensor = new Accelerometer();
sensor.addEventListener('reading', () => {
    console.log((sensor.x > 0 ? '🟩' : '🟥') + (sensor.y > 0 ? '🟩' : '🟥') + (sensor.z > 0 ? '🟩' : '🟥'));
});
sensor.start();
```

## deviceorientation

```javascript
window.addEventListener('deviceorientation', (event) => {
    const { alpha, beta, gamma } = event;

    console.log((gamma > 0 ? '🟩' : '🟥') + (beta > 0 ? '🟩' : '🟥') + (alpha > 0 ? '🟩' : '🟥'));
});
```

## ProximitySensor

```javascript
const sensor = new ProximitySensor();

sensor.addEventListener('reading', () => {
    console.log(sensor.near ? 'Near' : 'Far');
});

sensor.start();
```

## AmbientLightSensor

```javascript
const sensor = new AmbientLightSensor();

sensor.addEventListener('reading', () => {
    console.log(`Illuminance: ${sensor.illuminance} lux`);
});

sensor.start();
```

## More

-   [Sensor APIs on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs)
-   [Baller Game](https://github.com/johnlok/baller)
-   [Multiple games and projects based on gyroscope](https://github.com/topics/gyroscope?l=javascript)
-   [How to build a physics Javascript game](https://medium.com/@danny.jamesbuckley/how-to-build-a-physics-javascript-game-bcbb3a59288a)
