
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const RecentActivity = ({ activities }) => {
  return (
    <div className="mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
      <h2 className="text-2xl font-bold tracking-tight mb-4 stripe-gradient-text">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <Card key={activity.id} className="overflow-hidden animate-slide-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5 rounded-lg"></div>
            <CardHeader className="pb-2 relative">
              <CardTitle className="text-lg font-medium stripe-gradient-text">{activity.course}</CardTitle>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {activity.date}
              </div>
            </CardHeader>
            <CardContent className="relative">
              <CardDescription className="mb-2">{activity.lastActivity}</CardDescription>
              <div className="mt-2">
                <div className="text-xs text-muted-foreground mb-1 flex justify-between">
                  <span>Course Progress</span>
                  <span>{activity.progress}%</span>
                </div>
                <Progress value={activity.progress} className="h-2" />
              </div>
            </CardContent>
            <CardFooter className="relative">
              <Button asChild variant="ghost" size="sm" className="text-stripe-purple hover:text-stripe-lightPurple">
                <Link to={`/courses/${activity.id}`}>Continue <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
