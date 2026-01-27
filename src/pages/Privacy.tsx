import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности — Fortuna Partners</title>
        <meta
          name="description"
          content="Политика конфиденциальности и обработки персональных данных Fortuna Partners."
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
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Политика конфиденциальности
            </h1>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Общие положения</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  1.1. Настоящая Политика конфиденциальности определяет порядок обработки 
                  и защиты персональных данных пользователей сервиса Fortuna Partners.
                </p>
                <p>
                  1.2. Используя сервис, вы соглашаетесь с условиями данной Политики.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Какие данные мы собираем</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>2.1. Мы можем собирать следующие данные:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ФИО</li>
                  <li>Контактный телефон</li>
                  <li>Адрес электронной почты</li>
                  <li>Банковские реквизиты для выплат</li>
                  <li>Данные документов, удостоверяющих личность</li>
                  <li>Геолокационные данные (при использовании приложения)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Цели обработки данных</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>3.1. Персональные данные используются для:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Заключения и исполнения договора</li>
                  <li>Осуществления выплат</li>
                  <li>Связи с курьером по рабочим вопросам</li>
                  <li>Улучшения качества сервиса</li>
                  <li>Выполнения требований законодательства</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Защита данных</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  4.1. Мы принимаем необходимые организационные и технические меры 
                  для защиты персональных данных от несанкционированного доступа.
                </p>
                <p>
                  4.2. Доступ к данным имеют только уполномоченные сотрудники.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Передача данных третьим лицам</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  5.1. Мы не передаём персональные данные третьим лицам, за исключением 
                  случаев, предусмотренных законодательством РК.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Права субъекта данных</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>6.1. Вы имеете право:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Получить информацию об обработке ваших данных</li>
                  <li>Требовать уточнения или удаления данных</li>
                  <li>Отозвать согласие на обработку</li>
                </ul>
                <p>
                  6.2. Для реализации своих прав обращайтесь по адресу: [EMAIL]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Изменения политики</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  7.1. Мы оставляем за собой право вносить изменения в настоящую Политику. 
                  Актуальная версия всегда доступна на сайте.
                </p>
              </div>
            </section>

            <section className="p-6 bg-secondary rounded-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4">Контакты</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Наименование:</strong> Fortuna Partners</p>
                <p><strong className="text-foreground">Email:</strong> [EMAIL]</p>
                <p><strong className="text-foreground">Телефон:</strong> [ТЕЛЕФОН]</p>
              </div>
            </section>

            <p className="text-sm text-muted-foreground mt-6">
              Дата публикации: [ДАТА]
            </p>
          </article>

          <div className="mt-10">
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
