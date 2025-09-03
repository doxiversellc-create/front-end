import { Input } from "../../../components/ui/input";

export default function SubscribeSection() {
  return (
    <section className=" w-full px-4 md:px-6 lg:px-8  ">
      <div className="min-w-full relative px-2 pb-2 rounded-3xl ">
        <div className="bg-gradient-to-b from-black/0  via-border to-black/0  p-[1px] rounded-3xl">
          <div className="bg-background pb-1.5 px-1.5 rounded-3xl">
            <div className="relative min-w-full rounded-3xl p-5 md:p-12 lg:px-16 lg:pb-10 lg:pt-16 overflow-hidden bg-background">
              <div className="bg-gradient-to-b absolute inset-0  from-background  via-[#dcf2ff] to-background" />

              <div className="relative z-10 text-center space-y-5 mt-5 pb-7 md:pb-3 py-5">
                <h2 className="text-3xl max-w-[603px] md:text-4xl font-semibold font-outfit lg:text-5xl leading-tight  mx-auto">
                  <span className="text-balance">Discover the Future of Healthcare AI</span>
                </h2>
                <div className="flex flex-col gap-1.5 pt-5">
                  <p className="text-lg lg:text-xl opacity-80 font-inter">
                    Get our free exclusive guide:
                  </p>
                  <p className="text-lg font-bold md:text-xl lg:text-2xl font-inter">
                    “Top 10 AI Tools Every Clinician Should Know in 2025”
                  </p>
                </div>
                {/* Email Submit Sub-Section */}
                <div className="relative w-full max-w-[569px] mx-auto mt-14">
                  <Input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full pl-6 md:pl-8 pr-2 py-8  text-base bg-background/90 shadow-lg shadow-border/20  border rounded-full  focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="absolute bg-gradient-to-r from-primary/70 to-[#1b7fe9] text-primary-foreground px-5 md:px-8 py-3 rounded-full right-2 top-1/2 -translate-y-1/2 p-2 ">
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
