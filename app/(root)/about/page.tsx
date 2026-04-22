import Button from "@/components/button";
import AnimatedFaqSection from "@/components/animated-faq-section";
import Container from "@/components/container";
import { cn } from "@/lib/utils";
import {
  IconArrowRight,
  IconBrandLinkedinFilled,
  IconBulb,
  IconCheck,
  IconCircleCheck,
  IconTargetArrow,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/cta";
import { faqs, offerings, stats, storySteps, team } from "@/constants/pages/about";
import SectionBadge from "@/components/section-badge";

export default function AboutPage() {
  return (
    <div>
      <Container className="py-10 md:py-16">
        <div className="text-center">
          <SectionBadge label="About Us" />
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-brand-darker md:mt-5 md:text-5xl">
            Welcome to Algorion
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-text-muted md:mt-4 md:text-base">
            Redefining trading with your AI-powered companion for intelligent algorithmic strategies.
          </p>
        </div>
      </Container>

      <Container className="py-4 md:py-8">
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 md:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <span className="inline-flex rounded-full bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-darker">
              Our Story
            </span>

            <h2 className="mt-3 text-2xl font-medium leading-tight text-brand-darker md:mt-4 md:text-3xl">
              Transforming Trading Through AI Innovation
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-text-secondary md:mt-4">
              At Algorion, we are passionate about helping investors make better decisions through
              AI and market intelligence. Founded by a team focused on practical outcomes, our
              platform turns noisy market data into clear and actionable insights.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              From building prediction models to delivering real-time analysis, we continue to
              create tools that support disciplined and confident trading.
            </p>

            <div className="mt-6 space-y-4 md:mt-7">
              {storySteps.map((step) => (
                <article key={step.number} className="">
                  <span className="inline-flex rounded-lg bg-brand-surface px-4 py-3 font-semibold text-brand-darker">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-xl font-medium text-brand-darker md:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          <Image src="/parth-kabir.png" alt="Our Story" width={600} height={400} className="w-full rounded-2xl object-cover" />
        </div>
      </Container>

      <section className="mt-10 bg-[#f4f7fb] py-10 md:mt-14 md:py-14">
        <Container className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <article className="rounded-2xl bg-surface p-5 shadow-sm md:p-6">
            <span className="inline-flex rounded-lg bg-brand-surface p-2 text-brand-dark">
              <IconTargetArrow size={20} />
            </span>
            <h3 className="mt-3 text-xl font-medium text-brand-darker md:mt-4 md:text-2xl">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted md:mt-3 md:text-base">
              To empower traders by removing emotional bias and complexity in decision making,
              providing consistent, market-backed intelligence through smart automation.
            </p>
          </article>

          <article className="rounded-2xl bg-surface p-5 shadow-sm md:p-6">
            <span className="inline-flex rounded-lg bg-brand-surface p-2 text-brand-dark">
              <IconBulb size={20} />
            </span>
            <h3 className="mt-3 text-xl font-medium text-brand-darker md:mt-4 md:text-2xl">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              To become the industry leader in AI-driven algorithmic trading, offering intuitive,
              accurate, and intelligent trading tools to investors across the globe.
            </p>
          </article>
        </Container>
      </section>

      <Container className="py-10 md:py-16">
        <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-brand-darker md:text-3xl">What We Offer:</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {offerings.map((item) => (
                <li key={item} className="inline-flex items-start gap-2.5 text-sm text-text-secondary">
                  <IconCircleCheck size={18} className="mt-0.5 shrink-0 text-brand-hover fill-brand-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="mt-6 text-sm md:mt-7">
              Let&apos;s Talk
            </Button>
          </div>

          <Image src="/what-we-can-offer.png" alt="what-we-can-offer" width={300} height={400} className="mx-auto w-full max-w-sm rounded-2xl aspect-square object-cover lg:mx-0" />
        </div>
      </Container>

      <section className="brand-gradient py-12 text-surface md:py-18">
        <Container className="text-center">
          <span className="inline-flex rounded-full bg-surface/15 px-4 py-1 text-xs font-light tracking-wider text-surface">
            Why Algorion
          </span>
          <h2 className="mt-4 text-2xl md:mt-5 md:text-4xl">Numbers That Speak for Themselves</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-surface/80 md:mt-3 md:text-base">
            Trusted by traders worldwide with a strong track record that defines our credibility.
          </p>

          <div className="mt-7 grid grid-cols-2 rounded-2xl bg-surface/10 backdrop-blur-sm md:mt-10 md:grid-cols-4">
            {stats.map((item, i) => (
              <div 
                key={item.label} 
                className={cn(
                  "px-3 py-6 md:py-8 border-brand-dark",
                  i === 0 && "border-b border-r md:border-b-0",
                  i === 1 && "border-b md:border-r md:border-b-0",
                  i === 2 && "border-r",
                )}
              >
                <p className="text-xl md:text-2xl">{item.value}</p>
                <p className="mt-1 text-xs text-surface/80">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-10 md:py-16">
        <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-brand-darker">
          Our Team
        </span>
        <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight text-brand-darker md:text-4xl">
          Dedicated Team Members for <span className="text-[#2c8f4f]">Algorion</span>
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-8 md:gap-5">
          {team.map((member) => (
            <article key={member.name} className="relative overflow-hidden rounded-2xl bg-surface shadow-sm">
              <Image src={member.img} alt={member.name} width={300} height={400} className="aspect-3/4 w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-surface px-4 py-3">
                <div>
                  <h3 className="text-sm font-semibold text-brand-darker">{member.name}</h3>
                  <p className="text-xs text-text-muted">{member.role}</p>
                </div>
                <Link href={member.linkedin} target="_blank">
                  <IconBrandLinkedinFilled size={32} className="text-brand-dark hover:text-brand-hover cursor-pointer" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <AnimatedFaqSection faqs={faqs} />

      <CTA />
    </div>
  );
}