
// Mock exercise data
export const getExerciseData = (exerciseId) => {
  return {
    id: parseInt(exerciseId || "101"),
    title: "Hello World Program",
    instructions: "In this exercise, you'll write your first program. Complete the code below to output 'Hello, CodeQuest!' to the console.",
    hints: [
      "Use the console.log() function to print to the console.",
      "Make sure to match the expected output exactly, including capitalization and punctuation."
    ],
    initialCode: 
`function greet() {
  // Complete the code below
  let message = "Hello, CodeQuest!";
  
  // Your code here
  
  return message;
}

// Don't modify the code below
console.log(greet());`,
    solution: 
`function greet() {
  // Complete the code below
  let message = "Hello, CodeQuest!";
  
  // Your code here
  console.log(message);
  
  return message;
}

// Don't modify the code below
console.log(greet());`,
    testCases: [
      {
        input: "",
        expectedOutput: "Hello, CodeQuest!"
      }
    ]
  };
};
