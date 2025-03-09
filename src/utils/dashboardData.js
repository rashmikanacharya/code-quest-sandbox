
// Mock data for dashboard
export const getDashboardData = () => {
  return {
    userProgress: {
      coursesStarted: 2,
      coursesCompleted: 1,
      totalExercises: 45,
      completedExercises: 23,
    },
    recentActivity: [
      { id: 1, course: "Python Fundamentals", lastActivity: "Completed Exercise: Variables and Data Types" },
      { id: 2, course: "JavaScript Basics", lastActivity: "Started Exercise: Functions and Callbacks" },
    ],
    recommendedCourses: [
      { id: 1, title: "Java Essentials", level: "Beginner", progress: 0 },
      { id: 2, title: "Advanced Python", level: "Intermediate", progress: 0 },
    ]
  };
};
