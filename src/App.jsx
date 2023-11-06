import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const path = window.location.pathname;

  const isHome = path === "/" ? true : false;

  return (
    <div>
      {isHome && (
        <div className="backgroundImage">
          <form>
            <h3 style={{ color: "white" }}>What is your name?</h3>
            <input type="text"></input>
            <h5 style={{ color: "white" }}>
              What player do you want to select?
            </h5>
            <select value={selectedOption} onChange={handleDropdownChange}>
              <option value="">Select an option</option>
              <option value="option1">Kobe Bryant</option>
              <option value="option2">Michael Jordan</option>
              <option value="option3">LeBron James</option>
            </select>
          </form>
          <input type="submit"></input>
          <div class="btn-group">
            <button type="submit">Add a Player</button>
            <button type="submit">Remove a Player</button>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default App;
