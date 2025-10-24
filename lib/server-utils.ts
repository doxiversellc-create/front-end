export const runtime = "nodejs";

import DOMPurify from "isomorphic-dompurify";
import { JSDOM } from "jsdom";
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "");

export function extractHeadingsAndContent(html: string) {
  const sanitizedHtml = DOMPurify.sanitize(html);
  const sanitizedDom = new JSDOM(sanitizedHtml);
  const sanitizedDocument = sanitizedDom.window.document;
  const headings: { id: string; text: string }[] = [];
  const allElements = sanitizedDocument.body.querySelectorAll("*");
  allElements.forEach(el => {
    if (el.hasAttribute("data-block-key")) el.removeAttribute("data-block-key");
    if (el.tagName.toLowerCase() === "h3") {
      const text = el.textContent?.trim() || "heading";
      const id = slugify(text);
      el.id = id;
      headings.push({ id, text });
    }
  });
  return { headings, content: sanitizedDocument.body.innerHTML };
}
