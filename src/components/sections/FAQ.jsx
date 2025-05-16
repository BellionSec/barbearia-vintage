
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Preciso agendar horário ou posso ir sem marcar?",
    answer:
      "Recomendamos o agendamento prévio para garantir atendimento no horário desejado. Aceitamos clientes sem agendamento, mas o atendimento dependerá da disponibilidade dos barbeiros no momento.",
  },
  {
    question: "Quanto tempo dura um corte de cabelo?",
    answer:
      "Um corte de cabelo padrão leva aproximadamente 45 minutos. Serviços combinados como corte + barba podem levar de 75 a 90 minutos. Tratamentos especiais podem exigir mais tempo.",
  },
  {
    question: "Como funciona o plano de assinatura?",
    answer:
      "Nossos planos de assinatura oferecem serviços mensais por um valor fixo. Você escolhe o plano que melhor atende suas necessidades, faz o pagamento mensal e pode utilizar os serviços incluídos quando desejar, mediante agendamento.",
  },
  {
    question: "Vocês atendem crianças?",
    answer:
      "Sim, atendemos crianças a partir de 5 anos de idade. Temos barbeiros especializados em cortes infantis e um ambiente acolhedor para os pequenos.",
  },
  {
    question: "Quais métodos de pagamento são aceitos?",
    answer:
      "Aceitamos pagamentos em dinheiro, cartões de crédito e débito, PIX e transferências bancárias. Os planos de assinatura podem ser pagos via cartão de crédito recorrente ou boleto bancário.",
  },
  {
    question: "Posso cancelar ou remarcar meu agendamento?",
    answer:
      "Sim, você pode cancelar ou remarcar seu agendamento com até 2 horas de antecedência sem custo adicional. Cancelamentos com menos de 2 horas podem estar sujeitos a uma taxa.",
  },
  {
    question: "Vocês vendem produtos para barba e cabelo?",
    answer:
      "Sim, temos uma linha completa de produtos para barba, cabelo e cuidados masculinos. Nossos barbeiros podem recomendar os produtos mais adequados para seu tipo de cabelo e barba.",
  },
  {
    question: "Como funciona o aplicativo da barbearia?",
    answer:
      "Nosso aplicativo permite agendar serviços, acompanhar seus agendamentos, gerenciar sua assinatura, acumular pontos de fidelidade e receber ofertas exclusivas. Está disponível para iOS e Android gratuitamente.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background relative">
      <div className="absolute inset-0 opacity-5 vintage-pattern"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dúvidas <span className="text-primary">Comuns</span>
          </h2>
          <p className="text-muted-foreground">
            Encontre respostas para as perguntas mais frequentes sobre nossos
            serviços, agendamentos e políticas.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="faq-item">
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procurava? Entre em contato conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+551199999999"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-muted hover:bg-muted/80 text-foreground"
            >
              (11) 99999-9999
            </a>
            <a
              href="mailto:contato@vintagebarber.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-muted hover:bg-muted/80 text-foreground"
            >
              contato@vintagebarber.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
