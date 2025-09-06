import { Suspense } from "react";

import FDATable from "./_components/FDATable";
import Hero from "./_components/Header";

const Index = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[50vh] w-full bg-gradient-to-b to-transparent" />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <FDATable />
      </Suspense>
    </div>
  );
};

export default Index;
