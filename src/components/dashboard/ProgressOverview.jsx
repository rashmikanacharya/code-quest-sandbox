
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Flame, Book, CheckCircle, Trophy } from "lucide-react";

const ProgressOverview = ({ userProgress }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <Card className="overflow-hidden animate-slide-up relative" style={{ animationDelay: "100ms" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg"></div>
        <CardHeader className="pb-2 relative">
          <CardTitle className="text-sm font-medium flex items-center">
            <Book className="mr-2 h-4 w-4 text-stripe-purple" />
            Courses Started
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            {userProgress.coursesStarted}
          </div>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden animate-slide-up relative" style={{ animationDelay: "200ms" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-lg"></div>
        <CardHeader className="pb-2 relative">
          <CardTitle className="text-sm font-medium flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-pink-500" />
            Courses Completed
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            {userProgress.coursesCompleted}
          </div>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden animate-slide-up relative" style={{ animationDelay: "300ms" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg"></div>
        <CardHeader className="pb-2 relative">
          <CardTitle className="text-sm font-medium flex items-center">
            <Trophy className="mr-2 h-4 w-4 text-blue-500" />
            Exercises Completed
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            {userProgress.completedExercises}/{userProgress.totalExercises}
          </div>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden animate-slide-up relative" style={{ animationDelay: "400ms" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-red-500/10 rounded-lg"></div>
        <CardHeader className="pb-2 relative">
          <CardTitle className="text-sm font-medium flex items-center">
            <Flame className="mr-2 h-4 w-4 text-amber-500" />
            Day Streak
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">
            {userProgress.streakDays} days
          </div>
          <div className="mt-2">
            <div className="text-xs text-muted-foreground mb-1 flex justify-between">
              <span>Overall Progress</span>
              <span>{Math.round((userProgress.completedExercises / userProgress.totalExercises) * 100)}%</span>
            </div>
            <Progress 
              value={(userProgress.completedExercises / userProgress.totalExercises) * 100} 
              className="h-2 bg-secondary" 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressOverview;
