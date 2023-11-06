import { useLoaderData } from "react-router-dom";
import "./app.css";

export function Jordan() {
  const { name, pts, trb, ast, fgpercent, fg3point, freethrowpercent, champs } =
    useLoaderData();
  return (
    <div>
      <div className="jordanBackgroundImage">
        <h2 style={{ color: "white" }}>Michael Jordan's Career Stats</h2>
        <h2 style={{ color: "yellow" }}>{name}</h2>
        <h3 style={{ color: "yellow" }}>Points Per Game: {pts}</h3>
        <h3 style={{ color: "yellow" }}>Rebounds Per Game: {trb}</h3>
        <h3 style={{ color: "yellow" }}>Assist Per Game: {ast}</h3>
        <h3 style={{ color: "yellow" }}>FG Pecentage: {fgpercent}</h3>
        <h3 style={{ color: "yellow" }}>3 Point FG Percentage: {fg3point}</h3>
        <h3 style={{ color: "yellow" }}>
          Free Throw Percentage: {freethrowpercent}
        </h3>
        <h3 style={{ color: "yellow" }}>Championships: {champs}</h3>
      </div>
    </div>
  );
}

export function LeBron() {
  const {
    name,
    pts,
    trb,
    ast,
    fgpercent,
    fg3point,
    freethrowpercent,
    champs,
    URL,
  } = useLoaderData();
  return (
    <div>
      <div className="lebronBackgroundImage">
        <h2 style={{ color: "yellow" }}>LeBron's Career Stats</h2>
        <h3 style={{ color: "yellow" }}>{name}</h3>
        <h3 style={{ color: "yellow" }}>Points Per Game: {pts}</h3>
        <h3 style={{ color: "yellow" }}>Rebounds Per Game: {trb}</h3>
        <h3 style={{ color: "yellow" }}>Assist Per Game: {ast}</h3>
        <h3 style={{ color: "yellow" }}>FG Pecentage: {fgpercent}</h3>
        <h3 style={{ color: "yellow" }}>3 Point FG Percentage: {fg3point}</h3>
        <h3 style={{ color: "yellow" }}>
          Free Throw Percentage: {freethrowpercent}
        </h3>
        <h3 style={{ color: "yellow" }}>Championships: {champs}</h3>
      </div>
    </div>
  );
}

export function Kobe() {
  const {
    name,
    pts,
    trb,
    ast,
    fgpercent,
    fg3point,
    freethrowpercent,
    champs,
    URL,
  } = useLoaderData();
  return (
    <div>
      <div className="kobeBackgroundImage">
        <h2 style={{ color: "yellow" }}>Kobe's Career Stats</h2>
        <h3 style={{ color: "yellow" }}>{name}</h3>
        <h3 style={{ color: "yellow" }}>Points Per Game: {pts}</h3>
        <h3 style={{ color: "yellow" }}>Rebounds Per Game: {trb}</h3>
        <h3 style={{ color: "yellow" }}>Assist Per Game: {ast}</h3>
        <h3 style={{ color: "yellow" }}>FG Pecentage: {fgpercent}</h3>
        <h3 style={{ color: "yellow" }}>3 Point FG Percentage: {fg3point}</h3>
        <h3 style={{ color: "yellow" }}>
          Free Throw Percentage: {freethrowpercent}
        </h3>
        <h3 style={{ color: "yellow" }}>Championships: {champs}</h3>
      </div>
    </div>
  );
}
