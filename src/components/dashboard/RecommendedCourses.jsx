
import { Link } from "react-router-dom";
import { Code, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const RecommendedCourses = ({ courses }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Recommended Courses</h2>
        <Button asChild variant="outline" size="sm">
          <Link to="/courses">View All Courses</Link>
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
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
  );
};

export default RecommendedCourses;
