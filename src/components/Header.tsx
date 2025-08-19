import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Clock, Phone, Menu, X } from "lucide-react";
import medescuentoLogo from "@/assets/logomedescuento.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "INICIO", href: "/" },
    { label: "EMPRESA", href: "/empresa" },
    { label: "SERVICIOS", href: "/servicios" },
    { label: "BIENESTAR", href: "/bienestar" },
    { label: "CONTÁCTANOS", href: "/contactanos" },
  ];

  return (
    <header className="bg-green-100">
      {/* Top section with logo, contact info, and social icons */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={medescuentoLogo} 
              alt="MEDescuento Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm">
            {/* Email */}
            <div className="flex items-center space-x-2">
              <Mail className="w-6 h-6 text-blue-600 bg-white p-1 rounded" />
              <div>
                <p className="text-gray-700 text-xs">Correo electrónico</p>
                <p className="text-gray-900 font-medium">medescuentosas@gmail.com</p>
              </div>
            </div>
            
            {/* Hours */}
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-blue-600 bg-white p-1 rounded" />
              <div>
                <p className="text-gray-700 text-xs">Horario de atención</p>
                <p className="text-gray-900 font-medium">Lunes a Viernes</p>
                <p className="text-gray-900 text-xs">8:00 AM - 11:30 AM</p>
                <p className="text-gray-900 text-xs">DE 2:30 PM - 4:15 PM</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6 text-blue-600 bg-white p-1 rounded" />
              <div>
                <p className="text-gray-700 text-xs">Contáctanos</p>
                <p className="text-gray-900 font-medium">+57 3225426408</p>
                <p className="text-gray-900 font-medium">+57 3002870540</p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-2">
              <a 
                href="https://www.facebook.com/medescuentoSas?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/medescuentosas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white p-2 rounded hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-green-200 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:justify-center md:space-x-12 py-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="block py-2 px-4 text-gray-800 font-medium hover:bg-green-300 rounded transition-colors text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;