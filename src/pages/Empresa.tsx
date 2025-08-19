import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Target, Eye, Lightbulb, Heart, Handshake } from "lucide-react";

const Empresa = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">Nuestra Empresa</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              12 años transformando el sistema de salud en el Quindío
            </p>
          </div>

          {/* Descripción */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-green-800">
                <Building2 className="w-8 h-8" />
                Descripción
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              <p>
                MEDescuento S.A.S. es una empresa quindiana que nació hace doce (12) años a partir de la iniciativa de un estudiante universitario que identificó un déficit significativo en el sistema de salud colombiano. Su propósito fue mejorar esta situación mediante alianzas con profesionales particulares de la salud, buscando ahorrar tiempo y dinero a personas y empresas, brindando bienestar integral a usuarios, sus familias y mascotas.
              </p>
              <p className="mt-4">
                Actualmente, cuenta con una amplia red de especialistas en diferentes áreas de la salud y alianzas estratégicas con el sector empresarial. Esto le ha permitido consolidarse como una empresa líder a nivel departamental, destacándose por ofrecer acceso a servicios especializados con tarifas preferenciales y una atención de calidad, con agendamiento ágil y oportuno.
              </p>
            </CardContent>
          </Card>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-green-800">
                  <Target className="w-6 h-6" />
                  Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  Brindar a las personas y organizaciones un plan complementario de salud con privilegios y descuentos: médicos y exequiales, al igual que capacitaciones y charlas empresariales que fortalezcan el bienestar y la responsabilidad social.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-green-800">
                  <Eye className="w-6 h-6" />
                  Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  En el 2030 seremos en el departamento del Quindío la empresa líder en marketing de planes complementarios de salud y exequiales con proyección nacional e internacional, destacada gestión y alto desarrollo tecnológico.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Principios y Valores */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-green-800">
                  <Lightbulb className="w-6 h-6" />
                  Principios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Transparencia
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Cumplimiento
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Puntualidad
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Trabajo en equipo
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-green-800">
                  <Heart className="w-6 h-6" />
                  Valores Corporativos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Vocación por el servicio
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Confianza
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Constancia
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Honestidad
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Credibilidad
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Eficacia
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Promesa de Valor */}
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-green-800 justify-center">
                <Handshake className="w-8 h-8" />
                Promesa de Valor
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-semibold text-green-700">
                "Aportando a un mundo saludable"
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Empresa;