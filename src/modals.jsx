import React, { useState } from "react";
import "./modals.css";

export function Modal({ closeModal, addPlayers }) {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");
  const [trb, setTrb] = useState("");
  const [ast, setAst] = useState("");
  const [fgpercent, setfgpercent] = useState("");
  const [fg3point, setFg3point] = useState("");
  const [freethrowpercent, setFreeThrowPercent] = useState("");
  const [champs, setChamps] = useState("");

  return (
    <div className="modalbackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            {" "}
            X
          </button>
        </div>
        <div className="title">
          <p>
            What is the new player's name?{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </p>
          <p>
            How many points per game did this player average for their career?{" "}
            <input
              type="text"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            ></input>
          </p>
          <p>
            How many rebounds per game did this player average for their career?{" "}
            <input
              type="text"
              value={trb}
              onChange={(e) => setTrb(e.target.value)}
            ></input>
          </p>
          <p>
            How many assist per game did this player average for their career?{" "}
            <input
              type="text"
              value={ast}
              onChange={(e) => setAst(e.target.value)}
            ></input>
          </p>
          <p>
            What was this player's field goal percentage for his career?{" "}
            <input
              type="text"
              value={fgpercent}
              onChange={(e) => setfgpercent(e.target.value)}
            ></input>
          </p>
          <p>
            What was this player's 3 point field goal percentage for his career?{" "}
            <input
              type="text"
              value={fg3point}
              onChange={(e) => setFg3point(e.target.value)}
            ></input>
          </p>
          <p>
            What was this player's free throw percentage for his career?{" "}
            <input
              type="text"
              value={freethrowpercent}
              onChange={(e) => setFreeThrowPercent(e.target.value)}
            ></input>
          </p>
          <p>
            How many championships did this player win?{" "}
            <input
              type="text"
              value={champs}
              onChange={(e) => setChamps(e.target.value)}
            ></input>
          </p>
        </div>

        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              addPlayers(
                name,
                points,
                trb,
                ast,
                fgpercent,
                fg3point,
                freethrowpercent,
                champs
              );
              closeModal(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export function Removemodal({ closeModal, removePlayer }) {
  const [name, setName] = useState("");
  return (
    <div className="modalbackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            {" "}
            X
          </button>
        </div>
        <div className="title">
          <p>
            What player do you want to remove?
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </p>
        </div>
        <div className="body"></div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              removePlayer(name);
              closeModal(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
