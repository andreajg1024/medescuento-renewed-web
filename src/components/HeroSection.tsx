import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin } from "lucide-react";
import Map from "./Map";
import planetImage from "@/assets/planet-medescuento.jpg";
import slide1 from "@/assets/slide-1-healthcare.jpg";
import slide2 from "@/assets/slide-2-promotions.jpg";
import slide3 from "@/assets/slide-3-coomeva.jpg";
import slide4 from "@/assets/slide-4-therapy.jpg";

const HeroSection = () => {
  const slides = [slide1, slide2, slide3, slide4];

  return (
    <section className="bg-gradient-hero min-h-[60vh] py-16 relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full" opts={{ loop: true, align: "start" }}>
          <CarouselContent className="h-full">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
                  style={{ backgroundImage: `url(${slide})` }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
        </Carousel>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Main content */}
          <div className="lg:col-span-2 space-y-8">
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

            {/* Service Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card-promotion p-6 text-white text-center hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-2">Promoción</h3>
                <p className="text-sm opacity-90">Conoce</p>
              </Card>
              
              <Card className="bg-card-promotion p-6 text-black text-center hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-2">Coomeva</h3>
              </Card>
              
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
            </div>
          </div>

          {/* Right side - Location card with Map */}
          <div className="lg:col-span-1">
            <Card className="bg-hero-bg/80 border-accent border-2 p-6 text-white">
              <div className="text-center mb-4">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-4">¿Dónde Estámos?</h3>
              </div>
              
              {/* Map Container */}
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <Map />
              </div>
              
              <div className="text-center">
                <p className="mb-6 opacity-90">
                  Búscanos en la sección Contacto
                </p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-hero-bg rounded-full px-6"
                >
                  Haz clic aquí
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;