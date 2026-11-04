import React from "react";
import type { Metadata } from "next";
import HomeView from "../components/views/HomeView";
import JsonLd from "../components/seo/JsonLd";
import { breadcrumb } from "../utils/schema";

export const metadata: Metadata = {
  title: "Jagdish Sah — CSE Student & NEPSE Analyst, Nepal",
  description:
    "Computer Engineering student at IOE WRC Pokhara and NEPSE market analyst from Siraha, Nepal. Projects, market research and official CV.",
  alternates: {
    canonical: "https://jagdishsah.com.np/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Hub", path: "/" }])} />
      <HomeView />
    </>
  );
}
