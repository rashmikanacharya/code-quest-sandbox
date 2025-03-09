
import { Link } from "react-router-dom";
import { CheckCircle2, CircleEllipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ModuleCard = ({ module, courseId, index }) => {
  return (
    <Card key={module.id} className="overflow-hidden transition-all hover:shadow-md animate-slide-up" style={{ animationDelay: `${300 + (index * 50)}ms` }}>
      <CardHeader className="pb-3 bg-muted/30">
        <CardTitle className="font-heading">Module {module.id}: {module.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {module.exercises.map((exercise) => (
            <li key={exercise.id} className="flex items-center justify-between py-2 border-b last:border-0">
              <div className="flex items-center gap-2">
                {exercise.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <CircleEllipsis className="h-5 w-5 text-muted-foreground" />
                )}
                <span className={`${exercise.completed ? "line-through text-muted-foreground" : ""} font-medium`}>
                  {exercise.title}
                </span>
              </div>
              <Button asChild variant="ghost" size="sm" 
                      className={`${exercise.completed ? "hover:bg-green-100 hover:text-green-800 dark:hover:bg-green-900 dark:hover:text-green-100" : 
                        "hover:bg-primary/10 hover:text-primary"}`}>
                <Link to={`/courses/${courseId}/exercises/${exercise.id}`}>
                  {exercise.completed ? "Review" : "Start"}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
