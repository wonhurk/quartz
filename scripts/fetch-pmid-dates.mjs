import fs from "fs";
import path from "path";

const CONTENT_DIR = "./content";
const CACHE_FILE = "./plugins/pmid-links/pmid-cache.json";
const BATCH_SIZE = 100;
const DELAY_MS = 400; // stay under 3 req/s (NCBI limit without API key)

// Collect all unique PMIDs from content files
const allPmids = new Set();
for (const file of fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".md"))) {
  const text = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
  for (const m of text.matchAll(/PMID:(\d+)/g)) allPmids.add(m[1]);
}
console.log(`Found ${allPmids.size} unique PMIDs`);

// Load existing cache
let cache = {};
if (fs.existsSync(CACHE_FILE)) {
  cache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
}

const missing = [...allPmids].filter(id => !(id in cache));
console.log(`${missing.length} not yet cached — fetching from PubMed...`);

const sleep = ms => new Promise(r => setTimeout(r, ms));

for (let i = 0; i < missing.length; i += BATCH_SIZE) {
  const batch = missing.slice(i, i + BATCH_SIZE);
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${batch.join(",")}&retmode=json`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    for (const id of batch) {
      const entry = data.result?.[id];
      cache[id] = entry?.pubdate ?? null;
    }
    process.stdout.write(`\r  ${Math.min(i + BATCH_SIZE, missing.length)}/${missing.length}`);
  } catch (err) {
    console.error(`\nBatch error at ${i}:`, err.message);
  }
  if (i + BATCH_SIZE < missing.length) await sleep(DELAY_MS);
}

console.log("\nDone.");
fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
console.log(`Saved ${Object.keys(cache).length} entries → ${CACHE_FILE}`);
