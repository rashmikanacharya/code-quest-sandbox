
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Check, ChevronRight, Lightbulb } from "lucide-react";

export const FillInTheBlank = ({ question, onAnswered }) => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const form = useForm({
    defaultValues: {
      answer: "",
    },
  });

  const handleSubmit = (data) => {
    const submittedAnswer = data.answer.trim();
    const correctAnswer = question.answer;
    
    const matched = submittedAnswer.toLowerCase() === correctAnswer.toLowerCase();
    setIsCorrect(matched);
    
    if (matched) {
      onAnswered(true);
    }
  };

  const handleShowAnswer = () => {
    form.setValue("answer", question.answer);
    setIsCorrect(true);
    setShowAnswer(true);
    onAnswered(true);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-slate-800 text-white p-4 rounded-t-md">
        <h3 className="text-xl font-semibold text-center py-4">{question.languageName} Syntax</h3>
        
        {/* Progress indicator */}
        <div className="w-full bg-slate-600 h-2 rounded-full my-4">
          <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
        </div>
      </div>
      
      <div className="bg-slate-700 text-white p-8">
        <h2 className="text-xl text-center mb-8">
          {question.question}
        </h2>
        
        <div className="font-mono text-lg bg-slate-800 p-6 rounded mb-8 overflow-x-auto">
          {question.codeSnippet.map((line, index) => (
            <div key={index} className="whitespace-pre">
              {line}
            </div>
          ))}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="Type your answer here"
                      className={`text-black dark:text-white text-center text-lg py-6 ${
                        isCorrect === true ? "border-green-500 bg-green-50 dark:bg-green-900/20" : 
                        isCorrect === false ? "border-red-500 bg-red-50 dark:bg-red-900/20" : ""
                      }`}
                      disabled={isCorrect === true || showAnswer}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                type="button"
                variant="secondary" 
                onClick={handleShowAnswer}
                className="bg-slate-600 hover:bg-slate-700 text-white w-full sm:w-auto"
              >
                Show Answer
              </Button>
              
              {!showAnswer && (
                <Button 
                  type="submit" 
                  disabled={isCorrect === true || !form.getValues("answer").trim()}
                  className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                >
                  Submit Answer <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </Form>
        
        {showHint && !isCorrect && (
          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900 rounded text-amber-700 dark:text-amber-300 flex items-start gap-2">
            <Lightbulb className="h-5 w-5 mt-0.5" />
            <p><span className="font-semibold">Hint:</span> {question.hint}</p>
          </div>
        )}
        
        {isCorrect && (
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded text-green-700 dark:text-green-300 flex items-start gap-2">
            <Check className="h-5 w-5 mt-0.5" />
            <div>
              <p className="font-semibold">Correct!</p>
              <p>Great job! You can now proceed to the next exercise.</p>
            </div>
          </div>
        )}
        
        <div className="text-center mt-8">
          <Button 
            type="button" 
            variant="link" 
            className="text-blue-400 hover:text-blue-300"
            onClick={() => setShowHint(!showHint)}
          >
            What is an Exercise?
          </Button>
        </div>
      </div>
    </div>
  );
};
