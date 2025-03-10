
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
      <div className="flex items-start gap-3 mb-6">
        <div className="mt-1 bg-blue-100 dark:bg-blue-900 p-2 rounded-full flex-shrink-0">
          <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Before you start coding</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Answer the following question to unlock the coding exercise:
          </p>
        </div>
      </div>

      <div className="p-4 rounded-md bg-white dark:bg-slate-800 border shadow-sm">
        <h3 className="text-md font-semibold mb-4">{question.question}</h3>
        
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
                        className={`flex-1 border-2 ${
                          isCorrect === true ? "border-green-500 bg-green-50 dark:bg-green-900/20" : 
                          isCorrect === false ? "border-red-500 bg-red-50 dark:bg-red-900/20" : ""
                        }`}
                        disabled={isCorrect === true}
                      />
                      <Button 
                        type="submit" 
                        disabled={isCorrect === true || !field.value.trim()}
                        className={isCorrect === true ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {isCorrect === true ? (
                          <>
                            <Check className="mr-2 h-4 w-4" />
                            Correct
                          </>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        
        {isCorrect === false && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded flex items-start gap-2">
            <X className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
            <p className="text-sm text-red-700 dark:text-red-300">
              Incorrect answer. {attempts >= 2 && "Would you like a hint?"}
            </p>
          </div>
        )}
        
        {(showHint || attempts >= 3) && !isCorrect && (
          <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900 rounded">
            <p className="text-sm text-amber-700 dark:text-amber-300">
              <span className="font-semibold">Hint:</span> {question.hint}
            </p>
          </div>
        )}
        
        {!showHint && attempts >= 2 && !isCorrect && (
          <Button
            variant="outline"
            size="sm"
            className="mt-3"
            onClick={() => setShowHint(true)}
          >
            Show Hint
          </Button>
        )}
        
        {isCorrect && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded flex items-start gap-2">
            <Check className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
            <p className="text-sm text-green-700 dark:text-green-300">
              Correct! You can now proceed to the coding exercise.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
