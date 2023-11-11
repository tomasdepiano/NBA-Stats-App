import { useEffect, useState } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Modal, Removemodal } from "./modals";
import playerData from "./playerData/Stats";
import axios from "axios";

function App() {
  const navigate = useNavigate();

  const [selectedPlayer, setSelectedPlayer] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedPlayer(event.target.value);
  };

  const [openModal, setOpenModal] = useState(false);
  const [removeModal, setRemovalModal] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("/api/playerData").then((res) => {
      setPlayers(res.data);
    });
  }, []);

  async function addNewPlayers(name, pts) {
    const res = await axios.post("/api/playerData", { name, pts });

    setPlayers(res.data);
    console.log(res.data);
  }

  function removePlayer(name) {
    const filtPlayers = players.filter((player) => player.name !== name);
    setPlayers(filtPlayers);
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

              {players.map((player, index) => {
                return <option value={index}>{player.name}</option>;
              })}
            </select>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate(`/player/${selectedPlayer}`);
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
            {removeModal && (
              <Removemodal
                closeModal={setRemovalModal}
                removePlayer={removePlayer}
              />
            )}
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default App;
