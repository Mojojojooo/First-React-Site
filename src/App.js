import "./styles.css";
import { useState } from "react";

// let userName = "Yashwanth Vernekar";
// let color = "red";

export default function App() {
  const [count, setcount] = useState(0);

  function clickHandle() {
    console.log("Click Me! button is Clicked");
    var countc = count + 1;
    console.log(countc);
    setcount(countc);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <button onClick={clickHandle}>Click Me! {count}</button>
    </div>
  );
}
