import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";

const app = express();
const port = "8001";

// Middle Ware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

ViteExpress.config({ printViteDevServerHost: true });

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);

const playerData = [
  {
    name: "Michael Jordan",
    pts: "30.1",
    trb: "6.2",
    ast: "5.3",
    fgpercent: "49.7%",
    fg3point: "32.7%",
    freethrowpercent: "83.5%",
    champs: "6",
  },
  {
    name: "LeBron James",
    pts: "27.2",
    trb: "7.5",
    ast: "7.3",
    fgpercent: "50.5%",
    fg3point: "34.5%",
    freethrowpercent: "73.5%",
    champs: "4",
  },
  {
    name: "Kobe Bryant",
    pts: "25.0",
    trb: "5.2",
    ast: "4.7",
    fgpercent: "44.7%",
    fg3point: "32.9%",
    freethrowpercent: "83.7%",
    champs: "5",
  },
];

app.get("/api/playerData", (req, res) => {
  res.json(playerData);
});

app.get("/api/playerData/:id", (req, res) => {
  const { id } = req.params;

  res.json(playerData[id]);
});

app.post("/api/playerData", (req, res) => {
  console.log(req.body);

  const { name, pts, trb, ast, fgpercent, fg3point, freethrowpercent, champs } =
    req.body;

  const newPlayer = {
    name: name,
    pts: Number(pts),
    trb: Number(trb),
    ast: Number(ast),
    fgpercent: Number(fgpercent),
    fg3point: Number(fg3point),
    freethrowpercent: Number(freethrowpercent),
    champs: Number(champs),
  };
  playerData.push(newPlayer);
  res.json(playerData);
});

app.put("/api/playerData/:id", (req, res) => {
  const { id } = req.params;
  const { name, pts, trb, ast, fgpercent, fg3point, freethrowpercent, champs } =
    req.body;

  const player = playerData[id];

  player.name = name || player.name;

  player.pts = Number(pts) || player.pts;

  player.trb = Number(trb) || player.trb;

  player.ast = Number(ast) || player.ast;

  player.fgpercent = Number(fgpercent) || player.fgpercent;

  player.fg3point = Number(fg3point) || player.fg3point;

  player.freethrowpercent = Number(freethrowpercent) || player.freethrowpercent;

  player.champs = Number(champs) || player.champs;

  res.json(player);
});

app.delete("/api/playerData/:id", (req, res) => {
  const { id } = req.params;

  res.json(playerData[id]);
});
