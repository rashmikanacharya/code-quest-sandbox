
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, BookOpen, Award, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Stripe-like animation */}
        <section className="hero-section overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 animate-slide-up">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none stripe-gradient-text">
                    Learn to code interactively with CodeQuest
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: "300ms" }}>
                    Master programming through hands-on coding exercises. Learn Java, Python, JavaScript and more in an engaging environment.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row animate-slide-up" style={{ animationDelay: "400ms" }}>
                  <Button asChild size="lg" className="stripe-button rounded-full px-8">
                    <Link to="/register">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="rounded-full">
                    <Link to="/courses">Explore Courses</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block animate-blur-in" style={{ animationDelay: "500ms" }}>
                <div className="rounded-lg border bg-card p-8 shadow-lg transition-all hover:shadow-xl">
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <pre className="rounded-md bg-black/90 p-4 font-mono text-sm text-white overflow-x-auto">
{`function greet() {
  // Complete the code below
  let message = "Hello, CodeQuest!";
  
  // Your code here
  console.log(message);
  
  return message;
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="section-container bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-slide-up">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl stripe-gradient-text">
                  Features that make learning fun
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our interactive platform provides everything you need to become a confident programmer.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stripe-purple text-white">
                  <Code className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Interactive Coding</h3>
                  <p className="text-muted-foreground">
                    Write, run, and test code directly in your browser with real-time feedback.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stripe-purple text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Comprehensive Courses</h3>
                  <p className="text-muted-foreground">
                    Structured learning paths for Java, Python, JavaScript, and more.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stripe-purple text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Progress Tracking</h3>
                  <p className="text-muted-foreground">
                    Track your learning journey with achievements and progress indicators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="section-container">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 animate-slide-up">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl stripe-gradient-text">
                  Why choose CodeQuest?
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
                    <CheckCircle className="h-5 w-5 text-stripe-purple mt-0.5" />
                    <span>Learn at your own pace with self-paced courses</span>
                  </li>
                  <li className="flex items-start gap-2 animate-slide-up" style={{ animationDelay: "300ms" }}>
                    <CheckCircle className="h-5 w-5 text-stripe-purple mt-0.5" />
                    <span>Practice with real-world coding exercises</span>
                  </li>
                  <li className="flex items-start gap-2 animate-slide-up" style={{ animationDelay: "400ms" }}>
                    <CheckCircle className="h-5 w-5 text-stripe-purple mt-0.5" />
                    <span>Get instant feedback on your code</span>
                  </li>
                  <li className="flex items-start gap-2 animate-slide-up" style={{ animationDelay: "500ms" }}>
                    <CheckCircle className="h-5 w-5 text-stripe-purple mt-0.5" />
                    <span>Join a community of learners and mentors</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center animate-blur-in" style={{ animationDelay: "300ms" }}>
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-stripe-purple to-stripe-blue opacity-30 blur"></div>
                  <div className="relative rounded-lg bg-white p-6 shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-stripe-purple text-white flex items-center justify-center">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">10,000+</h4>
                          <p className="text-sm text-muted-foreground">Students enrolled</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-stripe-purple text-white flex items-center justify-center">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">50+</h4>
                          <p className="text-sm text-muted-foreground">Interactive courses</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-stripe-purple text-white flex items-center justify-center">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">500+</h4>
                          <p className="text-sm text-muted-foreground">Coding exercises</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-container bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-slide-up">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl stripe-gradient-text">
                  Start Your Coding Journey Today
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of learners who have mastered programming with CodeQuest.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
                <Button asChild className="w-full stripe-button rounded-full" size="lg">
                  <Link to="/register">
                    Sign Up for Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  No credit card required. Start learning instantly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
