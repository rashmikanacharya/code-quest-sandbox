
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProgressOverview = ({ userProgress }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Courses Started</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{userProgress.coursesStarted}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{userProgress.coursesCompleted}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Exercises Completed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{userProgress.completedExercises}/{userProgress.totalExercises}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Math.round((userProgress.completedExercises / userProgress.totalExercises) * 100)}%</div>
          <Progress value={(userProgress.completedExercises / userProgress.totalExercises) * 100} className="mt-2" />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressOverview;
