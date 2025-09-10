"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CaseStudy() {
  return (
    <main className="flex flex-col items-center bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center">
          Financial Data Reporting for a Business Spin-Off
        </h1>

        <div className="relative h-80 w-full">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
            alt="Case study meeting"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        <section className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            When a client needed clear, reliable balance sheets for a legal
            entity spin-off, we built an end-to-end pipeline: cleaning messy
            Excel data, structuring it in SQL, and delivering refreshable
            reports in Excel.
          </p>

          <h2 className="text-2xl font-semibold mt-6">The Challenge</h2>
          <p>
            The client’s finance team relied on multiple inconsistent spreadsheets.
            Data duplication, formatting errors, and missing values slowed down
            reporting and exposed them to compliance risk.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Our Approach</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Flattened and cleaned raw financial data.</li>
            <li>Built a SQL-based data model for entity-level reporting.</li>
            <li>Connected the database to Excel for dynamic pivot tables.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Results</h2>
          <p>
            The finance team now generates accurate, refreshable reports in
            minutes instead of days, enabling confident decision-making during
            the spin-off process.
          </p>
        </section>

        <div className="flex justify-center mt-10">
          <Button asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

