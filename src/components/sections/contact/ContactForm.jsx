
    import React, { useState } from "react";
    import { Button } from "@/components/ui/button";
    import { Send } from "lucide-react";
    import { useToast } from "@/components/ui/use-toast";

    const ContactForm = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to your backend
        console.log("Form submitted:", formData);
        
        // Show success toast
        toast({
          title: "Agendamento Recebido!",
          description: "Entraremos em contato para confirmar seu horário.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
      };

      return (
        <div>
          <h3 className="text-2xl font-bold mb-6">Agende um Horário</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 contact-input"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 contact-input"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 contact-input"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Serviço Desejado
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 contact-input"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="corte">Corte de Cabelo</option>
                  <option value="barba">Barba</option>
                  <option value="combo">Corte + Barba</option>
                  <option value="tratamento">Tratamento Capilar</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">
                  Data Preferida
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 contact-input"
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-1">
                  Horário Preferido
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 contact-input"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Mensagem (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 contact-input"
              ></textarea>
            </div>
            
            <Button type="submit" className="vintage-button w-full">
              <Send className="w-4 h-4 mr-2" />
              Enviar Agendamento
            </Button>
          </form>
        </div>
      );
    };

    export default ContactForm;
  