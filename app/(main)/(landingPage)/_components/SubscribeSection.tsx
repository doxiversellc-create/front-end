import { Input } from "@/components/ui/input";

export default function SubscribeSection() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8">
      <div className="relative min-w-full rounded-3xl px-2 pb-2">
        <div className="via-border rounded-3xl bg-gradient-to-b from-black/0 to-black/0 p-[1px]">
          <div className="bg-background rounded-3xl px-1.5 pb-1.5">
            <div className="bg-background relative min-w-full overflow-hidden rounded-3xl p-5 md:p-12 lg:px-16 lg:pt-16 lg:pb-10">
              <div className="from-background to-background absolute inset-0 bg-gradient-to-b via-[#dcf2ff]" />

              <div className="relative z-10 mt-5 space-y-5 py-5 pb-7 text-center md:pb-3">
                <h2 className="font-outfit mx-auto max-w-[603px] text-3xl leading-tight font-semibold md:text-4xl lg:text-5xl">
                  <span className="text-balance">Discover the Future of Healthcare AI</span>
                </h2>
                <div className="flex flex-col gap-1.5 pt-5">
                  <p className="font-inter text-lg opacity-80 lg:text-xl">
                    Get our free exclusive guide:
                  </p>
                  <p className="font-inter text-lg font-bold md:text-xl lg:text-2xl">
                    “Top 10 AI Tools Every Clinician Should Know in 2025”
                  </p>
                </div>
                {/* Email Submit Sub-Section */}
                <div className="relative mx-auto mt-14 w-full max-w-[569px]">
                  <Input
                    type="text"
                    placeholder="Enter Your Email"
                    className="bg-background/90 shadow-border/20 focus:ring-primary w-full rounded-full border py-8 pr-2 pl-6 text-base shadow-lg focus:border-transparent focus:ring-2 md:pl-8"
                  />
                  <button className="from-primary/70 text-primary-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-gradient-to-r to-[#1b7fe9] p-2 px-5 py-3 md:px-8">
                    Get My Free Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
