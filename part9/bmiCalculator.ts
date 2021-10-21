type Category = "Underweight" | "Normal" | "Overweight";

function calculateBmi(height: number, weight: number): Category {
  const bmi: number = weight / (height / 100) ** 2;
  return bmi < 18.5 ? "Underweight" : bmi > 24.9 ? "Overweight" : "Normal";
}

const [, , height, weight] = process.argv;

console.log(calculateBmi(Number(height), Number(weight)));
