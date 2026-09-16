import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: "What is the mug made of?",
    answer:
      "The mug is made from high-white porcelain clay — the same clay used for the flowers. It's a fine, high-quality material fired in a kiln at around 1320°C. After firing, the mug becomes durable, smooth, and completely safe for everyday use — you can drink from it normally.",
  },
  {
    question:
      "What about the glaze? Do you spray it on? I'm worried it might not be healthy.",
    answer:
      "We never spray our glaze. We apply it by dipping or brushing instead — this gives us better control over the thickness and coverage, especially on the delicate flower details. Our glaze is 100% lead-free, so you can use it with complete peace of mind.",
  },
  {
    question: "Can the mug go in the dishwasher or microwave?",
    answer:
      "A simple rinse with water is all it takes to keep it clean. Please do not put the mug in the microwave.",
  },
  {
    question: "Is each mug truly handmade?",
    answer:
      "Yes — every piece is 100% handmade, which is why each mug is unique. No two are exactly alike.",
  },
];

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Frequently asked questions
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
export default FaqContent;
