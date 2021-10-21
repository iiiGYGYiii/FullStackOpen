interface Registry {
  numberOfDays: number;
  daysTrained: number;
  targetValue: number;
  averageReached: number;
  targetWasReached: boolean;
  ratingValue: number;
  ratingText:
    | "Too bad, try harder next time"
    | "Doing pretty well, focus on goal."
    | "Well done!";
}

type ExerciseFunc = (register: Array<number>, goal: number) => Registry;
type MeanFunc = (arr: Array<number>) => number;

const calcMean: MeanFunc = (arr) => {
  return arr.reduce((p, c) => p + c, 0) / arr.length;
};

const exerciseCalculator: ExerciseFunc = (register, goal) => {
  const numberOfDays = register.length;
  const daysTrained = register.reduce((p, c) => (c != 0 ? p + 1 : p), 0);
  const targetValue = goal;
  const averageReached = calcMean(register);
  const targetWasReached = averageReached >= targetValue;
  const ratingValue = Math.ceil(Math.random() * 3);
  const ratingText =
    ratingValue === 1
      ? "Too bad, try harder next time"
      : ratingValue === 2
      ? "Doing pretty well, focus on goal."
      : "Well done!";
  return {
    numberOfDays,
    daysTrained,
    targetValue,
    averageReached,
    targetWasReached,
    ratingText,
    ratingValue,
  };
};

const [, , goal, ...register] = process.argv;

console.log(
  exerciseCalculator(
    register.map((v) => Number(v)),
    Number(goal)
  )
);
