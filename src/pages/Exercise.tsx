
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { CodeEditor } from "@/components/CodeEditor";
import { ArrowLeft, ArrowRight, Info, CheckCircle, AlertCircle } from "lucide-react";

interface ExerciseData {
  id: number;
  title: string;
  instructions: string;
  hints: string[];
  initialCode: string;
  solution: string;
  testCases: Array<{
    input: string;
    expectedOutput: string;
  }>;
}

const Exercise = () => {
  const { courseId, exerciseId } = useParams<{ courseId: string; exerciseId: string }>();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  // Mock exercise data
  const exerciseData: ExerciseData = {
    id: parseInt(exerciseId || "101"),
    title: "Hello World Program",
    instructions: "In this exercise, you'll write your first program. Complete the code below to output 'Hello, CodeQuest!' to the console.",
    hints: [
      "Use the console.log() function to print to the console.",
      "Make sure to match the expected output exactly, including capitalization and punctuation."
    ],
    initialCode: 
`function greet() {
  // Complete the code below
  let message = "Hello, CodeQuest!";
  
  // Your code here
  
  return message;
}

// Don't modify the code below
console.log(greet());`,
    solution: 
`function greet() {
  // Complete the code below
  let message = "Hello, CodeQuest!";
  
  // Your code here
  console.log(message);
  
  return message;
}

// Don't modify the code below
console.log(greet());`,
    testCases: [
      {
        input: "",
        expectedOutput: "Hello, CodeQuest!"
      }
    ]
  };
  
  // Initialize code state with initial code
  useEffect(() => {
    setCode(exerciseData.initialCode);
    setShowSuccess(false);
    setShowError(false);
  }, [exerciseId]);
  
  const handleCodeChange = (newCode: string) => {
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
        <div className="flex items-center justify-between mb-6">
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
            <Button variant="outline" onClick={handleRunCode}>
              Run Code
            </Button>
            <Button 
              onClick={handleSubmitCode} 
              disabled={isSubmitting}
              className={showSuccess ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {isSubmitting ? "Checking..." : (showSuccess ? "Passed!" : "Submit")}
            </Button>
            {showSuccess && (
              <Button onClick={handleNextExercise}>
                Next Exercise
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Instructions Panel */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="instructions">
              <TabsList className="w-full">
                <TabsTrigger value="instructions" className="flex-1">Instructions</TabsTrigger>
                <TabsTrigger value="hints" className="flex-1">Hints</TabsTrigger>
              </TabsList>
              
              <TabsContent value="instructions" className="p-4 border rounded-md mt-2">
                <h2 className="text-lg font-bold mb-2">Instructions</h2>
                <p className="mb-4">{exerciseData.instructions}</p>
                
                <h3 className="text-md font-bold mb-2">Expected Output</h3>
                <pre className="bg-muted p-2 rounded-md">
                  {exerciseData.testCases[0].expectedOutput}
                </pre>
              </TabsContent>
              
              <TabsContent value="hints" className="p-4 border rounded-md mt-2">
                <h2 className="text-lg font-bold mb-2">Hints</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {exerciseData.hints.map((hint, index) => (
                    <li key={index}>{hint}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
            
            {/* Feedback Messages */}
            {showSuccess && (
              <div className="mt-4 p-4 border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900 rounded-md">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-green-600 dark:text-green-400">Correct Solution!</h3>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Great job! You've successfully completed this exercise. You can proceed to the next one.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {showError && (
              <div className="mt-4 p-4 border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-900 rounded-md">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-red-600 dark:text-red-400">Incorrect Solution</h3>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}
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
