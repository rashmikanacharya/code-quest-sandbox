
import ModuleCard from "./ModuleCard";

const CourseCurriculum = ({ course }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight stripe-gradient-text mb-4">Course Curriculum</h2>
      
      {course.modules.map((module, index) => (
        <ModuleCard 
          key={module.id} 
          module={module} 
          courseId={course.id} 
          index={index}
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
};

export default CourseCurriculum;
