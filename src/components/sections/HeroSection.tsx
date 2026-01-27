import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Выгодное предложение для курьеров{" "}
            <span className="text-primary">Актобе</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Доставка заказов через Fortuna Partners — стабильный доход, гибкий график, понятные условия
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/offer">
              <Button size="lg" className="w-full sm:w-auto">
                Ознакомиться с офертой
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="#contacts">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Связаться
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
