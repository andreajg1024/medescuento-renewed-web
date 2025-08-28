import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Largas esperas? - Jueves de Tips",
      image: "/placeholder.svg",
      description: "Cansado de largas esperas en las salas de urgencias y citas",
      category: "JUEVES DE TIPS",
      bgColor: "bg-secondary",
    },
    {
      id: 2,
      title: "Nuevo Servicio de Endocrinólogo Pediatra",
      image: "/placeholder.svg", 
      description: "Contamos con nuevo servicio de endocrinólogo pediatra",
      category: "SABIAS QUE...",
      bgColor: "bg-hero-bg",
    },
    {
      id: 3,
      title: "Órganos del Sistema Endocrino",
      image: "/placeholder.svg",
      description: "Edgar Fernando Perez - Órganos del Sistema Endocrino",
      category: "JUEVES DE TIPS", 
      bgColor: "bg-gradient-to-br from-secondary to-primary",
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-accent text-white px-8 py-4 rounded-full mb-8">
            <h2 className="text-2xl font-bold">FOTOS</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Mira todo lo nuevo y las proyecciones que tiene MEDescuento
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className={`${post.bgColor} h-48 flex items-center justify-center text-white relative overflow-hidden`}>
                <div className="text-center p-6">
                  <span className="text-sm font-semibold opacity-80 mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold leading-tight">
                    {post.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;