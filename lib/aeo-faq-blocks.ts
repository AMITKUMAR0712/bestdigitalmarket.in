/**
 * AEO answer blocks + FAQPage schema data for TradeOrbit Global.
 * Placement is exclusive: each question appears on exactly one page.
 */

export type SnippetType = "paragraph" | "numbered list" | "table" | "definition";

export type AeoPlacement =
  | "/faq"
  | "/services/website-development"
  | "/services/custom-software"
  | "/services/seo-local-seo"
  | "/services/google-ads"
  | "/services/crm-solutions"
  | "/services/ai-ml"
  | "/services/agentic-ai"
  | "/services/digital-marketing"
  | "/services/mobile-apps"
  | "/services/devops-hosting"
  | "/blog/website-development-cost-noida"
  | "/blog/seo-services-price-india"
  | "/blog/custom-software-vs-saas-crm"
  | "/blog/nextjs-vs-wordpress-business-website"
  | "/blog/how-to-get-google-leads-local-business"
  | "/blog/website-not-ranking-on-google"
  | "/blog/agentic-ai-for-business-india";

export type AeoAnswerBlock = {
  id: string;
  question: string;
  directAnswer: string;
  supporting: string;
  placeholder: string;
  snippetType: SnippetType;
  snippetFormatted: string;
  placement: AeoPlacement;
  /** Combined plain answer for FAQPage schema (DIRECT + SUPPORTING, no placeholders expanded) */
  schemaAnswer: string;
};

