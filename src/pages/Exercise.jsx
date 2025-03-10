
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { CodeEditor } from "@/components/CodeEditor";
import { getExerciseData, getAvailableLanguages } from "@/utils/exerciseUtils";
import ExerciseHeader from "@/components/exercise/ExerciseHeader";
import InstructionsPanel from "@/components/exercise/InstructionsPanel";
import { Footer } from "@/components/Footer";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";

const Exercise = () => {
  const { courseId, exerciseId } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [exerciseData, setExerciseData] = useState(null);
  
  // Get available languages
  const languages = getAvailableLanguages();
  
  // Get exercise data based on selected language
  useEffect(() => {
    const data = getExerciseData(exerciseId, language);
    setExerciseData(data);
    setCode(data.initialCode);
    setShowSuccess(false);
    setShowError(false);
  }, [exerciseId, language]);
  
  const handleCodeChange = (newCode) => {
    setCode(newCode);
    // Reset states when code changes
    setShowSuccess(false);
    setShowError(false);
  };
  
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };
  
  const handleRunCode = () => {
    // Different checks based on language
    let outputDetected = false;
    
    if (language === "javascript" && code.includes("console.log(message)")) {
      outputDetected = true;
    } else if (language === "python" && code.includes("print(message)")) {
      outputDetected = true;
    } else if (language === "java" && code.includes("System.out.println(message)")) {
      outputDetected = true;
    }
    
    if (outputDetected) {
      toast({
        title: "Code executed successfully!",
        description: `Output: Hello, CodeQuest!`,
      });
    } else {
      toast({
        title: "Code execution failed",
        description: `No output detected. Did you use ${language === "python" ? "print()" : language === "java" ? "System.out.println()" : "console.log()"}?`,
        variant: "destructive",
      });
    }
  };
  
  const handleSubmitCode = () => {
    setIsSubmitting(true);
    
    // Different checks based on language
    let outputDetected = false;
    
    if (language === "javascript" && code.includes("console.log(message)")) {
      outputDetected = true;
    } else if (language === "python" && code.includes("print(message)")) {
      outputDetected = true;
    } else if (language === "java" && code.includes("System.out.println(message)")) {
      outputDetected = true;
    }
    
    setTimeout(() => {
      if (outputDetected) {
        setShowSuccess(true);
        setShowError(false);
        toast({
          title: "Congratulations!",
          description: "Your solution is correct. You can now move on to the next exercise.",
        });
      } else {
        setShowError(true);
        setShowSuccess(false);
        setErrorMessage(`Your code didn't produce the expected output. Make sure to use ${language === "python" ? "print()" : language === "java" ? "System.out.println()" : "console.log()"} to print the message.`);
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
  
  if (!exerciseData) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-2xl font-bold animate-pulse">Loading...</p>
      </div>
    );
  }
  
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
        
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Programming Language:</span>
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.id} value={lang.id}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
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
            <CodeEditor code={code} language={language} onChange={handleCodeChange} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Exercise;
