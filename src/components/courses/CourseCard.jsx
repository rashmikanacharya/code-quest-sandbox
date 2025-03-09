
import { Link } from "react-router-dom";
import { Code, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CourseCard = ({ course }) => {
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

export default CourseCard;
