type OrganizationSchema = {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  description?: string;
};

type WebsiteSchema = {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  potentialAction?: {
    "@type": string;
    target: string | { "@type": string; urlTemplate: string };
    "query-input"?: string;
  };
};

type ArticleSchema = {
  "@context": string;
  "@type": string;
  headline: string;
  description?: string;
  image?: string | string[];
  datePublished: string;
  dateModified?: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo?: {
      "@type": string;
      url: string;
    };
  };
};

type BreadcrumbSchema = {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }>;
};

export const generateOrganizationSchema = (): OrganizationSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Doxiverse",
    url: "https://doxiverse.com",
    logo: "https://doxiverse.com/logo.svg",
    description:
      "AI for Healthcare - Discover the latest AI tools, researches, and innovations in healthcare.",
    sameAs: [
      // Add your social media profiles here
      // "https://twitter.com/doxiverse",
      // "https://www.linkedin.com/company/doxiverse",
      // "https://www.facebook.com/doxiverse",
    ],
  };
};

export const generateWebsiteSchema = (): WebsiteSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Doxiverse",
    url: "https://doxiverse.com",
    description:
      "Discover the latest AI tools, researches, and innovations in healthcare. Stay updated with FDA approvals, research, and cutting-edge AI technologies transforming medical care.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://doxiverse.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
};

export const generateArticleSchema = (params: {
  title: string;
  description?: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  url: string;
}): ArticleSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      "@type": "Person",
      name: params.authorName || "Doxiverse Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Doxiverse",
      logo: {
        "@type": "ImageObject",
        url: "https://doxiverse.com/logo.svg",
      },
    },
  };
};

export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url?: string }>
): BreadcrumbSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
};

export const generateJobPostingSchema = (params: {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string;
  hiringOrganization: string;
  jobLocation?: string;
  baseSalary?: {
    currency: string;
    value: number;
    unitText: string;
  };
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: params.title,
    description: params.description,
    datePosted: params.datePosted,
    validThrough: params.validThrough,
    employmentType: params.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: params.hiringOrganization,
    },
    ...(params.jobLocation && {
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: params.jobLocation,
        },
      },
    }),
    ...(params.baseSalary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: params.baseSalary.currency,
        value: {
          "@type": "QuantitativeValue",
          value: params.baseSalary.value,
          unitText: params.baseSalary.unitText,
        },
      },
    }),
  };
};

export const generateProductSchema = (params: {
  name: string;
  description: string;
  image?: string;
  url: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: params.name,
    description: params.description,
    image: params.image,
    url: params.url,
    ...(params.aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: params.aggregateRating.ratingValue,
        reviewCount: params.aggregateRating.reviewCount,
      },
    }),
  };
};
