import React, { useState } from "react";
import { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText = () => {
//   const [isListening, setIsListening] = useState(false);
//   const [recognizedText, setRecognizedText] = useState("");

//   const recognition = new window.webkitSpeechRecognition(); // For Chrome-based browsers

//   recognition.continuous = true;
//   recognition.interimResults = true;
//   recognition.lang = "en-US"; // Language setting (you can change this as needed)

//   recognition.onstart = () => {
//     setIsListening(true);
//   };

//   recognition.onend = () => {
//     setIsListening(false);
//   };

//   recognition.onresult = (event) => {
//     let interimTranscript = "";
//     let finalTranscript = "";

//     for (let i = event.resultIndex; i < event.results.length; i++) {
//       const transcript = event.results[i][0].transcript;
//       if (event.results[i].isFinal) {
//         finalTranscript += transcript + " ";
//       } else {
//         interimTranscript += transcript;
//       }
//     }

//     setRecognizedText(finalTranscript);
//   };

//   const startListening = () => {
//     recognition.start();
//   };

//   const stopListening = () => {
//     recognition.stop();
//   };

//   return (
//     <div>
//       <button onClick={isListening ? stopListening : startListening}>
//         {isListening ? "Stop Listening" : "Start Listening"}
//       </button>
//       <p>{recognizedText}</p>
//     </div>
//   );

const { transcript, listening, startListening, stopListening } = useSpeechRecognition();

  return (
    <div>
      <button onClick={startListening} disabled={listening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!listening}>
        Stop Listening
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechToText;
