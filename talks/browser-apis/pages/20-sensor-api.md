# Sensor APIs

Provides access to different sensors on a user's device, such as an accelerometer or gyroscope.

There is also an separate Geologation API.

```javascript
if (!('Accelerometer' in window)) {
  console.log('Accelerometer not aviable');
  return;
}

const sensor = new Accelerometer();
sensor.addEventListener('reading', () => {
    console.log('Acceleration along the X-axis: '+ sensor.x);
    console.log('Acceleration along the Y-axis: '+ sensor.y);
    console.log('Acceleration along the Z-axis: '+ sensor.z);
});
sensor.start();

```