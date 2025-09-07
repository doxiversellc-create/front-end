"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import CommentsSection from "@/app/(main)/blogs/[slug]/_components/CommentsSection";

interface BlogContent {
  id: string;
  title: string;
  content: string[];
  image?: string;
}

const blogContent: BlogContent[] = [
  {
    id: "how-ai-detects",
    title: "How AI Detects Mental Health Struggles Through Voice",
    content: [
      `AI-driven voice analysis relies on machine learning and natural language processing to study vocal biomarkers — unique patterns in your speech that reflect emotional and cognitive states. When you speak, your tone, speed, and energy carry hidden signals about your mental well-being.

For example, a flat tone or monotone speech can indicate early symptoms of depression, while frequent hesitations or rapid, tense speech may suggest anxiety. Similarly, lower energy levels in the voice may reveal emotional fatigue or burnout. Unlike humans, AI can analyze these signals at a micro-level, identifying patterns too subtle for the human ear.`,
    ],
  },
  {
    id: "science-behind",
    title: "The Science Behind It",
    content: [
      `Voice-based AI tools work by collecting large datasets of recorded speech and extracting hundreds of acoustic markers such as pitch variations, energy fluctuations, pauses, and articulation speed. These are then compared to known patterns linked to specific emotional states.`,
      `Through deep learning, the system learns to recognize correlations between vocal changes and mental health conditions like depression, anxiety, or cognitive strain. Studies have shown that these models can achieve up to 85% accuracy in predicting early emotional distress — often detecting risks weeks before a traditional diagnosis would be possible.`,
    ],
  },
  {
    id: "early-detection",
    title: "Why Early Detection Matters",
    content: [
      `Mental health issues often develop gradually and silently. By the time someone seeks help, the condition may already be severe, making treatment more complex and lengthy. Voice analytics enable non-intrusive monitoring, allowing clinicians to intervene sooner, personalize care plans, and improve outcomes.`,
      `Beyond diagnosis, this technology is especially valuable in regions with limited access to mental health professionals. Since the tools work remotely, they make mental healthcare more accessible, scalable, and efficient.`,
    ],
    image: "/news-6.png",
  },
  {
    id: "real-world",
    title: "Real-World Applications",
    content: [
      `Several companies and research institutions are already implementing voice-based mental health monitoring in clinical settings, employee wellness programs, and telehealth platforms.`,
      `This technology is already transforming healthcare:
Telemedicine platforms integrate AI to analyze patient voices during video consultations.
Virtual therapy assistants provide personalized emotional support based on detected stress levels.
Hospitals and clinics adopt AI tools for continuous patient monitoring and early intervention.
Workplace wellness programs leverage it to track employee well-being discreetly.
From research labs to real-world healthcare systems, AI-driven voice analytics is becoming a critical tool in building a smarter, more proactive approach to mental health.`,
    ],
  },
  {
    id: "video-insights",
    title: "Video Insights: How It Works",
    content: [
      `Advanced AI systems can process both audio and visual cues to provide comprehensive mental health assessments through digital platforms.`,
    ],
    image: "/news-7.png",
  },
  {
    id: "privacy-ethics",
    title: "Privacy & Ethical Considerations",
    content: [
      `As with any AI-driven health technology, voice analysis for mental health raises important questions about data privacy, consent, and algorithmic bias.`,
      `While the potential is huge, AI-based voice analysis raises privacy and ethical concerns. Sensitive voice data must be encrypted and stored securely, and emotional assessments should only be performed with user consent. Additionally, developers must ensure that models work fairly across different genders, accents, and languages.`,
      `At Doxiverse, we prioritize transparency, data security, and ethical innovation, ensuring AI benefits users while respecting their privacy and dignity.`,
    ],
  },
  {
    id: "final-thoughts",
    title: "Final Thoughts",
    content: [
      `AI-powered voice analysis is transforming how we approach mental health care. By decoding emotional patterns hidden in speech, clinicians can intervene earlier, personalize treatment plans, and improve patient outcomes.`,
      `This isn’t about replacing human care — it’s about enhancing it. At Doxiverse, we believe in using AI responsibly to empower healthcare providers, patients, and researchers in building a healthier future.`,
    ],
  },
];

const relatedPosts = [
  {
    date: "01 Mar 2025",
    title: "Chatbots for Patient Care: The Next Nurse?",
    readMore: "Read More>",
  },
  {
    date: "01 Mar 2025",
    title: "AI Systems in Emergency Rooms Speed Up Patient Triage Processes",
    readMore: "Read More>",
  },
];

const blogTags = ["2025", "Mental Health", "Healthcare", "Technology"];