/** 25 highest-intent Q&As — one page each, no duplicates */
export const aeoAnswerBlocks: AeoAnswerBlock[] = [
  {
    id: "p1",
    question: "How much does a business website cost in Noida?",
    directAnswer:
      "A standard business website in Noida usually costs between ₹25,000 and ₹1,50,000 depending on pages, design depth, CMS or custom build, SEO setup and integrations. Ecommerce, portals or CRM-connected sites cost more because of product logic and admin workflows.",
    supporting:
      "Price moves with page count, unique UI, speed targets, form or WhatsApp lead flows, payment gateways and whether you need blog, multilingual or booking modules. A clear brief and staged MVP keeps cost controlled. Always separate design, development, content and monthly SEO so you compare quotes fairly.",
    placeholder: "YOUR exact starter / growth / premium package prices in ₹",
    snippetType: "table",
    snippetFormatted: `Website type | Typical Noida range
Brochure (5–8 pages) | ₹[STARTER]–₹[MID]
Custom business site | ₹[MID]–₹[GROWTH]
Ecommerce / portal | ₹[GROWTH]+`,
    placement: "/blog/website-development-cost-noida",
    schemaAnswer:
      "A standard business website in Noida usually costs between ₹25,000 and ₹1,50,000 depending on pages, design depth, CMS or custom build, SEO setup and integrations. Ecommerce, portals or CRM-connected sites cost more. Price moves with page count, unique UI, speed targets, lead flows and modules such as blog, booking or payments. Compare quotes by separating design, development, content and monthly SEO.",
  },
  {
    id: "p2",
    question: "What is the price of SEO services for a small business in India?",
    directAnswer:
      "SEO for a small Indian business commonly ranges from ₹8,000 to ₹40,000 per month based on competition, city coverage, content volume and technical work. One-time audits or setup packages are separate and usually lower than ongoing retainers.",
    supporting:
      "Local SEO for one city costs less than multi-city or national campaigns. Budget should cover technical fixes, Google Business Profile, on-page work, content and reporting. Avoid rock-bottom retainers that only do directory spam. Ask what deliverables ship each month and how leads are measured.",
    placeholder: "YOUR monthly SEO retainer tiers and what each includes",
    snippetType: "table",
    snippetFormatted: `Plan focus | Typical monthly range
Local (1 city) | ₹[LOCAL_MIN]–₹[LOCAL_MAX]
Growth (content + tech) | ₹[GROWTH_MIN]–₹[GROWTH_MAX]
Competitive niche | ₹[COMP_MIN]+`,
    placement: "/blog/seo-services-price-india",
    schemaAnswer:
      "SEO for a small Indian business commonly ranges from ₹8,000 to ₹40,000 per month based on competition, city coverage, content volume and technical work. Local SEO for one city costs less than multi-city campaigns. Budget should cover technical fixes, Google Business Profile, on-page work, content and reporting, with clear monthly deliverables and lead tracking.",
  },
  {
    id: "p3",
    question: "How much do Google Ads cost for lead generation in Noida?",
    directAnswer:
      "Google Ads spend for Noida lead generation often starts at ₹15,000 to ₹50,000 per month in ad budget, plus management fees. Cost per lead depends on industry keywords, landing page quality and offer strength, not only bid price.",
    supporting:
      "High-intent service keywords in NCR can be expensive; long-tail and call-only campaigns can lower waste. Tracking calls, forms and WhatsApp is mandatory. Management fees are usually a flat fee or percent of spend. Start with a test budget, then scale winners.",
    placeholder: "YOUR management fee model and example CPL ranges by industry",
    snippetType: "paragraph",
    snippetFormatted:
      "Google Ads for Noida lead generation typically needs ₹15,000–₹50,000+ monthly ad spend plus management. Final cost per lead depends on keyword competition, landing page conversion rate and how accurately calls, forms and WhatsApp are tracked.",
    placement: "/services/google-ads",
    schemaAnswer:
      "Google Ads spend for Noida lead generation often starts at ₹15,000 to ₹50,000 per month in ad budget, plus management fees. Cost per lead depends on industry keywords, landing page quality and offer strength. High-intent NCR keywords cost more; long-tail and call tracking reduce waste. Start with a test budget, then scale campaigns that produce qualified leads.",
  },
  {
    id: "p4",
    question: "What is the cost of custom software development in India for SMEs?",
    directAnswer:
      "Custom software for Indian SMEs often starts around ₹1,50,000 to ₹8,00,000+ for an MVP, based on modules, users, integrations and platforms. Simple internal tools cost less; multi-role systems with payments, inventory or AI features cost more.",
    supporting:
      "Scope drivers include admin panels, mobile apps, third-party APIs, security, hosting and training. Phased delivery (MVP then modules) protects cash flow. Fixed-price works for clear scopes; time-and-materials fits evolving products. Always budget post-launch support.",
    placeholder: "YOUR MVP / module / monthly AMC rate card",
    snippetType: "definition",
    snippetFormatted:
      "Custom software cost (India SME): The total price to design, build and launch a tailored business system—typically ₹1.5L–₹8L+ for an MVP—driven by features, users, integrations and whether web, mobile or both are required.",
    placement: "/services/custom-software",
    schemaAnswer:
      "Custom software for Indian SMEs often starts around ₹1,50,000 to ₹8,00,000+ for an MVP, based on modules, users, integrations and platforms. Simple internal tools cost less; multi-role systems with payments, inventory or AI cost more. Phased MVP delivery and clear AMC for support keep long-term cost predictable.",
  },
  {
    id: "t1",
    question: "How long does it take to build a business website?",
    directAnswer:
      "A typical business website takes 2 to 6 weeks from brief to launch if content is ready. Complex custom designs, large page counts or pending brand assets can extend timelines to 8 weeks or more.",
    supporting:
      "Week 1 is discovery and sitemap, weeks 2–3 design, then development, content upload, SEO basics, testing and go-live. Delays usually come from late content, stock photos or approval cycles. Parallel content writing shortens calendar time.",
    placeholder: "YOUR guaranteed delivery SLA for starter packages",
    snippetType: "numbered list",
    snippetFormatted: `1. Discovery and sitemap — 2–4 days
2. Design approval — 4–8 days
3. Development and forms — 5–12 days
4. Content, SEO, QA, launch — 3–7 days
Total: about 2–6 weeks when content arrives on time.`,
    placement: "/services/website-development",
    schemaAnswer:
      "A typical business website takes 2 to 6 weeks from brief to launch if content is ready. Complex custom designs or large page counts can take 8 weeks or more. The flow is discovery, design, development, content and SEO, testing, then launch. Late content and approvals are the main delay risks.",
  },
  {
    id: "t2",
    question: "How long does SEO take to show results in India?",
    directAnswer:
      "Most SEO campaigns in India show early ranking or traffic movement in 60 to 90 days. Stronger, stable lead growth usually compounds over 4 to 6 months depending on competition, website health and publishing speed.",
    supporting:
      "New domains and weak sites take longer. Local SEO with Google Business Profile can move faster than national keywords. Paid ads can fill the gap while SEO compounds. Measure impressions, rankings, organic leads and calls—not vanity traffic alone.",
    placeholder: "YOUR case-study months-to-result examples",
    snippetType: "paragraph",
    snippetFormatted:
      "SEO in India usually shows early movement in 60–90 days, with stronger lead growth in 4–6 months. Timelines depend on competition, technical health, content velocity and whether you focus on local or national keywords.",
    placement: "/services/seo-local-seo",
    schemaAnswer:
      "Most SEO campaigns in India show early ranking or traffic movement in 60 to 90 days. Stronger, stable lead growth usually compounds over 4 to 6 months depending on competition, website health and publishing speed. Local SEO with Google Business Profile can move faster than broad national keywords.",
  },
  {
    id: "t3",
    question: "How long does custom CRM development take?",
    directAnswer:
      "A focused custom CRM MVP usually takes 4 to 10 weeks. Broader systems with roles, automation, WhatsApp or accounting integrations often need 3 to 5 months including testing and training.",
    supporting:
      "Timeline depends on lead stages, user roles, reports and data migration. Start with enquiry → follow-up → deal pipeline, then add automation. UAT with sales users prevents rework. Plan a soft launch before full team rollout.",
    placeholder: "YOUR average weeks for sales-CRM MVP",
    snippetType: "numbered list",
    snippetFormatted: `1. Process mapping — 3–7 days
2. UX + data model — 1–2 weeks
3. Build core pipeline — 2–5 weeks
4. Integrations and UAT — 1–3 weeks
5. Training and go-live — 3–7 days`,
    placement: "/services/crm-solutions",
    schemaAnswer:
      "A focused custom CRM MVP usually takes 4 to 10 weeks. Broader systems with roles, automation and integrations often need 3 to 5 months including testing and training. Starting with enquiry-to-deal pipeline first, then automation, keeps delivery predictable.",
  },
  {
    id: "pr1",
    question: "What is the process to hire a website development company in Greater Noida?",
    directAnswer:
      "Share your goals and pages, review portfolio and process, lock scope and timeline, then start with wireframes or design before development. Payment milestones should match deliverables, not only an advance.",
    supporting:
      "Ask for SEO basics, mobile performance, form tracking and ownership of code and domains. Prefer written scope, revision limits and post-launch support terms. A discovery call should clarify leads, not just aesthetics.",
    placeholder: "YOUR onboarding checklist / kickoff form fields",
    snippetType: "numbered list",
    snippetFormatted: `1. Share business goals and must-have pages
2. Shortlist by portfolio and local experience
3. Finalize scope, timeline and milestones
4. Approve design or wireframes
5. Development, QA, training and handover`,
    placement: "/faq",
    schemaAnswer:
      "Share your goals and pages, review portfolio and process, lock scope and timeline, then start with wireframes or design before development. Payment milestones should match deliverables. Confirm SEO basics, mobile performance, tracking, code ownership and post-launch support in writing before you pay a large advance.",
  },
  {
    id: "pr2",
    question: "How do you start an AI software project for a small business?",
    directAnswer:
      "Start by defining one painful workflow, the data you already have and a success metric such as time saved or leads qualified. Then build a small pilot, measure results and only then scale features or models.",
    supporting:
      "Skip vague “add AI” briefs. Clarify inputs, privacy, human review steps and where the AI sits—chat, CRM assist or back-office automation. Pilots reduce risk and cost. Document failure cases before production.",
    placeholder: "YOUR pilot fee and typical pilot duration",
    snippetType: "numbered list",
    snippetFormatted: `1. Pick one workflow and KPI
2. Audit data quality and privacy
3. Choose build vs API tools
4. Run a 2–6 week pilot
5. Measure, then scale or stop`,
    placement: "/services/ai-ml",
    schemaAnswer:
      "Start by defining one painful workflow, the data you already have and a success metric such as time saved or leads qualified. Then build a small pilot, measure results and only then scale. Clarify privacy, human review and whether AI sits in chat, CRM or back-office automation before full build.",
  },
  {
    id: "c1",
    question: "Custom software vs ready-made CRM which is better for SMEs in India?",
    directAnswer:
      "Ready-made CRM is better when your sales process is standard and you need speed. Custom software is better when your workflow, roles or integrations do not fit SaaS limits or per-user pricing becomes expensive.",
    supporting:
      "SaaS wins on quick setup and updates. Custom wins on unique processes, offline needs, deep ERP links and long-term control. Many SMEs start on SaaS, then customize or rebuild when process maturity rises. Compare 3-year cost, not only month one.",
    placeholder: "YOUR decision checklist scorecard if you sell both",
    snippetType: "table",
    snippetFormatted: `Need | Better fit
Standard sales pipeline | Ready-made CRM
Unique workflows / heavy integrations | Custom software
Go live in days | Ready-made
Own code and roadmap | Custom`,
    placement: "/blog/custom-software-vs-saas-crm",
    schemaAnswer:
      "Ready-made CRM is better when your sales process is standard and you need speed. Custom software is better when workflows, roles or integrations do not fit SaaS limits or per-user pricing becomes expensive. Compare three-year cost, speed to launch and process fit—not only the first month’s fee.",
  },
  {
    id: "c2",
    question: "Next.js or WordPress which is better for a business website in India?",
    directAnswer:
      "WordPress is better for content-heavy sites needing frequent non-technical edits. Next.js is better when you need speed, custom UX, app-like features or tighter SEO engineering control for competitive markets.",
    supporting:
      "WordPress has plugins and lower entry cost but needs hardening and upkeep. Next.js sites often perform better for Core Web Vitals and custom funnels when maintained by developers. Choose based on editing needs, security appetite and growth roadmap.",
    placeholder: "YOUR recommended default stack for SME brochure sites",
    snippetType: "table",
    snippetFormatted: `Factor | WordPress | Next.js
Editor friendliness | Higher | Needs developer or CMS
Performance control | Plugin-dependent | Strong if built well
Custom product UI | Limited | Strong
Typical fit | Blogs, brochure | Growth sites, web apps`,
    placement: "/blog/nextjs-vs-wordpress-business-website",
    schemaAnswer:
      "WordPress is better for content-heavy sites needing frequent non-technical edits. Next.js is better when you need speed, custom UX, app-like features or tighter SEO engineering control. Choose based on who will edit content, security upkeep and whether you need a marketing site or a product-like web experience.",
  },
  {
    id: "c3",
    question: "Is agentic AI different from a chatbot?",
    directAnswer:
      "Yes. A chatbot mainly replies in conversation. Agentic AI can plan steps, use tools, update systems and complete multi-step tasks with human approval rules—so it acts on workflows, not only messages.",
    supporting:
      "Chatbots handle FAQs and lead capture. Agents can qualify leads, create CRM tasks, draft follow-ups or trigger automations. They need clearer permissions, logging and fallback to humans. Most SMEs should automate one workflow first.",
    placeholder: "YOUR example agent workflows you actually deliver",
    snippetType: "definition",
    snippetFormatted:
      "Agentic AI: Software that can decide next steps and use tools to complete a business workflow (with guardrails), whereas a chatbot primarily generates conversational replies.",
    placement: "/services/agentic-ai",
    schemaAnswer:
      "Yes. A chatbot mainly replies in conversation. Agentic AI can plan steps, use tools, update systems and complete multi-step tasks with human approval rules. Chatbots suit FAQs and capture; agents suit workflow automation with logging, permissions and human fallback.",
  },
  {
    id: "tr1",
    question: "How do I know a digital marketing agency in Greater Noida is trustworthy?",
    directAnswer:
      "Trust shows in clear contracts, measurable KPIs, access to your ad accounts, transparent reporting and real local case examples. Avoid agencies that guarantee #1 rankings or refuse to share account ownership.",
    supporting:
      "Ask who runs ads day to day, how leads are qualified and what happens after the contract. Check GST invoice, communication SLAs and whether they use your Google Business Profile ethically. Short pilots beat long lock-ins.",
    placeholder: "YOUR trust badges: years, clients, rating, sample report",
    snippetType: "numbered list",
    snippetFormatted: `1. You own website, ads and analytics accounts
2. Written KPIs and monthly report format
3. Local proof and verifiable contacts
4. No ranking guarantees or black-box tactics
5. Exit clause and data handover defined`,
    placement: "/services/digital-marketing",
    schemaAnswer:
      "Trust shows in clear contracts, measurable KPIs, access to your ad accounts, transparent reporting and real local case examples. Avoid ranking guarantees and agencies that keep ad accounts in their name. Prefer short pilots, GST invoices and written handover terms.",
  },
  {
    id: "tr2",
    question: "Will my website data and source code stay with me?",
    directAnswer:
      "Yes—if ownership is written into the contract. You should retain domain, hosting access, analytics, ad accounts and source code or CMS admin after final payment, unless a separate license says otherwise.",
    supporting:
      "Confirm repository access, license for third-party themes/plugins and handover checklist. Escrow or milestone-based repo access reduces risk. Never leave critical assets only on a vendor laptop or private account.",
    placeholder: "YOUR standard IP / handover clause summary",
    snippetType: "paragraph",
    snippetFormatted:
      "Your domain, hosting, analytics, ad accounts and website source or CMS admin should remain yours after final payment when the contract says so. Insist on written handover, repository access and a checklist covering DNS, emails and admin users.",
    placement: "/faq",
    schemaAnswer:
      "Yes—if ownership is written into the contract. You should retain domain, hosting access, analytics, ad accounts and source code or CMS admin after final payment. Confirm repository access, third-party licenses and a handover checklist covering DNS and admin users.",
  },
  {
    id: "tr3",
    question: "What are the risks of cheap SEO packages in India?",
    directAnswer:
      "Cheap SEO often uses spam links, doorway pages or fake reports that can harm rankings long term. You may also get no technical fixes, thin content and no real lead tracking.",
    supporting:
      "Low price usually means junior execution or automated junk. Recovery from penalties costs more than doing basics right. Prefer transparent deliverables, clean link practices and search-console-based reporting.",
    placeholder: "YOUR red-flag list used in sales calls",
    snippetType: "paragraph",
    snippetFormatted:
      "Cheap SEO packages in India often rely on spam links, doorway pages or vanity reports. That can stall growth or trigger ranking drops. Safer SEO focuses on technical health, useful content, ethical links and measured enquiries.",
    placement: "/faq",
    schemaAnswer:
      "Cheap SEO often uses spam links, doorway pages or fake reports that can harm rankings long term. You may get no technical fixes, thin content and no lead tracking. Prefer transparent deliverables, clean link practices and Search Console–based reporting.",
  },
  {
    id: "tech1",
    question: "What technical SEO checks should my SME website pass?",
    directAnswer:
      "Your site should load fast on mobile, use HTTPS, have clean titles and one H1 per page, working sitemap and robots, indexable key pages, and no major crawl errors in Google Search Console.",
    supporting:
      "Also fix broken links, duplicate titles, missing alts, weak internal links and poor Core Web Vitals. Local businesses need accurate NAP and Google Business Profile alignment. Technical SEO supports content—it does not replace it.",
    placeholder: "YOUR audit scorecard template link or PDF name",
    snippetType: "numbered list",
    snippetFormatted: `1. HTTPS + mobile-usable pages
2. Unique titles, meta descriptions, single H1
3. XML sitemap and correct robots rules
4. Fast LCP and stable layout
5. Search Console without critical coverage errors
6. Consistent local business details`,
    placement: "/blog/website-not-ranking-on-google",
    schemaAnswer:
      "Your site should load fast on mobile, use HTTPS, have clean titles and one H1 per page, working sitemap and robots, indexable key pages, and no major crawl errors in Google Search Console. Also fix broken links, duplicate metadata, weak internal links and Core Web Vitals issues.",
  },
  {
    id: "tech2",
    question: "Do I need a mobile app or is a mobile website enough?",
    directAnswer:
      "A mobile website is enough for most brochure and lead-gen businesses. Build an app when you need logins, push notifications, offline use, repeat transactions or a product experience users open weekly.",
    supporting:
      "Apps add store fees, update cycles and higher build cost. Many SMEs start with a fast mobile site plus WhatsApp, then add an app when retention justifies it. Progressive Web Apps can bridge some gaps.",
    placeholder: "YOUR criteria checklist for recommending apps",
    snippetType: "definition",
    snippetFormatted:
      "Mobile website vs app: A mobile website serves visitors through the browser for discovery and enquiries; a native or cross-platform app is justified when frequent logged-in use, push alerts or offline features are core to the business.",
    placement: "/services/mobile-apps",
    schemaAnswer:
      "A mobile website is enough for most brochure and lead-gen businesses. Build an app when you need logins, push notifications, offline use, repeat transactions or weekly engagement. Many SMEs start with a fast mobile site and WhatsApp, then add an app when retention justifies the cost.",
  },
  {
    id: "tech3",
    question: "What hosting do I need for a Next.js business website?",
    directAnswer:
      "Most Next.js marketing sites run well on managed platforms such as Vercel or similar Node-friendly hosts with HTTPS, previews and automatic deploys. Heavier apps may need a cloud VPS or container setup with monitoring.",
    supporting:
      "Prioritize SSL, backups, uptime monitoring and easy rollbacks. Pair hosting with a CDN and image optimization. Shared PHP hosting alone is a poor fit for Next.js. Budget includes domain, DNS and staging.",
    placeholder: "YOUR default hosting stack and monthly hosting fee band",
    snippetType: "paragraph",
    snippetFormatted:
      "Next.js business sites usually need Node-friendly managed hosting (for example Vercel-class platforms) with HTTPS, CDN and deploy previews. Heavier applications may require cloud VPS or containers plus backups and uptime monitoring—not classic shared PHP hosting.",
    placement: "/services/devops-hosting",
    schemaAnswer:
      "Most Next.js marketing sites run well on managed Node-friendly platforms with HTTPS, previews and automatic deploys. Heavier apps may need cloud VPS or containers with monitoring. Prioritize SSL, backups, CDN, image optimization and rollbacks; classic shared PHP hosting is a poor fit.",
  },
  {
    id: "loc1",
    question: "Who is the best website development company in Greater Noida for SMEs?",
    directAnswer:
      "The best fit is a Greater Noida or NCR team that builds SEO-friendly, mobile-fast sites, shows local portfolio proof, gives clear timelines and lets you own hosting and code. “Best” means measurable enquiries, not only design awards.",
    supporting:
      "Evaluate process, communication, post-launch support and whether they understand local search. Meet or video-call before paying. Compare two to three quotes on scope clarity more than the lowest price.",
    placeholder: "YOUR differentiator one-liner + proof metric",
    snippetType: "paragraph",
    snippetFormatted:
      "For Greater Noida SMEs, the best website partner is one that delivers SEO-friendly mobile sites, clear timelines, local proof and full asset ownership. Judge by enquiry results and scope clarity—not the cheapest quote or awards alone.",
    placement: "/faq",
    schemaAnswer:
      "The best fit is a Greater Noida or NCR team that builds SEO-friendly, mobile-fast sites, shows local portfolio proof, gives clear timelines and lets you own hosting and code. Judge by measurable enquiries and scope clarity, not only design awards or the lowest price.",
  },
  {
    id: "loc2",
    question: "Do you provide SEO and Google Ads services in Noida and Greater Noida?",
    directAnswer:
      "Yes. Local SEO, technical SEO, Google Business Profile work and Google Ads lead campaigns are commonly delivered for businesses in Noida, Greater Noida and wider Delhi NCR, with remote support across India.",
    supporting:
      "Local work usually includes NAP consistency, service-area pages, review strategy and conversion tracking. Ads need compliant landing pages and call tracking. Reporting should show leads by channel, not only clicks.",
    placeholder: "YOUR service-area list exactly as sold",
    snippetType: "paragraph",
    snippetFormatted:
      "Yes—SEO and Google Ads support for Noida and Greater Noida typically covers local SEO, Google Business Profile, technical fixes and tracked lead campaigns, with reporting focused on enquiries rather than clicks alone.",
    placement: "/faq",
    schemaAnswer:
      "Yes. Local SEO, technical SEO, Google Business Profile work and Google Ads lead campaigns are delivered for businesses in Noida, Greater Noida and Delhi NCR, with remote support across India. Reporting should emphasize qualified leads by channel, not clicks alone.",
  },
  {
    id: "loc3",
    question: "How can I get more Google leads for my local business in Noida?",
    directAnswer:
      "Improve Google Business Profile completeness, collect reviews, target local service keywords on your site, fix mobile speed and track calls. Add Google Ads if you need leads while organic rankings grow.",
    supporting:
      "Publish location-relevant service pages, answer common questions on-site and keep categories accurate. Respond to reviews. Align website NAP with GBP. Weekly posting helps discovery but service pages convert better than random updates.",
    placeholder: "YOUR 30-day local lead sprint offer details",
    snippetType: "numbered list",
    snippetFormatted: `1. Complete and verify Google Business Profile
2. Ask for reviews after every closed job
3. Build service + Noida landing pages
4. Fix mobile speed and call buttons
5. Track calls/forms; add Ads if needed`,
    placement: "/blog/how-to-get-google-leads-local-business",
    schemaAnswer:
      "Improve Google Business Profile completeness, collect reviews, target local service keywords on your site, fix mobile speed and track calls. Add Google Ads if you need leads while organic rankings grow. Keep NAP consistent and publish clear service pages for Noida-area searches.",
  },
  {
    id: "pr3",
    question: "What happens after I submit a website or software enquiry?",
    directAnswer:
      "A specialist reviews your requirement, schedules a discovery call, shares a scope outline with timeline and commercials, then kicks off after agreement and initial milestone payment.",
    supporting:
      "You should receive clarifying questions on goals, users and deadlines. Expect a written proposal—not only a WhatsApp price. Onboarding includes access checklist for domains, analytics and brand assets.",
    placeholder: "YOUR response SLA (e.g. reply within X hours)",
    snippetType: "numbered list",
    snippetFormatted: `1. Enquiry received and qualified
2. Discovery call
3. Written scope, timeline, pricing
4. Agreement and milestone invoice
5. Kickoff and asset collection`,
    placement: "/faq",
    schemaAnswer:
      "A specialist reviews your requirement, schedules a discovery call, shares a scope outline with timeline and commercials, then kicks off after agreement and initial milestone payment. You should get clarifying questions and a written proposal, plus an access checklist for domains and brand assets.",
  },
  {
    id: "p5",
    question: "How much does digital marketing monthly retainer cost in Delhi NCR?",
    directAnswer:
      "Monthly digital marketing retainers in Delhi NCR often range from ₹15,000 to ₹75,000+ depending on whether you need SEO, ads management, social creatives or a full mix. Ad spend is usually extra.",
    supporting:
      "Bundled retainers look cheaper but can dilute focus. Separate SEO, ads and creative line items for clarity. Ask how many creatives, campaigns and hours are included. Review quarterly, not only monthly vanity metrics.",
    placeholder: "YOUR retainer bundles and what’s excluded (ad spend)",
    snippetType: "table",
    snippetFormatted: `Retainer focus | Typical monthly fee
SEO only | ₹[A]–₹[B]
Ads management | ₹[C]–₹[D] (+ ad spend)
SEO + social + ads mix | ₹[E]–₹[F]+`,
    placement: "/faq",
    schemaAnswer:
      "Monthly digital marketing retainers in Delhi NCR often range from ₹15,000 to ₹75,000+ depending on SEO, ads management, social creatives or a full mix. Ad spend is usually extra. Separate line items and ask what hours, creatives and campaigns are included.",
  },
  {
    id: "c4",
    question: "Should I choose local SEO or Google Ads first for my Noida business?",
    directAnswer:
      "Choose Google Ads first if you need leads within days and have a clear offer. Choose local SEO first if you want compounding enquiry growth and can invest 3 to 6 months. Many SMEs run a small Ads budget while SEO builds.",
    supporting:
      "Ads stop when spend stops; SEO keeps working if maintained. Poor landing pages waste both. If your GBP is empty and site is slow, fix foundations before heavy ad spend.",
    placeholder: "YOUR recommended starter split (e.g. 70% ads / 30% SEO month 1)",
    snippetType: "definition",
    snippetFormatted:
      "Ads vs local SEO first: Google Ads buys immediate visibility for high-intent searches; local SEO earns durable map and organic presence over months. A hybrid—foundation SEO plus modest Ads—fits most Noida SMEs.",
    placement: "/faq",
    schemaAnswer:
      "Choose Google Ads first if you need leads within days and have a clear offer. Choose local SEO first if you want compounding growth over 3 to 6 months. Many SMEs run a small Ads budget while SEO builds. Fix slow pages and empty Google Business Profiles before scaling spend.",
  },
  {
    id: "tr4",
    question: "Can an AI chatbot replace my sales team?",
    directAnswer:
      "No. An AI chatbot can qualify and respond faster after hours, but closing deals, handling exceptions and building trust still need people. Use AI to assist sales, not to delete the team.",
    supporting:
      "Best use cases are FAQs, appointment booking, lead scoring and draft follow-ups. Keep human takeover for pricing negotiations and complaints. Measure conversion to booked calls, not chat volume.",
    placeholder: "YOUR chatbot+CRM handoff workflow name",
    snippetType: "paragraph",
    snippetFormatted:
      "An AI chatbot cannot fully replace a sales team. It can answer FAQs, capture leads and book appointments, but humans remain essential for negotiation, trust and complex objections. Treat AI as a sales assistant with clear handoff rules.",
    placement: "/blog/agentic-ai-for-business-india",
    schemaAnswer:
      "No. An AI chatbot can qualify and respond faster after hours, but closing deals, handling exceptions and building trust still need people. Use AI for FAQs, booking and lead scoring with human takeover for negotiations and complaints.",
  },
];

export function buildFaqPageJsonLd(blocks: AeoAnswerBlock[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blocks.map((block) => ({
      "@type": "Question",
      name: block.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: block.schemaAnswer,
      },
    })),
  };
}

/** Group blocks by exclusive placement for page-level FAQPage schemas */
export function getAeoBlocksForPath(path: AeoPlacement): AeoAnswerBlock[] {
  return aeoAnswerBlocks.filter((block) => block.placement === path);
}

export const AEO_FAQ_PER_PAGE_GUIDANCE = {
  safeRange: "5–10 FAQ entities per page for FAQ rich results",
  hardAvoid: "Do not repeat the same Question across multiple URLs",
  hubFaqMax: 8,
  servicePageMax: 6,
  blogMax: 5,
};
