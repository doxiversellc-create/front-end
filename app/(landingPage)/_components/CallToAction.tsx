import Image from "next/image";
import Link from "next/link";

// Define the TopCategories component
export default function CallToAction() {
  return (
    <section className=" w-full p-4 md:px-6 lg:px-8 lg:pb-10 ">
      <div className="min-w-full relative px-2 pb-2 rounded-3xl ">
        <div className="bg-gradient-to-b from-black/0  to-border p-[1px] rounded-3xl">
          <div className="bg-background pb-1.5 px-1.5 rounded-3xl">
            <div className="relative min-w-full rounded-3xl px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 overflow-hidden bg-background">
              {/* Dot Pattern Background */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle, #2d2e2eee 1px, transparent 1px)`,
                  backgroundSize: "15px 15px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
                <Image
                  src="/shapes/top-category.svg"
                  className="invert brightness-0 rotate-180"
                  alt="top-category"
                  width={200}
                  height={100}
                />
              </div>
              <div className="bg-gradient-to-b absolute inset-0  from-background/30 via-[#A9D5F0]/20 to-[#A9D5F0]" />

              <div className="relative z-10 text-center space-y-5 mt-5 pb-7 md:pb-3">
                <p className="text-base lg:text-lg font-inter">
                  Healthcare Professionals, Ready to Harness AI?
                </p>
                <h2 className="text-3xl mt-6 lg:mt-12 max-w-[546px] md:text-4xl font-semibold font-outfit lg:text-5xl leading-tight  mx-auto">
                  <span className="text-balance">
                    Where <span className="italic font-serif font-[100]">Healthcare</span> Meets the
                    Best in AI
                  </span>
                </h2>
                <p className="text-lg max-w-[569px] mx-auto lg:text-xl opacity-80 font-inter">
                  Discover, compare, and choose the right AI tools for your practice — all in one
                  trusted platform.
                </p>
                <div className="flex mx-auto mt-8 justify-center">
                  <Link
                    href="/"
                    className="bg-primary  hover:bg-primary/70 transition-all duration-300 text-primary-foreground px-8 py-4 rounded-full"
                  >
                    Sign Up for Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
