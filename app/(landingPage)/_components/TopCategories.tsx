import React from "react";
import {
  FileText,
  Scan,
  Settings,
  Users,
  DollarSign,
  FlaskConical,
} from "lucide-react";
import Image from "next/image";
export default function TopCategories() {
  return (
    <section className="min-h-screen w-full p-4 md:p-6 lg:p-8 ">
      <div className="min-w-full relative px-2 pb-2 rounded-3xl gradient-top-border">
        <div className="relative min-w-full rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Categories Section */}
          {/* Dot Pattern Background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle, #2d2e2eee 1px, transparent 1px)`,
              backgroundSize: "15px 15px",
              backgroundPosition: "0 0, 10px 10px",
            }}
          />
          <div className="bg-gradient-to-b absolute inset-0 top-1/3 from-[#A9D5F0]/0 to-[#A9D5F0]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <Image
              src="/shapes/top-category.svg"
              alt="top-category"
              width={250}
              height={100}
            />
          </div>
          <div className="relative z-10 text-center space-y-8">
            {/* Top Categories Badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              Top Categories
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              <span className="text-balance">
                Browse Key Areas Where Technology Transforms Healthcare
              </span>
            </h2>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mt-12">
              {/* Row 1 */}
              <div className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-900 ">
                  Clinical Documentation
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
                  <FlaskConical className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-900">
                  Research & Drug Development
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
                  <Scan className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-900">
                  Imaging & Diagnostics
                </span>
              </div>

              {/* Row 2 */}
              <div className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-900">
                  Practice Management
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-900">
                  Patient Engagement
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-900">
                  Billing & compliance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
