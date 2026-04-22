import Container from "@/components/container";
import { IconCircleCheck, IconShieldCheck } from "@tabler/icons-react";
import Image from "next/image";
import CTA from "@/components/cta";
import SectionBadge from "@/components/section-badge";
import FeatureCardsSection from "@/components/feature-cards-section";
import { howItWorksSteps } from "@/constants/pages/features";

function FeaturesPage() {
  return (
    <main className="bg-surface min-h-screen">
      {/* HEADER SECTION */}
      <Container className="pt-20 md:pt-32 text-center">
        {/* Top Badge */}
        <SectionBadge label="Platform Features" icon={IconShieldCheck} />

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-brand-darker font-normal mb-4">
          Powerful AI Features for Smart Trading
        </h1>

        <p className="text-text-muted max-w-2xl mx-auto">
          Save more with longer commitments. All plans include full access to
          our platform.
        </p>
      </Container>

      {/* FEATURES GRID */}
      <Container className="mt-12 md:mt-20">
        <h2 className="text-2xl text-brand-darker mb-2">
          Powerful Features for Smart Trading
        </h2>
        <p className="text-text-muted mb-10">
          Everything you need to make informed investment decisions
        </p>
      <FeatureCardsSection />
      </Container>


      {/* HOW IT WORKS */}
      <section className="mt-14 md:mt-24 text-center max-w-7xl mx-auto px-4 xl:px-0">
        <h2 className="text-3xl text-brand-darker mb-2">How It Works</h2>
        <p className="text-text-muted mb-12">
          Get started in three simple steps
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {howItWorksSteps.map((step) => (
            <div key={step.number} className="max-w-lg mx-auto border border-border-default rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center bg-surface gap-4">
              <div className="text-left w-full sm:max-w-[60%]">
                <div className="w-10 h-10 rounded-full bg-brand-light text-brand-darker flex items-center justify-center font-medium mb-4">
                  {step.number}
                </div>

                <h3 className="text-lg text-brand-darker mb-1">{step.title}</h3>
                <p className="text-sm text-text-muted mb-2">{step.subtitle}</p>

                <p className="text-xs text-text-muted">{step.description}</p>
              </div>

              <Image
                src={step.imgSrc}
                alt={step.imgAlt}
                width={step.imgWidth}
                height={step.imgHeight}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <div className="bg-[#F8FAFC] p-2 mt-10">
        <Container className="mt-8 mb-8 md:mt-15 md:mb-15 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-2xl text-brand-darker mb-4">
              AI Signal Dashboard See the Market Clearly
            </h2>

            <p className="text-text-muted mb-4">
              A unified command center that consolidates all AI signals into one
              decisive view.
            </p>

            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center gap-2"><IconCircleCheck size={16} className={"text-success"} /> Multi-timeframe signal aggregation</li>
              <li className="flex items-center gap-2"><IconCircleCheck size={16} className={"text-success"} /> Confidence-weighted scoring</li>
              <li className="flex items-center gap-2"><IconCircleCheck size={16} className={"text-success"} /> One-click deep dive into signals</li>
              <li className="flex items-center gap-2"><IconCircleCheck size={16} className={"text-success"} /> Custom watchlist integration</li>
            </ul>
          </div>

          <Image
            src="/background.png"
            alt="google"
            width={480}
            height={18}
            className=""
          />
        </Container>
      </div>

      {/* CTA */}
      <CTA />
    </main>
  );
}

export default FeaturesPage;
