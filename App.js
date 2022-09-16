import "./styles.css";
import React, { useState } from "react";
var str = " ";
const emojiDict = {
  "😊": " Smiling ",
  "😶": " Disbelief ",
  "😔": " Sad ",
  "😡": " Angry ",
  "❤️": " Love ",

  "🤫": "Silence",
  "🥺": "Miss"
};
var emojiArr = Object.keys(emojiDict);

export default function App() {
  const [currentinput, setcurrentinput] = useState(" ");
  function inputfun(event) {
    var meaning = emojiDict[event.target.value];
    if (meaning === undefined) {
      meaning =
        "Sorry we dont have this emoji in our data base.Try the one given below";
    }
    setcurrentinput(meaning);
  }
  function emojiClick(emoji) {
    var meaning = emojiDict[emoji];
    setcurrentinput(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreater😵‍💫</h1>
      {str}
      <input onChange={inputfun} placeholder="Enter your emoji"></input>
      <h3>Choose the Emoji</h3>
      <p>{"\n"}</p>
      <h2>{currentinput}</h2>
      {emojiArr.map(function emojiview(emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
      ;
    </div>
  );
}
