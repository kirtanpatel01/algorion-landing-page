import React from "react";
import Container from "@/components/container";
import Button from "@/components/button";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

function CTA() {
  return (
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
  );
}

export default CTA;
