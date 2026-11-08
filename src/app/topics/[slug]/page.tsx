import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/seo/JsonLd";
import { breadcrumb, OG_IMAGE } from "../../../utils/schema";
import { TOPICS, getTopic } from "../../../data/topics";
import { ArrowLeft, ArrowRight, Sparkles, ExternalLink } from "lucide-react";

/** Every topic page is prerendered; an unknown slug is a 404, not a runtime render. */
export const dynamicParams = false;

export function generateStaticParams() {
  return TOPICS.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};

  const url = `https://jagdishsah.com.np/topics/${topic.slug}/`;
  return {
    title: `${topic.title} — Jagdish Sah`,
    description: topic.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${topic.title} — Jagdish Sah`,
      description: topic.description,
      url,
      images: [OG_IMAGE],
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

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const accent = ACCENT_TEXT[topic.accent];

  return (
    <div className="w-full flex flex-col items-center pt-4">
      <JsonLd
        data={breadcrumb([
          { name: "Hub", path: "/" },
          { name: "Topics", path: "/topics/" },
          { name: topic.title, path: `/topics/${topic.slug}/` },
        ])}
      />

      <div className="w-full max-w-3xl px-4 mb-4 flex items-center justify-between">
        <Link
          href="/topics/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 transition-all group shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>All topics</span>
        </Link>

        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>jagdishsah.com.np/topics/{topic.slug}</span>
        </span>
      </div>

      <article className="w-full max-w-3xl px-4">
        <h1 className={`text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight ${accent}`}>
          {topic.title}
        </h1>
        <p className="text-sm text-slate-400 font-mono mb-6">{topic.tagline}</p>

        <div className="space-y-4 text-sm text-slate-200 leading-relaxed">
          {topic.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-8 rounded-2xl bg-space-card/70 backdrop-blur-md border border-white/10 p-5">
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
            Start here
          </h2>
          <ul className="space-y-2">
            {topic.links.map((link) =>
              link.external ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </section>

        {topic.posts.length > 0 && (
          <section className="mt-8">
            <h2 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
              Posts
            </h2>
            <ul className="space-y-3">
              {topic.posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/topics/${topic.slug}/${post.slug}/`}
                    className="block rounded-2xl bg-space-card/70 backdrop-blur-md border border-white/10 p-5 hover:bg-space-card-hover transition-colors"
                  >
                    <h3 className="text-base font-bold text-white mb-1">{post.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{post.summary}</p>
                    <time
                      dateTime={post.date}
                      className="mt-2 block text-[11px] font-mono text-slate-500"
                    >
                      {post.date}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  );
}
