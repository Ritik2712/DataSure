"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FinancialReportingCaseStudy() {
  return (
    <main className="flex flex-col items-center bg-white text-gray-900 px-6 py-16">
      <div className="max-w-5xl w-full space-y-20">
        
        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Financial Data Reporting for a Business Spin-Off</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From messy Excel files to accurate, dynamic entity-level reporting — all in minutes, not weeks.
          </p>
          <div className="relative h-72 w-full">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="Business reporting"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Challenge */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">The Challenge</h2>
          <p>
            When our client decided to spin off part of their business into a new entity, their finance team faced a daunting challenge: how to deliver clean, reliable balance sheets for each company on a monthly basis. The data they relied on lived in dozens of inconsistent Excel files, often structured differently across regions and departments.
          </p>
          <p>
            Each reporting cycle meant weeks of manual effort. The team would collect files, reconcile line items manually, and attempt to build entity-level summaries that satisfied auditors. Errors were common, version control was impossible, and last-minute adjustments led to late nights and growing compliance risks.
          </p>
        </section>

        {/* Approach */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Our Approach</h2>
          <p>We redesigned the reporting process from the ground up, guided by three principles: <strong>clarity, consistency, and auditability</strong>.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Data Flattening & Cleaning</strong>: Standardized messy Excel inputs into clean, tabular datasets.</li>
            <li><strong>SQL Star Schema</strong>: Modeled data into a central fact table with supporting dimensions.</li>
            <li><strong>Automated Hierarchies</strong>: Encoded roll-ups into dimensions, eliminating manual reconciliations.</li>
            <li><strong>Excel Connectivity</strong>: Delivered outputs in familiar pivot tables, powered by a robust SQL backend.</li>
          </ul>
        </section>

        {/* Before vs After */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Before vs After</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow text-center space-y-4">
              <h3 className="font-semibold text-lg">Before</h3>
              <Image
                src="/public/work/financial-data-reporting/Before.png"
                alt="Messy Excel data"
                width={500}
                height={300}
                className="rounded-lg shadow"
              />
              <p className="text-gray-600 text-sm">
                Inconsistent spreadsheets, buried hierarchies, manual reconciliations.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow text-center space-y-4">
              <h3 className="font-semibold text-lg">After</h3>
              <Image
                src="/public/work/financial-data-reporting/After.png"
                alt="Clean pivot table"
                width={500}
                height={300}
                className="rounded-lg shadow"
              />
              <p className="text-gray-600 text-sm">
                Standardized SQL star schema feeding clean, dynamic pivot reports.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">The Results</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Speed</strong>: Reporting cycle cut from 14 days to under 2 hours.</li>
            <li><strong>Accuracy</strong>: Errors dropped to virtually zero; all entities reconciled.</li>
            <li><strong>Clarity</strong>: One single source of truth, boosting stakeholder confidence.</li>
            <li><strong>Efficiency</strong>: 100+ hours saved per cycle, freeing the team for analysis.</li>
          </ul>
        </section>

        {/* Impact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Impact on the Business</h2>
          <p>
            The transformation went beyond faster reporting. By eliminating manual processes, the finance team freed up more than <strong>100 hours each cycle</strong>. Compliance risks dropped sharply, and leadership gained confidence in the numbers during a sensitive corporate transition.
          </p>
          <p>
            Finance staff who once dreaded reporting began to view it as a streamlined, almost automated task — boosting morale and positioning the team as trusted advisors.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Why It Matters</h2>
          <p>
            Business spin-offs are moments of both opportunity and risk. Reliable financial reporting can mean the difference between a smooth transition and a costly compliance failure. This project shows how thoughtful data design — even using familiar tools like SQL and Excel — can unlock major value.
          </p>
        </section>

        {/* Future Readiness */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Future Readiness</h2>
          <p>
            The pipeline was built to scale. While Excel pivots serve current needs, the SQL star schema is ready to power <strong>business intelligence dashboards</strong> in Power BI, Tableau, or Looker. As the spin-off matures, it can extend to forecasting, variance analysis, and cloud data warehouse integration.
          </p>
        </section>

        {/* Testimonial */}
        <section className="bg-blue-50 rounded-xl p-10 text-center">
          <p className="text-xl italic text-gray-800 max-w-2xl mx-auto">
            “This system gave us confidence in our numbers before audits and freed up our team’s time for real analysis. Reporting has gone from a burden to a strength.”
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Ready for Reliable Reporting?</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Whether you’re preparing for a spin-off, managing multiple entities, or simply tired of messy spreadsheets, we can help you design a reporting pipeline that’s clean, accurate, and fast.
          </p>
          <a href="mailto:sechurra@gmail.com">
            <Button size="lg" className="bg-blue-600 text-white rounded-xl px-8 py-3 shadow-lg hover:bg-blue-700">
              Let’s Talk
            </Button>
          </a>
        </section>

      </div>
    </main>
  );
}
