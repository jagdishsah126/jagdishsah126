import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../../components/seo/JsonLd";
import InlineText from "../../../../components/topics/InlineText";
import { article, breadcrumb, ogImage } from "../../../../utils/schema";
import { TOPICS, getPost, getTopic } from "../../../../data/topics";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return TOPICS.flatMap((topic) =>
    topic.posts.map((post) => ({ slug: topic.slug, post: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; post: string }>;
}): Promise<Metadata> {
  const { slug, post: postSlug } = await params;
  const topic = getTopic(slug);
  const post = getPost(slug, postSlug);
  if (!topic || !post) return {};

  const url = `https://jagdishsah.com.np/topics/${topic.slug}/${post.slug}/`;
  return {
    title: `${post.title} — Jagdish Sah`,
    description: post.summary,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      type: "article",
      publishedTime: post.date,
      images: [ogImage(topic.slug, `${post.title} — ${topic.title}`)],
    },
  };
}

const ACCENT_TEXT: Record<string, string> = {
  cyan: "text-cyan-300",
  violet: "text-violet-300",
  emerald: "text-emerald-300",
  amber: "text-amber-300",
  rose: "text-rose-300",
};

const ACCENT_BORDER: Record<string, string> = {
  cyan: "border-cyan-400/40",
  violet: "border-violet-400/40",
  emerald: "border-emerald-400/40",
  amber: "border-amber-400/40",
  rose: "border-rose-400/40",
};

export default async function TopicPostPage({
  params,
}: {
  params: Promise<{ slug: string; post: string }>;
}) {
  const { slug, post: postSlug } = await params;
  const topic = getTopic(slug);
  const post = getPost(slug, postSlug);
  if (!topic || !post) notFound();

  const path = `/topics/${topic.slug}/${post.slug}/`;
  const accent = ACCENT_TEXT[topic.accent];
  const accentBorder = ACCENT_BORDER[topic.accent];

  const words = post.body.join(" ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));

  return (
    <div className="w-full flex flex-col items-center pt-4">
      <JsonLd
        data={breadcrumb([
          { name: "Hub", path: "/" },
          { name: "Topics", path: "/topics/" },
          { name: topic.title, path: `/topics/${topic.slug}/` },
          { name: post.title, path },
        ])}
      />
      <JsonLd
        data={article({
          title: post.title,
          description: post.summary,
          path,
          datePublished: post.date,
        })}
      />

      <div className="w-full max-w-3xl px-4 mb-5">
        <Link
          href={`/topics/${topic.slug}/`}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 transition-all group shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>{topic.title}</span>
        </Link>
      </div>

      <article className="w-full max-w-3xl px-4">
        <header className="rounded-3xl border border-white/10 bg-space-card/60 backdrop-blur-md p-6 sm:p-8 mb-8">
          <span
            className={`text-[11px] font-mono uppercase tracking-widest ${accent}`}
          >
            {topic.title}
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" />
              <time dateTime={post.date}>{post.date}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {minutes} min read
            </span>
          </div>

          <p
            className={`mt-5 text-sm text-slate-300 leading-relaxed border-l-2 ${accentBorder} pl-4`}
          >
            {post.summary}
          </p>
        </header>

        <div className="space-y-5 text-[15px] text-slate-200 leading-relaxed">
          {post.body.map((paragraph, i) => (
            <p key={i}>
              <InlineText text={paragraph} />
            </p>
          ))}
        </div>

        <footer className="mt-10 pt-6 border-t border-white/10">
          <Link
            href={`/topics/${topic.slug}/`}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to {topic.title}</span>
          </Link>
        </footer>
      </article>
    </div>
  );
}
