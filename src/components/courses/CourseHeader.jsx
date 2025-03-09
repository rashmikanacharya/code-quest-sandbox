
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Book, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const CourseHeader = ({ course, progressPercentage, completedExercises }) => {
  return (
    <div className="mb-8 animate-slide-up">
      <div className="flex items-center gap-2 mb-4">
        <Link to="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back to courses</span>
        </Link>
        <div className={`px-2 py-1 text-xs font-medium rounded-full 
          ${course.category === "Java" ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100" : 
            course.category === "Python" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" : 
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"}`}
        >
          {course.category}
        </div>
        <div className={`px-2 py-1 text-xs font-medium rounded-full 
          ${course.level === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : 
            "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"}`}
        >
          {course.level}
        </div>
      </div>
      
      <h1 className="text-4xl font-heading font-bold tracking-tight mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-text-gradient">
        {course.title}
      </h1>
      <p className="text-xl text-muted-foreground mb-6 max-w-3xl animate-slide-up-slow">
        {course.description}
      </p>
      
      <div className="flex flex-wrap gap-6 mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium">{course.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Book className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium">{course.modules.length} modules</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium">{course.students.toLocaleString()} students enrolled</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-2 animate-slide-up" style={{ animationDelay: "150ms" }}>
        <span className="text-sm font-medium">Your progress:</span>
        <span className="text-sm font-medium">{progressPercentage}%</span>
      </div>
      <Progress value={progressPercentage} className="h-2 mb-8" />
      
      <div className="flex gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
        <Button asChild className="flex-1 sm:flex-none bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-md hover:shadow-lg">
          <Link to={`/courses/${course.id}/exercises/${course.modules[0].exercises[0].id}`}>
            {completedExercises > 0 ? "Continue Learning" : "Start Learning"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseHeader;
