import { Facebook, Instagram, Twitter } from "lucide-react";
import medescuentoLogo from "@/assets/medescuento-logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", bgColor: "bg-blue-600" },
    { icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
      </svg>
    ), href: "#", bgColor: "bg-green-500" },
    { icon: Instagram, href: "#", bgColor: "bg-black" },
    { icon: Twitter, href: "#", bgColor: "bg-blue-400" },
  ];

  return (
    <footer className="bg-hero-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src={medescuentoLogo} 
              alt="MEDescuento Logo" 
              className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-sm opacity-80 mb-6 max-w-md">
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
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Inicio</a></li>
              <li><a href="#servicios" className="hover:opacity-100 transition-opacity">Servicios</a></li>
              <li><a href="#blog" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">Sobre Nosotros</a></li>
              <li><a href="#shop" className="hover:opacity-100 transition-opacity">Tienda</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="text-sm opacity-80 space-y-2">
              <p>Email: info@medescuento.com</p>
              <p>Teléfono: +57 (1) 234-5678</p>
              <p>Horario: Lun - Vie 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; 2024 MEDescuento. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;