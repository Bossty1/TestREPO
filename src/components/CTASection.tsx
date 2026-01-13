import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto glow-primary">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-cyan-400 mb-8 animate-float">
            <Zap className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t("readyToBoost")} <span className="text-gradient-primary">{t("boostSocialMedia")}</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            {t("ctaDescription")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              {t("getStartedNow")}
              <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              {t("contactSupport")}
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {t("noPasswordRequired")}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {t("instantDelivery")}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {t("support247")}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {t("moneyBackGuarantee")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
