import { Card, CardContent } from "./ui/card";

import EmptyContent from "@/assets/empty.svg";

const EmptyState = () => {
  return (
    <Card className="flex items-center justify-center overflow-hidden rounded-none shadow-lg text-gray-950 bg-gray-50">
      <CardContent className="flex flex-col items-center justify-center p-6 space-y-3 text-center">
        <img src={EmptyContent} alt="No-Products" className="max-h-[400px]" />
        <p className="text-3xl font-semibold">Hmmm.. No products found🤔</p>
        <p className="text-xl text-gray-500 ">
          No products match your search. Adjust you keywords
        </p>
      </CardContent>
    </Card>
  );
};

export default EmptyState;
