import React from "react";
import Container from "@/components/container";
import { IconShieldCheck } from "@tabler/icons-react";
import Image from "next/image";
import Button from "@/components/button";
import { IconArrowRight } from "@tabler/icons-react";
import CTA from "@/components/cta";

function FeaturesPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* HEADER SECTION */}
      <Container className="pt-20 md:pt-32 text-center px-4 sm:px-6">
        {/* Top Badge */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="h-px w-24 bg-border" />      
          <div className="flex items-center gap-2 border border-border text-primary px-4 py-1.5 rounded-full text-xs bg-gradient">
            <IconShieldCheck size={14} />
            Platform Features
          </div>
          <div className="h-px w-24 bg-border "></div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary font-normal mb-4">
          Powerful AI Features for Smart Trading
        </h1>

        <p className="text-foreground-muted max-w-2xl mx-auto">
          Save more with longer commitments. All plans include full access to
          our platform.
        </p>
      </Container>

      {/* FEATURES GRID */}
      <Container className="mt-12 md:mt-20 px-4 sm:px-6">
        <h2 className="text-2xl text-primary mb-2">
          Powerful Features for Smart Trading
        </h2>
        <p className="text-foreground-muted mb-10">
          Everything you need to make informed investment decisions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARD 1 */}
          <div className="bg-gradient border border-border p-5 sm:p-8 rounded-xl">
            <div className="flex justify-center items-center">
              <Image
                src="/Group 38.png"
                alt="google"
                width={200}
                height={18}
                className="mb-5"
              />
            </div>
            <h3 className="text-lg text-primary mb-2">AI Predictions</h3>
            <p className="text-foreground-muted text-sm">
              AI-driven stock recommendations and performance insights
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gradient border border-border p-5 sm:p-8 rounded-xl">
            <div className="flex justify-center items-center">
              <Image
                src="/cuate.png"
                alt="google"
                width={200}
                height={18}
                className="mb-21"
              />
            </div>
            <h3 className="text-lg text-primary mb-2">Technical Analysis</h3>
            <p className="text-foreground-muted text-sm">
              Advanced charting tools with 20+ indicators and pattern
              recognition
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gradient border border-border p-5 sm:p-8 rounded-xl">
            <div className="flex justify-center items-center">
              <Image
                src="/Group 59.png"
                alt="google"
                width={400}
                height={18}
                className="mb-5"
              />
            </div>
            <h3 className="text-lg text-primary mb-2">IPO Tracking</h3>
            <p className="text-foreground-muted text-sm">
              Comprehensive tracking and analysis of upcoming IPOs
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-gradient border border-border p-5 sm:p-8 rounded-xl">
            <div className="flex justify-center items-center">
              <Image
                src="/Group 60.png"
                alt="google"
                width={400}
                height={18}
                className="m-5 mb-18"
              />
            </div>
            <h3 className="text-lg text-primary mb-2">Market Intelligence</h3>
            <p className="text-foreground-muted text-sm">
              Real-time news, market announcements, and insights
            </p>
          </div>
        </div>
      </Container>

      {/* HOW IT WORKS */}
      <Container className="mt-14 md:mt-24 text-center px-4 sm:px-6">
        <h2 className="text-3xl text-primary mb-2">How It Works</h2>
        <p className="text-foreground-muted mb-12">
          Get started in three simple steps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* STEP 1 */}
          <div className="border border-border rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center bg-background  gap-4">
            {/* LEFT */}
            <div className="text-left w-full sm:max-w-[60%]">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center font-medium mb-4">
                1
              </div>

              <h3 className="text-lg text-primary mb-1">Sign Up</h3>
              <p className="text-sm text-foreground-muted mb-2">
                Simple, quick, and secure onboarding
              </p>

              <p className="text-xs text-gray-500">
                Set up your account effortlessly and start building better
                strategies from day one.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <Image
              src="/1.png"
              alt="step1"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* STEP 2 */}
          <div className="border border-border rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center bg-background  gap-4">
            <div className="text-left w-full sm:max-w-[60%]">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center font-medium mb-4">
                2
              </div>

              <h3 className="text-lg text-primary mb-1">Search Stocks</h3>
              <p className="text-sm text-foreground-muted mb-2">
                Find the right stocks faster
              </p>

              <p className="text-xs text-gray-500">
                Explore 48+ NSE/BSE stocks with real-time insights, performance
                data, and powerful analytics tools.
              </p>
            </div>

            <Image
              src="/2.png"
              alt="step2"
              width={140}
              height={120}
              className="object-contain"
            />
          </div>

          {/* STEP 3 */}
          <div className="border border-border rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center bg-background  gap-4">
            <div className="text-left w-full sm:max-w-[60%]">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center font-medium mb-4">
                3
              </div>

              <h3 className="text-lg text-primary mb-1">Get AI Insights</h3>
              <p className="text-sm text-foreground-muted mb-2">
                Make smarter decisions with AI
              </p>

              <p className="text-xs text-gray-500">
                Access machine learning predictions, technical analysis, and
                smart trading signals to guide your investments.
              </p>
            </div>

            <Image
              src="/3.png"
              alt="step3"
              width={140}
              height={120}
              className="object-contain"
            />
          </div>
        </div>
      </Container>

      {/* DASHBOARD SECTION */}
      <div className="bg-[#F8FAFC] p-2 mt-10">
        <Container className="mt-8 mb-8 md:mt-15 md:mb-15 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6">
          <div>
            <h2 className="text-2xl text-primary mb-4">
              AI Signal Dashboard See the Market Clearly
            </h2>

            <p className="text-foreground-muted mb-4">
              A unified command center that consolidates all AI signals into one
              decisive view.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>✔ Multi-timeframe signal aggregation</li>
              <li>✔ Confidence-weighted scoring</li>
              <li>✔ One-click deep dive into signals</li>
              <li>✔ Custom watchlist integration</li>
            </ul>
          </div>

          <Image
            src="/background.png"
            alt="google"
            width={400}
            height={18}
            className="ml-0 md:ml-30 w-full h-auto"
          />
        </Container>
      </div>

      {/* CTA */}
      <CTA />
    </main>
  );
}

export default FeaturesPage;
