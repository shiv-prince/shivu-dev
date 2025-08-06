
const GridPathWithMotion: React.FC = () => {
 

  return (
    <div className="min-h-screen w-full absolute top-0 left-0 z-0">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(86.9% 0.002 56.366) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(86.9% 0.002 56.366) 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

     
      {/* Motion SVG overlay */}
     
    </div>
  );
};

export default GridPathWithMotion;
