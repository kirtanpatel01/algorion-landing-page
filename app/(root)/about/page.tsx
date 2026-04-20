import Button from "@/components/button";
import Container from "@/components/container";
import {
  IconArrowRight,
  IconBulb,
  IconCheck,
  IconCircleCheck,
  IconDeviceAnalytics,
  IconTargetArrow,
} from "@tabler/icons-react";

const storySteps = [
  {
    number: "01",
    title: "The Beginning - Vision & Innovation",
    text: "Algorion was founded to make data-driven investing simpler, faster, and more reliable for every trader.",
  },
  {
    number: "02",
    title: "Building the Foundation",
    text: "We combined market intelligence with practical AI workflows to help investors take confident action.",
  },
];

const offerings = [
  "AI-powered stock price prediction using advanced ML models",
  "Real-time market data analysis and risk management",
  "Personalized alerts and recommendation engine",
  "Unified dashboard with technical and fundamental insights",
];

const stats = [
  { value: "50K+", label: "Active Traders" },
  { value: "92%", label: "Signal Accuracy Rate" },
  { value: "2M+", label: "Daily AI Predictions" },
  { value: "135+", label: "Markets Covered" },
];

const team = [
  {
    name: "Kabir Khatri",
    role: "Director, Algorion",
    accent: "from-[#2f7a66] to-[#133d35]",
  },
  {
    name: "Parth Vaghela",
    role: "Director, Algorion",
    accent: "from-[#5c88c9] to-[#305d9f]",
  },
  {
    name: "Ali Patel",
    role: "Software Developer",
    accent: "from-[#4e79aa] to-[#274f81]",
  },
];

