// GradeBook:

// Function that takes all the score from an array and calculates the average scores of the students:

// Array containing student scores:
const studentScores = [90, 100, 62, 75, 54, 82];

const getAverage = function (scores) {
  let sum = 0; //

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i]; // Loops through the entire array while adding them to each other.
  }

  return sum / scores.length; // The total sum of the scores divided by the amount of scores there are.
};

// Score to Grade Converter:

const getGrade = function (score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90 && score <= 99) {
    // Between 90 and 99.
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "F";
  } else {
    return `Please type in the score/100.`;
  }
}; // Checks if the student score meets the criteria for the grade.

// Checks if the stuendt's grade is a pass or not.

const hasPassingGrade = function (score) {
  const result =
    getGrade(score) !== "F"
      ? "You passed the course."
      : "You failed the course."; // If the score is not "F" return the message pass if not return alternate message.
  return result;
};

// Message that tells the student their overall result:

const studentMsg = function (studentScores, individualStudentScore) {
  return `Class average: ${getAverage(studentScores)}. Your grade: ${getGrade(
    individualStudentScore
  )}. ${hasPassingGrade(individualStudentScore)}.`;
};

console.log(studentMsg(studentScores, 90));
