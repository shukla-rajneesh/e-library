import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center ">
        <Button size="lg" className="rounded-full">
          <CirclePlus />
          Click Me
        </Button>
      </div>
    </>
  );
};

export default HomePage;
