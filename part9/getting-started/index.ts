import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { exerciseCalculator } from "./exerciseCalculator";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.route("/hello").get((_req, res) => {
  res.send("Hello Full Stack!");
});

app.route("/bmiCalculator").get((req, res) => {
  const { query } = req;
  try {
    res.send(calculateBmi(Number(query.height), Number(query.weight)));
  } catch (error) {
    res.send("Bad parameters");
  }
});

interface Body {
  daily_exercises: number[];
  target: number;
}

interface Request {
  body: Body;
}

app.route("/exercises").post((req, res) => {
  const {
    body: { daily_exercises, target },
  } = req as Request;
  res.json(
    exerciseCalculator(
      daily_exercises.map((v) => Number(v)),
      Number(target)
    )
  );
});

app.listen(3000, () => {
  console.log("XD");
});
