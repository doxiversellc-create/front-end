import { User } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function page() {
  return (
    <div className="flex flex-col items-center space-y-8 justify-center min-h-screen">
      <Button size="sm">Hello World!</Button>
      <Button variant={"outline"} size="icon">
        <User />
      </Button>
      <Button>Hello World!</Button>
      <Button size="lg">Hello World!</Button>
    </div>
  );
}
