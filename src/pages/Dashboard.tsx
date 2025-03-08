
import { useAuth } from "@/context/AuthContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { BookOpen, Code, Trophy, ArrowRight } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();

  // Mock data for user progress and recommended courses
  const userProgress = {
    coursesStarted: 2,
    coursesCompleted: 1,
    totalExercises: 45,
    completedExercises: 23,
  };

  const recentActivity = [
    { id: 1, course: "Python Fundamentals", lastActivity: "Completed Exercise: Variables and Data Types" },
    { id: 2, course: "JavaScript Basics", lastActivity: "Started Exercise: Functions and Callbacks" },
  ];

  const recommendedCourses = [
    { id: 1, title: "Java Essentials", level: "Beginner", progress: 0 },
    { id: 2, title: "Advanced Python", level: "Intermediate", progress: 0 },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name || "Coder"}!</h1>
          <p className="text-muted-foreground mt-1">Continue your learning journey from where you left off.</p>
        </div>
        
        {/* Progress Overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Courses Started</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProgress.coursesStarted}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProgress.coursesCompleted}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Exercises Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProgress.completedExercises}/{userProgress.totalExercises}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round((userProgress.completedExercises / userProgress.totalExercises) * 100)}%</div>
              <Progress value={(userProgress.completedExercises / userProgress.totalExercises) * 100} className="mt-2" />
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <Card key={activity.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">{activity.course}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{activity.lastActivity}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm">
                    <Link to={`/courses/${activity.id}`}>Continue <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Recommended Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold tracking-tight">Recommended Courses</h2>
            <Button asChild variant="outline" size="sm">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>Level: {course.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      {course.title.includes("Java") ? (
                        <Code className="h-6 w-6" />
                      ) : (
                        <BookOpen className="h-6 w-6" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Join hundreds of students learning {course.title.split(" ")[0]}.</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={`/courses/${course.id}`}>Start Learning</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
