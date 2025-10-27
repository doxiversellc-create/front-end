export const runtime = "nodejs";

import * as cheerio from "cheerio";
import sanitizeHtml from "sanitize-html";

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "");

export function extractHeadingsAndContent(html: string) {
  const sanitizedHtml = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "figure", "figcaption"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      "*": ["class", "style"],
      img: ["src", "alt", "title", "width", "height", "loading"],
    },
  });
  const $ = cheerio.load(sanitizedHtml, null, false);
  const usedIds = new Set<string>();
  const headings: { id: string; text: string }[] = [];

  // Remove data-block-key attributes from all elements
  $("*[data-block-key]").removeAttr("data-block-key");

  // Process h3 headings
  $("h1, h2, h3").each((_, element) => {
    const $element = $(element);
    const rawText = $element.text().trim();

    // Skip empty headings
    if (!rawText) return;

    const text = rawText;
    const baseId = slugify(text);
    let id = baseId;
    let counter = 1;

    // Ensure the ID is unique
    while (usedIds.has(id)) {
      id = `${baseId}-${counter}`;
      counter++;
    }

    // Set the unique ID attribute on the element
    $element.attr("id", id);
    usedIds.add(id);

    // Add the heading to the list
    headings.push({ id, text });
  });
  return { headings, content: $.html() };
}
