import React from "react";
import Container from "@/components/container";
import Button from "@/components/button";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { IconShieldCheck } from "@tabler/icons-react";

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
            <div className="inline-flex items-center gap-2 bg-gradient text-primary px-4 py-2 rounded-full text-xs border border-primary mb-6">
              <IconShieldCheck size={16} />
              <span>CHOOSE YOUR PLAN</span>
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
    </main>
  );
}

export default PricingPage;
