"use client";

import Container from "@/components/container";
import Button from "@/components/button";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  IconAi,
  IconArrowDown,
  IconArrowRight,
  IconBolt,
  IconBooks,
  IconChartBar,
  IconChartLine,
  IconCheck,
  IconChevronRight,
  IconChevronUp,
  IconCircleCheck,
  IconClock,
  IconClockHour4,
  IconDatabase,
  IconDeviceMobile,
  IconLock,
  IconPlaystationCircle,
  IconRosetteDiscountCheck,
  IconSettingsAi,
  IconShield,
  IconShieldCheck,
  IconSparkles,
  IconSparkles2,
  IconStar,
  IconStarFilled,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import CTA from "@/components/cta";

const marketStrip = [
  { symbol: "RELIANCE", price: "2824.25", change: "+1.32%" },
  { symbol: "TCS", price: "3910.40", change: "-0.89%" },
  { symbol: "INFY", price: "1620.00", change: "+2.39%" },
  { symbol: "HDFCBANK", price: "1540.80", change: "+1.02%" },
  { symbol: "ICICIBANK", price: "1065.30", change: "+0.44%" },
  { symbol: "SBIN", price: "822.15", change: "+0.76%" },
  { symbol: "LT", price: "3678.50", change: "-0.41%" },
  { symbol: "ITC", price: "436.20", change: "+0.58%" },
  { symbol: "BHARTIARTL", price: "1322.10", change: "+1.11%" },
  { symbol: "HINDUNILVR", price: "2524.90", change: "-0.34%" },
  { symbol: "KOTAKBANK", price: "1768.35", change: "+0.67%" },
  { symbol: "AXISBANK", price: "1119.70", change: "+0.29%" },
  { symbol: "BAJFINANCE", price: "6898.40", change: "-1.05%" },
  { symbol: "ASIANPAINT", price: "2898.10", change: "+0.24%" },
  { symbol: "MARUTI", price: "12644.00", change: "+0.92%" },
];

const tickerStrip = [...marketStrip, ...marketStrip];

const featureCards = [
  {
    title: "AI Predictions",
    text: "AI-driven stock recommendations and performance insights.",
    img: <Image src="/ai-predictions.png" alt="AI Predictions" width={220} height={220} />,
  },
  {
    title: "Technical Analysis",
    text: "Advanced charting tools with 20+ indicators and pattern recognition.",
    img: <Image src="/tech-analysis.png" alt="Technical Analysis" width={230} height={230} />,
  },
  {
    title: "IPO Tracking",
    text: "Comprehensive tracking and analysis of upcoming IPOs.",
    img: <Image src="/ipo-tracking.png" alt="IPO Tracking" width={500} height={500} />,
  },
  {
    title: "Market Intelligence",
    text: "Real-time news, market announcements, and insights.",
    img: <Image src="/market-intelligence.png" alt="Market Intelligence" width={400} height={400} />,
  },
];

const whyCards = [
  {
    title: "Comprehensive Data Coverage",
    text: "Actionable market data with contextual explanations for faster decision-making.",
    icon: IconDatabase,
  },
  {
    title: "Advanced AI Technology",
    text: "Proprietary ML workflows tuned for Indian market behavior and volatility cycles.",
    icon: IconSparkles,
  },
  {
    title: "Secure & Reliable",
    text: "A robust architecture with enterprise-grade reliability and access controls.",
    icon: IconLock,
  },
  {
    title: "Mobile-First Design",
    text: "Smooth experience on phones and tablets so you never miss market movement.",
    icon: IconDeviceMobile,
  },
  {
    title: "Educational Resources",
    text: "Curated explainers and strategy playbooks for beginner to advanced traders.",
    icon: IconBooks,
  },
  {
    title: "Community Driven",
    text: "Learn and collaborate with an active investor and analyst community.",
    icon: IconUsers,
  },
];

