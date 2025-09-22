"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FinancialReportingCaseStudy() {
  return (
    <main className="flex flex-col items-center bg-white text-gray-900 px-6 py-16">
      <div className="max-w-5xl w-full space-y-16">
        
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

        {/* At a Glance */}
        <section className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Challenge", text: "Inconsistent Excel files, buried hierarchies, compliance risks." },
            { title: "Approach", text: "Flattened & cleaned data, star schema in SQL, automated reporting." },
            { title: "Results", text: "Entity-specific clarity, accurate & auditable reports in minutes." },
            { title: "Impact", text: "Eliminated manual work, enabled scalable & compliant reporting." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </section>

        {/* Process Flow */}
        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-bold">Our Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We streamlined reporting with a step-by-step transformation pipeline.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {["Raw Excel", "Cleaning & Validation", "SQL Star Schema", "Dynamic Pivot Reports"].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-16 w-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold shadow">
                  {i + 1}
                </div>
                <p className="mt-3 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Quote */}
        <section className="bg-blue-50 rounded-xl p-10 text-center">
          <p className="text-2xl font-semibold italic text-gray-800">
            “Reports in minutes, not weeks.”
          </p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Ready for Reliable Reporting?</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Whether you’re spinning off a business unit or consolidating entities, we can set up accurate, auditable reporting pipelines tailored to your needs.
          </p>
          <Button size="lg" className="bg-blue-600 text-white rounded-xl px-8 py-3 shadow-lg hover:bg-blue-700">
            Let’s Talk
          </Button>
        </section>

      </div>
    </main>
  );
}

