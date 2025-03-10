
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const ExerciseHeader = ({ 
  exerciseData, 
  courseId, 
  handleRunCode, 
  handleSubmitCode, 
  isSubmitting, 
  showSuccess, 
  handleNextExercise,
  disabled
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="icon">
          <Link to={`/courses/${courseId}`}>
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to course</span>
          </Link>
        </Button>
        <h1 className="text-xl font-bold">{exerciseData.title}</h1>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          onClick={handleRunCode} 
          disabled={disabled}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Run Code
        </Button>
        <Button 
          onClick={handleSubmitCode} 
          disabled={isSubmitting || disabled}
          className={showSuccess ? "bg-green-600 hover:bg-green-700" : "bg-green-600 hover:bg-green-700"}
        >
          {isSubmitting ? "Checking..." : (showSuccess ? "Passed!" : "Submit Answer")} 
          {!isSubmitting && <ChevronRight className="ml-1 h-4 w-4" />}
        </Button>
        {showSuccess && (
          <Button 
            onClick={handleNextExercise}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Next Exercise
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ExerciseHeader;
