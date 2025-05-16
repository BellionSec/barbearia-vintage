
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Scissors, Star } from "lucide-react";

const barbers = [
  {
    name: "Carlos Mendes",
    role: "Master Barber",
    experience: "15 anos de experiência",
    specialties: ["Cortes Clássicos", "Barbas Vintage", "Navalha"],
    rating: 4.9,
    instagram: "@carlosbarber",
  },
  {
    name: "Ricardo Alves",
    role: "Senior Barber",
    experience: "10 anos de experiência",
    specialties: ["Degradê", "Coloração", "Design de Barba"],
    rating: 4.8,
    instagram: "@ricardoalvesbarber",
  },
  {
    name: "André Santos",
    role: "Style Specialist",
    experience: "8 anos de experiência",
    specialties: ["Cortes Modernos", "Tratamentos", "Penteados"],
    rating: 4.7,
    instagram: "@andrestylist",
  },
  {
    name: "Marcelo Lima",
    role: "Barber & Groomer",
    experience: "12 anos de experiência",
    specialties: ["Barba Completa", "Cortes Texturizados", "Spa Facial"],
    rating: 4.9,
    instagram: "@marcelobarber",
  },
];

const Barbers = () => {
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
    <section id="barbers" className="section-padding bg-card relative">
      <div className="absolute inset-0 opacity-10 vintage-pattern"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça Nossos <span className="text-primary">Barbeiros</span>
          </h2>
          <p className="text-muted-foreground">
            Profissionais experientes e apaixonados pela arte da barbearia,
            prontos para oferecer o melhor atendimento e resultado.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {barbers.map((barber, index) => (
            <motion.div key={index} variants={itemVariants} className="barber-card">
              <img 
                className="w-full h-96 object-cover rounded-lg"
                alt={`Barbeiro ${barber.name}`}
               src="https://images.unsplash.com/photo-1576610769653-6b0feab53576" />
              
              <div className="barber-card-content">
                <h3 className="text-xl font-bold mb-1">{barber.name}</h3>
                <p className="text-primary font-medium mb-2">{barber.role}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  {barber.experience}
                </p>
                
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(barber.rating)
                            ? "text-primary fill-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm ml-2">{barber.rating}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-1">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-sm">
                  <Instagram size={14} className="mr-1 text-primary" />
                  <span>{barber.instagram}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Barbers;
