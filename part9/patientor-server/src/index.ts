import express from "express";
import cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.route("/api/ping").get((_req, res) => {
  res.send("pong");
});

app.listen(PORT, () => console.log(`Server running on Port:${PORT}`));
