import { Search, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full p-4 md:p-6 lg:p-8 ">
      {/* <div className="min-w-full"> */}
      <div className="bg-gradient-to-b from-foreground/15 to-foreground/0 p-[1px] rounded-3xl">
        <div className="bg-background p-1.5 min-w-full rounded-3xl">
          <div
            className="relative min-w-full min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/shapes/hero-bg.svg)`,
            }}>
            {/* Content */}
            <div className="relative z-10 space-y-8 max-w-3xl">
              {/* AI Badge */}
              <div className="inline-flex font-inter items-center gap-2 bg-background/50 border-2 border-white backdrop-blur-sm rounded-full p-1.5 pr-3 text-xs lg:text-base font-medium text-gray-700 shadow-sm">
                <span className="inline-flex items-center justify-center py-1.5 px-3 bg-primarytext-primary-foreground  font-bold rounded-full">
                  AI
                </span>
                Over 25+ AI Tools Listed
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-semibold text-gray-900 leading-tight">
                <span className="text-balance">
                  Explore Top Healthcare
                  <br />
                  AI Tools
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm text-pretty font-inter md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-[749px] mx-auto">
                Founded by physicians, Doxiverse is your one-stop hub for
                healthcare AI tools, the latest updates, and community reviews.
                Designed for doctors, hospitals, private practices, and all
                healthcare professionals. It empowers you with trusted knowledge
                to work smarter and enhance patient care.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Search AI, Categories..."
                  className="w-full pl-8 pr-12 py-5 text-base bg-background/90 drop-shadow-md backdrop-blur-sm border-white/50 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-primaryhover:bg-button/90 text-primary-foreground px-8 py-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                  Browse Tools
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background/90 hover:bg-background px-8 py-6 text-gray-700 border-black/30 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-200">
                  Submit Your Tool
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
