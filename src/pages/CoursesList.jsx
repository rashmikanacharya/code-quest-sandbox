
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getAllCourses } from "@/utils/coursesData";
import CoursesList from "@/components/courses/CoursesList";

const CoursesListPage = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);
  
  // Get courses data from utility
  const allCourses = getAllCourses();
  
  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-2xl font-bold animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container px-4 py-8 md:px-6 flex flex-col items-center justify-center">
          <div className="text-center space-y-4 max-w-md">
            <h2 className="text-2xl font-bold stripe-gradient-text">Please Sign In</h2>
            <p className="text-muted-foreground">You need to be signed in to view the courses.</p>
            <Button asChild className="stripe-button">
              <a href="/login">Sign In</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold tracking-tight stripe-gradient-text">Browse Courses</h1>
          <p className="text-muted-foreground mt-1 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Discover our comprehensive curriculum to develop your coding skills.
          </p>
        </div>
        
        {/* Search and Filters */}
        <CoursesList courses={allCourses} />
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursesListPage;
