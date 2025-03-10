
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (code: string) => void;
}

export function CodeEditor({ code, language, onChange }: CodeEditorProps) {
  const [currentCode, setCurrentCode] = useState(code);
  const [output, setOutput] = useState<string[]>([]);
  
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
  
  // Mock console log functionality
  useEffect(() => {
    const originalConsoleLog = console.log;
    const logs: string[] = [];
    
    console.log = (...args) => {
      originalConsoleLog(...args);
      logs.push(args.map(arg => String(arg)).join(' '));
      setOutput([...logs]);
    };
    
    return () => {
      console.log = originalConsoleLog;
    };
  }, []);

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
      <Tabs defaultValue="editor">
        <TabsList className="w-full rounded-t-md rounded-b-none bg-muted">
          <TabsTrigger value="editor" className="flex-1">Editor</TabsTrigger>
          <TabsTrigger value="output" className="flex-1">Output</TabsTrigger>
          <TabsTrigger value="hints" className="flex-1">Syntax Help</TabsTrigger>
        </TabsList>
        <TabsContent value="editor" className="m-0">
          <div className="relative">
            <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
              <div className="font-mono text-sm text-muted-foreground">
                {languageHints.filename}
              </div>
              <div className="flex space-x-1">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <textarea
              value={currentCode}
              onChange={handleCodeChange}
              className="font-mono w-full min-h-[400px] p-4 text-sm bg-black/90 text-white resize-none focus:outline-none"
              spellCheck="false"
              placeholder={languageHints.placeholder}
            />
          </div>
        </TabsContent>
        <TabsContent value="output" className="m-0">
          <div className="bg-black/90 text-white font-mono text-sm p-4 min-h-[400px]">
            {output.length > 0 ? (
              output.map((line, i) => (
                <div key={i} className="py-1">
                  <span className="text-green-400">{">"}</span> {line}
                </div>
              ))
            ) : (
              <div className="text-muted-foreground">No output yet. Run your code to see results here.</div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="hints" className="m-0">
          <div className="bg-black/90 text-white font-mono text-sm p-4 min-h-[400px]">
            <h3 className="text-lg font-bold mb-4">{language.charAt(0).toUpperCase() + language.slice(1)} Syntax Guide</h3>
            <p className="mb-4">{languageHints.syntax}</p>
            
            {language === "python" && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-bold text-stripe-purple">Basic Syntax:</h4>
                  <pre className="mt-2 p-2 bg-gray-800 rounded">
{`# This is a comment
x = 10  # Variable assignment
print(x)  # Print to console

# Functions
def my_function(param):
    return param * 2  # Indentation is important!

# Conditionals
if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")`}
                  </pre>
                </div>
              </div>
            )}

            {language === "java" && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-bold text-stripe-purple">Basic Syntax:</h4>
                  <pre className="mt-2 p-2 bg-gray-800 rounded">
{`// This is a comment
public class MyClass {
    public static void main(String[] args) {
        int x = 10;  // Variable declaration
        System.out.println(x);  // Print to console
        
        // Conditionals
        if (x > 5) {
            System.out.println("x is greater than 5");
        } else {
            System.out.println("x is not greater than 5");
        }
    }
    
    // Method declaration
    public static int myMethod(int param) {
        return param * 2;
    }
}`}
                  </pre>
                </div>
              </div>
            )}

            {language === "javascript" && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-bold text-stripe-purple">Basic Syntax:</h4>
                  <pre className="mt-2 p-2 bg-gray-800 rounded">
{`// This is a comment
let x = 10;  // Variable declaration
console.log(x);  // Print to console

// Functions
function myFunction(param) {
    return param * 2;
}

// Arrow function
const myArrowFunc = (param) => param * 2;

// Conditionals
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}`}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