export default function ArticleContent() {
  const [activeSection, setActiveSection] = useState("");
  const tocRef = useRef<HTMLDivElement>(null);
  const [linePosition, setLinePosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = blogContent.filter(section => section.title);
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection && tocRef.current) {
      const activeButton = tocRef.current.querySelector(
        `[data-section="${activeSection}"]`
      ) as HTMLElement;
      if (activeButton) {
        const containerRect = tocRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        const relativeTop = buttonRect.top - containerRect.top;
        setLinePosition(relativeTop);
      }
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="">
      <div className="w-full py-8 lg:px-0">
        <div className="flex gap-16">
          {/* Main Content */}
          <div className="space-y-5 lg:col-span-3">
            <article className="prose prose-lg max-w-none space-y-5 border-b pb-14">
              <p className="font-inter text-muted-foreground text-base lg:text-lg">
                Mental health has become one of the most urgent health challenges of the 21st
                century. Conditions like depression, anxiety, bipolar disorder, and stress-related
                burnout affect millions worldwide — yet many people remain undiagnosed until
                symptoms become severe.
              </p>
              <p className="font-inter text-muted-foreground text-base lg:text-lg">
                Now, artificial intelligence (AI) is changing that. With the help of AI-driven voice
                analysis tools, researchers and clinicians can detect early mental health struggles
                by listening to how we speak, not just what we say. These systems analyze tone,
                pitch, speech rhythm, pauses, and energy levels to uncover hidden emotional patterns
                — even before patients realize something is wrong.
              </p>
              <p className="font-inter text-muted-foreground text-base lg:text-lg">
                Doxiverse explores how machine learning and voice analytics are transforming mental
                health monitoring and early intervention strategies.
              </p>
              {blogContent.map(section => (
                <div key={section.id} id={section.id} className="">
                  {section.title && (
                    <h2 className="text-foreground font-inter mb-4 scroll-mt-20 text-2xl font-bold lg:text-3xl">
                      {section.title}
                    </h2>
                  )}
                  <div className="text-muted-foreground font-inter space-y-5 text-base lg:text-lg">
                    {section.content.map(content => (
                      <p key={content} className="">
                        {content}
                      </p>
                    ))}
                  </div>
                  {section.image && (
                    <Image
                      className="mt-5 max-h-[450px] w-full rounded-xl lg:rounded-2xl"
                      src={section.image}
                      alt={section.title}
                      width={1000}
                      height={1000}
                    />
                  )}
                </div>
              ))}
            </article>
            <div className="my-10 flex flex-wrap gap-3">
              {blogTags.map(tag => (
                <div key={tag} className="bg-muted rounded-full px-4 py-2 text-base">
                  {tag}
                </div>
              ))}
            </div>
            <CommentsSection />
          </div>

          {/* Sticky Table of Contents */}
          <div className="hidden min-w-[280px] lg:col-span-1 lg:block">
            <div className="sticky top-24">
              {/* Table of Contents */}
              <div className="">
                <h3 className="font-inter text-xl font-bold">Table of Contents</h3>
                <nav
                  className="border-primary/20 border-l-primary/25 relative mt-4 ml-[2px] space-y-4 border-l-[4px]"
                  ref={tocRef}
                >
                  {/* Scrolling line indicator */}
                  <div className="flex h-full w-1 bg-red-500/0">
                    <div
                      className="bg-primary absolute left-0 -ml-[3px] w-[4px] transition-all duration-300 ease-out"
                      style={{
                        height: "30px",
                        transform: `translateY(${linePosition}px)`,
                        opacity: activeSection ? 1 : 0,
                      }}
                    />
                  </div>

                  {blogContent
                    .filter(section => section.title)
                    .map(section => (
                      <button
                        key={section.id}
                        data-section={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full pr-2 pl-4 text-left transition-all duration-300 ${
                          activeSection === section.id
                            ? "text-lg font-bold"
                            : "text-muted-foreground hover:text-foreground text-base"
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                </nav>
              </div>

              {/* Related Posts */}
              <div className="mt-10">
                <h3 className="font-inter text-xl font-bold">Related Posts</h3>
                <div className="mt-2 gap-1">
                  {relatedPosts.map(post => (
                    <div
                      key={post.title}
                      className="border-border flex flex-col gap-0.5 py-3 last:border-b-0 last:pb-0"
                    >
                      <p className="text-muted-foreground mb-1 text-sm">{post.date}</p>
                      <Link
                        href={"/"}
                        className="text-foreground font-outfit mb-2 text-base font-semibold underline lg:text-lg"
                      >
                        {post.title}
                      </Link>
                      <Link href={"/"} className="text-sm hover:underline">
                        {post.readMore}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
