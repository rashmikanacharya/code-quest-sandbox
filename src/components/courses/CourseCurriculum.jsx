
import ModuleCard from "./ModuleCard";

const CourseCurriculum = ({ course }) => {
  return (
    <div className="space-y-6">
      {course.modules.map((module, index) => (
        <ModuleCard 
          key={module.id} 
          module={module} 
          courseId={course.id} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default CourseCurriculum;
