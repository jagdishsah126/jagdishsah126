/**
 * Every word of the /topics section lives in this file.
 *
 * To add a post, append an object to that topic's `posts` array — the route,
 * the article page, the JSON-LD and the sitemap entry are all derived from it.
 * Nothing else needs editing. The shape is documented on `TopicPost` below.
 *
 * `posts` is empty for all five topics on purpose: the section descriptions are
 * mine to write, the articles are yours. See Journal/SEO notes for why.
 */

export type TopicPost = {
  /** URL segment: /topics/<topic>/<slug>/ — lowercase, hyphens, never changed after publishing. */
  slug: string;
  title: string;
  /** ISO date, yyyy-mm-dd. Drives <time> and the Article schema. */
  date: string;
  /** One sentence, used on the topic page and as the meta description. */
  summary: string;
  /**
   * One string per paragraph. Plain text with two inline conventions:
   * `**bold**` and bare `https://` URLs (rendered as links).
   * No HTML and no other markdown.
   */
  body: string[];
};

export type TopicLink = { label: string; href: string; external?: boolean };

export type Topic = {
  slug: string;
  title: string;
  /** Shown under the title on the index card. */
  tagline: string;
  /** Meta description for the topic page. */
  description: string;
  /** Card and header colours. Keep in sync with ACCENT_CLASSES in the page. */
  accent: "cyan" | "violet" | "emerald" | "amber" | "rose";
  intro: string[];
  links: TopicLink[];
  posts: TopicPost[];
};

