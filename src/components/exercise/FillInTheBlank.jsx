
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Check, X, Info } from "lucide-react";

export const FillInTheBlank = ({ question, onAnswered }) => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  
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
    setAttempts(attempts + 1);
    
    if (matched) {
      onAnswered(true);
    } else if (attempts >= 2) {
      setShowHint(true);
    }
  };

  return (
    <div className="space-y-4">
      <div className="p-6 bg-slate-800 dark:bg-slate-900 text-white rounded-t-md">
        <h3 className="text-xl font-semibold text-center">{question.question}</h3>
      </div>

      <div className="p-4 bg-slate-700 dark:bg-slate-800 text-white">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-3">
                      <Input 
                        {...field} 
                        placeholder="Type your answer here"
                        className={`flex-1 text-black dark:text-white ${
                          isCorrect === true ? "border-green-500 bg-green-50 dark:bg-green-900/20" : 
                          isCorrect === false ? "border-red-500 bg-red-50 dark:bg-red-900/20" : ""
                        }`}
                        disabled={isCorrect === true}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="flex justify-end gap-3">
              {!isCorrect && (
                <Button 
                  variant="outline" 
                  className="bg-gray-600 hover:bg-gray-700 text-white"
                  onClick={() => setShowHint(true)}
                >
                  Show Answer
                </Button>
              )}
              
              <Button 
                type="submit" 
                disabled={isCorrect === true || !form.getValues("answer").trim()}
                className="bg-green-600 hover:bg-green-700"
              >
                Submit Answer »
              </Button>
            </div>
          </form>
        </Form>
        
        {isCorrect === false && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded text-red-700 dark:text-red-300 flex items-start gap-2">
            <X className="h-5 w-5 mt-0.5" />
            <p>Incorrect answer. {attempts >= 2 ? "Would you like a hint?" : "Please try again."}</p>
          </div>
        )}
        
        {showHint && !isCorrect && (
          <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900 rounded text-amber-700 dark:text-amber-300">
            <p>
              <span className="font-semibold">Hint:</span> {question.hint}
            </p>
          </div>
        )}
        
        {isCorrect && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded text-green-700 dark:text-green-300 flex items-start gap-2">
            <Check className="h-5 w-5 mt-0.5" />
            <p>Correct! You can now proceed to the coding exercise.</p>
          </div>
        )}
      </div>
    </div>
  );
};
