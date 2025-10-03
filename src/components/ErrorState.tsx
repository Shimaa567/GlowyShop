import { RefreshCcw } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

import NotFound from "@/assets/undraw_page-not-found_6wni.svg";

interface ErrorCardProps {
  refetchProducts?: () => void;
}

const ErrorState: React.FC<ErrorCardProps> = ({ refetchProducts }) => {
  return (
    <Card className="flex items-center justify-center h-full overflow-hidden text-red-600 rounded-none shadow-lg bg-red-50">
      <CardContent className="flex flex-col items-center justify-center p-6 space-y-3 text-center">
        <img src={NotFound} alt="Not-Found" className="max-h-[500px]" />
        <p className="text-3xl font-semibold">Oops! Something went wrong 😭</p>
        <p className="text-xl text-red-500 ">Failed to load products.</p>
        {refetchProducts && (
          <Button variant="destructive" onClick={refetchProducts}>
            <RefreshCcw className="w-6 h-6 mr-2 text-red-100" />
            <p className="text-lg text-red-100">Retry</p>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ErrorState;
