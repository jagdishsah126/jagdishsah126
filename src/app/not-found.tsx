import React from "react";
import type { Metadata } from "next";
import NotFoundView from "../components/views/NotFoundView";

export const metadata: Metadata = {
  title: "Page Not Found — Jagdish Sah",
  description: "That page does not exist. Return to the Jagdish Sah universe hub.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundView />;
}
