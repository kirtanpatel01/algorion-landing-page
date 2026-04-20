import Container from "@/components/container";
import Button from "@/components/button";
import {
  IconArrowRight,
  IconBolt,
  IconBrain,
  IconChartBar,
  IconCheck,
  IconChevronRight,
  IconCircleCheck,
  IconClockHour4,
  IconDatabase,
  IconDeviceMobile,
  IconLock,
  IconMessages,
  IconRosetteDiscountCheck,
  IconShieldCheck,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const marketStrip = [
  "RELIANCE 2824.25 +1.32%",
  "TCS 3910.40 -0.89%",
  "INFY 1620.00 +2.39%",
  "HDFCBANK 1540.80 +1.02%",
  "ICICIBANK 1065.30 +0.44%",
];

const featureCards = [
  {
    title: "AI Predictions",
    text: "Advanced trend forecasting data to spot profitable market opportunities.",
    icon: IconBrain,
  },
  {
    title: "Technical Analysis",
    text: "Actionable charting signals with 25+ indicators and pattern recognition.",
    icon: IconChartBar,
  },
  {
    title: "FII Tracking",
    text: "Comprehensive institutional activity and positioning across sectors.",
    icon: IconUsers,
  },
  {
    title: "Neutral Intelligence",
    text: "Clear, bias-free alerts, market announcements, and strategic insights.",
    icon: IconMessages,
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
    icon: IconRosetteDiscountCheck,
  },
  {
    title: "Community Driven",
    text: "Learn and collaborate with an active investor and analyst community.",
    icon: IconUsers,
  },
];

const cuttingEdge = [
  "Machine Learning",
  "Real-Time Data",
  "Technical Analysis",
  "Cloud Infrastructure",
  "Data Security",
];

const stats = [
  { value: "48+", label: "Major Market Sources" },
  { value: "30+", label: "Technical Indicators" },
  { value: "Real-time", label: "Market Updates" },
  { value: "6", label: "Institutional Data Streams" },
];

type Test = {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Test[] = [
  {
    name: "Kiran T.",
    role: "Retail Investor",
    quote: "The AI alerts helped me enter trend reversals earlier than usual. A very practical platform.",
  },
  {
    name: "Priya S.",
    role: "Swing Trader",
    quote: "Clean signals and data-backed setup confirmation. I now spend less time scanning noise.",
  },
  {
    name: "Nikhil M.",
    role: "Full-time Trader",
    quote: "Excellent FII tracking and sector insights. The daily dashboard has become part of my routine.",
  },
  {
    name: "Ananya R.",
    role: "Long-term Investor",
    quote: "The research summaries are simple and insightful. Perfect for informed long-term decisions.",
  },
  {
    name: "Vikram G.",
    role: "Option Buyer",
    quote: "I appreciate how quickly signals update. It gives me confidence while executing trades.",
  },
  {
    name: "Rohit D.",
    role: "Analyst",
    quote: "A strong blend of ML predictions and technicals. Feels built for Indian market participants.",
  },
];

const steps = [
  {
    title: "Sign Up",
    text: "Create your account and activate trial access in under 60 seconds.",
    icon: IconCircleCheck,
  },
  {
    title: "Search Stocks",
    text: "Explore stock dashboards, trend quality, and smart screening filters.",
    icon: IconChevronRight,
  },
  {
    title: "Get AI Insights",
    text: "Receive clear buy/sell context, probability signals, and risk notes.",
    icon: IconBolt,
  },
];

export default function Home() {
  return (
    <div className="">
      <Header />
      <Container className="relative overflow-hidden px-4 pb-16 pt-14 md:px-6 md:pb-20">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-1 text-xs font-semibold text-slate-600 shadow-sm">
            <IconSparkles size={14} className="text-emerald-500" />
            India&apos;s Smartest AI Stock Platform
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#173a76] md:text-6xl">
            Algorion <span className="text-[#2c8f4f]">AI</span> Stock Market Intelligence Platform
          </h1>

          <p className="mt-6 max-w-3xl text-sm text-slate-600 md:text-base">
            Make smarter investment decisions with AI-powered market insights, predictive trend
            analytics, and institutional-level intelligence designed for Indian investors.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary">Start Your Free Trial</Button>
            <Button variant="outline">
              View Plans
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <IconCheck size={14} className="text-emerald-500" />
              48+ Market Sources
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconCheck size={14} className="text-emerald-500" />
              AI Signals
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconCheck size={14} className="text-emerald-500" />
              1 Lakh+ Community
            </span>
          </div>
        </div>
      </Container>

      <section className="bg-[#103166] py-2 text-[11px] font-semibold tracking-wide text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-x-5 gap-y-1 px-4 md:px-6">
          {marketStrip.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <Container className="px-4 py-18 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#173a76]">Powerful Features for Smart Trading</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Everything you need to make informed investment decisions, all in one intelligent platform.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-sky-100 bg-[#edf4ff] p-6 shadow-[0_8px_24px_rgba(16,70,150,0.08)]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white p-2.5 text-[#174b97] shadow-sm">
                <card.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="px-4 py-6 md:px-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_10px_30px_rgba(15,43,90,0.08)] md:p-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#173a76]">Why Choose Algorion AI?</h2>
            <p className="mt-3 text-sm text-slate-600">Advanced technology built for clarity in fast-moving markets.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card) => (
              <article key={card.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="mb-3 inline-flex rounded-lg bg-slate-50 p-2 text-[#174b97]">
                  <card.icon size={18} />
                </div>
                <h3 className="font-semibold text-slate-800">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>

      <Container className="px-4 py-18 text-center md:px-6">
        <h2 className="text-3xl font-semibold text-[#173a76]">Built with Cutting-Edge Technology</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
          Our platform leverages modern technologies to deliver fast insights and secure execution.
        </p>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cuttingEdge.map((tech) => (
            <div
              key={tech}
              className="rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </Container>

      <Container className="px-4 pb-18 text-center md:px-6">
        <h2 className="text-3xl font-semibold text-[#173a76]">Platform Overview</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
          Comprehensive coverage of Indian stock markets with advanced analytics.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-semibold text-[#174b97]">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="px-4 pb-18 md:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#173a76]">Security & Compliance</h2>
            <p className="mt-3 text-sm text-slate-600">Your data security and regulatory compliance are our top priorities.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#f7fbff] p-6">
              <div className="mb-4 inline-flex rounded-lg bg-white p-2 text-[#174b97]">
                <IconShieldCheck size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Data Security</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>End-to-end encryption for all data transfer</li>
                <li>Role-based access control and audit-ready logs</li>
                <li>Secure cloud architecture with multi-zone backup</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-[#f7fbff] p-6">
              <div className="mb-4 inline-flex rounded-lg bg-white p-2 text-[#174b97]">
                <IconClockHour4 size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Regulatory Compliance</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Aligned with Indian financial data governance standards</li>
                <li>Continuous monitoring and compliance documentation</li>
                <li>Institutional-grade operational controls</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4 text-xs leading-relaxed text-slate-700">
            Important Disclaimer: Investment in the stock market is subject to market risk. Past
            performance is not indicative of future returns. Please review all disclosures and make
            informed decisions based on your risk profile.
          </p>
        </div>
      </Container>

      <Container className="px-4 pb-18 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#173a76]">Trusted by Indian Investors</h2>
          <p className="mt-3 text-sm text-slate-600">
            Join thousands of investors who rely on AI for smarter investing.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm leading-relaxed text-slate-600">&quot;{item.quote}&quot;</p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <p className="font-semibold text-slate-800">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <Container className="px-4 pb-18 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#173a76]">How It Works</h2>
          <p className="mt-3 text-sm text-slate-600">Get started in three simple steps.</p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-xl border border-slate-200 bg-[#edf4ff] p-5">
              <div className="mb-3 inline-flex rounded-lg bg-white p-2 text-[#174b97]">
                <step.icon size={18} />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Step {index + 1}
              </p>
              <h3 className="font-semibold text-slate-800">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="px-4 pb-16 text-center md:px-6">
        <h2 className="text-3xl font-semibold text-[#173a76]">Start Free, Scale as You Grow</h2>
        <p className="mt-3 text-sm text-slate-600">Try all premium features free for 7 days.</p>

        <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-[0_14px_28px_rgba(15,43,90,0.1)]">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-800">7-Day Free Trial</h3>
            <span className="rounded-full bg-[#174b97] px-3 py-1 text-[10px] font-semibold text-white">
              Starter
            </span>
          </div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="inline-flex items-center gap-2"><IconCheck size={16} className="text-emerald-500" /> AI Signals Access</li>
            <li className="inline-flex items-center gap-2"><IconCheck size={16} className="text-emerald-500" /> Real-time Market Dashboard</li>
            <li className="inline-flex items-center gap-2"><IconCheck size={16} className="text-emerald-500" /> Technical Screener</li>
            <li className="inline-flex items-center gap-2"><IconCheck size={16} className="text-emerald-500" /> FII and Sector Data</li>
          </ul>
          <Button variant="primary" className="mt-6 w-full gap-1 px-4 py-2.5">
            Start Free Trial
            <IconArrowRight size={16} />
          </Button>
        </div>
      </Container>

      <Container className="px-4 pb-16 md:px-6">
        <div className="brand-gradient relative overflow-hidden rounded-2xl p-8 text-white md:p-10">
          <div className="pointer-events-none absolute -right-16 top-1/2 hidden h-52 w-52 -translate-y-1/2 rounded-full bg-white/10 blur-2xl md:block" />
          <p className="mb-2 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            Exclusive Launch Offer
          </p>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight">
            Ready to Make Smarter Investments?
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-blue-50">
            Join thousands of traders making data-driven decisions with AI-powered insights.
          </p>
          <Button variant="outline" className="mt-6 gap-1 px-5 py-2.5 text-[#144081] hover:bg-slate-100">
            Start Your Free Trial
            <IconArrowRight size={16} />
          </Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
