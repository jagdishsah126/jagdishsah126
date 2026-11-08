import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../../components/seo/JsonLd";
import { article, breadcrumb, ogImage } from "../../../../utils/schema";
import { TOPICS, getPost, getTopic } from "../../../../data/topics";
import { ArrowLeft } from "lucide-react";

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

      <div className="w-full max-w-3xl px-4 mb-4">
        <Link
          href={`/topics/${topic.slug}/`}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 transition-all group shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>{topic.title}</span>
        </Link>
      </div>

      <article className="w-full max-w-3xl px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
          {post.title}
        </h1>
        <time dateTime={post.date} className="block text-[11px] font-mono text-slate-400 mb-6">
          {post.date}
        </time>

        <p className="text-sm text-slate-300 leading-relaxed mb-6 border-l-2 border-cyan-400/40 pl-4">
          {post.summary}
        </p>

        <div className="space-y-4 text-sm text-slate-200 leading-relaxed">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
