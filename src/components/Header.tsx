
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl">CodeQuest</span>
        </Link>
        
        <div className="hidden md:flex md:items-center md:space-x-6">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link to="/courses" className="transition-colors hover:text-foreground/80">
              Courses
            </Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild variant="default" size="sm">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
        
        <div className="flex md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className={`h-5 w-5 ${isMenuOpen ? "hidden" : "block"}`} />
            <X className={`h-5 w-5 ${isMenuOpen ? "block" : "hidden"}`} />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container pb-4 pt-2">
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <Link 
                to="/" 
                className="block py-2 transition-colors hover:text-foreground/80"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/courses" 
                className="block py-2 transition-colors hover:text-foreground/80"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/about" 
                className="block py-2 transition-colors hover:text-foreground/80"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex space-x-2 pt-2">
                <Button asChild variant="default" size="sm">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
