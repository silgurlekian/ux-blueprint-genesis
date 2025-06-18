
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToOverview = () => {
    const element = document.getElementById("overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Rediseño de App
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Bancaria
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Un caso de estudio completo sobre el rediseño de la experiencia móvil bancaria, 
            desde research hasta implementación y testing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="text-sm text-slate-500 bg-white/50 backdrop-blur px-4 py-2 rounded-full">
              Duración: 8 semanas
            </div>
            <div className="text-sm text-slate-500 bg-white/50 backdrop-blur px-4 py-2 rounded-full">
              Equipo: 4 personas
            </div>
            <div className="text-sm text-slate-500 bg-white/50 backdrop-blur px-4 py-2 rounded-full">
              Rol: UX/UI Designer
            </div>
          </div>
          <Button onClick={scrollToOverview} size="lg" className="group">
            Explorar el caso
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-slate-400" />
      </div>
    </section>
  );
};