export const TOPICS: Topic[] = [
  {
    slug: "nepse-tools",
    title: "NEPSE Tools",
    tagline: "The software I built because NEPSE has no API.",
    description:
      "How I build NEPSE tooling: floorsheet scraping, storage backends, screening dashboards and the index of every NEPSE repository I maintain.",
    accent: "cyan",
    intro: [
      "NEPSE does not publish an API. Everything the exchange shows you is HTML, paginated, and reshaped without warning. So before I could analyse anything, I had to build the machinery: a scraper that walks the floorsheet on every trading day, a database that keeps every transaction, and screens on top of it.",
      "This section documents that machinery — the pipelines, the storage decisions, the dashboards, and the parts that broke. It is about code and architecture, not about which stock to buy.",
      "Most of it is public on GitHub. Where a tool is still private, I write about how it works instead of pretending it does not exist.",
    ],
    links: [
      { label: "NEPSE analysis overview", href: "/nepse/" },
      { label: "Project catalogue", href: "/projects/" },
      {
        label: "Nepse-AI-Intelligence — index of all my NEPSE repositories",
        href: "https://github.com/YourZara/Nepse-AI-Intelligence",
        external: true,
      },
    ],
    posts: [
      {
        slug: "my-tools",
        title: "How I use Tools For My Nepse",
        date: "2026-11-09",
        summary: "What Tools do I use and How.",
        body: [
          "I mostly use https://jagdishsah126.github.io/nepse-floorsheet-archive-Visual/ For **My Broker Analysis** and https://nepsealpha.com/trading/chart for **Charts**.",
          "The first thing I check is **Top Turnover Stocks** and The script that came in **Top Gainer** and **Top Loser** Via Nepsealpha Chart.",
          "The second is I check If it is at **Good Demand Zone** or **Supply Zone**.",
          "If it is at **Demand Zone** I use https://jagdishsah126.github.io/nepse-floorsheet-archive-Visual/ which is my Custom made tool to analyze that script and If any **Broker Graph is Unusually High**.",
          "If It Looks Suspicious that anyone has accumulated huge then **Buy It** with **risk Control** and **Tight SL** with **Averaging Once** and If Setup Failed Then Loss",
          "If Success then Have A **Good Profit**",
          "Please This Is My own Opinion and **Not Fully Guaranted** and Dont Invest Without Your Own Analysis.",
        ],
      },],
  },
  {
    slug: "nepse-view",
    title: "My NEPSE View",
    tagline: "How I read the market, including where I was wrong.",
    description:
      "My read on the Nepal Stock Exchange: broker concentration, sector momentum, liquidity and market regime, written before the outcome is known.",
    accent: "violet",
    intro: [
      "A view is only worth something if it is dated and checkable. Everything here is written before the outcome is known, and it stays up afterwards — the calls that went wrong included.",
      "I read NEPSE through transaction data rather than tips. Broker concentration in the floorsheet, volume expansion in a sector, whether a move is backed by real liquidity or by a thin float — those are the questions I actually ask. Nepal's market is small enough that a handful of brokers can move a stock, and the floorsheet shows it before the price does.",
      "This is opinion, not advice. I am not a licensed advisor and I do not manage anyone else's money.",
    ],
    links: [
      { label: "NEPSE analysis overview", href: "/nepse/" },
      { label: "The tools behind these views", href: "/topics/nepse-tools/" },
      { label: "The rules I actually trade", href: "/topics/nepse-strategy/" },
    ],
    posts: [],
  },
  {
    slug: "nepse-strategy",
    title: "My NEPSE Strategy",
    tagline: "The rules I execute, and the ones I break.",
    description:
      "My NEPSE trading framework: short-term swing horizon, liquidity filters, broker tracking, risk-reward discipline and a written journal.",
    accent: "emerald",
    intro: [
      "Strategy is the part you decide in advance so that you are not deciding while the price is moving. Mine is short-term swing positioning on a one to two week horizon, on liquid stocks showing clear sector momentum.",
      "Three filters do most of the work: is the move backed by volume, is the float deep enough to exit, and is a broker accumulating or distributing. Everything else — indicators, chart patterns — only refines those three answers.",
      "Risk comes first. Position size and stop-loss are set before entry, and every trade is written into a journal with the reasoning and my emotional state at the time. The journal is the only way to find out whether the framework works or whether I am just lucky.",
    ],
    links: [
      { label: "NEPSE analysis overview", href: "/nepse/" },
      { label: "How I read the market", href: "/topics/nepse-view/" },
      { label: "The tools behind the filters", href: "/topics/nepse-tools/" },
    ],
    posts: [],
  },
  {
    slug: "life",
    title: "My Life",
    tagline: "Siraha, Bardiya, Pokhara, and the space between.",
    description:
      "Where I come from: Bishnupur in Siraha, a childhood in Bardiya, school in Mirchaiya, +2 in Lalitpur and hostel life in Pokhara.",
    accent: "amber",
    intro: [
      "My home is Bishnupur in Siraha, in the eastern Terai. I spent part of my childhood in Bardiya, where my father was posted as a government science teacher, and did my schooling at Sagarmatha Higher Secondary in Mirchaiya before moving to Lalitpur for +2.",
      "My father taught me to look at the world through evidence — to ask why something works before accepting that it does. That habit turned into engineering, and eventually into market data.",
      "Now I live in a hostel in Pokhara for a Computer Engineering degree, which is its own education: cooking, arguing about code at two in the morning, and building tools for the people around me when the existing ones are bad.",
    ],
    links: [
      { label: "Full journey", href: "/about/" },
      { label: "Official CV", href: "/cv/" },
      { label: "Career and what I am building toward", href: "/topics/career/" },
    ],
    posts: [],
  },
  {
    slug: "career",
    title: "My Career",
    tagline: "BCT at IOE WRC, and what I am building toward.",
    description:
      "My career path: Computer Engineering at IOE WRC Pokhara, data engineering, financial technology and agentic AI systems.",
    accent: "rose",
    intro: [
      "I am in my third semester of Computer Engineering at IOE Western Regional Campus in Pokhara, with no backlogs. Before that, +2 Science at Prasadi Academy with a 3.69 GPA.",
      "The work I want to be doing sits where data engineering meets finance. NEPSE is the laboratory: messy HTML, no API, a thin market, and a real need for better tooling. Building for it has taught me scraping at scale, storage design, and how to make a number trustworthy.",
      "Longer term I am moving toward agentic AI systems — software that runs the pipeline, checks its own output, and only asks a human when something is genuinely ambiguous. Some of that already runs here.",
    ],
    links: [
      { label: "Official CV", href: "/cv/" },
      { label: "Project catalogue", href: "/projects/" },
      { label: "Contact", href: "/contact/" },
    ],
    posts: [],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getPost(topicSlug: string, postSlug: string): TopicPost | undefined {
  return getTopic(topicSlug)?.posts.find((p) => p.slug === postSlug);
}
