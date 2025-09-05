import { Input } from "@/components/ui/input";

export default function SubscribeInput() {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="relative w-full max-w-[569px] mx-auto mt-8">
        <Input
          type="text"
          placeholder="Enter Your Email"
          className="w-full pl-6 md:pl-8 pr-2 py-6 md:py-8 text-base bg-background/90 shadow-lg shadow-border/20  border rounded-full  focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button className="absolute bg-gradient-to-r from-primary/70 to-primary/60 text-primary-foreground px-5 md:px-8 py-2 md:py-3 rounded-full right-1 md:right-2 top-1/2 -translate-y-1/2 p-2 ">
          Subscribe!
        </button>
      </div>
    </div>
  );
}
