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
    console.log(
        (sensor.x>0?'🟩':'🟥')+
        (sensor.y>0?'🟩':'🟥')+ 
        (sensor.z>0?'🟩':'🟥')
);
    
});
sensor.start();

```