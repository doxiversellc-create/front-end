import Image from "next/image";
import React from "react";

const TopAIToolsGraph = () => {
  return (
    <section className="w-full max-w-[1349px] mx-auto">
      <Image
        src="/shapes/ai-tools.svg"
        alt="AI Tools"
        width={1349}
        height={1000}
        className="w-full h-auto"
      />
    </section>
  );
};

export default TopAIToolsGraph;
