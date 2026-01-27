import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Компания */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Fortuna Partners</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Курьерская служба доставки. Быстро, надёжно, выгодно.
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-medium mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:[EMAIL]" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  fortunapartners@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:[ТЕЛЕФОН]" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  +7 702 350 1398
                </a>
                <a href="tel:[ТЕЛЕФОН]" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  +7 700 722 9065
                </a>
              </li>
            </ul>
          </div>

          {/* Документы */}
          <div>
            <h4 className="font-medium mb-4">Документы</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/offer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Публичная оферта
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Fortuna Partners. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <Link to="/offer" className="hover:text-foreground transition-colors">
              Оферта
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Конфиденциальность
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
