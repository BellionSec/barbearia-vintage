
import React from "react";
import { motion } from "framer-motion";
import { Scissors, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "25+",
    label: "Anos de Experiência",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    value: "15k+",
    label: "Clientes Satisfeitos",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    value: "12",
    label: "Barbeiros Premiados",
    icon: <Award className="w-6 h-6 text-primary" />,
  },
  {
    value: "30+",
    label: "Serviços Exclusivos",
    icon: <Scissors className="w-6 h-6 text-primary" />,
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card relative">
      <div className="absolute inset-0 opacity-10 vintage-pattern"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="vintage-border p-4">
              <img 
                className="w-full h-auto rounded-lg"
                alt="História da barbearia vintage"
               src="https://images.unsplash.com/photo-1621747084931-66a8c59f138d" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg border border-primary/20 shadow-lg">
              <p className="text-primary font-bold">Desde 1995</p>
              <p className="text-sm text-muted-foreground">Tradição em cuidados masculinos</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tradição e <span className="text-primary">Excelência</span> em
              Barbearia
            </h2>
            <p className="text-muted-foreground mb-6">
              Fundada em 1995, a Vintage Barber Shop nasceu da paixão por
              preservar a arte tradicional da barbearia enquanto abraça técnicas
              modernas. Começamos como uma pequena barbearia de bairro e hoje
              somos referência em cuidados masculinos.
            </p>
            <p className="text-muted-foreground mb-6">
              Nossa missão é proporcionar mais que um simples corte de cabelo ou
              barba, mas uma experiência completa de cuidado e bem-estar para o
              homem moderno que valoriza tradição e qualidade.
            </p>
            <p className="text-muted-foreground mb-8">
              Cada cliente que entra em nossa barbearia é tratado com atenção
              personalizada, em um ambiente que combina o charme vintage com o
              conforto contemporâneo.
            </p>
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
              Conheça Nossa Barbearia
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg border border-primary/20 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
