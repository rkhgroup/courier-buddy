import { Link } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="section-container">
        {/* Top bar - контакты */}
        <div className="hidden sm:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-4">
            <a href="mailto:fortunapartners@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              <span>fortunapartners@gmail.com</span>
            </a>
            <a href="tel:+7 702 350 1398" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>+7 702 350 1398</span>
            </a>
            <a href="tel:+7 700 722 9065" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>+7 700 722 9065</span>
            </a>
          </div>
          <Link to="/offer" className="link-underline text-sm">
            Публичная оферта
          </Link>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-semibold text-lg sm:text-xl text-foreground">
              <img
                src="/logo.png"
                alt="Fortuna Partners"
                className="h-8 sm:h-9 w-auto"
              />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              О нас
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              Преимущества
            </a>
            <a href="#tariffs" className="text-muted-foreground hover:text-foreground transition-colors">
              Тарифы
            </a>
            <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
            <Link to="/offer">
              <Button variant="outline" size="sm">
                Оферта
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border space-y-3">
            <a
              href="#about"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a
              href="#benefits"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Преимущества
            </a>
            <a
              href="#tariffs"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Тарифы
            </a>
            <a
              href="#contacts"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <div className="pt-2 space-y-2">
              <Link to="/offer" className="block">
                <Button variant="outline" size="sm" className="w-full">
                  Публичная оферта
                </Button>
              </Link>
              <a href="mailto:[EMAIL]" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                [EMAIL]
              </a>
              <a href="tel:[ТЕЛЕФОН]" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                [ТЕЛЕФОН]
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
