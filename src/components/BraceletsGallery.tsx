const braceletImages = [
  { src: "/imagem1.jpg", alt: "Pulseira hospitalar Etiplus" },
  { src: "/imagem2.png", alt: "Pulseira hospitalar Etiplus" },
  { src: "/imagem3.jpg", alt: "Pulseira hospitalar Etiplus" },
  { src: "/imagem4.png", alt: "Pulseira hospitalar Etiplus" },
  { src: "/imagem5.jpg", alt: "Pulseira hospitalar Etiplus" },
];

const BraceletsGallery = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          Nossos Produtos
        </h2>
        
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
          Estas são algumas das pulseiras fabricadas pela empresa. Oferecemos uma ampla variedade de pulseiras hospitalares, incluindo térmicas, coloridas e personalizadas, todas com qualidade garantida e preços competitivos.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {braceletImages.map((image, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BraceletsGallery;
