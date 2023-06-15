# Web Speech API

The Web Speech API provides two distinct areas of functionality — speech recognition, and speech synthesis (also known as text to speech, or tts) — which open up interesting new possibilities for accessibility, and control mechanisms.

## Speech recognition

The SpeechRecognition interface of the Web Speech API is the controller interface for the recognition service; this also handles the SpeechRecognitionEvent sent from the recognition service.

```js
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

recognition.start();

recognition.onresult = function (event) {
    alert('You said: ', event.results[0][0].transcript);
};
```

## Speech synthesis
