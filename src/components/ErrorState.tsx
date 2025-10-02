import { RefreshCcw } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

import NotFound from "@/assets/undraw_page-not-found_6wni.svg"

interface ErrorCardProps {
  refetchProducts?: () => void;
}

const ErrorState:React.FC<ErrorCardProps> = ({refetchProducts}) => {
  return (
    <div>
       <Card className="shadow-lg overflow-hidden bg-red-50 text-red-600 flex items-center justify-center h-full rounded-none">
      <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-3">
        <img src={NotFound} alt="Not-Found" className="max-h-[500px]"   />
        <p className="font-semibold text-3xl">Oops! Something went wrong 😭</p>
        <p className=" text-red-500 text-xl">Failed to load products.</p>
        {refetchProducts && (
          <Button variant="destructive" onClick={refetchProducts}>
  <RefreshCcw className="mr-2 h-6 w-6 text-red-100" /> 
  <p className="text-red-100 text-lg">Retry</p>
</Button>
        )}
      </CardContent>
    </Card>
    </div>
  )
}

export default ErrorState
