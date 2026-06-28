import fs from "fs";

const raw = fs.readFileSync("tmp-portfolio-data.json", "utf8").replace(/^\uFEFF/, "");
const projects = JSON.parse(raw);

const featuredTitles = new Set([
  "TemplePure Incense",
  "PackagingBazaar",
  "SYNQ Platform",
  "PRESSVAC Engineering",
  "Navkaar Real Estate",
  "Glow Makeover",
  "Optimyz Learning",
  "YogSaathi",
  "TrippyJiffy",
  "Bohosaaz Marketplace",
]);

const slugCount = {};

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function decode(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/\.\.\.$/, ".");
}

const imageOverrides = {
  "quick-construction-solutions-2": "/portfolio/quick-construction-solutions.png",
  "templepure-incense-2": "/portfolio/templepure-incense.png",
  "onog-industries-2": "/portfolio/onog-industries.jpg",
  tirppyjiffy: "/portfolio/tirppyjiffy.jpg",
  "indiva-hospitality": "/portfolio/indiva-hospitality.jpg",
};

const items = projects.map((project) => {
  const title = decode(project.title);
  const base = slugify(title);
  slugCount[base] = (slugCount[base] || 0) + 1;
  const id = slugCount[base] > 1 ? `${base}-${slugCount[base]}` : base;
  const ext = project.image.endsWith(".jpg") ? ".jpg" : ".png";
  const image = imageOverrides[id] ?? `/portfolio/${id}${ext}`;

  return {
    id,
    title,
    client: decode(project.client),
    category: decode(project.category),
    description: decode(project.description),
    image,
    url: project.url,
    featured: featuredTitles.has(title),
  };
});

const categories = [
  "All Categories",
  "Corporate & Business",
  "Corporate Website",
  "E-Commerce",
  "Education & Consulting",
  "Health & Wellness",
  "Health, Beauty & Wellness",
  "Hotel Website",
  "Real Estate & Construction",
  "Travel & Hospitality",
];

const lines = [];
lines.push('export const portfolioCategories = [');
categories.forEach((category) => lines.push(`  "${category}",`));
lines.push('] as const;');
lines.push('');
lines.push('export type PortfolioCategory = (typeof portfolioCategories)[number];');
lines.push('');
lines.push('export type PortfolioProject = {');
lines.push('  id: string;');
lines.push('  title: string;');
lines.push('  client: string;');
lines.push('  category: Exclude<PortfolioCategory, "All Categories">;');
lines.push('  description: string;');
lines.push('  image: string;');
lines.push('  url: string;');
lines.push('  featured?: boolean;');
lines.push('};');
lines.push('');
lines.push('export const portfolioProjects: PortfolioProject[] = [');

items.forEach((item) => {
  lines.push('  {');
  lines.push(`    id: "${item.id}",`);
  lines.push(`    title: "${item.title.replace(/"/g, '\\"')}",`);
  lines.push(`    client: "${item.client.replace(/"/g, '\\"')}",`);
  lines.push(`    category: "${item.category}",`);
  lines.push(`    description:`);
  lines.push(`      "${item.description.replace(/"/g, '\\"')}",`);
  lines.push(`    image: "${item.image}",`);
  lines.push(`    url: "${item.url}",`);
  if (item.featured) lines.push('    featured: true,');
  lines.push('  },');
});

lines.push('];');
lines.push('');
lines.push('export const portfolioStats = {');
lines.push('  activeProjects: portfolioProjects.length,');
lines.push('  featuredWork: portfolioProjects.filter((project) => project.featured).length,');
lines.push('  categories: portfolioCategories.length - 1,');
lines.push('  label: "360°",');
lines.push('  labelText: "Digital Solutions",');
lines.push('};');
lines.push('');

fs.writeFileSync("lib/portfolio.ts", lines.join("\n"));
console.log(`Wrote ${items.length} projects to lib/portfolio.ts`);
