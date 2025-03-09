
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { CodeEditor } from "@/components/CodeEditor";
import { getExerciseData } from "@/utils/exerciseUtils";
import ExerciseHeader from "@/components/exercise/ExerciseHeader";
import InstructionsPanel from "@/components/exercise/InstructionsPanel";

const Exercise = () => {
  const { courseId, exerciseId } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  // Get exercise data from utility
  const exerciseData = getExerciseData(exerciseId);
  
  // Initialize code state with initial code
  useEffect(() => {
    setCode(exerciseData.initialCode);
    setShowSuccess(false);
    setShowError(false);
  }, [exerciseId]);
  
  const handleCodeChange = (newCode) => {
    setCode(newCode);
    // Reset states when code changes
    setShowSuccess(false);
    setShowError(false);
  };
  
  const handleRunCode = () => {
    // In a real app, this would send the code to a backend for execution
    // Here we'll do a simple check
    if (code.includes("console.log(message)")) {
      toast({
        title: "Code executed successfully!",
        description: "Output: Hello, CodeQuest!",
      });
    } else {
      toast({
        title: "Code execution failed",
        description: "No output detected. Did you use console.log?",
        variant: "destructive",
      });
    }
  };
  
  const handleSubmitCode = () => {
    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      if (code.includes("console.log(message)")) {
        setShowSuccess(true);
        setShowError(false);
        toast({
          title: "Congratulations!",
          description: "Your solution is correct. You can now move on to the next exercise.",
        });
      } else {
        setShowError(true);
        setShowSuccess(false);
        setErrorMessage("Your code didn't produce the expected output. Make sure to use console.log() to print the message.");
        toast({
          title: "Incorrect solution",
          description: "Your code didn't produce the expected output.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }, 1500);
  };
  
  const handleNextExercise = () => {
    // In a real app, we would navigate to the next exercise based on the course structure
    // For now, we'll just increment the exercise ID
    const nextId = parseInt(exerciseId || "0") + 1;
    navigate(`/courses/${courseId}/exercises/${nextId}`);
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-6 md:px-6">
        <ExerciseHeader 
          exerciseData={exerciseData}
          courseId={courseId}
          handleRunCode={handleRunCode}
          handleSubmitCode={handleSubmitCode}
          isSubmitting={isSubmitting}
          showSuccess={showSuccess}
          handleNextExercise={handleNextExercise}
        />
        
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Instructions Panel */}
          <div className="lg:col-span-2">
            <InstructionsPanel 
              exerciseData={exerciseData}
              showSuccess={showSuccess}
              showError={showError}
              errorMessage={errorMessage}
            />
          </div>
          
          {/* Code Editor Panel */}
          <div className="lg:col-span-3">
            <CodeEditor code={code} language="javascript" onChange={handleCodeChange} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Exercise;
