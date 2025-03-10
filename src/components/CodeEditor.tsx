
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play, RefreshCw } from "lucide-react";

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (code: string) => void;
}

export function CodeEditor({ code, language, onChange }: CodeEditorProps) {
  const [currentCode, setCurrentCode] = useState(code);
  const [output, setOutput] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");
  
  // Update internal state when code prop changes
  useEffect(() => {
    setCurrentCode(code);
  }, [code]);
  
  // Handle code change in textarea
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCurrentCode(newCode);
    onChange(newCode);
  };
  
  // Run code functionality
  const runCode = () => {
    setOutput([]);
    setResult("");
    
    // Mock console log functionality
    const originalConsoleLog = console.log;
    const logs: string[] = [];
    
    console.log = (...args) => {
      originalConsoleLog(...args);
      logs.push(args.map(arg => String(arg)).join(' '));
      setOutput([...logs]);
    };
    
    try {
      // For safety, we're not actually evaluating the code here
      // but in a real implementation, you'd use a secure sandbox
      if (currentCode.includes("console.log") || 
          currentCode.includes("print") || 
          currentCode.includes("System.out.println")) {
        
        // Simulate program output based on language
        if (language === "javascript") {
          console.log("Hello, CodeHub!");
        } else if (language === "python") {
          console.log("Hello, CodeHub!");
        } else if (language === "java") {
          console.log("Hello, CodeHub!");
        }
        
        setResult("✅ Code executed successfully!");
      } else {
        setResult("⚠️ No output statements found!");
      }
    } catch (err) {
      setResult(`❌ Error: ${err}`);
    } finally {
      console.log = originalConsoleLog;
    }
  };
  
  // Reset code to initial
  const resetCode = () => {
    setCurrentCode(code);
    onChange(code);
    setOutput([]);
    setResult("");
  };

  // Get language-specific syntax hints and placeholders
  const getLanguageHints = () => {
    switch (language) {
      case "python":
        return {
          filename: "main.py",
          placeholder: "# Python code goes here\ndef main():\n    print('Hello, World!')\n\nif __name__ == '__main__':\n    main()",
          syntax: "Python uses indentation for code blocks. Use print() for output."
        };
      case "java":
        return {
          filename: "Main.java",
          placeholder: "// Java code goes here\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
          syntax: "Java requires a class structure. Use System.out.println() for output."
        };
      case "javascript":
      default:
        return {
          filename: "script.js",
          placeholder: "// JavaScript code goes here\nfunction main() {\n    console.log('Hello, World!');\n}\n\nmain();",
          syntax: "JavaScript is dynamically typed. Use console.log() for output."
        };
    }
  };

  const languageHints = getLanguageHints();
  
  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
        <div className="font-mono text-sm text-muted-foreground">
          {languageHints.filename}
        </div>
        <div className="flex items-center gap-2">
          <Button 
            onClick={runCode} 
            size="sm" 
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Play className="h-4 w-4 mr-1" /> Run
          </Button>
          <Button 
            onClick={resetCode} 
            size="sm" 
            variant="outline"
          >
            <RefreshCw className="h-4 w-4 mr-1" /> Reset
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Code Editor Section */}
        <div className="border-r">
          <textarea
            value={currentCode}
            onChange={handleCodeChange}
            className="font-mono w-full min-h-[400px] p-4 text-sm bg-black/90 text-white resize-none focus:outline-none"
            spellCheck="false"
            placeholder={languageHints.placeholder}
          />
        </div>
        
        {/* Output Section */}
        <div className="bg-gray-100 dark:bg-gray-800 flex flex-col">
          <div className="p-2 bg-gray-200 dark:bg-gray-700 border-b text-sm font-medium">
            Result:
          </div>
          <div className="flex-grow overflow-auto p-4">
            {result && (
              <div className={`mb-4 p-2 rounded ${
                result.startsWith("✅") ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300" : 
                result.startsWith("❌") ? "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300" :
                "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300"
              }`}>
                {result}
              </div>
            )}
            
            <div className="text-sm font-medium mb-2">Console output:</div>
            <div className="bg-white dark:bg-black/50 text-black dark:text-white p-2 rounded font-mono text-sm min-h-[200px] overflow-auto">
              {output.length > 0 ? (
                output.map((line, i) => (
                  <div key={i} className="py-1">
                    <span className="text-green-600 dark:text-green-400">{">"}</span> {line}
                  </div>
                ))
              ) : (
                <div className="text-muted-foreground">No output yet. Run your code to see results here.</div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Syntax Help Section */}
      <div className="border-t p-4 bg-gray-50 dark:bg-gray-900">
        <details className="text-sm">
          <summary className="font-medium cursor-pointer">Syntax Help</summary>
          <div className="mt-2 space-y-2">
            <p className="text-muted-foreground">{languageHints.syntax}</p>
            
            {language === "javascript" && (
              <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-auto">
{`// Basic JavaScript syntax example
let message = "Hello, World!";
console.log(message);  // Outputs to console`}
              </pre>
            )}
            
            {language === "python" && (
              <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-auto">
{`# Basic Python syntax example
message = "Hello, World!"
print(message)  # Outputs to console`}
              </pre>
            )}
            
            {language === "java" && (
              <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-auto">
{`// Basic Java syntax example
String message = "Hello, World!";
System.out.println(message);  // Outputs to console`}
              </pre>
            )}
          </div>
        </details>
      </div>
    </div>
  );
}
