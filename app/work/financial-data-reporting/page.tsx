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
            A client preparing to spin off part of their business needed
            reliable, entity-level balance sheets. Their finance team was
            working with raw Excel extracts that were difficult to consolidate
            and prone to errors. They wanted a repeatable way to produce dynamic
            balance sheet reports for each legal entity, without days of manual
            spreadsheet work.
          </p>

          <h2 className="text-2xl font-semibold mt-6">The Challenge</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Finance relied on multiple inconsistent Excel files.</li>
            <li>Account hierarchies were buried in indentation and formatting.</li>
            <li>
              Consolidating data for each legal entity was slow and error-prone.
            </li>
            <li>
              Manual processes created compliance risk during a sensitive
              restructuring.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Our Approach</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Flattened and cleaned raw Excel data into a consistent tabular
              format.
            </li>
            <li>
              Built dimension and fact tables (Accounts, Time, Entities) in a
              SQL database using a star schema.
            </li>
            <li>
              Automated data modelling so account hierarchies and entity
              structures were reusable across reports.
            </li>
            <li>
              Connected SQL to Excel to deliver dynamic, refreshable pivot-based
              balance sheets.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Results</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Finance leaders now generate accurate, drill-down reports in
              minutes instead of days.
            </li>
            <li>
              Reports are entity-specific, enabling clarity during the spin-off
              process.
            </li>
            <li>
              The SQL-backed model ensures data consistency, auditability, and
              scalability for future reporting needs.
            </li>
            <li>
              Manual work was eliminated, freeing the finance team to focus on
              decision-making instead of spreadsheet wrangling.
            </li>
          </ul>
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
