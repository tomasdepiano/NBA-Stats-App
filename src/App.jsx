import { useState } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [selectedPlayer, setSelectedPlayer] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedPlayer(event.target.value);
  };

  const path = window.location.pathname;

  const isHome = path === "/" ? true : false;

  return (
    <div>
      {isHome && (
        <div className="backgroundImage">
          <form>
            <h3 style={{ color: "white" }}>
              What player do you want to select?
            </h3>
            <select value={selectedPlayer} onChange={handleDropdownChange}>
              <option value="">Select an option</option>
              <option value="kobebryant">Kobe Bryant</option>
              <option value="michaeljordan">Michael Jordan</option>
              <option value="lebronjames">LeBron James</option>
            </select>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${selectedPlayer}`);
                // console.log(selectedPlayer);
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="btn-group">
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
