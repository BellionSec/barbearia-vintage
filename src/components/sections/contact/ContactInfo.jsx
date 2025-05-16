
    import React from "react";
    import { MapPin, Phone, Mail, Clock } from "lucide-react";

    const ContactInfo = () => {
      return (
        <div>
          <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Endereço</h4>
                <p className="text-muted-foreground">
                 Av. Daniel de La Touche, 1000, São Luís - MA, 65000
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Telefone</h4>
                <p className="text-muted-foreground">(11) 99999-9999</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-muted-foreground">contato@vintagebarber.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Horário de Funcionamento</h4>
                <p className="text-muted-foreground">
                  Segunda - Sexta: 9:00 - 20:00
                  <br />
                  Sábado: 9:00 - 18:00
                  <br />
                  Domingo: 10:00 - 16:00
                </p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden h-64 border border-primary/20">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.65627,-23.56548,-46.65327,-23.56248&amp;layer=mapnik"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      );
    };

    export default ContactInfo;
  