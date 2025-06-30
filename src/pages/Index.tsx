import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientsCarousel from "@/components/ClientsCarousel";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GlobalStyles from "@/components/GlobalStyles";
import Container from "@/components/Container";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <GlobalStyles />
      <Header />
      <main className="w-full">
        <Container>
          <Hero />
          <Services />
          <section id="clientes" className="py-12 md:py-16">
            <ClientsCarousel />
          </section>
          <Portfolio />
          <ContactForm />
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
