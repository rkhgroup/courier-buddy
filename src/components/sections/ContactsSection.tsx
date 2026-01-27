import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactsSection = () => {
  return (
    <section id="contacts" className="section-padding">
      <div className="section-container">
        <h2 className="section-title">Контакты</h2>
        <p className="section-subtitle mb-8">
          Свяжитесь с нами любым удобным способом. Ответим на все вопросы.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="feature-card">
            <h3 className="font-medium text-lg mb-6">Наши контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:fortunapartners@gmail.com" className="font-medium hover:text-primary transition-colors">
                    fortunapartners@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <a href="tel:+7 702 350 1398" className="font-medium hover:text-primary transition-colors">
                    +7 702 350 1398
                  </a>
                  <a href="tel:+7 700 722 9065" className="font-medium hover:text-primary transition-colors">
                    +7 700 722 9065
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="font-medium">[АДРЕС]</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