const faqs = [
  {
    q: "What is Algorion?",
    a: "Algorion is an AI-powered stock intelligence platform that helps users make informed trading decisions using market data and predictive analytics.",
  },
  {
    q: "Who can use Algorion?",
    a: "Algorion is built for beginner and experienced investors, active traders, and market researchers who want data-backed insights.",
  },
  {
    q: "How does Algorion help in trading?",
    a: "The platform combines real-time market analysis, alerts, and smart dashboards to reduce noise and improve timing.",
  },
  {
    q: "Is Algorion suitable for long-term investors?",
    a: "Yes. Algorion provides both short-term signal tracking and long-term market context for strategic decisions.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <Container className="px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-4 py-1 text-xs font-semibold text-[#173a76]">
            About Us
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#173a76] md:text-5xl">
            Welcome to Algorion
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
            Redefining trading with your AI-powered companion for intelligent algorithmic strategies.
          </p>
        </div>
      </Container>

      <Container className="px-4 py-4 md:px-6 md:py-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-primary">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary md:text-[2.05rem]">
              Transforming Trading Through AI Innovation
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              At Algorion, we are passionate about helping investors make better decisions through
              AI and market intelligence. Founded by a team focused on practical outcomes, our
              platform turns noisy market data into clear and actionable insights.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              From building prediction models to delivering real-time analysis, we continue to
              create tools that support disciplined and confident trading.
            </p>

            <div className="mt-7 space-y-4">
              {storySteps.map((step) => (
                <article key={step.number} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="inline-flex rounded-md bg-[#edf4ff] px-2.5 py-1 text-xs font-semibold text-[#174b97]">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-800">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_12px_30px_rgba(16,49,102,0.1)]">
            <div className="h-full min-h-[420px] rounded-2xl bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 p-6">
              <div className="h-full rounded-xl border border-white/50 bg-[linear-gradient(140deg,#d7e8ff_0%,#adc9ef_40%,#829ec4_100%)] p-4">
                <div className="h-full rounded-lg bg-[linear-gradient(160deg,#5d7ea8_0%,#44658d_45%,#2f4d73_100%)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Leadership Team</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Human Insight. AI Precision.</h3>
                  <p className="mt-3 max-w-xs text-sm text-white/85">
                    Built by professionals who understand markets and technology equally.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-white/15 p-3 text-white backdrop-blur-sm">
                      <p className="text-xl font-semibold">7+</p>
                      <p className="text-xs text-white/85">Years Building AI Systems</p>
                    </div>
                    <div className="rounded-lg bg-white/15 p-3 text-white backdrop-blur-sm">
                      <p className="text-xl font-semibold">24/7</p>
                      <p className="text-xs text-white/85">Market Monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="mt-14 bg-[#f4f7fb] py-12 md:py-14">
        <Container className="px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-lg bg-[#edf4ff] p-2 text-[#174b97]">
                <IconTargetArrow size={20} />
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-slate-800">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To empower traders by removing emotional bias and complexity in decision making,
                providing consistent, market-backed intelligence through smart automation.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-lg bg-[#edf4ff] p-2 text-[#174b97]">
                <IconBulb size={20} />
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-slate-800">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To become the industry leader in AI-driven algorithmic trading, offering intuitive,
                accurate, and intelligent trading tools to investors across the globe.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold text-[#173a76]">What We Offer:</h2>
            <ul className="mt-5 space-y-3">
              {offerings.map((item) => (
                <li key={item} className="inline-flex items-start gap-2.5 text-sm text-slate-600">
                  <IconCircleCheck size={18} className="mt-0.5 shrink-0 text-sky-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="mt-7 px-3 py-1.5 text-xs">
              AI In Talk
            </Button>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_12px_28px_rgba(15,43,90,0.12)]">
            <div className="h-72 rounded-xl bg-[radial-gradient(circle_at_30%_20%,#35de86_0%,#0f6f6b_35%,#0e2d52_75%,#081832_100%)] p-4">
              <div className="flex h-full items-end rounded-lg border border-emerald-200/20 bg-white/5 p-4">
                <div className="w-full">
                  <div className="mb-4 inline-flex rounded-lg bg-white/15 p-2 text-white">
                    <IconDeviceAnalytics size={20} />
                  </div>
                  <p className="text-sm font-semibold text-white">Predictive Insight Engine</p>
                  <p className="mt-1 text-xs text-white/80">
                    Real-time trend mapping with signal confidence and momentum tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="brand-gradient py-16 text-white md:py-18">
        <Container className="px-4 text-center md:px-6">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold text-white">
            Why Algorion
          </span>
          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">Numbers That Speak for Themselves</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85">
            Trusted by traders worldwide with a strong track record that defines our credibility.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl bg-white/10 px-3 py-4">
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="mt-1 text-xs text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="px-4 py-16 md:px-6">
        <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-[#173a76]">
          Our Team
        </span>
        <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-[#173a76]">
          Dedicated Team Members for <span className="text-[#2c8f4f]">Algorion</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className={`h-52 bg-gradient-to-br ${member.accent}`} />
              <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">{member.name}</h3>
                  <p className="text-xs text-slate-500">{member.role}</p>
                </div>
                <span className="rounded-md border border-slate-300 px-2 py-1 text-[10px] font-semibold text-slate-600">
                  in
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <Container className="px-4 py-14 md:px-6">
        <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-[#173a76]">
          FAQ
        </span>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#173a76]">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((item, index) => (
            <details
              key={item.q}
              className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-slate-700">
                <span>{item.q}</span>
                <span className="text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>

      <Container className="px-4 pb-16 pt-4 md:px-6 md:pb-20">
        <div className="brand-gradient relative overflow-hidden rounded-2xl p-8 text-white md:p-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 -left-10 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                Trusted by Traders
              </span>
              <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight">
                Ready to Make Smarter Investments?
              </h2>
              <p className="mt-4 max-w-md text-sm text-white/85">
                Join thousands of traders making data-driven decisions with AI-powered insights.
              </p>

              <Button
                variant="primary"
                className="mt-6 bg-white px-4 py-2.5 text-sm font-semibold text-[#173a76] hover:bg-white/90"
              >
                Start Your Free Trial
                <IconArrowRight size={16} className="ml-1" />
              </Button>
            </div>

            <div className="h-56 rounded-xl border border-white/20 bg-[radial-gradient(circle_at_75%_20%,#63c6ff_0%,#295da8_35%,#16396f_70%,#10284b_100%)] p-4">
              <div className="flex h-full items-end rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <div>
                  <div className="mb-2 inline-flex rounded-lg bg-white/20 p-2">
                    <IconCheck size={18} />
                  </div>
                  <p className="text-sm font-semibold">Live Momentum Dashboard</p>
                  <p className="mt-1 text-xs text-white/80">
                    Monitor trend strength, signal reliability, and market direction instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}