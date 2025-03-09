
// Mock data for dashboard
export const getDashboardData = () => {
  // In a real app, this would come from a backend API based on the user's data
  return {
    userProgress: {
      coursesStarted: 3,
      coursesCompleted: 1,
      totalExercises: 45,
      completedExercises: 23,
      lastActive: new Date().toLocaleDateString(),
      streakDays: 5,
    },
    recentActivity: [
      { 
        id: 1, 
        course: "Python Fundamentals", 
        lastActivity: "Completed Exercise: Variables and Data Types",
        progress: 68,
        date: "2 days ago"
      },
      { 
        id: 2, 
        course: "JavaScript Basics", 
        lastActivity: "Started Exercise: Functions and Callbacks",
        progress: 32,
        date: "Yesterday"
      },
      { 
        id: 3, 
        course: "Java Essentials", 
        lastActivity: "Viewed Introduction to Java",
        progress: 12,
        date: "Just now"
      }
    ],
    recommendedCourses: [
      { id: 1, title: "Java Essentials", level: "Beginner", progress: 0, rating: 4.8, students: 2450 },
      { id: 2, title: "Advanced Python", level: "Intermediate", progress: 0, rating: 4.9, students: 1879 },
      { id: 3, title: "React for Beginners", level: "Beginner", progress: 0, rating: 4.7, students: 3200 },
    ],
    achievements: [
      { id: 1, title: "First Code", description: "Wrote your first line of code", earned: true },
      { id: 2, title: "Quick Learner", description: "Completed 3 exercises in one day", earned: true },
      { id: 3, title: "Consistent Coder", description: "Maintained a 5-day streak", earned: true },
      { id: 4, title: "Python Master", description: "Completed all Python exercises", earned: false },
    ]
  };
};
