
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllCourses } from "@/utils/coursesData";
import CoursesList from "@/components/courses/CoursesList";

const CoursesListPage = () => {
  // Get courses data from utility
  const allCourses = getAllCourses();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Browse Courses</h1>
          <p className="text-muted-foreground mt-1">Discover our comprehensive curriculum to develop your coding skills.</p>
        </div>
        
        {/* Search and Filters */}
        <CoursesList courses={allCourses} />
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursesListPage;
