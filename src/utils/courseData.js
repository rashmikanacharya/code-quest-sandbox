
// Mock course data based on courseId
export const getCourseData = (courseId) => {
  return {
    id: parseInt(courseId || "1"),
    title: courseId === "1" ? "Java Fundamentals" : 
           courseId === "2" ? "Python for Beginners" : 
           courseId === "3" ? "JavaScript Essentials" : "Course",
    description: "This comprehensive course will take you from a beginner to a proficient programmer with hands-on exercises and real-world projects.",
    level: "Beginner",
    category: courseId === "1" ? "Java" : 
              courseId === "2" ? "Python" : 
              courseId === "3" ? "JavaScript" : "Programming",
    totalModules: 12,
    duration: "20 hours",
    students: 1245,
    instructor: "Alex Johnson",
    progress: 15,
    prerequisites: ["Basic computer skills", "No prior programming experience required"],
    whatYouWillLearn: [
      "Fundamental programming concepts",
      "Data types and variables",
      "Control structures",
      "Functions and methods",
      "Object-oriented programming",
      "Error handling",
    ],
    modules: [
      {
        id: 1,
        title: "Introduction to Programming",
        exercises: [
          { id: 101, title: "Hello World", completed: true },
          { id: 102, title: "Variables and Constants", completed: true },
          { id: 103, title: "Basic Operators", completed: false },
        ],
      },
      {
        id: 2,
        title: "Control Flow",
        exercises: [
          { id: 201, title: "Conditional Statements", completed: false },
          { id: 202, title: "Loops", completed: false },
          { id: 203, title: "Switch Statements", completed: false },
        ],
      },
      {
        id: 3,
        title: "Functions and Methods",
        exercises: [
          { id: 301, title: "Defining Functions", completed: false },
          { id: 302, title: "Parameters and Returns", completed: false },
          { id: 303, title: "Recursion", completed: false },
        ],
      },
      {
        id: 4,
        title: "Object-Oriented Programming",
        exercises: [
          { id: 401, title: "Classes and Objects", completed: false },
          { id: 402, title: "Inheritance", completed: false },
          { id: 403, title: "Polymorphism", completed: false },
          { id: 404, title: "Encapsulation", completed: false },
        ],
      },
    ],
  };
};
