
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden vintage-pattern"
    >
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-40"
          alt="Vintage barber shop interior"
         src="https://images.unsplash.com/photo-1603268206075-56e995c9e830" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
              Desde 1995 - Tradição em Cuidados Masculinos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 hero-text-shadow"
          >
            <span className="text-primary">Vintage</span> Barber Shop
            <br />
            <span className="text-2xl md:text-3xl font-normal text-foreground/90">
              Estilo Clássico, Experiência Moderna
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Mais que um corte de cabelo, uma experiência completa. Nossa barbearia
            combina técnicas tradicionais com tendências contemporâneas para
            oferecer o melhor em cuidados masculinos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              className="vintage-button text-lg px-8 py-6"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Agendar Horário
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-lg px-8 py-6"
              onClick={scrollToServices}
            >
              Nossos Serviços
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-foreground/60 mb-2">Descubra Mais</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border-2 border-primary/20 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 border-2 border-primary/20 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary/20 rounded-full opacity-20"></div>
    </section>
  );
};

export default Hero;
