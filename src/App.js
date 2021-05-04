import "./styles.css";
import { useState } from "react";

var emojiDic = {
  "😂": "Laughing",
  "😠": "Angry Face",
  "🤩": "Star-struck",
  "🤔": "Thinking face"
};

var emojis = Object.keys(emojiDic);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiEventHandler() {
    var userInput = event.target.value;
    meaning = emojiDic[userInput];

    if (meaning === undefined) {
      meaning = "Sorry Not found in DataBase";
    }

    console.log(meaning);
    setMeaning(meaning);
  }

  function listItemClickHandler(emoji) {
    meaning = emojiDic[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input onChange={emojiEventHandler}></input>
      <h2> {meaning} </h2>
      <h3>Emojis We know !!</h3>
      {emojis.map((emoji) => {
        return (
          <span
            onClick={() => listItemClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: ".5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
