import { useLoaderData, useParams } from "react-router-dom";
import "./app.css";
import { useEffect, useState } from "react";
import axios from "axios";

export function Player() {
  const { name, pts, trb, ast, fgpercent, fg3point, freethrowpercent, champs } =
    useLoaderData();
  const { id } = useParams();
  // console.log(id);

  const [player, setPlayer] = useState();

  useEffect(() => {
    axios.get(`/api/playerData/${id}`).then((res) => {
      setPlayer(res.data);
    });
  }, []);

  if (!player) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div className="jordanBackgroundImage">
        <h2 style={{ color: "white" }}>{player.name} Career Stats</h2>
        <h2 style={{ color: "white" }}>{player.name}</h2>
        <h3 style={{ color: "white" }}>Points Per Game: {player.pts}</h3>
        <h3 style={{ color: "white" }}>Rebounds Per Game: {player.trb}</h3>
        <h3 style={{ color: "white" }}>Assist Per Game: {player.ast}</h3>
        <h3 style={{ color: "white" }}>FG Pecentage: {player.fgpercent}</h3>
        <h3 style={{ color: "white" }}>
          3 Point FG Percentage: {player.fg3point}
        </h3>
        <h3 style={{ color: "white" }}>
          Free Throw Percentage: {player.freethrowpercent}
        </h3>
        <h3 style={{ color: "white" }}>Championships: {player.champs}</h3>
      </div>
    </div>
  );
}
