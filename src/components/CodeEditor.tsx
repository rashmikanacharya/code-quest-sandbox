
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
  
  return (
    <div className="rounded-md border">
      <Tabs defaultValue="editor">
        <TabsList className="w-full rounded-t-md rounded-b-none bg-muted">
          <TabsTrigger value="editor" className="flex-1">Editor</TabsTrigger>
          <TabsTrigger value="output" className="flex-1">Output</TabsTrigger>
        </TabsList>
        <TabsContent value="editor" className="m-0">
          <div className="relative">
            <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
              <div className="font-mono text-sm text-muted-foreground">
                {language === "javascript" ? "script.js" : language === "python" ? "main.py" : language === "java" ? "Main.java" : "code"}
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
      </Tabs>
    </div>
  );
}
