import React from "react";
import Container from "@/components/container";
import Button from "@/components/button";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

function CTA() {
  return (
    <Container className="py-10 sm:py-12 md:py-20">
      <div className="brand-gradient-radial rounded-2xl p-4 sm:p-8">
        <div className="grid grid-cols-1 items-center gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left">
          <div>
            <div className="inline-block rounded-full bg-white px-4 py-1.5 text-xs text-primary">
              Trusted by AI traders
            </div>
            <h2 className="mt-4 mb-3 text-2xl leading-tight text-white sm:text-3xl md:text-4xl">
              Ready to Make Smarter Investments?
            </h2>
            <p className="mt-3 mb-4 text-sm text-blue-100 sm:text-base md:text-lg">
              Join thousands of traders making data-driven decisions with
              AI-powered insights
            </p>
            <Button
              variant="primary"
              className="w-full border-0 bg-white text-white hover:bg-blue-50 md:w-auto"
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
              className="h-auto w-50 rounded-2xl sm:w-120"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CTA;
