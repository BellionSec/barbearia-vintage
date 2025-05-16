
import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/20 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-primary-foreground"
                >
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary">
                  VINTAGE<span className="text-foreground">BARBER</span>
                </h2>
                <p className="text-xs text-muted-foreground -mt-1">
                  Estilo & Tradição desde 1995
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Oferecendo serviços de barbearia premium com um toque vintage e
              atendimento personalizado.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="social-icon">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="footer-link">Home</a>
              </li>
              <li>
                <a href="#services" className="footer-link">Serviços</a>
              </li>
              <li>
                <a href="#barbers" className="footer-link">Barbeiros</a>
              </li>
              <li>
                <a href="#subscription" className="footer-link">Assinatura</a>
              </li>
              <li>
                <a href="#about" className="footer-link">Sobre</a>
              </li>
              <li>
                <a href="#faq" className="footer-link">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Contato</a>
              </li>
              <li>
                <a href="#app" className="footer-link">App</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Segunda - Sexta</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Sábado</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Domingo</span>
                <span>10:00 - 16:00</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-primary/10">
              <h3 className="text-lg font-semibold mb-4 text-primary">Métodos de Pagamento</h3>
              <div className="flex space-x-3">
                <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-xs text-primary font-bold">VISA</div>
                <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-xs text-primary font-bold">MC</div>
                <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-xs text-primary font-bold">PIX</div>
                <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-xs text-primary font-bold">$$</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>Av. Daniel de La Touche, 1000, São Luís - MA, 65000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@vintagebarber.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary/10 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Vintage Barber Shop. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
