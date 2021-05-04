import "./styles.css";
import { useState } from "react";

// let userName = "Yashwanth Vernekar";
// let color = "red";

export default function App() {
  const [userInput, setUserInput] = useState("");

  // function clickHandle() {
  //   console.log("Click Me! button is Clicked");
  //   var countc = count + 1;
  //   console.log(countc);
  //   setcount(countc);
  // }

  function inputChangeHandler() {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input onChange={inputChangeHandler}></input>
      <div> Welcome {userInput} </div>
      {/* <button onClick={clickHandle}>Click Me! {count}</button> */}
    </div>
  );
}
