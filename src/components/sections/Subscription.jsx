
import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const subscriptionPlans = [
  {
    name: "Básico",
    price: "R$ 99",
    period: "/mês",
    description: "Ideal para quem busca manutenção regular",
    features: [
      { text: "2 cortes de cabelo por mês", included: true },
      { text: "1 serviço de barba por mês", included: true },
      { text: "10% de desconto em produtos", included: true },
      { text: "Agendamento prioritário", included: false },
      { text: "Tratamentos capilares", included: false },
      { text: "Bebida premium inclusa", included: false },
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "R$ 179",
    period: "/mês",
    description: "Nossa assinatura mais popular",
    features: [
      { text: "4 cortes de cabelo por mês", included: true },
      { text: "2 serviços de barba por mês", included: true },
      { text: "20% de desconto em produtos", included: true },
      { text: "Agendamento prioritário", included: true },
      { text: "1 tratamento capilar por mês", included: true },
      { text: "Bebida premium inclusa", included: true },
    ],
    popular: true,
  },
  {
    name: "Família",
    price: "R$ 249",
    period: "/mês",
    description: "Perfeito para pai e filho",
    features: [
      { text: "6 cortes de cabelo por mês", included: true },
      { text: "3 serviços de barba por mês", included: true },
      { text: "15% de desconto em produtos", included: true },
      { text: "Agendamento prioritário", included: true },
      { text: "Tratamentos capilares", included: false },
      { text: "Bebida premium inclusa", included: false },
    ],
    popular: false,
  },
];

const Subscription = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="subscription" className="section-padding bg-background relative">
      <div className="absolute inset-0 opacity-5 vintage-pattern"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            Planos de Assinatura
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Economize com Nossos <span className="text-primary">Planos Mensais</span>
          </h2>
          <p className="text-muted-foreground">
            Assine um de nossos planos e tenha acesso a serviços exclusivos com
            preços especiais. Cuide da sua aparência regularmente sem
            preocupações.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`subscription-card ${plan.popular ? "premium" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg">
                  MAIS POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mr-2 mt-0.5" />
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${
                  plan.popular
                    ? "vintage-button"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                Assinar Agora
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center max-w-2xl mx-auto p-6 border border-primary/20 rounded-lg bg-card">
          <h3 className="text-xl font-semibold mb-4">
            Dúvidas sobre nossos planos?
          </h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato conosco para mais informações sobre nossos planos de
            assinatura ou para criar um plano personalizado que atenda às suas
            necessidades.
          </p>
          <Button
            variant="outline"
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
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
