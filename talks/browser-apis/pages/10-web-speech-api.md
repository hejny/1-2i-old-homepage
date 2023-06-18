# Web Speech API

The Web Speech API provides two distinct areas of functionality — speech recognition, and speech synthesis (also known as text to speech, or tts) — which open up interesting new possibilities for accessibility, and control mechanisms.



## Speech synthesis


```javascript
// Create a new instance of SpeechSynthesisUtterance
const message = new SpeechSynthesisUtterance();

// Set the text that you want to speak
message.text = `
  Hello Devconf attendees,
  nice to see you at the Browser API talk 
  like me - a speech synthesis API,


  This is an example of such an API - speech synthesis right in your browser.
  I am looking forward to the following social event party  
`;

// Set the speech synthesis voice
message.voice = speechSynthesis.getVoices()[0]; // You can choose a different voice if available

// Speak the message
speechSynthesis.speak(message);
```



## Speech recognition



> Permissions & origin 



```js
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

recognition.start();

recognition.onresult = function (event) {
    console.log('You said: '+ event.results[0][0].transcript);
};
```
