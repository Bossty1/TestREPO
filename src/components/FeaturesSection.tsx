import { Shield, Zap, Clock, CreditCard, Headphones, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: Shield,
    titleKey: "web3SecurePayments",
    descKey: "unbeatablePricesDesc",
  },
  {
    icon: Zap,
    titleKey: "autoDelivery",
    descKey: "autoDeliveryDesc",
  },
  {
    icon: Clock,
    titleKey: "prioritySupport",
    descKey: "prioritySupportDesc",
  },
  {
    icon: CreditCard,
    titleKey: "unbeatablePrices",
    descKey: "unbeatablePricesDesc",
  },
  {
    icon: Headphones,
    titleKey: "apiAccess",
    descKey: "apiAccessDesc",
  },
  {
    icon: Globe,
    titleKey: "globalCoverage",
    descKey: "globalCoverageDesc",
  },
];

const FeaturesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-secondary/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("whyChoose")} <span className="text-gradient-primary">SmmBossty</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("featuresDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleKey}
                className="group relative"
              >
                <div className="gradient-border p-6 h-full hover:glow-primary transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
