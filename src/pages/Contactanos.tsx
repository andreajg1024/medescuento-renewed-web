import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Clock, MessageSquare, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contactanos = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:medescuentosas@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">CONTÁCTANOS</h1>
            <p className="text-xl text-black-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-3 font-bold text-green-800">
                  <Mail className="w-12 h-12 text-blue-600" />
                  CORREO ELECTRÓNICO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium font-bold text-black-800 mb-4">
                  medescuentosas@gmail.com
                </p>
                <a 
                  href="mailto:medescuentosas@gmail.com"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  ENVIAR CORREO
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-3 font-bold text-green-800">
                  <Clock className="w-12 h-12 text-red-600" />
                  HORARIO DE ATENCIÓN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-bold text-black-700">
                  <p className="font-bold">LUNES A VIERNES</p>
                  <p>8:00 AM - 11:30 AM</p>
                  <p>2:00 PM - 4:15 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-3 font-bold text-green-800">
                  <MessageSquare className="w-12 h-12 text-blue-600" />
                  WHATSAPP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-black-800 mb-4">
                  +57 300 287 0540
                </p>
                <a 
                  href="https://wa.me/573002870540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Abrir WhatsApp
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-800">
                  ENVÍANOS UN MENSAJE AL CORREO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-black-700 mb-2">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      className="border-blue-500 border-2 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-black-700 mb-2">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@correo.com"
                      className="border-blue-500 border-2 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-black-700 mb-2">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="¿En qué podemos ayudarte?"
                      className="border-blue-500 border-2 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-black-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      className="border-blue-500 border-2 focus:border-blue-600"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-bold text-green-800">
                    <Phone className="w-6 h-6" />
                    TELÉFONOS DE CONTACTO
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="font-bold text-lg">+57 322 5426408</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="font-bold text-lg">+57 300 2870540</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-bold text-green-800">
                    <MapPin className="w-6 h-6" />
                    UBICACIÓN
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-black-700 mb-4">
                    Nos encontramos ubicados en el departamento del Quindío, Colombia.
                  </p>
                  <p className="font-bold text-sm text-black-600">
                    Calle 22 Norte # 11-80 Barrio Coinca Armenia, Quindio.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold font-bold text-green-800 mb-3">
                    RESPUESTA RÁPIDA GARANTIZADA
                  </h3>
                  <p className="font-bold text-black-700 text-sm">
                    Nos comprometemos a responder todos los mensajes dentro de nuestro horario de atención. 
                    Para consultas urgentes, recomendamos contactarnos vía WhatsApp.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contactanos;