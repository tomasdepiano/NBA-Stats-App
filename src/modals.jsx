import React, { useState } from "react";
import "./modals.css";

export function Modal({ closeModal, addPlayers }) {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");

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
        </div>
        <div className="body">
          <p>
            How many points per game did this player average for their career?{" "}
            <input
              type="text"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
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
              addPlayers(name, points);
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
