import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-[60vh] py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tagline */}
            <div className="text-center lg:text-left">
              <p className="text-primary text-xl font-semibold italic mb-6">
                Un mundo de privilegios a su alcance
              </p>
              
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

          {/* Right side - Location card */}
          <div className="lg:col-span-1">
            <Card className="bg-hero-bg/80 border-accent border-2 p-6 text-white text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-4">¿Dónde Estámos?</h3>
              <p className="mb-6 opacity-90">
                Búscanos en la sección Contacto
              </p>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-hero-bg rounded-full px-6"
              >
                Haz clic aquí
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;