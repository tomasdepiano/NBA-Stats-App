import { useState } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Modal, Removemodal } from "./modals";
import playerData from "./playerData/Stats";

function App() {
  const navigate = useNavigate();

  const [selectedPlayer, setSelectedPlayer] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedPlayer(event.target.value);
  };

  const [openModal, setOpenModal] = useState(false);
  const [removeModal, setRemovalModal] = useState(false);
  const [players, setPlayers] = useState(playerData);
  console.log(players);

  function addNewPlayers(name, pts) {
    setPlayers([...players, { name, pts }]);
  }

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
            <button
              className="openModalBtn"
              onClick={() => {
                setOpenModal(true);
              }}
              type="submit"
            >
              Add a Player
            </button>
            {openModal && (
              <Modal closeModal={setOpenModal} addPlayers={addNewPlayers} />
            )}
            <button
              className="openModalBtn"
              onClick={() => {
                setRemovalModal(true);
              }}
              type="submit"
            >
              Remove a Player
            </button>
            {removeModal && <Removemodal closeModal={setRemovalModal} />}
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default App;
