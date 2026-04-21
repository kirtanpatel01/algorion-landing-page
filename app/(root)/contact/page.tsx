"use client";

import React, { useState } from "react";
import Container from "@/components/container";
import Button from "@/components/button";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { IconShieldCheck } from "@tabler/icons-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  const infoCards = [
    {
      title: "General Enquiries",
      description:
        "For general questions, partnerships or anything else. Our team responds within 24 hours.",
      email: "hello@algorion.tech",
    },
    {
      title: "Support Hours",
      description: "Monday - Saturday, 9:00 AM - 6:00 PM, Sunday Closed",
      note: "We typically respond within 24 hours",
    },
    {
      title: "Technical Support",
      description:
        "Platform issues, API support or billing inquiries. Check status page for live updates.",
      email: "support@algorion.tech",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Container className="px-3 sm:px-4 xl:px-0 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient text-primary px-4 py-2 rounded-full text-xs border border-primary mb-6">
            <IconShieldCheck size={16} />
            <span>We're Here To Help</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-primary mb-3 sm:mb-4">
            Get in Touch with Our Team
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted max-w-xl mx-auto">
            Have a question, need support, or want to explore enterprise
            options? We respond within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <form onSubmit={handleSubmit} className="bg-background">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 bg-slate-50 border border-border rounded-lg text-foreground placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-border rounded-lg text-foreground placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="">Select a subject...</option>
                <option value="general">General Enquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6 sm:mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                rows={5}
                className="w-full px-4 py-3 bg-slate-50 border border-border rounded-lg text-foreground placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              className="w-full py-3 text-base font-semibold"
            >
              Send Message
              <IconArrowRight size={18} className="ml-2" />
            </Button>
          </form>
        </div>
      </Container>

      {/* Info Cards Section */}
      <Container className="px-3 sm:px-4 xl:px-0 mb-12 sm:mb-16 md:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-4xl p-6 sm:p-8 border border-border"
            >
              <h3 className="text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-foreground-muted mb-4">
                {card.description}
              </p>
              {card.email && (
                <a
                  href={`mailto:${card.email}`}
                  className="text-sm  text-primary hover:text-blue-700 transition-colors"
                >
                  {card.email}
                </a>
              )}
              {card.note && (
                <p className="text-xs sm:text-sm text-slate-500 mt-3">
                  {card.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>

      {/* CTA Section */}
      <Container className="px-3 sm:px-4 xl:px-0 py-12 sm:py-16 md:py-20">
        <div className="brand-gradient rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-block bg-white text-primary text-xs  px-4 py-1.5 rounded-full mt-8 ml-10">
                Trusted by AI traders
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-4xl  text-white mt-4 mb-3 ml-10 leading-tight">
                Ready to Make Smarter Investments?
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mt-3 mb-3 ml-10">
                Join thousands of traders making data-driven decisions with
                AI-powered insights
              </p>
              <Button
                variant="primary"
                className="bg-white text-white border-0 hover:bg-blue-50 mb-6 mr-4 ml-10"
              >
                Start Your Free Trial
                <IconArrowRight size={18} className="ml-2" />
              </Button>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/image 18.png"
                alt="Algorion Logo"
                width={100}
                height={20}
                priority
                className="w-50 sm:w-120 h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactPage;
