let scores = [1, 2, 3, 4, 5];

scores.forEach((score) => {
  console.log(`binh puhong: ${score} - ${score * score}`);
});

let doubleScores = scores.map((score) => score * 2);
console.log(`doubleScores: ${doubleScores}`);
