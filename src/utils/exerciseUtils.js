
// Mock exercise data for different languages
export const getExerciseData = (exerciseId, language = "javascript") => {
  const exercises = {
    javascript: {
      id: parseInt(exerciseId || "101"),
      title: "JavaScript: Console Output",
      instructions: "In this exercise, you need to use console.log() to output the message \"Hello, CodeHub!\".",
      hints: [
        "Use the console.log() function to print to the console.",
        "Make sure to match the expected output exactly, including capitalization and punctuation.",
        "The message variable already contains the text you need to print."
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
      // Fill-in-the-blank question type
      fillInTheBlank: {
        languageName: "JavaScript",
        question: "Insert the missing part of the code below to output \"Hello World\".",
        codeSnippet: [
          "function greet() {",
          "  let message = \"Hello World\";",
          "  ______.______(message);",
          "  return message;",
          "}",
          "",
          "greet();"
        ],
        answer: "console.log",
        hint: "In JavaScript, we use 'console.log()' to output messages to the console."
      }
    },
    python: {
      id: parseInt(exerciseId || "201"),
      title: "Python: Print Output",
      instructions: "In this exercise, you need to use print() to output the message \"Hello, CodeHub!\".",
      hints: [
        "Use the print() function to output text.",
        "Make sure to match the expected output exactly, including capitalization and punctuation.",
        "The message variable already contains the text you need to print."
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
      // Fill-in-the-blank question type
      fillInTheBlank: {
        languageName: "Python",
        question: "Insert the missing part of the code below to output \"Hello World\".",
        codeSnippet: [
          "def greet():",
          "    message = \"Hello World\"",
          "    ______(message)",
          "    return message",
          "",
          "greet()"
        ],
        answer: "print",
        hint: "In Python, we use the 'print()' function to output messages to the console."
      }
    },
    java: {
      id: parseInt(exerciseId || "301"),
      title: "Java: Console Output",
      instructions: "In this exercise, you need to use System.out.println() to output the message \"Hello, CodeHub!\".",
      hints: [
        "Use System.out.println() to print to the console.",
        "Make sure to match the expected output exactly, including capitalization and punctuation.",
        "The message variable already contains the text you need to print."
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
      // Fill-in-the-blank question type
      fillInTheBlank: {
        languageName: "Java",
        question: "Insert the missing part of the code below to output \"Hello World\".",
        codeSnippet: [
          "public class MyClass {",
          "  public static void main(String[] args) {",
          "    System._____._____(\"Hello World\");",
          "  }",
          "}"
        ],
        answer: "out.println",
        hint: "In Java, we use 'System.out.println()' to output messages to the console."
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
