import { Zap, Instagram, Youtube, Twitter, Send, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const footerLinks = {
    services: [
      { nameKey: "instagramServices", href: "#" },
      { nameKey: "youtubeServices", href: "#" },
      { nameKey: "tiktokServices", href: "#" },
      { nameKey: "telegramServices", href: "#" },
      { nameKey: "twitterServices", href: "#" },
      { nameKey: "facebookServices", href: "#" },
    ],
    company: [
      { nameKey: "aboutUs", href: "#" },
      { nameKey: "contact", href: "#contact" },
      { nameKey: "blog", href: "#" },
      { nameKey: "apiDocumentation", href: "#" },
      { nameKey: "affiliateProgram", href: "#" },
    ],
    support: [
      { nameKey: "faq", href: "#faq" },
      { nameKey: "termsOfService", href: "#" },
      { nameKey: "privacyPolicy", href: "#" },
      { nameKey: "refundPolicy", href: "#" },
      { nameKey: "liveChat", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Send, href: "#" },
    { icon: Facebook, href: "#" },
  ];

  return (
    <footer id="contact" className="pt-20 pb-8 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                Smm<span className="text-gradient-primary">Bossty</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              {t("footerDescription")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">{t("servicesTitle")}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">{t("companyTitle")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">{t("supportTitle")}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 SmmBossty. {t("allRightsReserved")}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{t("accepting")}</span>
            <span className="text-foreground">{t("crypto")}</span>
            <span>•</span>
            <span className="text-foreground">bKash</span>
            <span>•</span>
            <span className="text-foreground">PayPal</span>
            <span>•</span>
            <span className="text-foreground">Visa</span>
            <span>•</span>
            <span className="text-foreground">MasterCard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
