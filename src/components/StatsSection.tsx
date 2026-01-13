import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatItem {
  value: string;
  suffix: string;
  labelKey: string;
  descKey: string;
}

const stats: StatItem[] = [
  {
    value: "80",
    suffix: "M+",
    labelKey: "totalOrders",
    descKey: "totalOrdersDesc",
  },
  {
    value: "250",
    suffix: "K+",
    labelKey: "registeredUsers",
    descKey: "registeredUsersDesc",
  },
  {
    value: "2000",
    suffix: "+",
    labelKey: "activeServices",
    descKey: "activeServicesDesc",
  },
  {
    value: "150",
    suffix: "+",
    labelKey: "countriesServed",
    descKey: "countriesServedDesc",
  },
  {
    value: "10",
    suffix: "+ yrs",
    labelKey: "experience",
    descKey: "experienceDesc",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const targetValue = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-gradient-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("ourStats")} <span className="text-gradient-primary">{t("smmPanelStats")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("statsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.labelKey}
              className="glass rounded-2xl p-6 text-center hover:glow-primary transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <h3 className="text-lg font-display font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                {t(stat.labelKey)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(stat.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
