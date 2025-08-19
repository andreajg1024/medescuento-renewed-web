import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower2, Sparkles, Music, PartyPopper, Zap } from "lucide-react";

const Bienestar = () => {
  const activities = [
    {
      icon: Flower2,
      title: "Yoga",
      description: "Sesiones de yoga diseñadas para mejorar la flexibilidad, fuerza y bienestar mental. Nuestras clases incluyen diferentes estilos desde Hatha Yoga para principiantes hasta Vinyasa Flow para niveles más avanzados. Cada sesión se enfoca en la conexión mente-cuerpo, promoviendo la relajación y reduciendo el estrés laboral.",
      benefits: ["Reducción del estrés", "Mejora de la flexibilidad", "Fortalecimiento muscular", "Equilibrio mental"]
    },
    {
      icon: Sparkles,
      title: "Aromaterapia",
      description: "Experiencias sensoriales únicas utilizando aceites esenciales naturales para promover la relajación y el bienestar. Nuestras sesiones de aromaterapia combinan técnicas de respiración, meditación guiada y la aplicación terapéutica de fragancias naturales para crear un ambiente de paz y tranquilidad.",
      benefits: ["Relajación profunda", "Mejora del estado de ánimo", "Reducción de la ansiedad", "Estimulación sensorial"]
    },
    {
      icon: Music,
      title: "Rumbaterapia",
      description: "Actividad física divertida que combina baile y ejercicio cardiovascular con ritmos latinos y música energizante. Nuestras sesiones de rumbaterapia son perfectas para liberar tensiones, quemar calorías y disfrutar en grupo, creando un ambiente alegre y motivador para todos los participantes.",
      benefits: ["Ejercicio cardiovascular", "Diversión grupal", "Liberación de tensiones", "Coordinación y ritmo"]
    },
    {
      icon: PartyPopper,
      title: "Hora Loca",
      description: "Momentos de esparcimiento y diversión grupal diseñados para fortalecer los vínculos entre colaboradores y crear un ambiente laboral más ameno. Incluye juegos dinámicos, actividades recreativas y momentos de celebración que fomentan la integración y el compañerismo en el equipo de trabajo.",
      benefits: ["Fortalecimiento de vínculos", "Ambiente laboral positivo", "Diversión grupal", "Integración del equipo"]
    },
    {
      icon: Zap,
      title: "Vida Activa",
      description: "Programa integral que promueve hábitos saludables a través de actividades físicas variadas, educación nutricional y consejos de bienestar. Incluye caminatas grupales, ejercicios funcionales, charlas sobre alimentación saludable y estrategias para mantener un estilo de vida activo y equilibrado.",
      benefits: ["Hábitos saludables", "Actividad física regular", "Educación nutricional", "Estilo de vida equilibrado"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">Bienestar Integral</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Actividades diseñadas para el bienestar físico, mental y emocional
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                  <CardTitle className="flex items-center gap-3 text-2xl text-green-800">
                    <activity.icon className="w-8 h-8" />
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    {activity.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <h4 className="font-semibold text-green-800 mb-3 md:col-span-2">Beneficios:</h4>
                    {activity.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Wellness Section */}
          <Card className="bg-gradient-to-r from-green-100 to-blue-100">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-green-800 mb-6">
                ¿Por qué el Bienestar es Importante?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-3">🧠</div>
                  <h4 className="font-semibold text-green-800 mb-2">Salud Mental</h4>
                  <p className="text-gray-700">Reducción del estrés y mejora del estado de ánimo</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">💪</div>
                  <h4 className="font-semibold text-green-800 mb-2">Salud Física</h4>
                  <p className="text-gray-700">Fortalecimiento del cuerpo y prevención de enfermedades</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="font-semibold text-green-800 mb-2">Integración Social</h4>
                  <p className="text-gray-700">Fortalecimiento de vínculos y trabajo en equipo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-green-100 text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                ¿Quieres implementar estas actividades en tu empresa?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Contáctanos para diseñar un programa de bienestar personalizado
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

export default Bienestar;