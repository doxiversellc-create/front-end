import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  BadgeCheck,
  Bookmark,
  ChevronDown,
  Star,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { GradientSeparator } from "@/components/GradientSeparator";
import AboutContent, { Content } from "../_components/AboutContent";
import Reviews from "../_components/Reviews";

export interface Header {
  logoLetter: string;
  logoImage?: string;
  title: string;
  description: string;
}

export interface Tool {
  icon: LucideIcon;
  color: string;
  label: string;
}

export interface Review {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

export interface Info {
  feature: string;
  value: string;
}

export interface DiscoverMore {
  title: string;
  icon: string;
  link: string;
}
export interface Data {
  header: Header;
  reviews: Review[];
  content: Content;
  categories: string[];
  info: Info[];
  tags: string[];
  discoverMore: DiscoverMore[];
}
const data = {
  header: {
    logoLetter: "N",
    logoImage: "/notable-health-2.png",
    title: "Notable Health",
    description:
      "Notable Health streamlines healthcare documentation with intelligent automation, reducing workload and improving operational efficiency for medical professionals.",
  },

  reviews: [
    {
      name: "Leslie Alexander",
      location: "United States",
      avatar: "/review-1.png",
      rating: 4,
      date: "May 15, 2024",
      content: `Notable Health is a cutting-edge AI tool designed to revolutionize the healthcare industry by enhancing the efficiency and accuracy of medical data processing.`,
    },
    {
      name: "Brooklyn Simmons",
      location: "Netherlands",
      avatar: "/review-2.png",
      rating: 4,
      date: "May 15, 2024",
      content: `Notable Health greatly reduces paperwork and allows clinicians to focus on patient care. However, it may require proper setup and training.`,
    },
  ],
  content: {
    sections: [
      {
        title: "What Is Notable Health?",
        titleSize: "xl",
        titleWeight: "bold",
        paragraphs: [
          "Notable Health is designed to reduce one of healthcare's biggest challenges: administrative overhead. This AI-powered platform significantly streamlines the documentation process that often consumes hours of a healthcare provider's day. The system focuses on automating medical note creation, which is typically one of the most time-consuming aspects of patient care.",
          "The system learns, adapts, and improves, meaning that across both systems. For example, it can understand natural language inputs and automatically generate structured, professional documentation that meets healthcare standards and regulatory requirements.",
          "For healthcare organizations, the impact likely means reduced clinical time, and higher staff satisfaction. For patients, it could mean more face-to-face time with their healthcare providers, as less time is spent on administrative tasks and more time can be dedicated to actual patient care.",
        ],
      },
      {
        title: "Key Features",
        titleSize: "lg",
        titleWeight: "semibold",
        paragraphs: ["Notable Health is trusted by a wide range of healthcare organizations:"],
        listType: "disc",
        listItems: [
          "Reduces manual data entry by up to 3 hours/day per clinician",
          "Maintains clinical accuracy through intelligent medical terminology",
          "Ensures compliance with healthcare documentation standards",
          "Integrates with existing Electronic Health Record (EHR) systems",
          "Provides audit trails and version control for medical records",
          "Scales patient load continuously for clinical practices and operations",
          "Automates insurance and billing documentation",
        ],
      },
      {
        title: "Pros",
        titleSize: "base",
        titleWeight: "medium",
        listType: "disc",
        listTextSize: "sm",
        listItems: [
          "Significantly reduces documentation time",
          "Enhances patient engagement through streamlined documentation",
          "Improves accuracy and compliance",
          "Integrates with existing EHR systems",
          "Automates repetitive tasks without reducing quality",
        ],
      },
      {
        title: "Cons",
        titleSize: "base",
        titleWeight: "medium",
        listType: "disc",
        listTextSize: "sm",
        listItems: [
          "Dependent on high-quality data from EHR systems",
          "May require training for optimal use",
          "Potential concerns about data privacy and security",
          "Initial setup and integration complexity",
        ],
      },
      {
        title: "Who is Using Notable Health?",
        titleSize: "base",
        titleWeight: "medium",
        paragraphs: [
          "Notable Health is trusted by a wide range of healthcare organizations, from small private practices to large hospital systems. The platform is particularly popular among healthcare providers who want to reduce administrative burden and focus more on patient care.",
        ],
      },
      {
        title: "Core",
        titleSize: "lg",
        titleWeight: "semibold",
        listType: "bullet",
        listItems: [
          "Intelligent document generation and management",
          "Seamless integration with existing healthcare systems",
          "Real-time clinical data analysis and insights",
          "Automated compliance and regulatory reporting",
          "Multi-provider collaboration tools",
          "Advanced search and retrieval capabilities",
          "Customizable templates without requiring team training",
        ],
      },
      {
        title: "Care",
        titleSize: "lg",
        titleWeight: "semibold",
        paragraphs: ["Notable Health is trusted by a wide range of healthcare organizations:"],
        listType: "bullet",
        listItems: [
          "Hospitals using it for streamlined patient documentation",
          "Private practices reducing administrative overhead",
          "Specialty clinics improving workflow efficiency",
          "Healthcare networks standardizing documentation processes",
          "Telemedicine providers enhancing remote care documentation",
          "Academic medical centers integrating with teaching workflows",
        ],
      },
    ],
  },
  categories: ["Patient Engagement", "Clinical Documentation"],
  info: [
    { feature: "FDA Approved", value: "Yes" },
    { feature: "HIPPA Compliant", value: "No" },
    { feature: "Languages", value: "English, French" },
  ],
  tags: ["copywriting", "writing"],
  discoverMore: [
    {
      title: "Chat GPT",
      icon: "/chat-gpt.png",
      link: "/chat-gpt", // Add your actual link paths
    },
    {
      title: "Notable Health",
      icon: "/notable-health.png",
      link: "/notable-health",
    },
    {
      title: "WoeBot",
      icon: "/woebot.png",
      link: "/woebot",
    },
  ],
};

export function generateMetadata() {
  return {
    title: data.header.title,
    description: data.header.description,
  };
}

export default function AiDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-8">
        <div className="w-full py-12">
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="space-y-6 flex-1">
              {/* Logo + Title + Description */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14  rounded-xl flex items-center justify-center overflow-hidden">
                  {data.header.logoImage ? (
                    <Image
                      src={data.header.logoImage} // e.g. "/logo.png"
                      alt="Logo"
                      width={90}
                      height={90}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-white text-2xl font-bold bg-primary">
                      {data.header.logoLetter}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-semibold font-outfit flex items-center gap-2 text-foreground">
                    <span>{data.header.title}</span>
                    <BadgeCheck className="text-white fill-green-500 w-6 h-6" />
                  </h1>
                </div>
              </div>
              <p className="leading-relaxed max-w-xl text-sm text-muted-foreground">
                {data.header.description}
              </p>
              {/* Categories */}
              <div className=" flex items-center">
                <span className="block pr-4 text-sm md:text-md font-semibold text-foreground">
                  Categories:
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.categories.map(category => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-secondary text-secondary-foreground/80 rounded-full text-xs md:text-sm font-medium transition-colors hover:bg-secondary/80"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-4 pt-6 hidden md:block">
                <div className="flex items-center gap-4">
                  <Button className="bg-primary px-3 py-5 pl-5 rounded-full">
                    <span> Visit Site </span>
                    <ArrowUpRight />
                  </Button>
                  <Button variant="outline" className="px-3 py-5 rounded-full">
                    <Bookmark className="w-5 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            {/* Right Info Section */}
            <div className="space-y-4 w-full sm:w-auto">
              <div className="overflow-x-auto rounded-xl">
                <table className="w-full md:w-96 text-sm border border-border/60 overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold rounded-tl-lg">
                        Feature
                      </th>
                      <th className="px-4 py-3 text-left  text-gray-700 font-semibold rounded-tr-lg">
                        Invoice
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.info.map(({ feature, value }, index) => (
                      <tr key={feature} className={index < data.info.length - 1 ? "border-b" : ""}>
                        <td className="px-4 py-3 text-foreground">{feature}</td>
                        <td className="px-4 py-3 text-foreground border-l">{value}</td>
                      </tr>
                    ))}
                    {/* optional: round bottom corners of last row */}
                    <tr>
                      <td className="rounded-bl-lg" />
                      <td className="rounded-br-lg" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-6 block md:hidden">
            <div className="flex items-center gap-4">
              <Button className="bg-primary px-3 py-4 pl-6 rounded-full">
                <span> Visit Site </span>
                <ArrowUpRight />
              </Button>
              <Button variant="outline" className="px-3 py-5 rounded-full">
                <Bookmark className="w-5 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <GradientSeparator className="my-8" />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 ">
            {/* Hero Section */}
            <div className="space-y-4">
              <AboutContent content={data.content} />
            </div>
            {/* Embedded Video */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-outfit text-foreground">Embedded Video</h3>

              <div className="relative w-full rounded-3xl overflow-hidden">
                <Image
                  src="/video-thumbnail.png"
                  alt="Embedded video thumbnail"
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            {/* Ratings and Reviews */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold font-outfit text-foreground">
                  Ratings and Reviews
                </h3>
              </div>
              <div className="flex sm:items-center sm:w-full w-2/4  items-start justify-between gap-8 sm:gap-4 sm:flex-row flex-col">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-foreground border-t-2 pt-4">3.5</span>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-foreground font-outfit">Overall Rating</p>
                    <div className="flex items-center gap-1 border-l-2 pl-4">
                      {[1, 2, 3].map(i => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                      {[4, 5].map(i => (
                        <Star key={i} className="w-5 h-5 fill-muted text-muted" />
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="p-5 w-full sm:w-auto rounded-full text-sm cursor-pointer">
                  Submit Review
                </Button>
              </div>

              <GradientSeparator className="my-8" />
              <Reviews reviews={data.reviews} />
              <div className="flex justify-center">
                <Button variant="outline" className="text-sm flex rounded-full cursor-pointer">
                  <span>Load More</span> <ChevronDown />
                </Button>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-6 hidden lg:block">
            {/* Discover More */}
            <div className="container mx-auto px-2 md:px-4 ">
              <p className="text-xl font-semibold font-outfit text-foreground mb-6 pl-6">
                Discover More
              </p>

              <div className="flex flex-col gap-4 pl-6">
                {data.discoverMore.map(item => (
                  <div key={item.link}>
                    <Link href={item.link} key={item.link}>
                      <div className="flex items-center  text-center cursor-pointer gap-4">
                        <div className="flex justify-center items-center">
                          <div className="w-4 h-4 md:w-12 md:h-12 relative ">
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={56}
                              height={56}
                              className="object-cover w-full h-full rounded-xl"
                            />
                          </div>
                        </div>
                        <h3 className="text-md font-semibold text-foreground">{item.title}</h3>
                      </div>
                    </Link>
                    <GradientSeparator />
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-4 pl-12">
              <h3 className="text-lg font-semibold font-outfit text-foreground">#Tags</h3>
              <div className="flex flex-wrap gap-2">
                {data.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
