
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, AlertCircle, BookOpen, HelpCircle } from "lucide-react";

const InstructionsPanel = ({ exerciseData, showSuccess, showError, errorMessage }) => {
  return (
    <div>
      <Tabs defaultValue="instructions">
        <TabsList className="w-full">
          <TabsTrigger value="instructions" className="flex-1">
            <BookOpen className="h-4 w-4 mr-2" /> Instructions
          </TabsTrigger>
          <TabsTrigger value="hints" className="flex-1">
            <HelpCircle className="h-4 w-4 mr-2" /> Hints
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="instructions" className="p-4 border rounded-md mt-2 bg-white dark:bg-slate-900">
          <h2 className="text-lg font-bold mb-2">Exercise Instructions</h2>
          <p className="mb-4">{exerciseData.instructions}</p>
          
          <h3 className="text-md font-bold mb-2">Expected Output</h3>
          <pre className="bg-gray-100 dark:bg-slate-800 p-3 rounded-md text-sm overflow-auto">
            {exerciseData.testCases[0].expectedOutput}
          </pre>
        </TabsContent>
        
        <TabsContent value="hints" className="p-4 border rounded-md mt-2 bg-white dark:bg-slate-900">
          <h2 className="text-lg font-bold mb-2">Hints and Tips</h2>
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
  );
};

export default InstructionsPanel;
