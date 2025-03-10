
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold tracking-tight stripe-gradient-text">About CodeQuest</h1>
          <p className="text-muted-foreground mt-1 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Learn coding through interactive exercises and comprehensive courses.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 animate-slide-up" style={{ animationDelay: "300ms" }}>
          <div className="space-y-6">
            <div className="rounded-lg border p-6 bg-card text-card-foreground shadow-sm">
              <h2 className="text-2xl font-bold mb-4 stripe-gradient-text">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At CodeQuest, we believe that learning to code should be accessible, engaging, and effective. 
                Our platform is designed to help learners of all levels develop their programming skills through 
                hands-on practice and guided instruction.
              </p>
              <p className="text-muted-foreground">
                Whether you're just starting out or looking to expand your knowledge, CodeQuest provides the 
                resources and challenges you need to succeed in your coding journey.
              </p>
            </div>
            
            <div className="rounded-lg border p-6 bg-card text-card-foreground shadow-sm">
              <h2 className="text-2xl font-bold mb-4 stripe-gradient-text">Languages We Support</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-stripe-purple" />
                  <span>JavaScript and TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-stripe-purple" />
                  <span>Python</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-stripe-purple" />
                  <span>Java</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-stripe-purple" />
                  <span>C/C++</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-stripe-purple" />
                  <span>HTML, CSS, and React</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg border p-6 bg-card text-card-foreground shadow-sm">
            <h2 className="text-2xl font-bold mb-4 stripe-gradient-text">How It Works</h2>
            <div className="space-y-6">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-stripe-purple text-white">
                  1
                </div>
                <h3 className="font-bold">Sign Up</h3>
                <p className="text-muted-foreground">Create a free account to track your progress and save your work.</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-stripe-purple text-white">
                  2
                </div>
                <h3 className="font-bold">Choose a Course</h3>
                <p className="text-muted-foreground">Browse our course catalog and start with what interests you most.</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-stripe-purple text-white">
                  3
                </div>
                <h3 className="font-bold">Practice with Exercises</h3>
                <p className="text-muted-foreground">Complete interactive coding challenges tailored to your chosen language.</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-stripe-purple text-white">
                  4
                </div>
                <h3 className="font-bold">Track Your Progress</h3>
                <p className="text-muted-foreground">Monitor your learning journey and earn achievements along the way.</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild className="w-full stripe-button">
                <Link to="/register">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
