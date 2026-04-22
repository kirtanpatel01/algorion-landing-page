import Container from "@/components/container";
import Image from "next/image";

type FeatureCard = {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
};

const featureCards: FeatureCard[] = [
  {
    title: "AI Predictions",
    text: "AI-driven stock recommendations and performance insights.",
    imgSrc: "/ai-predictions.png",
    imgAlt: "AI Predictions",
    imgWidth: 220,
    imgHeight: 220,
  },
  {
    title: "Technical Analysis",
    text: "Advanced charting tools with 20+ indicators and pattern recognition.",
    imgSrc: "/tech-analysis.png",
    imgAlt: "Technical Analysis",
    imgWidth: 230,
    imgHeight: 230,
  },
  {
    title: "IPO Tracking",
    text: "Comprehensive tracking and analysis of upcoming IPOs.",
    imgSrc: "/ipo-tracking.png",
    imgAlt: "IPO Tracking",
    imgWidth: 500,
    imgHeight: 500,
  },
  {
    title: "Market Intelligence",
    text: "Real-time news, market announcements, and insights.",
    imgSrc: "/market-intelligence.png",
    imgAlt: "Market Intelligence",
    imgWidth: 400,
    imgHeight: 400,
  },
];

export default function FeatureCardsSection() {

  return (
    // <Container className="py-8 md:py-18">
      <div className="mt-6 md:mt-10 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="h-auto md:h-96 rounded-xl md:rounded-2xl bg-gradient flex flex-col gap-4 md:gap-8 p-4 md:p-6 shadow-[0_8px_24px_rgba(16,70,150,0.08)]"
          >
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={card.imgSrc}
                alt={card.imgAlt}
                width={card.imgWidth}
                height={card.imgHeight}
              />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-medium text-brand-darker">{card.title}</h3>
              <p className="mt-1 md:mt-2 text-xs md:text-sm text-text-secondary">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    // </Container>
  );
}
