export interface LandingPageContent {
  title: string;
  hero_title: string;
  hero_subtitle: string;
  categories_title: string;
  categories_subtitle: string;
  ai_tools_title: string;
  ai_tools_subtitle: string;
  offers_section_title: string;
  offers_section_subtitle: string;
  offer_one_title: string;
  offer_one_description: string;
  offer_two_title: string;
  offer_two_description: string;
  offer_three_title: string;
  offer_three_description: string;
  offer_four_title: string;
  offer_four_description: string;
  offer_five_title: string;
  offer_five_description: string;
  offer_six_title: string;
  offer_six_description: string;
  why_choose_us_title: string;
  why_choose_us_subtitle: string;
  why_choose_us_cta_text: string;
  why_choose_us_cta_link: string;
  card_one_title: string;
  card_one_description: string;
  card_two_title: string;
  card_two_description: string;
  card_three_title: string;
  card_three_description: string;
  card_four_title: string;
  card_four_description: string;
  core_title_section_title: string;
  core_title_section_subtitle: string;
  core_title_section_description: string;
  email_marketing_title: string;
  email_marketing_description: string;
  email_marketing_cta_text: string;
  cta_question: string;
  cta_main_heading: string;
  cta_description: string;
  cta_button_text: string;
  cta_button_link: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface AboutUsContent {
  title: string;
  page_title: string;
  subtitle: string;
  mission_tagline: string;
  paragraph_one: string;
  image_paragraph_one: string | null;
  image_paragraph_one_url: string | null;
  paragraph_two: string;
  image_paragraph_two: string | null;
  image_paragraph_two_url: string | null;
  what_you_can_expect_title: string;
  feature_one_title: string;
  feature_one_description: string;
  feature_two_title: string;
  feature_two_description: string;
  feature_three_title: string;
  feature_three_description: string;
  feature_four_title: string;
  feature_four_description: string;
  footer_message: string;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface AIJobsContent {
  title: string;
  page_title: string;
  subtitle: string;
  jobs_source_title: string;
  jobs_sources_description: string;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface AIToolsContent {
  title: string;
  page_title: string;
  page_subtitle: string;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface AINewsContent {
  title: string;
  page_title: string;
  subtitle: string;
  page_description: string;
  email_marketing_title: string;
  email_marketing_description: string;
  email_cta_button_text: string;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface ContactUsContent {
  title: string;
  page_title: string;
  page_subtitle: string;
  description: string;
  contact_info_title: string;
  email_support_title: string;
  email_support_description: string;
  support_email: string;
  faqs_title: string;
  faqs_description: string;
  faq_1_question: string;
  faq_1_answer: string;
  faq_2_question: string;
  faq_2_answer: string;
  faq_3_question: string;
  faq_3_answer: string;
  faq_4_question: string;
  faq_4_answer: string;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface FDAUpdatesContent {
  title: string;
  page_title: string;
  subtitle: string;
  description: string;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface NewsletterContent {
  title: string;
  slug: string;
  main_heading: string;
  description: string;
  form_title: string;
  form_description: string;
  subscribe_button_text: string;
  follow_text: string;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface ResearchesContent {
  title: string;
  page_title: string;
  subtitle: string;
  description: string;
  research_source_title: string;
  research_sources_description: string;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface DisclaimerContent {
  title: string;
  slug: string;
  content: string;
  meta_description: string;
  og_image: string | null;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface PrivacyPolicyContent {
  title: string;
  slug: string;
  content: string;
  meta_description: string;
  og_image: string | null;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface TermsOfUseContent {
  title: string;
  slug: string;
  content: string;
  meta_description: string;
  og_image: string | null;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface VendorPrivacyPolicyContent {
  title: string;
  slug: string;
  content: string;
  meta_description: string;
  og_image: string | null;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}

export interface VendorTermsAndConditionsContent {
  title: string;
  slug: string;
  content: string;
  meta_description: string;
  og_image: string | null;
  first_published_at: string;
  last_published_at: string;
  meta?: {
    is_fallback?: boolean;
  };
  live?: boolean;
}
