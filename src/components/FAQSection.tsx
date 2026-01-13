import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const faqs = [
  { questionKey: "faq1Q", answerKey: "faq1A" },
  { questionKey: "faq2Q", answerKey: "faq2A" },
  { questionKey: "faq3Q", answerKey: "faq3A" },
  { questionKey: "faq4Q", answerKey: "faq4A" },
  { questionKey: "faq5Q", answerKey: "faq5A" },
  { questionKey: "faq6Q", answerKey: "faq6A" },
  { questionKey: "faq7Q", answerKey: "faq7A" },
];

const FAQSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            <span className="text-gradient-primary">{t("faqTitle")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("faqDescription")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-start font-display font-semibold text-foreground hover:text-primary transition-colors py-5">
                  {t(faq.questionKey)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {t(faq.answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
