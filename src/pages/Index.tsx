import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import OrdersSection from "@/components/sections/OrdersSection";
import TargetSection from "@/components/sections/TargetSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import StepsSection from "@/components/sections/StepsSection";
import TariffsSection from "@/components/sections/TariffsSection";
import ContactsSection from "@/components/sections/ContactsSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Fortuna Partners — Работа курьером | Выгодные условия</title>
        <meta
          name="description"
          content="Станьте курьером Fortuna Partners в [ГОРОД]. Гибкий график, прозрачные тарифы, стабильный доход. Оплата за каждый доставленный заказ."
        />
        <meta property="og:title" content="Fortuna Partners — Работа курьером в [ГОРОД]" />
        <meta
          property="og:description"
          content="Станьте курьером Fortuna Partners. Гибкий график, прозрачные тарифы, стабильный доход."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <OrdersSection />
        <TargetSection />
        <BenefitsSection />
        <StepsSection />
        <TariffsSection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
