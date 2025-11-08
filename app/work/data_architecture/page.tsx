"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DisputeDataWarehouseCaseStudy() {
  return (
    <main className="flex flex-col items-center bg-white text-gray-900 px-6 py-16">
      <div className="max-w-5xl w-full space-y-20">
        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Banking Dispute Data Warehouse & Analytics Platform</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From fragmented dispute records to a governed Snowflake warehouse with dimensional modeling and live Power BI insights.
          </p>
          <div className="relative h-72 w-full">
            <Image
              src="https://images.unsplash.com/photo-1551281044-8d8d0d8d3d3f?auto=format&fit=crop&w=1600&q=80"
              alt="Data architecture whiteboard"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Challenge */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">The Challenge</h2>
          <p>
            A mid-sized bank needed a reliable way to analyze card-payment disputes across customers, cards, merchants, and transactions.
            Source data arrived from multiple systems with inconsistent schemas, duplicate IDs, mixed data types, and missing lineage.
            Reporting teams struggled to reconcile numbers and meet audit demands, and dashboards routinely required manual data fixes.
          </p>
          <p>
            The requirement was clear: centralize raw feeds, enforce data quality and governance, and deliver an analytics-ready model
            with full traceability from dashboard back to source.
          </p>
        </section>

        {/* Approach */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Our Approach</h2>
          <p>
            We implemented an ELT pipeline on Snowflake using a Medallion architecture and automated SQL procedures for cleaning, conformance,
            and dimensional modeling. The end state: a governed Gold layer powering self-serve analytics in Power BI.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>ELT on Snowflake</strong>: Land raw files first, then transform inside the warehouse for scale and auditability.</li>
            <li><strong>Medallion Layers</strong>: Bronze (raw), Silver (validated), Gold (dimensional star schema).</li>
            <li><strong>Automated Cleaning</strong>: Stored procedures for type casting, deduplication, null handling, ZIP normalization, and card expiry validation.</li>
            <li><strong>Star Schema</strong>: Fact tables for transactions and dispute events linked to conformed dimensions (Customer, Card, Merchant, Date, Stage, Reason).</li>
            <li><strong>Power BI</strong>: Direct model against Gold for dispute trends, resolution SLAs, and merchant performance.</li>
          </ul>
        </section>

        {/* Architecture (Medallion) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Architecture on Snowflake</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="font-semibold">Bronze Layer</h3>
              <p className="text-sm text-gray-700 mt-2">
                Raw ingestion of Customers, Cards, Merchants, Transactions, and Disputes. Immutable, timestamped data retained for lineage and reprocessing.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="font-semibold">Silver Layer</h3>
              <p className="text-sm text-gray-700 mt-2">
                Cleaning & standardization via SQL procedures: key normalization, safe type conversion, duplicate removal, missing value handling,
                card expiry parsing (YYYY-MM), and merchant ZIP validation.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="font-semibold">Gold Layer</h3>
              <p className="text-sm text-gray-700 mt-2">
                Dimensional model with surrogate keys: <strong>FACT_TRANSACTION</strong>, <strong>FACT_DISPUTE</strong>,
                and dimensions for Customer, Card, Merchant, Date, Dispute Stage, and Dispute Reason. Includes a time-aware table function for “as-of” snapshots.
              </p>
            </div>
          </div>
        </section>

        {/* Proposed Dimensional Model */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Dimensional Model (Gold)</h2>
          <p>
            The fact tables capture business events; dimensions provide conformed context for fast, consistent analytics.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>FACT_TRANSACTION</strong>: One row per cleaned transaction; links to Customer, Card, Merchant, Date; attributes include channel, amount, error code, MCC at time of sale.</li>
            <li><strong>FACT_DISPUTE</strong>: Event-grain table with two lifecycle rows per case (Pending, Resolved), stage-keyed with derived days-to-resolution and disputed amount.</li>
            <li><strong>DIM_CUSTOMER / DIM_CARD / DIM_MERCHANT</strong>: Conformed entities with surrogate keys; standardized attributes for demographics, product, and MCC/location.</li>
            <li><strong>DIM_DATE</strong>: Calendar hierarchy (day, week, month, quarter, year, weekend flag).</li>
            <li><strong>DIM_DISPUTE_STAGE & DIM_DISPUTE_REASON</strong>: Standardized lifecycle and reason codes for consistent reporting.</li>
          </ul>
        </section>

        {/* Before vs After */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Before vs After</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow text-center space-y-4">
              <h3 className="font-semibold text-lg">Before</h3>
              <Image
                src="/work/dispute-warehouse/Before.png" // replace with your raw-data image
                alt="Raw/siloed dispute data"
                width={500}
                height={300}
                className="rounded-lg shadow"
              />
              <p className="text-gray-600 text-sm">
                Siloed systems, inconsistent keys and types, duplicate IDs, unclear lineage, manual report fixes.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow text-center space-y-4">
              <h3 className="font-semibold text-lg">After</h3>
              <Image
                src="/work/dispute-warehouse/After.png" // replace with your final visualisation image
                alt="Gold model and dashboards"
                width={500}
                height={300}
                className="rounded-lg shadow"
              />
              <p className="text-gray-600 text-sm">
                Governed Snowflake ELT, dimensional model with surrogate keys, audit lineage, and live Power BI dashboards.
              </p>
            </div>
          </div>
        </section>

        {/* Data Quality & Governance Highlights */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Data Quality & Governance</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Deterministic deduplication</strong> using window functions on business keys (keep latest record).</li>
            <li><strong>Type safety</strong> via TRY_TO_NUMBER / TO_DATE; consistent casing and trimmed keys.</li>
            <li><strong>Card expiry validation</strong>: normalized YYYY-MM; invalid formats set to NULL for integrity.</li>
            <li><strong>Merchant ZIP normalization</strong>: numeric-only, length checks, and leading-zero preservation.</li>
            <li><strong>Temporal analysis</strong>: table function <code>TF_DISPUTE_ASOF(date)</code> to reconstruct backlog “as of” any date.</li>
            <li><strong>Audit lineage</strong>: load timestamps and schema-qualified paths across Bronze → Silver → Gold.</li>
          </ul>
        </section>

        {/* Results */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">The Results</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Trustworthy analytics</strong>: one conformed model replaces ad-hoc data prep and conflicting numbers.</li>
            <li><strong>Operational visibility</strong>: dispute volumes, resolution SLAs, and merchant performance tracked in real time.</li>
            <li><strong>Compliance-ready</strong>: audit trail from dashboard to source with reproducible SQL procedures.</li>
            <li><strong>Team efficiency</strong>: automated refresh; analysts spend time on insights, not data cleaning.</li>
          </ul>
        </section>

        {/* Impact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Impact on the Business</h2>
          <p>
            The warehouse provides a single source of truth for dispute analytics. Leaders can evaluate backlog, spot bottlenecks in the
            resolution process, and compare performance by merchant, card product, or customer segment—all backed by governed data.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Why It Matters</h2>
          <p>
            Dispute operations carry financial, customer-experience, and regulatory risk. A dimensional model on Snowflake, fed by automated
            cleaning and lineage, gives teams the speed and confidence to act on accurate numbers—without manual reconciliation.
          </p>
        </section>

        {/* Future Readiness */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Future Readiness</h2>
          <p>
            The platform is designed to scale: new feeds (fraud, chargebacks), additional facts/dimensions, near-real-time ingestion via
            streams/tasks, semantic models, and expanded KPI suites. The Gold layer already supports direct connections from Power BI,
            with minimal modeling needed in the BI tool.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Want a Governed Dispute Analytics Platform?</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We build Snowflake ELT pipelines with dimensional models and audit lineage—ready for live dashboards and regulatory reporting.
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

