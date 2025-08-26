import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import planetImage from "@/assets/imagenhero.jpg";

const HeroSection = () => {
  // Array con los nombres de las imágenes
  const slides = [
    "/src/assets/slider1.jpg",
    "/src/assets/slider2.jpg", 
    "/src/assets/slider3.jpg",
    "/src/assets/slider4.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-gradient-hero min-h-[60vh] py-16 relative overflow-hidden">
      {/* Background Carousel Automático */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-60' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Left side - Main content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Planet Image replacing tagline text */}
            <div className="text-center lg:text-left">
              <div className="mb-6 flex justify-center lg:justify-start">
                <img 
                  src={planetImage} 
                  alt="Un mundo de privilegios a su alcance" 
                  className="h-32 w-auto object-contain"
                />
              </div>
              
              <Button 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-lg font-semibold"
              >
                CONTACTO
              </Button>
            </div>

            {/* Service Cards + Mapa */}
            <div className="grid md:grid-cols-4 gap-6">
              {/* Promoción */}
              <Card className="bg-card-promotion p-6 text-white text-center hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-2">Promoción</h3>
                <p className="text-sm opacity-90">Conoce</p>
              </Card>
              
              {/* Clientes Satisfechos */}
              <Card className="bg-card-promotion p-6 text-black text-center hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-2">Clientes Satisfechos</h3>
              </Card>
              
              {/* Terapeuta */}
              <Card className="bg-card-terapeuta p-6 text-white text-center hover:scale-105 transition-transform">
                <div className="mb-4">
                  <div className="w-8 h-8 bg-white rounded-full mx-auto flex items-center justify-center">
                    <span className="text-card-terapeuta text-2xl">★</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Terapeuta</h3>
                <p className="text-sm opacity-90">
                  Ansiedad, depresión, estrés, insomnio y duelo.
                </p>
              </Card>

              {/* Mapa */}
              <Card className="bg-hero-bg/80 border-accent border-2 p-6 text-white text-center hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-4">¿Dónde Estamos?</h3>
                
                {/* Map Container */}
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
