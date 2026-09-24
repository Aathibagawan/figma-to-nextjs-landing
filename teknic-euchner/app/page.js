import Header from "../components/Header";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import StatsSection from "../components/StatsSection";
import ProductsSection from "../components/ProductsSection";
import WhyUsSection from "../components/WhyUsSection";
import ApplicationsSection from "../components/ApplicationsSection";
import AboutSection from "../components/AboutSection";
import QualitySection from "../components/QualitySection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <StatsSection />
        <ProductsSection />
        <WhyUsSection />
        <ApplicationsSection />
        <AboutSection />
        <QualitySection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
