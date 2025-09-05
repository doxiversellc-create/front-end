import Image from "next/image";
import { Suspense } from "react";
import Hero from "./_components/Hero";
import NewsGrid from "./_components/NewsGrid";
import SubscribeInput from "./_components/SubscribeInput";

export default function NewsroomPage() {
  return (
    <div className="flex flex-col min-h-screen px-6 md:px-12 lg:px-20">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/25 to-transparent pointer-events-none -z-10" />
      <main className="flex-1">
        <Hero />
        <section className="max-w-7xl mx-auto py-12">
          <Suspense fallback={<div>Loading...</div>}>
            <NewsGrid />
          </Suspense>
        </section>

        <section className=" w-full p-4 md:px-6 lg:px-8 lg:pb-10 ">
          <div className="min-w-full relative px-2 pb-2 rounded-3xl ">
            <div className="bg-gradient-to-b from-black/0  to-border p-[1px] rounded-3xl">
              <div className="bg-background pb-1.5 px-1.5 rounded-3xl">
                <div className="relative min-w-full rounded-3xl px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 overflow-hidden bg-background">
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
                    <h2 className="text-3xl mt-6 lg:mt-12 max-w-[546px] md:text-4xl font-semibold font-outfit lg:text-5xl leading-tight  mx-auto">
                      Subscribe to Get Notified About Our Latest AI News
                    </h2>
                    <p className="text-lg max-w-[569px] mx-auto lg:text-xl opacity-80 font-inter">
                      Stay updated with AI breakthroughs, trends, and expert tips delivered straight
                      to your inbox.
                    </p>
                    <div className="flex mx-auto mt-8 justify-center">
                      <SubscribeInput />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
