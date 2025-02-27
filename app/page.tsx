"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Linkedin, Twitter, Mail, MapPin, Menu, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setMobileMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">DataSure Analytics</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection(heroRef)} className="text-gray-700 hover:text-black transition-colors">Home</button>
              <button onClick={() => scrollToSection(aboutRef)} className="text-gray-700 hover:text-black transition-colors">About</button>
              <button onClick={() => scrollToSection(servicesRef)} className="text-gray-700 hover:text-black transition-colors">Services</button>
              <button onClick={() => scrollToSection(faqRef)} className="text-gray-700 hover:text-black transition-colors">FAQ</button>
              <button onClick={() => scrollToSection(contactRef)} className="text-gray-700 hover:text-black transition-colors">Contact</button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t">
              <button onClick={() => scrollToSection(heroRef)} className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">Home</button>
              <button onClick={() => scrollToSection(aboutRef)} className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">About</button>
              <button onClick={() => scrollToSection(servicesRef)} className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">Services</button>
              <button onClick={() => scrollToSection(faqRef)} className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">FAQ</button>
              <button onClick={() => scrollToSection(contactRef)} className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="w-full bg-black text-white py-20 px-4 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              🔍 Unlock the Power of Accurate Data
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Ensure the highest data quality with our AI-driven solutions—clean, validate, and optimize large datasets with ease.
            </p>
            <Button size="lg" className="mt-4" onClick={() => scrollToSection(servicesRef)}>
              Get Started
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Data Analytics Visualization"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="w-full py-20 px-4 bg-white">
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
      <section ref={servicesRef} className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Cleaning & Standardization",
                description: "Remove duplicates, correct inconsistencies, and ensure uniform formatting.",
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Data Validation & Verification",
                description: "Cross-check data against trusted sources to maintain accuracy.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Anomaly Detection",
                description: "Identify and flag outliers or suspicious data points.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Automated Quality Reports",
                description: "Generate real-time reports on data integrity and health.",
                image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Data Governance Consulting",
                description: "Implement best practices to maintain long-term data quality.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Why is data quality important?</AccordionTrigger>
              <AccordionContent className="text-base">
                Poor data leads to inaccurate insights, financial losses, and operational inefficiencies. High-quality data ensures better decision-making and business success.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">How do you ensure data accuracy?</AccordionTrigger>
              <AccordionContent className="text-base">
                We use AI-driven algorithms and manual verification processes to detect errors, clean datasets, and maintain consistency.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Can your solutions integrate with existing systems?</AccordionTrigger>
              <AccordionContent className="text-base">
                Yes! Our data quality tools seamlessly integrate with major databases, cloud platforms, and enterprise applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Is my data secure with your service?</AccordionTrigger>
              <AccordionContent className="text-base">
                Absolutely. We follow strict security protocols and comply with data protection regulations to ensure your information remains safe.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Want to Improve the Quality of Your Data?</h3>
              <p className="mb-8">
                Take the first step towards transforming your raw data into a valuable asset. 
                Our expert team is ready to help you implement solutions that ensure accuracy, 
                consistency, and reliability across your entire data ecosystem.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>support@datasureanalytics.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>123 Tech Park, Silicon Valley, CA</span>
                </div>
                <div className="flex items-center gap-6 mt-8">
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message" className="min-h-32" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">DataSure Analytics</h3>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 DataSure Analytics. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}