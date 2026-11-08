import React from "react";
import type { Metadata } from "next";
import NotFoundView from "../components/views/NotFoundView";

export const metadata: Metadata = {
  title: "Page Not Found — Jagdish Sah",
  description: "That page does not exist. Return to the Jagdish Sah universe hub.",
  // Next emits its own `noindex` for the not-found route, but the root layout's
  // `index, follow` is inherited here too, so the page would ship two
  // contradictory tags. Restating it makes both agree.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundView />;
}
