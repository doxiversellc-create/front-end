import React from "react";
import Image from "next/image";

const TopAIToolsGraph = () => {
  return (
    <section className="mx-auto w-full max-w-[1349px]">
      <Image
        src="/shapes/ai-tools.svg"
        alt="AI Tools"
        width={1349}
        height={1000}
        className="h-auto w-full"
      />
    </section>
  );
};

export default TopAIToolsGraph;
