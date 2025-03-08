
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Code, BookOpen, Search, ArrowRight } from "lucide-react";

const CoursesList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data for courses
  const allCourses = [
    {
      id: 1,
      title: "Java Fundamentals",
      description: "Learn the basics of Java programming language, including syntax, data types, and object-oriented programming concepts.",
      level: "Beginner",
      category: "Java",
      modules: 12,
      duration: "20 hours",
      students: 1245,
    },
    {
      id: 2,
      title: "Python for Beginners",
      description: "Start your Python journey with this comprehensive course covering Python basics, data structures, and control flow.",
      level: "Beginner",
      category: "Python",
      modules: 10,
      duration: "15 hours",
      students: 2350,
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      description: "Master the fundamentals of JavaScript, from basic syntax to DOM manipulation and asynchronous programming.",
      level: "Beginner",
      category: "JavaScript",
      modules: 8,
      duration: "12 hours",
      students: 1870,
    },
    {
      id: 4,
      title: "Advanced Java Programming",
      description: "Dive deep into Java with advanced topics like concurrency, streams, lambdas, and design patterns.",
      level: "Intermediate",
      category: "Java",
      modules: 15,
      duration: "25 hours",
      students: 875,
    },
    {
      id: 5,
      title: "Python Data Analysis",
      description: "Learn how to analyze data using Python libraries like Pandas, NumPy, and Matplotlib.",
      level: "Intermediate",
      category: "Python",
      modules: 14,
      duration: "22 hours",
      students: 1430,
    },
    {
      id: 6,
      title: "Full-Stack JavaScript",
      description: "Build complete web applications with JavaScript, Node.js, Express, and React.",
      level: "Intermediate",
      category: "JavaScript",
      modules: 18,
      duration: "30 hours",
      students: 1120,
    },
  ];
  
  const filteredCourses = allCourses.filter(course => {
    return course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           course.description.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Browse Courses</h1>
          <p className="text-muted-foreground mt-1">Discover our comprehensive curriculum to develop your coding skills.</p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search courses..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="java">Java</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="java" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses
                  .filter(course => course.category === "Java")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="python" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses
                  .filter(course => course.category === "Python")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="javascript" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses
                  .filter(course => course.category === "JavaScript")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
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

// Course Card Component
interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    level: string;
    category: string;
    modules: number;
    duration: string;
    students: number;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className={`flex h-8 w-8 items-center justify-center rounded-full 
            ${course.category === "Java" ? "bg-orange-500" : 
              course.category === "Python" ? "bg-blue-500" : "bg-yellow-500"} 
            text-white`}
          >
            <Code className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium">{course.category}</span>
          <span className={`ml-auto text-xs px-2 py-1 rounded-full 
            ${course.level === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : 
              "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"}`}
          >
            {course.level}
          </span>
        </div>
        <CardTitle className="text-xl">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">{course.modules}</span> modules
          </div>
          <div>
            <span className="font-medium">{course.duration}</span>
          </div>
          <div className="col-span-2">
            <span className="font-medium">{course.students.toLocaleString()}</span> students enrolled
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/courses/${course.id}`}>View Course <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CoursesList;
