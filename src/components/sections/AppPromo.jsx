
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Bell, Gift, Star } from "lucide-react";

const features = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Agendamento Fácil",
    description: "Marque horários com poucos cliques, escolhendo seu barbeiro preferido.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Lembretes",
    description: "Receba notificações sobre seus próximos agendamentos.",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Novidades",
    description: "Fique por dentro das últimas tendências e novidades da barbearia.",
  },
  {
    icon: <Gift className="w-5 h-5" />,
    title: "Programa de Fidelidade",
    description: "Acumule pontos a cada visita e troque por serviços ou produtos.",
  },
];

const AppPromo = () => {
  return (
    <section id="app" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 vintage-pattern"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
              Aplicativo Exclusivo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Baixe Nosso <span className="text-primary">Aplicativo</span> e
              Tenha a Barbearia na Palma da Sua Mão
            </h2>
            <p className="text-muted-foreground mb-8">
              Com o aplicativo da Vintage Barber, você pode agendar serviços,
              receber lembretes, acumular pontos de fidelidade e muito mais.
              Disponível para iOS e Android.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="vintage-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                  <path d="M16 19h6" />
                  <path d="M19 16v6" />
                </svg>
                App Store
              </Button>
              <Button className="vintage-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <polygon points="3 3 21 12 3 21 3 3" />
                </svg>
                Google Play
              </Button>
            </div>
            
            <div className="flex items-center mt-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                4.9/5 (2000+ avaliações)
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="app-mockup">
                <img 
                  className="w-full h-auto rounded-xl"
                  alt="App da barbearia vintage"
                 src="https://images.unsplash.com/photo-1683825095281-7726bd181ee9" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-card p-3 rounded-lg border border-primary/20 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Próximo Agendamento</p>
                    <p className="text-xs text-primary">Hoje, 15:30</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-card p-3 rounded-lg border border-primary/20 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Pontos de Fidelidade</p>
                    <p className="text-xs text-primary">350 pts</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
