import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Ознакомьтесь с офертой",
    description: "Прочитайте условия договора присоединения. Там всё понятно и прозрачно.",
  },
  {
    number: 2,
    title: "Свяжитесь с нами",
    description: "Напишите в WhatsApp или Telegram. Ответим на вопросы и расскажем подробности.",
  },
  {
    number: 3,
    title: "Начните работу",
    description: "Получите доступ к заказам и начните зарабатывать уже сегодня.",
  },
];

const StepsSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="section-title">Как начать</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="step-number">{step.number}</div>
              <div>
                <h3 className="font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/offer">
            <Button>Читать оферту</Button>
          </Link>
          <a href="#contacts">
            <Button variant="outline">Связаться</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
