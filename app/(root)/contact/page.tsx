"use client";

import React, { useState } from "react";
import Container from "@/components/container";
import Button from "@/components/button";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { IconShieldCheck } from "@tabler/icons-react";
import CTA from "@/components/cta";
import { infoCards } from "@/constants/pages/contact";
import SectionBadge from "@/components/section-badge";

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

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <Container className="px-3 sm:px-4 xl:px-0 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <SectionBadge label="We're Here To Help" icon={IconShieldCheck} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-brand-darker mb-3 sm:mb-4">
            Get in Touch with Our Team
          </h1>
          <p className="text-sm sm:text-base text-text-muted max-w-xl mx-auto">
            Have a question, need support, or want to explore enterprise
            options? We respond within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <form onSubmit={handleSubmit} className="bg-surface">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-text-primary mb-2"
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
                  className="w-full px-4 py-3 bg-surface-subtle border border-border-default rounded-lg text-text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-base focus:border-transparent transition-colors"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-text-secondary mb-2"
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
                  className="w-full px-4 py-3 bg-surface-subtle border border-border-default rounded-lg text-text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-base focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-text-primary mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-subtle border border-border-default rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-base focus:border-transparent transition-colors appearance-none cursor-pointer"
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
                className="block text-sm font-semibold text-text-primary mb-2"
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
                className="w-full px-4 py-3 bg-surface-subtle border border-border-default rounded-lg text-text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-base focus:border-transparent transition-colors resize-none"
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
              className="bg-surface-subtle rounded-4xl p-6 sm:p-8 border border-border-default"
            >
              <h3 className="text-lg sm:text-xl text-text-primary mb-2 sm:mb-3">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-text-muted mb-4">
                {card.description}
              </p>
              {card.email && (
                <a
                  href={`mailto:${card.email}`}
                  className="text-sm  text-brand-darker hover:text-brand-hover transition-colors"
                >
                  {card.email}
                </a>
              )}
              {card.note && (
                <p className="text-xs sm:text-sm text-text-muted mt-3">
                  {card.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}

export default ContactPage;
