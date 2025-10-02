import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function CardSkeleton() {
  return (
    <Card className="rounded-2xl shadow-lg overflow-hidden">
      {/* Image Skeleton */}
      <Skeleton className="w-full h-80" />

      <CardContent className="p-4 space-y-2">
        {/* Title skeleton */}
        <Skeleton className="h-6 w-3/4" />
        {/* Category skeleton */}
        <Skeleton className="h-4 w-1/2" />
        {/* Price skeleton */}
        <Skeleton className="h-6 w-1/4 mt-2" />
      </CardContent>
    </Card>
  );
}