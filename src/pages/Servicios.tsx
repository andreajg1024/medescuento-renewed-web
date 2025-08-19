import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, GraduationCap, Activity, Building } from "lucide-react";

const Servicios = () => {
  const services = [
    {
      icon: Shield,
      title: "Plan Exequial",
      description: "Brindamos tranquilidad a las familias con nuestro plan exequial completo. Incluye servicios funerarios de calidad, acompañamiento integral y gestión administrativa en momentos difíciles. Nuestro compromiso es ofrecer dignidad y respeto en los momentos más importantes, con cobertura amplia y atención personalizada las 24 horas.",
      features: ["Servicios funerarios completos", "Acompañamiento familiar", "Gestión administrativa", "Atención 24/7"]
    },
    {
      icon: Heart,
      title: "Plan Complementario de Salud", 
      description: "MEDescuento SAS, somos una empresa QUINDIANA que llega con su PLAN COMPLEMENTARIO DE SALUD, a mitigar el impacto que se genera en las personas, por el déficit de la prestación del servicio del sector de salud Colombiano. Ofreciendo la venta de una membrecía por (1) un año, para (8) integrantes: (1) TITULAR y (7) BENEFICIARIOS más, incluido su MASCOTA donde obtendrán los siguientes beneficios.",
      features: ["Descuentos en consultas especializadas", "Red amplia de profesionales", "Atención para mascotas", "Agendamiento rápido"]
    },
    {
      icon: GraduationCap,
      title: "Capacitación con Énfasis en Coaching",
      description: "Programas de capacitación empresarial diseñados para potenciar el talento humano y el liderazgo organizacional. Nuestros expertos en coaching ofrecen herramientas prácticas para el desarrollo personal y profesional, mejorando la productividad y el clima laboral en tu empresa.",
      features: ["Desarrollo de liderazgo", "Coaching personalizado", "Programas empresariales", "Herramientas prácticas"]
    },
    {
      icon: Activity,
      title: "Pausas Activas Físicas y Mentales",
      description: "Implementamos programas de bienestar laboral con pausas activas que incluyen ejercicios físicos, técnicas de relajación y actividades mentales. Ayudamos a reducir el estrés, prevenir lesiones ocupacionales y mejorar la productividad y satisfacción de los colaboradores.",
      features: ["Ejercicios físicos", "Técnicas de relajación", "Prevención de lesiones", "Mejora del clima laboral"]
    },
    {
      icon: Building,
      title: "Consultoría Empresarial",
      description: "Ofrecemos servicios de consultoría especializados para optimizar los procesos organizacionales y el bienestar corporativo. Analizamos las necesidades específicas de cada empresa para implementar soluciones personalizadas que fortalezcan la responsabilidad social y la gestión del talento humano.",
      features: ["Análisis organizacional", "Soluciones personalizadas", "Responsabilidad social", "Gestión del talento"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">Nuestros Servicios</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales para el bienestar de personas y empresas
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-3 text-2xl text-green-800">
                    <service.icon className="w-8 h-8" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    {service.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-green-100 text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                ¿Interesado en nuestros servicios?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Contáctanos para obtener más información y descubrir cómo podemos ayudarte
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:medescuentosas@gmail.com"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Enviar Correo
                </a>
                <a 
                  href="https://wa.me/573002870540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;