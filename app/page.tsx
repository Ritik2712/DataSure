"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    setMobileMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col items-center bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="#hero" onClick={() => scrollToSection(heroRef)} className="text-2xl font-semibold tracking-wide">
            Sechurra
          </Link>

          <div className="hidden md:flex space-x-8">
            {[
              { label: 'Home', ref: heroRef },
              { label: 'About', ref: aboutRef },
              { label: 'Services', ref: servicesRef },
              { label: 'FAQ', ref: faqRef },
              { label: 'Contact', ref: contactRef },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.ref)}
                className="text-sm font-medium hover:text-black transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            {[
              { label: 'Home', ref: heroRef },
              { label: 'About', ref: aboutRef },
              { label: 'Services', ref: servicesRef },
              { label: 'FAQ', ref: faqRef },
              { label: 'Contact', ref: contactRef },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.ref)}
                className="block w-full text-left px-6 py-3 text-base hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="w-full pt-24 pb-32 px-6 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Unlock the Power of Accurate Data
            </h1>
            <p className="text-lg text-gray-600">
              Ensure the highest data quality with our AI-driven solutions—clean, validate, and optimize large datasets effortlessly.
            </p>
            <Button onClick={() => scrollToSection(servicesRef)} className="px-8 py-3 text-base">
              Get Started
            </Button>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="Data Analytics Visualization"
              width={640}
              height={420}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="w-full py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Data Team Working"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-lg">
                At DataSure Analytics, we specialize in ensuring data accuracy, consistency, and reliability for businesses handling massive datasets. Our advanced AI-powered solutions detect errors, remove duplicates, and validate information, helping organizations make informed decisions with confidence.
              </p>
              <p className="text-lg">
                With expertise across multiple industries, we transform raw data into a high-quality asset that drives growth and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="w-full py-32 px-6 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl font-semibold text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Data Cleaning & Standardization", description: "Remove duplicates, correct inconsistencies, and ensure uniform formatting.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80" },
              { title: "Data Validation & Verification", description: "Cross-check data against trusted sources to maintain accuracy.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
              { title: "Anomaly Detection", description: "Identify and flag outliers or suspicious data points.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
              { title: "Automated Quality Reports", description: "Generate real-time reports on data integrity and health.", image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80" },
              { title: "Data Governance Consulting", description: "Implement best practices to maintain long-term data quality.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" },
            ].map((service, idx) => (
              <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-52 w-full">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                </CardHeader>
                <CardContent className="py-6 px-4 text-center">
                  <CardTitle className="text-xl font-medium mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="w-full py-32 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-semibold text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {[
              { question: "Why is data quality important?", answer: "High-quality data ensures accurate insights, reduces costs, and drives strategic decision-making." },
              { question: "How do you ensure data accuracy?", answer: "We employ AI-driven algorithms and manual checks to detect and correct errors." },
              { question: "Can your solutions integrate with existing systems?", answer: "Yes—our tools integrate seamlessly with popular databases and platforms." },
              { question: "Is my data secure?", answer: "We follow industry-leading security protocols and compliance standards." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="w-full py-32 px-6 bg-[#F5F5F7]"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-semibold">Want to Improve the Quality of Your Data?</h2>
          <p className="text-lg font-medium">Get in Touch</p>
          <p className="text-lg text-gray-600">
            Take the first step towards transforming your raw data into a valuable
            asset. Our expert team is ready to help you implement solutions that
            ensure accuracy, consistency, and reliability across your entire data
            ecosystem.
          </p>
          <Button asChild>
            <Link href="mailto:support@sechurra.com" className="px-8 py-3 text-base">
              Email Us
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-white text-center text-gray-600">
        <p>© 2025 Sechurra Analytics. All rights reserved.</p>
      </footer>
    </main>
  );
}
