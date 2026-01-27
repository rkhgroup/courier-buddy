import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Offer = () => {
  return (
    <>
      <Helmet>
        <title>Публичная оферта — Fortuna Partners</title>
        <meta
          name="description"
          content="Договор публичной оферты (договор присоединения) курьерской службы Fortuna Partners. Условия сотрудничества, тарифы, порядок выплат."
        />
        <meta property="og:title" content="Публичная оферта — Fortuna Partners" />
        <meta
          property="og:description"
          content="Договор публичной оферты курьерской службы Fortuna Partners. Прозрачные условия сотрудничества."
        />
      </Helmet>

      <Header />
      <main className="section-padding">
        <div className="section-container">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          <article className="prose prose-slate max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Публичная оферта
            </h1>
            <p className="text-muted-foreground mb-8">Договор присоединения</p>

            <div className="bg-secondary p-6 rounded-lg mb-8">
              <p className="text-sm text-muted-foreground mb-0">
                Настоящий документ является официальным предложением (публичной офертой) 
                Fortuna Partners заключить договор на оказание курьерских услуг на условиях, 
                изложенных ниже.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Общие положения</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  1.1. Настоящий Договор является публичной офертой в соответствии со статьей 395 
                  Гражданского кодекса Республики Казахстан.
                </p>
                <p>
                  1.2. <strong className="text-foreground">Исполнитель</strong> — Fortuna Partners, 
                  БИН/ИИН [БИН/ИИН], юридический адрес: [ЮР.АДРЕС].
                </p>
                <p>
                  1.3. <strong className="text-foreground">Курьер</strong> — физическое лицо, 
                  принявшее условия настоящей Оферты и осуществляющее доставку заказов.
                </p>
                <p>
                  1.4. Акцептом (принятием) настоящей Оферты является начало выполнения Курьером 
                  первого заказа через платформу Исполнителя.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Предмет договора</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  2.1. Исполнитель предоставляет Курьеру доступ к заказам на доставку, 
                  а Курьер обязуется выполнять доставку в соответствии с условиями настоящего Договора.
                </p>
                <p>
                  2.2. Курьер самостоятельно определяет график работы и количество принимаемых заказов.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Тарифы и оплата</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  3.1. Оплата производится за каждый успешно доставленный заказ в соответствии 
                  с действующими тарифами:
                </p>

                <div className="bg-background rounded-lg border border-border overflow-hidden my-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-medium">Тип доставки</TableHead>
                        <TableHead className="font-medium">Ставка</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Пешая доставка (до 5 км)</TableCell>
                        <TableCell className="text-primary font-medium">[XXX] ₸</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Пешая доставка (5–10 км)</TableCell>
                        <TableCell className="text-primary font-medium">[XXX] ₸</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Авто доставка (до 10 км)</TableCell>
                        <TableCell className="text-primary font-medium">[XXX] ₸</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Авто доставка (10–20 км)</TableCell>
                        <TableCell className="text-primary font-medium">[XXX] ₸</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Экспресс-доставка</TableCell>
                        <TableCell className="text-primary font-medium">[XXX] ₸</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <p>
                  3.2. Выплаты производятся [ПЕРИОДИЧНОСТЬ ВЫПЛАТ: еженедельно/ежедневно] 
                  на банковский счёт Курьера.
                </p>
                <p>
                  3.3. Исполнитель вправе изменять тарифы с предварительным уведомлением 
                  Курьера за [X] дней.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Материальная ответственность</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  4.1. Курьер несёт материальную ответственность за сохранность вверенного груза 
                  с момента получения до момента передачи получателю.
                </p>
                <p>
                  4.2. В случае утраты или повреждения груза по вине Курьера, стоимость ущерба 
                  удерживается из вознаграждения Курьера.
                </p>
                <p>
                  4.3. Размер удержания не может превышать стоимость утраченного/повреждённого 
                  груза и определяется на основании документов, подтверждающих стоимость.
                </p>
                <p>
                  4.4. Курьер освобождается от ответственности, если докажет, что утрата/повреждение 
                  произошли вследствие обстоятельств непреодолимой силы.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Обязанности Курьера</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>5.1. Курьер обязуется:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Выполнять доставку в установленные сроки</li>
                  <li>Бережно обращаться с грузом</li>
                  <li>Соблюдать правила дорожного движения</li>
                  <li>Вежливо общаться с получателями</li>
                  <li>Незамедлительно сообщать о проблемах с доставкой</li>
                  <li>Предоставлять достоверные данные о себе</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Обязанности Исполнителя</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>6.1. Исполнитель обязуется:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Предоставлять доступ к заказам через платформу</li>
                  <li>Своевременно производить выплаты</li>
                  <li>Информировать об изменениях условий работы</li>
                  <li>Оказывать техническую поддержку</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Порядок выплат</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  7.1. Оплата начисляется за каждый успешно доставленный заказ — 
                  факт доставки подтверждается в системе.
                </p>
                <p>
                  7.2. Выплаты осуществляются [ПЕРИОДИЧНОСТЬ] на банковский счёт, 
                  указанный Курьером при регистрации.
                </p>
                <p>
                  7.3. Курьер самостоятельно несёт ответственность за уплату налогов 
                  в соответствии с законодательством РК.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Срок действия и расторжение</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  8.1. Договор вступает в силу с момента акцепта Оферты и действует бессрочно.
                </p>
                <p>
                  8.2. Любая из сторон вправе расторгнуть Договор в одностороннем порядке, 
                  уведомив другую сторону за [X] дней.
                </p>
                <p>
                  8.3. При расторжении Договора производится окончательный расчёт 
                  с учётом всех выполненных заказов и удержаний.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Заключительные положения</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  9.1. Все споры решаются путём переговоров. При недостижении согласия — 
                  в судебном порядке по месту нахождения Исполнителя.
                </p>
                <p>
                  9.2. Исполнитель вправе вносить изменения в Оферту с публикацией новой 
                  редакции на сайте.
                </p>
              </div>
            </section>

            <section className="mb-8 p-6 bg-secondary rounded-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4">Реквизиты Исполнителя</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Наименование:</strong> Fortuna Partners</p>
                <p><strong className="text-foreground">БИН/ИИН:</strong> [БИН/ИИН]</p>
                <p><strong className="text-foreground">Юридический адрес:</strong> [ЮР.АДРЕС]</p>
                <p><strong className="text-foreground">Банк:</strong> [БАНК]</p>
                <p><strong className="text-foreground">IBAN:</strong> [IBAN]</p>
                <p><strong className="text-foreground">Email:</strong> [EMAIL]</p>
                <p><strong className="text-foreground">Телефон:</strong> [ТЕЛЕФОН]</p>
              </div>
            </section>

            <p className="text-sm text-muted-foreground">
              Дата публикации оферты: [ДАТА]
            </p>
          </article>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </Link>
            <a href="#contacts">
              <Button>Связаться с нами</Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Offer;
