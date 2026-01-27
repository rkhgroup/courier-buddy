import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tariffs = [
  {
    type: "До 5 кг",
    price: "300 ₸",
  },
  {
    type: "От 5 до 30 кг)",
    price: "550 ₸",
  },
  {
    type: "От 30 кг",
    price: "1000 ₸",
  },
];

const TariffsSection = () => {
  return (
    <section id="tariffs" className="section-padding bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Тарифы</h2>
        <p className="section-subtitle mb-8">
          Примерные ставки за доставку. Точные условия — в{" "}
          <Link to="/offer" className="link-underline">
            публичной оферте
          </Link>
          .
        </p>

        <div className="bg-background rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium">Тип доставки</TableHead>
                <TableHead className="font-medium">Ставка</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tariffs.map((tariff, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{tariff.type}</TableCell>
                  <TableCell className="text-primary font-medium">{tariff.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      </div>
    </section>
  );
};

export default TariffsSection;
