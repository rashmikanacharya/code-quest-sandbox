
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCourseData } from "@/utils/courseData";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseOverview from "@/components/courses/CourseOverview";
import CourseCurriculum from "@/components/courses/CourseCurriculum";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Get course data from utility
  const course = getCourseData(courseId);
  
  const completedExercises = course.modules.flatMap(m => m.exercises).filter(e => e.completed).length;
  const totalExercises = course.modules.flatMap(m => m.exercises).length;
  const progressPercentage = Math.round((completedExercises / totalExercises) * 100);
  
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        {/* Course Header */}
        <CourseHeader 
          course={course} 
          progressPercentage={progressPercentage}
          completedExercises={completedExercises}
        />
        
        {/* Course Content */}
        <div className="animate-slide-up" style={{ animationDelay: "250ms" }}>
          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-2 h-auto">
              <TabsTrigger value="overview" className="font-medium">Overview</TabsTrigger>
              <TabsTrigger value="curriculum" className="font-medium">Curriculum</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <CourseOverview course={course} />
            </TabsContent>
            
            <TabsContent value="curriculum" className="mt-6">
              <CourseCurriculum course={course} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
