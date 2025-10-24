export const runtime = "nodejs";

import * as cheerio from "cheerio";
import DOMPurify from "isomorphic-dompurify";

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "");

export function extractHeadingsAndContent(html: string) {
  const sanitizedHtml = DOMPurify.sanitize(html);
  const $ = cheerio.load(sanitizedHtml, null, false);
  const headings: { id: string; text: string }[] = [];

  // Remove data-block-key attributes from all elements
  $("*[data-block-key]").removeAttr("data-block-key");

  // Process h3 headings
  $("h3").each((_, element) => {
    const $element = $(element);
    const text = $element.text().trim() || "heading";
    const id = slugify(text);
    $element.attr("id", id);
    headings.push({ id, text });
  });

  return { headings, content: $.html() };
}