const cuttingEdge = [
  {
    title: "Machine Learning",
    desc: "Advanced ML algorithms for pattern recognition and prediction modeling",
    icon: IconSettingsAi,
    color: "bg-blue-200 text-blue-600",
  },
  {
    title: "Real-Time Data",
    desc: "Live market data processing with millisecond-level updates.",
    icon: IconClockHour4,
    color: "bg-blue-200 text-blue-600",
  },
  {
    title: "Technical Analysis",
    desc: "Comprehensive technical indicators and charting tools.",
    icon: IconChartBar,
    color: "bg-green-200 text-green-600",
  },
  {
    title: "Cloud Infrastructure",
    desc: "Scalable cloud architecture ensuring 99.9% uptime",
    icon: IconDatabase,
    color: "bg-pink-200 text-pink-600",
  },
  {
    title: "Data Security",
    desc: "Enterprise -grade encryption and secure systems.",
    icon: IconLock,
    color: "bg-sky-200 text-sky-600",
  },
];

const stats = [
  {
    value: "48+",
    heading: "NSE/BSE Stocks",
    subHeading: "Major indian stocks covered",
    icon: IconChartLine,
    color: "bg-sky-200 text-sky-600",
  },
  {
    value: "30+",
    heading: "Technical Indicators",
    subHeading: "Technical analysis tools",
    icon: IconBolt,
    color: "bg-purple-200 text-purple-600",
  },
  {
    value: "Real-time",
    heading: "Market Updates",
    subHeading: "Live data processing",
    icon: IconClock,
    color: "bg-green-200 text-green-600",
  },
  {
    value: "6",
    heading: "Institutional Data Streams",
    subHeading: "Multiple prediction horizons",
    icon: IconPlaystationCircle,
    color: "bg-red-200 text-red-600",
  },
];

const testimonials = [
  {
    stars: 1,
    name: "Kiran T.",
    role: "Retail Investor",
    quote: "The AI alerts helped me enter trend reversals earlier than usual. A very practical platform.",
  },
  {
    stars: 5,
    name: "Priya S.",
    role: "Swing Trader",
    quote: "Clean signals and data-backed setup confirmation. I now spend less time scanning noise.",
  },
  {
    stars: 2,
    name: "Nikhil M.",
    role: "Full-time Trader",
    quote: "Excellent FII tracking and sector insights. The daily dashboard has become part of my routine.",
  },
  {
    stars: 3,
    name: "Ananya R.",
    role: "Long-term Investor",
    quote: "The research summaries are simple and insightful. Perfect for informed long-term decisions.",
  },
  {
    stars: 5,
    name: "Kavi K.",
    role: "Long-term Investor",
    quote: "The research summaries are simple and insightful. Perfect for informed long-term decisions.",
  },
  {
    stars: 4,
    name: "Vikram G.",
    role: "Option Buyer",
    quote: "I appreciate how quickly signals update. It gives me confidence while executing trades.",
  },
  {
    stars: 3,
    name: "Rohit D.",
    role: "Analyst",
    quote: "A strong blend of ML predictions and technicals. Feels built for Indian market participants.",
  },
  {
    stars: 2,
    name: "Rahul D.",
    role: "Analyst",
    quote: "A strong blend of ML predictions and technicals. Feels built for Indian market participants.",
  },
];

const steps = [
  {
    title: "Sign Up",
    text: "Simple, quick, and secure onboarding",
    subText: "Set up your account effortlessly and start building better strategies from day one.",
    img: "/sign-up.png",
  },
  {
    title: "Search Stocks",
    text: "Find the right stocks faster",
    subText: "Explore 48+ NSE/BSE stocks with real-time insights, performance data, and powerful analytics tools.",
    img: "/search-stocks.png",
  },
  {
    title: "Get AI Insights",
    text: "Make smarter decisions with AI",
    subText: "Access machine learning predictions, technical analysis, and smart trading signals to guide your investments.",
    img: "/ai-insights.png",
  },
];

