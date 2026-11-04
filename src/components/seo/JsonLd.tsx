import React from "react";

/**
 * Renders a JSON-LD block. Server-only: keeps the schema out of the client bundle.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
