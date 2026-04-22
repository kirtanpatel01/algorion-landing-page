"use client";

import Container from "@/components/container";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

type AnimatedFaqSectionProps = {
  faqs: FaqItem[];
};

export default function AnimatedFaqSection({ faqs }: AnimatedFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Container className="py-12 md:py-14">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-darker">
          FAQ
        </span>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-brand-darker md:text-4xl">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-text-secondary">
          Quick answers about how Algorion helps traders make better decisions.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.article
              key={item.q}
              layout
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="max-w-2xl mx-auto rounded-xl border border-border-default bg-surface p-4"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-sm font-medium text-brand-darker md:text-base">{item.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border-default text-text-muted cursor-pointer"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 border-t border-border-default pt-3 text-sm leading-relaxed text-text-secondary">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </Container>
  );
}