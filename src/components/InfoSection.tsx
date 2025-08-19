import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ShoppingCart, HelpCircle } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 hover:shadow-lg transition-shadow bg-background">
            <div className="mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Blogs</h3>
              <p className="text-muted-foreground">
                Mira todo lo nuevo y las proyecciones que tiene <strong>MEDescuento</strong>.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow bg-background">
            <div className="mb-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tienda</h3>
              <p className="text-muted-foreground">
                Podrás comprar todos nuestros servicios, suscripciones, productos y afiliaciones.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow bg-background">
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ayuda y Soporte</h3>
              <p className="text-muted-foreground">
                Busca ayuda o contacta con servicio al cliente para tus inquietudes y más información.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;