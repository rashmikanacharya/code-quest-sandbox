
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDashboardData } from "@/utils/dashboardData";
import ProgressOverview from "@/components/dashboard/ProgressOverview";
import RecentActivity from "@/components/dashboard/RecentActivity";
import RecommendedCourses from "@/components/dashboard/RecommendedCourses";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);
  
  // Get dashboard data from utility
  const { userProgress, recentActivity, recommendedCourses } = getDashboardData();

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-2xl font-bold animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in the useEffect
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold tracking-tight stripe-gradient-text">Welcome back, {user?.name || "Coder"}!</h1>
          <p className="text-muted-foreground mt-1 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Continue your learning journey from where you left off.
          </p>
        </div>
        
        {/* Progress Overview */}
        <ProgressOverview userProgress={userProgress} />
        
        {/* Recent Activity */}
        <RecentActivity activities={recentActivity} />
        
        {/* Recommended Courses */}
        <RecommendedCourses courses={recommendedCourses} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
