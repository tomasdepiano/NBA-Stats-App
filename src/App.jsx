import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DropdownExample from "./dropdown";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h5>What is your name?</h5>
      <input type="text"></input>
      <DropdownExample />
    </>
  );
}

export default App;
