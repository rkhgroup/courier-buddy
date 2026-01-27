import { Wallet, Clock, Shield, TrendingUp, Smartphone, Users } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Прозрачные выплаты",
    description: "Оплата за каждый доставленный заказ. Никаких скрытых комиссий.",
  },
  {
    icon: Clock,
    title: "Гибкий график",
    description: "Работайте когда удобно. Вы сами планируете своё время.",
  },
  {
    icon: Shield,
    title: "Честные условия",
    description: "Договор присоединения с понятными правилами и ответственностью.",
  },
  {
    icon: TrendingUp,
    title: "Стабильный поток заказов",
    description: "Регулярные заказы от проверенных партнёров.",
  },
  {
    icon: Smartphone,
    title: "Удобное приложение",
    description: "Принимайте заказы и отслеживайте доход в мобильном приложении.",
  },
  {
    icon: Users,
    title: "Поддержка 24/7",
    description: "Оперативная помощь по любым вопросам в любое время.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Почему это выгодно курьеру</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="feature-card">
              <benefit.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-medium text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
