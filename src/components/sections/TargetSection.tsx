import { Check } from "lucide-react";

const targets = [
  "Курьерам с опытом, которые ищут стабильный поток заказов",
  "Начинающим курьерам — обучим и поможем разобраться",
  "Тем, кто хочет работать в свободном графике",
  "Автокурьерам и пешим курьерам",
  "Студентам и тем, кто ищет подработку",
];

const TargetSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">Кому подойдёт сотрудничество</h2>
          <ul className="space-y-3 mt-6">
            {targets.map((target, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">{target}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
