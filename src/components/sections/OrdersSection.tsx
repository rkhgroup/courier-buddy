import { Package, ShoppingBag, FileText, Box } from "lucide-react";

const orders = [
  {
    icon: ShoppingBag,
    title: "Заказы из интернет-магазинов",
    description: "Одежда, электроника, товары для дома",
  },
  {
    icon: Package,
    title: "Посылки и документы",
    description: "Срочная доставка документов и небольших посылок",
  },
  {
    icon: FileText,
    title: "Корреспонденция",
    description: "Деловые письма и документация",
  },
  {
    icon: Box,
    title: "Товары от локальных бизнесов",
    description: "Заказы от магазинов и предпринимателей города",
  },
];

const OrdersSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Какие заказы доставляете</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {orders.map((order, index) => (
            <div key={index} className="feature-card">
              <order.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-medium text-foreground mb-2">{order.title}</h3>
              <p className="text-sm text-muted-foreground">{order.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrdersSection;
