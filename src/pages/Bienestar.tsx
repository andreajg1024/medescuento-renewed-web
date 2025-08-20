import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower2, Sparkles, Music, PartyPopper, Zap } from "lucide-react";

const Bienestar = () => {
  const activities = [
    {
      icon: Flower2,
      title: "Yoga",
      description: "El yoga es una práctica milenaria que combina posturas físicas, técnicas de respiración y meditación para fortalecer el cuerpo, relajar la mente y alcanzar el bienestar integral. Es ideal para reducir el estrés, mejorar la flexibilidad y encontrar equilibrio entre cuerpo y espíritu.",
      benefits: ["Reducción del estrés", "Mejora de la flexibilidad", "Fortalecimiento muscular", "Equilibrio mental"]
    },
    {
      icon: Sparkles,
      title: "Aromaterapia",
      description: "La aromaterapia utiliza aceites esenciales naturales para estimular los sentidos, generar relajación y mejorar la salud física y emocional. A través de aromas, masajes o difusores, esta terapia holística ayuda a disminuir la ansiedad, el insomnio y la tensión diaria.",
      benefits: ["Relajación profunda", "Mejora del estado de ánimo", "Reducción de la ansiedad", "Estimulación sensorial"]
    },
    {
      icon: Music,
      title: "Rumbaterapia",
      description: "La rumbaterapia es una divertida actividad física que combina baile y ejercicio aeróbico al ritmo de la música latina. Más que un entrenamiento, es una fiesta llena de energía que ayuda a quemar calorías, mejorar la coordinación y liberar el estrés con alegría.",
      benefits: ["Ejercicio cardiovascular", "Diversión grupal", "Liberación de tensiones", "Coordinación y ritmo"]
    },
    {
      icon: PartyPopper,
      title: "Hora Loca",
      description: "La hora loca es una animación llena de música, baile y color que convierte cualquier celebración en un momento inolvidable. Con disfraces, coreografías y mucha diversión, es la mejor forma de romper la rutina y encender la alegría en eventos sociales y corporativos.",
      benefits: ["Fortalecimiento de vínculos", "Ambiente laboral positivo", "Diversión grupal", "Integración del equipo"]
    },
    {
      icon: Zap,
      title: "Vida Activa",
      description: "Llevar una vida activa significa incorporar movimiento y hábitos saludables en la rutina diaria para mantener el cuerpo fuerte y la mente en equilibrio. Con actividades como caminar, bailar, ejercitarse o practicar deportes, se promueve la energía, la salud y la felicidad a largo plazo.",
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