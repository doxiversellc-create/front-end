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

        <div className=" w-full py-12 md:py-16 space-y-4 items-center flex justify-center flex-col  bg-gradient-to-b to-primary/25 from-transparent -z-10 rounded-2xl border-2 border-white shadow px-2 md:px-4 border-t-0">
          <h2 className="text-3xl max-w-[603px] md:text-4xl font-semibold font-outfit lg:text-5xl leading-tight  mx-auto">
            <span className="text-balance">Subscribe to Get Notified About Our Latest AI News</span>
          </h2>
          <p className="text-pretty font-semibold text-center font-inter md:text-base lg:text-lg  leading-relaxed max-w-[749px] mx-auto">
            Stay updated with AI breakthroughs, trends, and expert tips delivered straight to your
            inbox.
          </p>
          <SubscribeInput />
        </div>
      </main>
    </div>
  );
}
