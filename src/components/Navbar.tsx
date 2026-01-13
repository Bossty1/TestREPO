import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  const navLinks = [
    { name: t("services"), href: "#services" },
    { name: t("pricing"), href: "#pricing" },
    { name: t("faq"), href: "#faq" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center glow-primary transition-all duration-300 group-hover:scale-110">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">
              Smm<span className="text-gradient-primary">Bossty</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === "ar" ? "EN" : "عربي"}</span>
            </button>
            <Button variant="ghost" size="sm">
              {t("signIn")}
            </Button>
            <Button variant="hero" size="sm">
              {t("getStarted")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-muted-foreground hover:text-primary transition-colors justify-start"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === "ar" ? "English" : "العربية"}</span>
                </button>
                <Button variant="ghost" className="justify-start">
                  {t("signIn")}
                </Button>
                <Button variant="hero">
                  {t("getStarted")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
