
// Mock exercise data for different languages
export const getExerciseData = (exerciseId, language = "javascript") => {
  const exercises = {
    javascript: {
      id: parseInt(exerciseId || "101"),
      title: "JavaScript Syntax",
      instructions: "Insert the missing part of the code below to output \"Hello, CodeHub!\".",
      hints: [
        "Use the console.log() function to print to the console.",
        "Make sure to match the expected output exactly, including capitalization and punctuation."
      ],
      initialCode: 
`function greet() {
  // Complete the code below
  let message = "Hello, CodeHub!";
  
  // Your code here
  
  return message;
}

// Don't modify the code below
console.log(greet());`,
      solution: 
`function greet() {
  // Complete the code below
  let message = "Hello, CodeHub!";
  
  // Your code here
  console.log(message);
  
  return message;
}

// Don't modify the code below
console.log(greet());`,
      testCases: [
        {
          input: "",
          expectedOutput: "Hello, CodeHub!"
        }
      ],
      // New fill-in-the-blank question type
      fillInTheBlank: {
        question: "What function is used to output text to the console in JavaScript?",
        answer: "console.log",
        hint: "It starts with 'console' and ends with 'log'"
      }
    },
    python: {
      id: parseInt(exerciseId || "201"),
      title: "Python Syntax",
      instructions: "Insert the missing part of the code below to output \"Hello, CodeHub!\".",
      hints: [
        "Use the print() function to output text.",
        "Make sure to match the expected output exactly, including capitalization and punctuation."
      ],
      initialCode: 
`def greet():
    # Complete the code below
    message = "Hello, CodeHub!"
    
    # Your code here
    
    return message

# Don't modify the code below
print(greet())`,
      solution: 
`def greet():
    # Complete the code below
    message = "Hello, CodeHub!"
    
    # Your code here
    print(message)
    
    return message

# Don't modify the code below
print(greet())`,
      testCases: [
        {
          input: "",
          expectedOutput: "Hello, CodeHub!"
        }
      ],
      // New fill-in-the-blank question type
      fillInTheBlank: {
        question: "What function is used to output text to the console in Python?",
        answer: "print",
        hint: "It's a 5-letter word that means to output text"
      }
    },
    java: {
      id: parseInt(exerciseId || "301"),
      title: "Java Syntax",
      instructions: "Insert the missing part of the code below to output \"Hello, CodeHub!\".",
      hints: [
        "Use System.out.println() to print to the console.",
        "Make sure to match the expected output exactly, including capitalization and punctuation."
      ],
      initialCode: 
`public class HelloWorld {
    public static String greet() {
        // Complete the code below
        String message = "Hello, CodeHub!";
        
        // Your code here
        
        return message;
    }
    
    public static void main(String[] args) {
        // Don't modify the code below
        System.out.println(greet());
    }
}`,
      solution: 
`public class HelloWorld {
    public static String greet() {
        // Complete the code below
        String message = "Hello, CodeHub!";
        
        // Your code here
        System.out.println(message);
        
        return message;
    }
    
    public static void main(String[] args) {
        // Don't modify the code below
        System.out.println(greet());
    }
}`,
      testCases: [
        {
          input: "",
          expectedOutput: "Hello, CodeHub!"
        }
      ],
      // New fill-in-the-blank question type
      fillInTheBlank: {
        question: "What method is used to output text to the console in Java?",
        answer: "System.out.println",
        hint: "It starts with 'System.out' and ends with 'println'"
      }
    }
  };

  return exercises[language] || exercises.javascript;
};

// Get available programming languages
export const getAvailableLanguages = () => {
  return [
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "java", name: "Java" }
  ];
};
