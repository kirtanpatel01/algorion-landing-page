import React from "react";
import Container from "@/components/container";
import Button from "@/components/button";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { IconShieldCheck } from "@tabler/icons-react";
import CTA from "@/components/cta";

const pricingPlans = [
  {
    name: "Monthly",
    period: "Month",
    price: "₹299",
    buttonText: "Start Annual Plan",
    features: [
      "Advanced Stock Scanner",
      "Real-Time Market Data",
      "AI-Powered Insights",
      "Advanced Market Analysis",
      "AI-50 NFT events",
      "AI Predictions",
    ],
    popular: false,
  },
  {
    name: "Quarterly",
    period: "Quarter",
    price: "₹855",
    buttonText: "Start Quarterly Plan",
    features: [
      "Advanced Stock Scanner",
      "Real-Time Market Data",
      "AI-Powered Insights",
      "Advanced Market Analysis",
      "AI-50 NFT events",
      "AI Predictions",
    ],
    popular: false,
  },
  {
    name: "Bi-Annual",
    period: "Half Year",
    price: "₹1,710",
    buttonText: "Start Bi-Annual Plan",
    features: [
      "Advanced Stock Scanner",
      "Real-Time Market Data",
      "AI-Powered Insights",
      "Advanced Market Analysis",
      "AI-50 NFT events",
      "AI Predictions",
    ],
    popular: true,
  },
  {
    name: "Annual",
    period: "Year",
    price: "₹3,350",
    buttonText: "Start Annual Plan",
    features: [
      "Advanced Stock Scanner",
      "Real-Time Market Data",
      "AI-Powered Insights",
      "Advanced Market Analysis",
      "AI-50 NFT events",
      "AI Predictions",
    ],
    popular: false,
  },
];

function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-6 ">
              <div className="h-px w-24 bg-border" />
              <div className="inline-flex items-center gap-2 bg-gradient text-primary px-4 py-2 rounded-full text-xs border border-primary ">
                <IconShieldCheck size={16} />
                <span>CHOOSE YOUR PLAN</span>
              </div>
              <div className="h-px w-24 bg-border " />
            </div>
            <h1 className="text-4xl md:text-5xl font-normal text-primary mb-4">
              Flexible Pricing for Every Trader
            </h1>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Save more with longer commitments. All plans include full access
              to our platform.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl p-6 transition-all border ${
                  plan.popular
                    ? "bg-white border-blue-600 shadow-md scale-105"
                    : "bg-white border-gray-300 hover:shadow-sm"
                }`}
              >
                {/* Most Popular Tag */}
                {plan.popular && (
                  <div className="absolute -top-3 right-4 brand-gradient text-white text-[11px] px-3 py-1 rounded-md font-medium">
                    Most Popular
                  </div>
                )}

                {/* Plan Name */}
                <div className="mb-3">
                  <h3 className="text-[15px] font-medium text-primary">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500">{plan.period}</p>
                </div>

                {/* Price Section */}
                <div className="mb-5">
                  <h2 className="text-2xl font-semibold text-primary">
                    {plan.price}
                  </h2>

                  {/* Monthly breakdown (missing in your UI) */}
                  <p className="text-[11px] text-foreground-muted mt-1">
                    ₹
                    {Math.round(
                      parseInt(plan.price.replace(/[^\d]/g, "")) /
                        (plan.name === "Monthly"
                          ? 1
                          : plan.name === "Quarterly"
                            ? 3
                            : plan.name === "Bi-Annual"
                              ? 6
                              : 12),
                    )}
                    /month
                    {plan.name !== "Monthly" && " • Save 5%"}
                  </p>
                </div>

                {/* Button */}
                <button
                  className={`w-full py-2 rounded-md text-sm font-medium mb-6 transition ${
                    plan.popular
                      ? "brand-gradient text-white hover:bg-blue-700"
                      : "border border-border text-primary hover:bg-gray-100"
                  }`}
                >
                  {plan.buttonText}
                </button>

                {/* Features */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-medium text-primary mb-3">
                    What do you get:
                  </p>

                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <IconCheck
                          size={16}
                          className="text-green-500 mt-0.5"
                        />
                        <span className="text-xs text-foreground-muted leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  );
}

export default PricingPage;
