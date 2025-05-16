
import React from "react";
import { motion } from "framer-motion";
import { Scissors, Shrub as Beard, SprayCan as Spray, Coffee } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const serviceCategories = [
  {
    id: "cortes",
    label: "Cortes",
    services: [
      {
        name: "Corte Clássico",
        description: "Corte tradicional com acabamento perfeito",
        price: "R$ 60",
        duration: "45 min",
        icon: <Scissors className="w-5 h-5" />,
      },
      {
        name: "Corte Degradê",
        description: "Técnica moderna com transição suave",
        price: "R$ 70",
        duration: "50 min",
        icon: <Scissors className="w-5 h-5" />,
      },
      {
        name: "Corte + Barba",
        description: "Combo completo para renovar o visual",
        price: "R$ 100",
        duration: "75 min",
        icon: <Scissors className="w-5 h-5" />,
      },
      {
        name: "Corte VIP",
        description: "Experiência premium com bebida inclusa",
        price: "R$ 120",
        duration: "90 min",
        icon: <Coffee className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "barba",
    label: "Barba",
    services: [
      {
        name: "Barba Simples",
        description: "Aparar e definir com precisão",
        price: "R$ 45",
        duration: "30 min",
        icon: <Beard className="w-5 h-5" />,
      },
      {
        name: "Barba Completa",
        description: "Modelagem, hidratação e toalha quente",
        price: "R$ 65",
        duration: "45 min",
        icon: <Beard className="w-5 h-5" />,
      },
      {
        name: "Barba Vintage",
        description: "Tratamento premium com produtos especiais",
        price: "R$ 85",
        duration: "60 min",
        icon: <Beard className="w-5 h-5" />,
      },
      {
        name: "Desenho de Barba",
        description: "Contornos precisos e estilo personalizado",
        price: "R$ 55",
        duration: "40 min",
        icon: <Beard className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "tratamentos",
    label: "Tratamentos",
    services: [
      {
        name: "Hidratação Capilar",
        description: "Nutrição profunda para cabelos danificados",
        price: "R$ 75",
        duration: "40 min",
        icon: <Spray className="w-5 h-5" />,
      },
      {
        name: "Tratamento Anti-queda",
        description: "Fortalecimento e estímulo do folículo",
        price: "R$ 95",
        duration: "50 min",
        icon: <Spray className="w-5 h-5" />,
      },
      {
        name: "Coloração",
        description: "Cobertura de grisalhos com resultado natural",
        price: "R$ 110",
        duration: "60 min",
        icon: <Spray className="w-5 h-5" />,
      },
      {
        name: "Spa Facial",
        description: "Limpeza, esfoliação e hidratação da pele",
        price: "R$ 90",
        duration: "45 min",
        icon: <Spray className="w-5 h-5" />,
      },
    ],
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="section-padding bg-background relative vintage-pattern">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência <span className="text-primary">Premium</span> em Cada Detalhe
          </h2>
          <p className="text-muted-foreground">
            Oferecemos uma variedade de serviços de barbearia de alta qualidade,
            combinando técnicas tradicionais com toques modernos para criar uma
            experiência única.
          </p>
        </div>

        <Tabs defaultValue="cortes" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50 p-1 rounded-full">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="service-card"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {service.icon}
                      </div>
                      <span className="text-xl font-bold text-primary">
                        {service.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Duração: {service.duration}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary/10"
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
                        Agendar
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Button
            className="vintage-button"
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
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
