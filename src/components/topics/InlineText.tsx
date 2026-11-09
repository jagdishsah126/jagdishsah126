import React from "react";

/**
 * Renders one paragraph of a post body.
 *
 * Post bodies stay plain strings, so only two conventions are interpreted
 * inline, and nothing else — no HTML, no markdown beyond bold:
 *
 *   **text**      -> <strong>
 *   https://...   -> <a target="_blank" rel="noopener noreferrer">
 *
 * Everything else is rendered verbatim, including its original capitalisation.
 */

const URL_RE = /(https?:\/\/[^\s]+)/g;
const BOLD_RE = /(\*\*[^*]+\*\*)/g;
const TRAILING_PUNCTUATION = /[.,;:!?)\]]+$/;

function withLinks(text: string, key: string): React.ReactNode[] {
  return text.split(URL_RE).map((part, i) => {
    // split() alternates: even indexes are plain text, odd indexes are URLs.
    if (i % 2 === 0) {
      return part ? <React.Fragment key={`${key}-t${i}`}>{part}</React.Fragment> : null;
    }

    let url = part;
    const tail = url.match(TRAILING_PUNCTUATION)?.[0] ?? "";
    if (tail) url = url.slice(0, -tail.length);

    return (
      <React.Fragment key={`${key}-l${i}`}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 underline decoration-cyan-400/40 underline-offset-2 break-words hover:text-cyan-200 hover:decoration-cyan-300"
        >
          {url}
        </a>
        {tail}
      </React.Fragment>
    );
  });
}

export default function InlineText({ text }: { text: string }) {
  return (
    <>
      {text.split(BOLD_RE).map((segment, i) =>
        i % 2 === 1 ? (
          <strong key={`b${i}`} className="font-semibold text-white">
            {segment.slice(2, -2)}
          </strong>
        ) : (
          <React.Fragment key={`p${i}`}>{withLinks(segment, `s${i}`)}</React.Fragment>
        )
      )}
    </>
  );
}
