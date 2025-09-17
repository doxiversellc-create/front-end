import Image from "next/image";

import { Button } from "@/components/ui/button";

const SubmitNow = () => {
  return (
    <section className="mt-10 mb-20 w-full md:mb-28 lg:mb-32">
      <div className="relative min-w-full rounded-3xl">
        <div className="to-border rounded-3xl bg-gradient-to-b from-black/0 p-[1px]">
          <div className="bg-background rounded-3xl px-1.5 pb-1.5">
            <div className="bg-background relative min-w-full overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(circle, #2d2e2eee 1px, transparent 1px)`,
                  backgroundSize: "15px 15px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="from-background/30 absolute inset-0 bg-gradient-to-b via-[#A9D5F0]/20 to-[#A9D5F0]" />
              <div className="absolute bottom-0 z-10 -ml-8 flex w-full items-center justify-center md:-ml-12 lg:-ml-16">
                <Image
                  src="/shapes/vendorSubmit.svg"
                  alt="vendor Submit"
                  width={200}
                  height={100}
                />
              </div>
              <div className="relative z-10 mt-5 space-y-5 pb-7 text-center md:pb-3">
                <h1 className="font-outfit mt-5 text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
                  Submit Your Tool Today!
                </h1>
                <p className="text-foreground mx-auto mt-6 max-w-md justify-center text-center md:max-w-xl lg:max-w-2xl lg:text-lg">
                  Our team will review your submission to ensure it aligns with our mission of
                  delivering trusted, high-quality solutions. Once approved, your tool will be
                  listed on Doxiverse with a link to your official site.
                </p>

                <Button>Submit Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitNow;
