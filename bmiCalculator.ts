const bmiCalculator = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2;
  if (bmi < 18.5) {
    return "Underweight (eat more!)";
  }
  if (bmi >= 18.5 && bmi < 25) {
    return "Normal (yay you're healthy)";
  }
  if (bmi >= 25 && bmi < 30) {
    return "Overweight (stop eating so much candy)";
  }
  if (bmi >= 30) {
    return "OBESE (EXERCISEEE)";
  }
  if (height === 0) {
    throw new Error("height can't be zero");
  }
};

try {
  console.log(bmiCalculator(185, 65));
} catch (error: unknown) {
  let errorMessage = "Something went wrong";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
