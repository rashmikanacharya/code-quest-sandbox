
import { CheckCircle2 } from "lucide-react";

const CourseOverview = ({ course }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
        <h2 className="text-xl font-heading font-bold mb-4">What You'll Learn</h2>
        <ul className="space-y-3">
          {course.whatYouWillLearn.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="animate-slide-up" style={{ animationDelay: "350ms" }}>
        <h2 className="text-xl font-heading font-bold mb-4">Prerequisites</h2>
        <ul className="space-y-3">
          {course.prerequisites.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseOverview;
