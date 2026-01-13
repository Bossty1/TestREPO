import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Shield, Zap, Clock, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  
  const features = [
    { icon: Shield, textKey: "web3SecurePayments" },
    { icon: Zap, textKey: "instantDelivery" },
    { icon: Clock, textKey: "support247" },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">{t("web3Services")}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <span className="text-gradient-primary">{t("heroTitle1")}</span>{" "}
              <span className="text-foreground">{t("heroTitle2")}</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              <strong className="text-foreground">SmmBossty</strong> {t("heroDescription")}{" "}
              <strong className="text-foreground">Instagram, YouTube, TikTok, Telegram, X/Twitter</strong> {t("andMore")}
            </p>

            <div className="flex flex-wrap gap-4">
              {features.map(({ icon: Icon, textKey }) => (
                <div key={textKey} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{t(textKey)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                {t("getStartedNow")}
                <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                {t("viewServices")}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 border-2 border-background" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">50K+</strong> {t("users")}
                </span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
                <span className="text-sm text-muted-foreground ms-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 glass rounded-2xl p-6 glow-primary animate-float">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{t("smmPanel")}</h3>
                    <p className="text-sm text-muted-foreground">{t("web3ServicesShort")}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                    <span className="text-sm text-muted-foreground">{t("instagramFollowers")}</span>
                    <span className="text-sm font-semibold text-primary">$0.50</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                    <span className="text-sm text-muted-foreground">{t("youtubeViews")}</span>
                    <span className="text-sm font-semibold text-primary">$0.30</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                    <span className="text-sm text-muted-foreground">{t("tiktokLikes")}</span>
                    <span className="text-sm font-semibold text-primary">$0.20</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 glass rounded-xl p-4 animate-float-delayed glow-accent">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                    <span className="text-lg">📈</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("growth")}</p>
                    <p className="text-sm font-semibold text-foreground">+250%</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-0 glass rounded-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("delivery")}</p>
                    <p className="text-sm font-semibold text-foreground">{t("instant")}</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 left-10 glass rounded-xl p-4 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("orders")}</p>
                    <p className="text-sm font-semibold text-foreground">80M+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
