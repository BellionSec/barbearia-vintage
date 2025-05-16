
    import React from "react";
    import { motion } from "framer-motion";
    import ContactInfo from "@/components/sections/contact/ContactInfo";
    import ContactForm from "@/components/sections/contact/ContactForm";

    const Contact = () => {
      return (
        <section id="contact" className="section-padding bg-card relative">
          <div className="absolute inset-0 opacity-10 vintage-pattern"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
                Contato
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Agende Seu <span className="text-primary">Horário</span>
              </h2>
              <p className="text-muted-foreground">
                Entre em contato conosco para agendar um horário ou tirar dúvidas
                sobre nossos serviços.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ContactInfo />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default Contact;
  