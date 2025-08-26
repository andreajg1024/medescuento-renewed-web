import { Facebook, Instagram } from "lucide-react";
import medescuentoLogo from "@/assets/logomedescuento.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/medescuentoSas?locale=es_LA", bgColor: "bg-blue-600" },
    { icon: Instagram, href: "https://www.instagram.com/medescuentosas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", bgColor: "bg-black" },
  ];

  return (
    <footer className="bg-[#43d9cb] text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src={medescuentoLogo} 
              alt="MEDescuento Logo" 
              className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="font-bold text-black-900 opacity-80 mb-6 max-w-md">
              Un mundo de privilegios a su alcance. Brindamos servicios de salud 
              con descuentos especiales para tu empresa y familia.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${social.bgColor} text-white p-2 rounded-lg hover:opacity-80 transition-opacity`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ENLACES RÁPIDOS</h3>
            <ul className="space-y-2 font-bold text-black-900 opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">INICIO</a></li>
              <li><a href="Empresa" className="hover:opacity-100 transition-opacity">EMPRESA</a></li>
              <li><a href="Servicios" className="hover:opacity-100 transition-opacity">SERVICIOS</a></li>
              <li><a href="Bienestar" className="hover:opacity-100 transition-opacity">BIENESTAR</a></li>
              <li><a href="Contactanos" className="hover:opacity-100 transition-opacity">CONTÁCTANOS</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black-900 font-semibold mb-4">CONTACTO</h3>
            <div className="font-bold text-black-900 opacity-80 space-y-2">
              <p>Email: medescuentosas@gmail.com</p>
              <p>Teléfono: +57 3225426408</p>
              <p>Horario: Lun - Vie 8:00 AM - 4:15 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; 2025 MEDescuento. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;