import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  BadgeCheck,
  Bookmark,
  ChevronDown,
  type LucideIcon,
  Star,
} from "lucide-react";

import { GradientSeparator } from "@/components/GradientSeparator";
import { Button } from "@/components/ui/button";
import AboutContent, { Content } from "../_components/AboutContent";
import Reviews from "../_components/Reviews";
import VideoPlayer from "../_components/VideoPlayer";

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

  embeddedVideo: {
    src: "https://www.youtube.com/embed/J_IvPcrTtdo?si=uHghlEMEKOJPefD_",
    title: "YouTube video player",
  },
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
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-20">
        <div className="w-full py-8">
          <div className="mx-auto flex flex-col items-center justify-between gap-10 md:flex-row">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              {/* Logo + Title + Description */}
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl">
                  {data.header.logoImage ? (
                    <Image
                      src={data.header.logoImage} // e.g. "/logo.png"
                      alt="Logo"
                      width={90}
                      height={90}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="bg-primary text-2xl font-bold text-white">
                      {data.header.logoLetter}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="font-outfit text-foreground flex items-center gap-2 text-2xl font-semibold">
                    <span>{data.header.title}</span>
                    <BadgeCheck className="h-6 w-6 fill-green-500 text-white" />
                  </h1>
                </div>
              </div>
              <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
                {data.header.description}
              </p>
              {/* Categories */}
              <div className="flex items-center">
                <span className="md:text-md text-foreground block pr-4 text-sm font-semibold">
                  Categories:
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.categories.map(category => (
                    <span
                      key={category}
                      className="bg-secondary text-secondary-foreground/80 hover:bg-secondary/80 rounded-full px-3 py-1 text-xs font-medium transition-colors md:text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="hidden space-y-4 pt-6 md:block">
                <div className="flex items-center gap-4">
                  <Button className="bg-primary rounded-full px-3 py-5 pl-5">
                    <span> Visit Site </span>
                    <ArrowUpRight />
                  </Button>
                  <Button variant="outline" className="rounded-full px-3 py-5">
                    <Bookmark className="h-4 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            {/* Right Info Section */}
            <div className="w-full space-y-4 sm:w-auto">
              <div className="border-border/60 overflow-x-auto rounded-xl border">
                <table className="w-full text-sm md:w-96">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-foreground rounded-tl-lg px-4 py-3 text-left font-semibold">
                        Feature
                      </th>
                      <th className="text-foreground rounded-tr-lg px-4 py-3 text-left font-semibold">
                        Invoice
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.info.map(({ feature, value }, index) => (
                      <tr key={feature} className="border-b">
                        <td
                          className={`text-foreground px-4 py-3 ${
                            index === data.info.length - 1 ? "rounded-bl-xl" : ""
                          }`}
                        >
                          {feature}
                        </td>
                        <td
                          className={`text-foreground border-l px-4 py-3 ${
                            index === data.info.length - 1 ? "rounded-br-xl" : ""
                          }`}
                        >
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="block space-y-4 pt-6 md:hidden">
            <div className="flex items-center gap-4">
              <Button className="bg-primary rounded-full px-3 py-4 pl-6">
                <span> Visit Site </span>
                <ArrowUpRight />
              </Button>
              <Button variant="outline" className="rounded-full px-3 py-5">
                <Bookmark className="h-4 w-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* <GradientSeparator
          width="w-full"
          height="h-[1px]"
          color="via-secondary-foreground/10"
          className="my-8"
        /> */}
        <div className="bg-secondary-foreground/10 mb-8 h-[2px] w-full" />
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Hero Section */}
            <div className="space-y-4">
              <AboutContent content={data.content} />
            </div>
            {/* Embedded Video */}
            <div className="space-y-4">
              <h3 className="font-outfit text-foreground text-lg font-semibold">Embedded Video</h3>
              <VideoPlayer height="h-48 sm:h-96 " embedUrl={data.embeddedVideo.src} />
            </div>
            {/* Ratings and Reviews */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-outfit text-foreground text-lg font-semibold">
                  Ratings and Reviews
                </h3>
              </div>
              <div className="flex w-2/4 flex-col items-start justify-between gap-8 sm:w-full sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-foreground border-t-2 pt-4 text-3xl font-bold">3.5</span>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-foreground font-outfit">Overall Rating</p>
                    <div className="flex items-center gap-1 border-l-2 pl-4">
                      {[1, 2, 3].map(i => (
                        <Star key={i} className="fill-primary text-primary h-5 w-5" />
                      ))}
                      {[4, 5].map(i => (
                        <Star key={i} className="fill-muted text-muted h-5 w-5" />
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="w-full cursor-pointer rounded-full p-5 text-sm sm:w-auto">
                  Submit Review
                </Button>
              </div>
              <GradientSeparator
                width="w-full"
                height="h-[1px]"
                color="via-secondary-foreground/10"
                className="my-8 mt-20"
              />
              <Reviews reviews={data.reviews} />
              <div className="flex justify-center">
                <Button variant="outline" className="flex cursor-pointer rounded-full text-sm">
                  <span>Load More</span> <ChevronDown />
                </Button>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="hidden space-y-6 lg:block">
            {/* Discover More */}
            <div className="container mx-auto px-2 md:px-4">
              <p className="font-outfit text-foreground mb-6 pl-6 text-xl font-semibold">
                Discover More
              </p>

              <div className="flex flex-col gap-4 pl-6">
                {data.discoverMore.map((item, index) => (
                  <div key={item.link}>
                    <Link href={item.link} key={item.link}>
                      <div className="mb-3 flex cursor-pointer items-center gap-4 text-center">
                        <div className="flex items-center justify-center">
                          <div className="relative h-4 w-4 md:h-12 md:w-12">
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={56}
                              height={56}
                              className="h-full w-full rounded-xl object-cover"
                            />
                          </div>
                        </div>
                        <h3 className="text-md text-foreground font-semibold">{item.title}</h3>
                      </div>
                    </Link>
                    {index + 1 !== data.discoverMore.length && (
                      <GradientSeparator
                        width="w-full"
                        height="h-[1px]"
                        color="via-secondary-foreground/10"
                        className="mt-3"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-4 pl-12">
              <h3 className="font-outfit text-foreground text-lg font-semibold">#Tags</h3>
              <div className="flex flex-wrap gap-2">
                {data.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground inline-block rounded-full px-3 py-1 text-sm font-medium"
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
