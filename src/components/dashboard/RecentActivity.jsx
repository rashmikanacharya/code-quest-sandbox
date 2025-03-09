
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RecentActivity = ({ activities }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <Card key={activity.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">{activity.course}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{activity.lastActivity}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" size="sm">
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
