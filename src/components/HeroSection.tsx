import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const HeroSection = () => {
  // Array con los nombres de las imágenes (para el fondo principal)
  const slides = [
    "/medescuento-renewed-web/Galeria/slider1.png",
    "/medescuento-renewed-web/Galeria/slider2.jpg",
    "/medescuento-renewed-web/Galeria/slider3.jpg",
    "/medescuento-renewed-web/Galeria/slider4.png"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrusel automático de fondo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  // Hook para carrusel interno (cada cuadro)
  const useCarousel = (images, intervalTime = 3000) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, intervalTime);
      return () => clearInterval(interval);
    }, [images, intervalTime]);
    return images[index];
  };

  // Arrays de imágenes para los cuadros
  const promoImages = [
    "/medescuento-renewed-web/Galeria/mascotas1.jpg",
    "/medescuento-renewed-web/Galeria/mascotas2.jpg",
    "/medescuento-renewed-web/Galeria/mascotas3.jpg"
  ];
  const clienteImages = [
    "/medescuento-renewed-web/Galeria/clientes1.jpg",
    "/medescuento-renewed-web/Galeria/clientes2.jpeg",
    "/medescuento-renewed-web/Galeria/clientes3.jpg"
  ];
  const terapeutaImages = [
    "/medescuento-renewed-web/Galeria/Terapeuta1.jpeg",
    "/medescuento-renewed-web/Galeria/Terapeuta2.jpeg",
    "/medescuento-renewed-web/Galeria/Terapeuta3.jpg"
  ];

  // Imagen actual de cada carrusel
  const promoImage = useCarousel(promoImages);
  const clienteImage = useCarousel(clienteImages);
  const terapeutaImage = useCarousel(terapeutaImages);

  return (
    <section className="bg-gradient-hero min-h-[60vh] py-8 md:py-16 relative overflow-hidden">
      {/* Background Carousel Automático */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-60" : "opacity-0"
            }`}
            style={{ 
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'scroll'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Main content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Logo */}
            <div className="text-center lg:text-left">
              <div className="mb-6 flex justify-center lg:justify-start">
                <img
                  src="/medescuento-renewed-web/Galeria/imagenhero.png"   // ✅ logo desde public
                  alt="Un mundo de privilegios a su alcance"
                  className="h-32 w-auto object-contain"
                />
              </div>

              <a
                href="https://wa.me/573225426408?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-lg font-semibold">
                  CONTACTO
                </Button>
              </a>
            </div>

            {/* Service Cards + Mapa */}
            <div className="grid md:grid-cols-4 gap-4 md:gap-6">
              {/* Promoción */}
              <Card className="p-2 md:p-3 text-black text-center hover:scale-105 transition-transform relative overflow-hidden h-40 md:h-56">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{ backgroundImage: `url(${promoImage})` }}
                ></div>
                <div className="relative z-10 bg-pink-500/60 p-2 md:p-4 rounded-lg flex flex-col justify-start md:justify-center h-full">
                  <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Nuestras Mascotas</h3>
                  <p className="text-xs md:text-sm"></p>
                </div>
              </Card>

              {/* Clientes Satisfechos */}
              <Card className="p-2 md:p-3 text-black text-center hover:scale-105 transition-transform relative overflow-hidden h-40 md:h-56">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{ backgroundImage: `url(${clienteImage})` }}
                ></div>
                <div className="relative z-10 bg-green-500/50 p-2 md:p-4 rounded-lg flex flex-col justify-start md:justify-center h-full">
                  <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">
                    Clientes Satisfechos
                  </h3>
                </div>
              </Card>

              {/* Terapeuta */}
              <Card className="p-2 md:p-3 text-black text-center hover:scale-105 transition-transform relative overflow-hidden h-40 md:h-56">
                <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{ backgroundImage: `url(${terapeutaImage})` }}
                ></div>
                <div className="relative z-10 bg-blue-500/40 p-2 md:p-4 rounded-lg flex flex-col justify-start md:justify-center h-full">
                <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Terapias Holísticas</h3>
                <p className="text-xs md:text-sm">
                  Ansiedad, depresión, estrés, insomnio y duelo.
                  </p>
                  </div>
                  </Card>

              {/* Mapa */}
              <Card className="bg-hero-bg/80 border-accent border-2 p-6 text-black text-center hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-4">Nuestra Ubicación</h3>
                <div className="h-32 mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.1942622415304!2d-75.65653328939742!3d4.559058242849977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f5f16926682d%3A0xa603f0d7104df83f!2sMEDescuento!5e0!3m2!1ses!2sco!4v1755476797875!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="opacity-90">Búscanos en la sección Contacto</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
