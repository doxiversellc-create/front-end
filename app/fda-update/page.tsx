import { Suspense } from "react";
import FDATable from "./_components/FDATable";
import Hero from "./_components/Header";

const Index = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/25 to-transparent pointer-events-none -z-10" />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <FDATable />
      </Suspense>
    </div>
  );
};

export default Index;
