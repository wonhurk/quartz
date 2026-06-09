// Transformer plugin: converts PMID:12345678 text to PubMed hyperlinks with publication dates

import fs from "fs";
import path from "path";

// Load date cache once at module init (cwd = quartz project root during build)
let dateCache = {};
try {
  const cachePath = path.join(process.cwd(), "plugins", "pmid-links", "pmid-cache.json");
  if (fs.existsSync(cachePath)) {
    dateCache = JSON.parse(fs.readFileSync(cachePath, "utf-8"));
  }
} catch (e) {
  console.warn("[pmid-links] Could not load date cache:", e.message);
}

function rehypePmidLinks() {
  return (tree) => {
    walkTree(tree);
  };
}

function walkTree(node) {
  if (!node) return;
  // Skip existing links, code, and pre elements
  if (node.type === "element" &&
      (node.tagName === "a" || node.tagName === "code" || node.tagName === "pre")) {
    return;
  }
  if (!node.children) return;

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (child.type === "text") {
      const parts = splitOnPmids(child.value);
      if (parts.length > 1) {
        node.children.splice(i, 1, ...parts);
        i += parts.length - 1;
        continue;
      }
    }
    walkTree(child);
  }
}

function splitOnPmids(text) {
  const re = /PMID:(\d+)/g;
  if (!re.test(text)) return [{ type: "text", value: text }];

  re.lastIndex = 0;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }

    const pmid = match[1];
    const date = dateCache[pmid];

    // The PMID anchor
    parts.push({
      type: "element",
      tagName: "a",
      properties: {
        href: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
        target: "_blank",
        rel: ["noopener", "noreferrer"],
        className: ["pmid-link", "external"],
      },
      children: [{ type: "text", value: match[0] }],
    });

    // Publication date badge, if known
    if (date) {
      parts.push({
        type: "element",
        tagName: "span",
        properties: { className: ["pmid-date"] },
        children: [{ type: "text", value: ` (${date})` }],
      });
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", value: text.slice(lastIndex) });
  }
  return parts;
}

export const PmidLinks = () => ({
  name: "PmidLinks",
  htmlPlugins() {
    return [rehypePmidLinks];
  },
});