const heroHighlights = [
  { label: "48+ NSE/BSE Stocks", icon: IconChartBar },
  { label: "AI Signals", icon: IconAi },
  { label: "SEBI Compliant", icon: IconShield },
];

export default function Home() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [loopWidth, setLoopWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (!tickerRef.current) return;
      setLoopWidth(tickerRef.current.scrollWidth / 2);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!loopWidth) return;
    const speed = 28;
    const next = x.get() - (speed * delta) / 1000;
    x.set(next <= -loopWidth ? next + loopWidth : next);
  });

  return (
    <div className="">
      <Header />
      {/* Hero Section */}
      <Container className="relative overflow-hidden pb-6 pt-10 md:pb-16 lg:pb-20 md:pt-24">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-100 px-3 py-0.5 text-[11px] text-slate-600 shadow-sm md:mb-5 md:px-4 md:py-1 md:text-sm">
            <IconSparkles size={14} className="text-emerald-500" />
            Don&apos;t guess it, Just <span className="bg-blue-200 px-2 rounded-full">analyze!</span>
          </div>

          <h1 className="max-w-5xl font-medium leading-tight tracking-tight blue-gradient bg-clip-text text-transparent text-2xl xs:text-3xl sm:text-5xl md:text-6xl my-4">
            <span className="block">
              Algorion{" "}
              <span className="inline-block align-middle rounded-md sm:rounded-lg bg-white px-1.5 sm:px-3 py-0.5 sm:py-2 text-green-500 shadow-md sm:shadow-lg shadow-blue-200 rotate-10 text-sm sm:text-2xl md:text-4xl mx-1 sm:mx-2">
                AI
              </span>{" "}
              Stock Market
            </span>
            <span className="block mt-2">
              Intelligence{" "}
              <IconSparkles2
                className="inline-block align-middle rounded-md sm:rounded-lg bg-white p-1 sm:p-2 text-orange-500 shadow-md sm:shadow-lg shadow-blue-200 -rotate-10 size-6 sm:size-10 md:size-14 mx-1 sm:mx-2"
              />{" "}
              Platform
            </span>
          </h1>

          <p className="my-4 sm:my-6 max-w-4xl text-foreground-muted text-sm sm:text-base">
            Make smarter investment decisions with AI-powered market insights, predictive trend
            analytics, and institutional-level intelligence designed for Indian investors.
          </p>

          <div className="my-4 md:my-6 flex flex-col sm:flex-row gap-3 sm:gap-6">
            {heroHighlights.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center justify-center gap-1 rounded-full border border-border px-3 py-1 text-xs shadow-md shadow-border/80 md:gap-1.5 md:px-3 md:py-1 md:text-sm"
              >
                <item.icon size={14} className="md:hidden" />
                <item.icon size={16} className="hidden md:block" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="my-4 md:my-6 flex flex-col sm:flex-row gap-4">
            <Button variant="primary">
              Start Your Free Trial
            </Button>
            <Button variant="outline">
              View Features
            </Button>
          </div>
        </div>
      </Container>

      {/* Stock Strip */}
      <section className="overflow-hidden bg-primary py-1 tracking-wide text-white md:py-2">
        <motion.div
          ref={tickerRef}
          className="flex w-max items-center gap-4 px-4 md:gap-8 md:px-6"
          style={{ x }}
        >
          {tickerStrip.map((item, idx) => (
            <span
              key={`${item.symbol}-${idx}`}
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span className="tracking-normal text-white text-xs md:text-sm">{item.symbol}</span>
              <span className="font-light tracking-normal text-white/80 text-xs md:text-sm">{item.price}</span>
              <span
                className={`inline-flex items-center gap-0.5 font-semibold tracking-normal text-xs md:text-sm ${item.change.startsWith("+") ? "text-emerald-500" : "text-rose-500"
                  }`}
              >
                {item.change.startsWith("+") ? <IconChevronUp size={14} /> : <IconArrowDown size={14} />}
                {item.change}
              </span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <Container className="py-8 md:py-18">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl text-primary">Powerful Features for Smart Trading</h2>
          <p className="mx-auto mt-2 md:mt-3 text-xs md:text-sm text-foreground-muted">
            Everything you need to make informed investment decisions.
          </p>
        </div>

        <div className="mt-6 md:mt-10 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="h-auto md:h-96 rounded-xl md:rounded-2xl bg-gradient flex flex-col gap-4 md:gap-8 p-4 md:p-6 shadow-[0_8px_24px_rgba(16,70,150,0.08)]"
            >
              <div className="flex-1 flex items-center justify-center">
                {card.img}
              </div>
              <div className="">
                <h3 className="text-base md:text-lg font-medium text-slate-800">{card.title}</h3>
                <p className="mt-1 md:mt-2 text-xs md:text-sm text-slate-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Why Algorion ? */}
      <Container className="py-3 md:py-6">
        <div className="rounded-lg md:rounded-xl bg-[#F8FAFC] px-4 md:px-8 py-6 md:py-8 lg:py-16">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl font-medium text-primary">Why Choose Algorion AI?</h2>
            <p className="mt-2 md:mt-3 text-xs md:text-sm text-foreground-muted">Advanced technology built for clarity in fast-moving markets.</p>
          </div>

          <div className="mt-6 md:mt-10 grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card) => (
              <article key={card.title} className="rounded-lg md:rounded-xl border border-slate-100 bg-[#F6FBFF] p-3 md:p-5 shadow-lg shadow-slate-600/15">
                <div className="mb-2 md:mb-3 inline-flex rounded-lg bg-[#E5F0FF] p-1.5 md:p-2 text-primary">
                  <card.icon size={16} className="md:block hidden" />
                  <card.icon size={14} className="md:hidden" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-primary">{card.title}</h3>
                <p className="mt-1 md:mt-2 text-xs md:text-sm text-foreground-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>

      {/* Technologies */}
      <Container className="py-8 md:py-18">
        <h2 className="text-2xl md:text-3xl font-medium text-primary text-center ">Built with Cutting-Edge Technology</h2>
        <p className="mx-auto mt-2 md:mt-3 max-w-sm text-xs md:text-sm text-foreground-muted text-center ">
          Our platform leverages modern technologies to deliver fast insights and secure execution.
        </p>

        <div className="mt-6 md:mt-8 grid grid-cols-1 gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {cuttingEdge.map((tech) => (
            <div
              key={tech.title}
              className="rounded-md bg-[#F8FCFF] h-fit p-3 md:p-4 flex gap-3 md:gap-4 shadow-md shadow-blue-600/10 w-full"
            >
              <div className={cn("flex items-center justify-center rounded-lg md:rounded-xl p-2 md:p-3 border-2 md:border-4 border-white flex-shrink-0", tech.color)}>
                <tech.icon size={40} className={`size-6 md:size-8`} />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-medium text-primary">{tech.title}</h3>
                <p className="text-xs md:text-sm text-foreground-muted">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Platform Overview */}
      <Container className="pb-8 md:pb-18 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-primary">Platform Overview</h2>
        <p className="mx-auto mt-2 md:mt-3 max-w-2xl text-xs md:text-sm text-foreground-muted">
          Comprehensive coverage of Indian stock markets with advanced analytics.
        </p>

        <div className="mt-6 md:mt-8 grid grid-cols-1 gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.heading} className="rounded-lg md:rounded-xl border border-border/50 bg-white p-4 md:p-6 shadow-md shadow-zinc-300/30 space-y-3 md:space-y-4">
              <div className={cn("mb-3 md:mb-4 inline-flex rounded-lg p-2 md:p-3", item.color)}>
                <item.icon size={24} className="md:block hidden" />
                <item.icon size={20} className="md:hidden" />
              </div>
              <p className="text-xl md:text-2xl text-primary font-semibold">{item.value}</p>
              <div>
                <p className="text-xs md:text-sm font-medium">{item.heading}</p>
                <p className="text-xs md:text-sm text-foreground-muted">{item.subHeading}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Security & Compliance Section */}
      <section className="pb-8 md:pb-18 mx-auto max-w-6xl px-4 xl:px-0">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-primary">Security & Compliance</h2>
          <p className="mt-2 md:mt-3 text-xs md:text-sm text-foreground-muted">Your data security and regulatory compliance are our top priorities.</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:mt-8 md:gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-border/30 p-4 shadow-md shadow-zinc-300/30 flex flex-col gap-3 md:rounded-2xl md:p-6 md:flex-row md:gap-4">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-primary md:text-lg">Data Security</h3>
              <ul className="mt-2 space-y-1 list-inside list-disc text-xs md:mt-3 md:space-y-2 md:text-sm">
                <li>End-to-end encryption for all data transmission</li>
                <li>Secure cloud infrastructure with regular backups</li>
                <li>Multi-factor authentication for account protection</li>
                <li>Regular security audits and vulnerability assessments</li>
              </ul>
            </div>
            <Image src="/lock.png" alt="data-security" width={200} height={24} className="hidden md:block flex-shrink-0" />
          </div>

          <div className="rounded-lg border border-border/30 p-4 shadow-md shadow-zinc-300/30 flex flex-col gap-3 md:rounded-2xl md:p-6 md:flex-row md:gap-4">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-primary md:text-lg">Regulatory Compliance</h3>
              <ul className="mt-2 space-y-1 list-inside list-disc text-xs md:mt-3 md:space-y-2 md:text-sm">
                <li>SEBI guidelines compliance for market data display</li>
                <li>Transparent data sourcing and methodology</li>
                <li>Clear disclaimers and risk warnings</li>
                <li>Privacy policy compliant with Indian data protection laws</li>
              </ul>
            </div>
            <Image src="/world.png" alt="data-security" width={150} height={150} className="hidden md:block flex-shrink-0" />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-lg border border-border/30 px-4 py-4 shadow-md shadow-zinc-300/30 md:mt-6 md:flex-row md:gap-4 md:rounded-2xl md:py-6 md:pl-6">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-primary md:text-lg">Important Disclaimer</h3>
            <ul className="mt-2 space-y-1 list-inside list-disc text-xs md:mt-3 md:space-y-2 md:text-sm">
              <li><strong>Investment Risk: </strong>All investments in securities market are subject to market risks. Past performance is not indicative of future results</li>
              <li><strong>Not Financial Advice: </strong>The information provided on this platform is for educational and informational purposes only and should not be construed as financial advice.</li>
              <li><strong>Do Your Research: </strong>Please consult with qualified financial advisors and conduct your own research before making investment decisions.</li>
              <li><strong>Data Accuracy: </strong>While we strive for accuracy, we do not guarantee the completeness or accuracy of the information provided.</li>
            </ul>
          </div>
          <Image src="/risk.png" alt="data-security" width={300} height={300} className="mx-auto hidden md:block" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-8 md:pb-18 mx-auto max-w-6xl px-4 xl:px-0">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-primary">Trusted by Indian Investors</h2>
          <p className="mt-2 md:mt-3 text-xs md:text-sm text-foreground-muted">
            Join thousands of investors who rely on AI for smarter investing.
          </p>
        </div>

        <div className="mt-6 md:mt-10 grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-lg md:rounded-xl border border-slate-200 bg-white p-3 md:p-5 shadow-sm">
              {item.stars && (
                <div className="mb-1 md:mb-2 flex items-center gap-0.5">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <IconStarFilled key={i} size={14} className="md:block hidden text-amber-400" />
                  ))}
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <IconStarFilled key={i} size={12} className="md:hidden text-amber-400" />
                  ))}
                </div>
              )}
              <p className="text-xs md:text-sm leading-relaxed text-slate-600">&quot;{item.quote}&quot;</p>
              <div className="mt-3 md:mt-4 border-t border-slate-100 pt-2 md:pt-3 flex gap-2">
                <IconUser size={40} className="md:block hidden p-2 bg-slate-600 rounded-full text-slate-200 flex-shrink-0" />
                <IconUser size={36} className="md:hidden p-1.5 bg-slate-600 rounded-full text-slate-200 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold text-slate-800 text-xs md:text-sm truncate">{item.name}</p>
                  <p className="text-xs text-slate-500 truncate">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-8 md:pb-18 w-full max-w-6xl mx-auto px-4 xl:px-0">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-primary">How It Works</h2>
          <p className="mt-2 md:mt-3 text-xs md:text-sm text-foreground-muted">Get started in three simple steps.</p>
        </div>

        <div className="mt-6 md:mt-9 grid grid-cols-1 gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-lg md:rounded-xl border border-slate-200 bg-[#edf4ff] p-3 md:p-4 lg:p-5">
              <div className="space-y-2 md:space-y-3 flex-1">
                <p className="text-xs font-semibold bg-blue-300 rounded-full h-5 w-5 md:h-6 md:w-6 flex justify-center items-center text-white">
                  {index + 1}
                </p>
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-slate-800">{step.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600">{step.text}</p>
                </div>
                <p className="text-xs md:text-sm text-foreground-muted">{step.subText}</p>
              </div>
              <Image src={step.img} alt={step.text} height={80} width={80} className="mt-3 hidden lg:block aspect-square size-28 xl:size-36 ml-auto" />
            </div>
          ))}
        </div>
      </section>

      <Container className="pb-8 md:pb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-primary">Start Free, Scale as You Grow</h2>
        <p className="mt-2 md:mt-3 text-xs md:text-sm text-slate-600">Try all premium features free for 7 days.</p>

        <div className="my-4 md:my-16 relative mx-auto max-w-md rounded-xl md:rounded-2xl border border-primary/30 p-4 md:p-10 text-left shadow-md shadow-slate-500/30 flex flex-col gap-3 md:gap-6">
          <span className="absolute right-0 top-0 rounded-bl-lg md:rounded-bl-2xl rounded-tr-lg md:rounded-tr-xl bg-primary px-4 md:px-8 py-1 md:py-2 text-xs md:text-base font-medium text-white">
            Free Trial
          </span>

          <header>
            <h3 className="text-lg md:text-2xl font-medium tracking-tight text-[#1F3557]">7-Day Free Trial</h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">Full access to all features</p>
          </header>

          <ul className="list-disc list-inside space-y-1 md:space-y-2 text-xs md:text-sm text-slate-700 marker:text-slate-600 pl-2 md:pl-0">
            <li>48+ NSE/BSE stocks</li>
            <li>AI price predictions (6 timeframes)</li>
            <li>30+ technical indicators</li>
            <li>Real-time market data</li>
            <li>IPO tracking &amp; alerts</li>
            <li>Market news &amp; insights</li>
            <li>Customer support (Mon-Sat: 9:30 AM - 5:30 PM)</li>
          </ul>

          <Button variant="primary" className="text-sm md:text-base py-2 md:py-2.5">
            Start Free Trial
          </Button>

          <p className="text-center text-xs md:text-sm text-slate-700 mt-1 md:mt-3">Then ₹299/month</p>
          <p className="text-center text-xs md:text-sm text-slate-700 leading-tight md:leading-normal">
            View all Algorion AI pricing plans and subscription options -&gt;
          </p>
        </div>
      </Container>
      <CTA />
      <Footer />
    </div>
  );
}
