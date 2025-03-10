
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronRight, Share2, Bookmark, Menu } from "lucide-react";

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
    <div className="w-full">
      {/* W3Schools-like top header */}
      <div className="flex items-center justify-between bg-slate-800 text-white px-4 py-3">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon" className="text-white hover:bg-slate-700">
            <Link to={`/courses/${courseId}`}>
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white hover:bg-slate-700">
            <ArrowRight className="h-5 w-5" />
            <span className="sr-only">Forward</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white hover:bg-slate-700">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
        
        <div className="text-center">
          <h1 className="text-lg">Code-Hub Exercise</h1>
          <p className="text-xs text-slate-300">codehub.com</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-slate-700">
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white hover:bg-slate-700">
            <Bookmark className="h-5 w-5" />
            <span className="sr-only">Bookmark</span>
          </Button>
        </div>
      </div>
      
      {/* Action buttons for running code and submitting answers */}
      {!disabled && (
        <div className="flex justify-center py-4 gap-4 bg-slate-700">
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
      )}
    </div>
  );
};

export default ExerciseHeader;
