
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, CheckCircle2, CircleEllipsis, Clock, Users, ArrowLeft, ArrowRight } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock course data
  const course = {
    id: parseInt(courseId || "1"),
    title: courseId === "1" ? "Java Fundamentals" : 
           courseId === "2" ? "Python for Beginners" : 
           courseId === "3" ? "JavaScript Essentials" : "Course",
    description: "This comprehensive course will take you from a beginner to a proficient programmer with hands-on exercises and real-world projects.",
    level: "Beginner",
    category: courseId === "1" ? "Java" : 
              courseId === "2" ? "Python" : 
              courseId === "3" ? "JavaScript" : "Programming",
    modules: 12,
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
  
  const completedExercises = course.modules.flatMap(m => m.exercises).filter(e => e.completed).length;
  const totalExercises = course.modules.flatMap(m => m.exercises).length;
  const progressPercentage = Math.round((completedExercises / totalExercises) * 100);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/courses" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to courses</span>
            </Link>
            <div className={`px-2 py-1 text-xs rounded-full 
              ${course.category === "Java" ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100" : 
                course.category === "Python" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" : 
                "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"}`}
            >
              {course.category}
            </div>
            <div className={`px-2 py-1 text-xs rounded-full 
              ${course.level === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : 
                "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"}`}
            >
              {course.level}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight mb-2">{course.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
          
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Book className="h-5 w-5 text-muted-foreground" />
              <span>{course.modules.length} modules</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>{course.students.toLocaleString()} students enrolled</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <span className="text-sm font-medium">Your progress:</span>
            <span className="text-sm font-medium">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2 mb-8" />
          
          <div className="flex gap-4">
            <Button asChild className="flex-1 sm:flex-none">
              <Link to={`/courses/${courseId}/exercises/${course.modules[0].exercises[0].id}`}>
                {completedExercises > 0 ? "Continue Learning" : "Start Learning"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Course Content */}
        <div>
          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
                  <ul className="space-y-2">
                    {course.whatYouWillLearn.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
                  <ul className="space-y-2">
                    {course.prerequisites.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="mt-6">
              <div className="space-y-6">
                {course.modules.map((module) => (
                  <Card key={module.id}>
                    <CardHeader className="pb-3">
                      <CardTitle>Module {module.id}: {module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {module.exercises.map((exercise) => (
                          <li key={exercise.id} className="flex items-center justify-between py-2 border-b last:border-0">
                            <div className="flex items-center gap-2">
                              {exercise.completed ? (
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                              ) : (
                                <CircleEllipsis className="h-5 w-5 text-muted-foreground" />
                              )}
                              <span className={exercise.completed ? "line-through text-muted-foreground" : ""}>
                                {exercise.title}
                              </span>
                            </div>
                            <Button asChild variant="ghost" size="sm">
                              <Link to={`/courses/${courseId}/exercises/${exercise.id}`}>
                                {exercise.completed ? "Review" : "Start"}
                              </Link>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
