
import { Smartphone, Star, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const BenchmarkPhase = () => {
  const competitors = [
    {
      name: "BBVA App",
      score: 4.2,
      strengths: ["Navegación intuitiva", "Diseño moderno", "Gestión PFM"],
      weaknesses: ["Lentitud en carga", "Funciones ocultas"],
      color: "blue"
    },
    {
      name: "CaixaBank",
      score: 4.0,
      strengths: ["Amplia funcionalidad", "Seguridad robusta"],
      weaknesses: ["Interfaz saturada", "Curva de aprendizaje"],
      color: "green"
    },
    {
      name: "Revolut",
      score: 4.5,
      strengths: ["UX excepcional", "Innovación", "Velocidad"],
      weaknesses: ["Funciones limitadas", "Soporte al cliente"],
      color: "purple"
    }
  ];

  return (
    <section id="benchmark" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Análisis Competitivo
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estudiamos las mejores prácticas del mercado para identificar oportunidades 
            de diferenciación y estándares de la industria.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {competitors.map((competitor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Smartphone className={`mr-2 h-5 w-5 text-${competitor.color}-600`} />
                    {competitor.name}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{competitor.score}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-green-700 mb-2">Fortalezas</h5>
                    <div className="space-y-1">
                      {competitor.strengths.map((strength, i) => (
                        <Badge key={i} variant="secondary" className="mr-1 mb-1 text-xs">
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">Debilidades</h5>
                    <div className="space-y-1">
                      {competitor.weaknesses.map((weakness, i) => (
                        <Badge key={i} variant="outline" className="mr-1 mb-1 text-xs">
                          {weakness}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <TrendingUp className="mr-2 h-5 w-5" />
                Tendencias del Mercado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-slate-900">Diseño Minimalista</h6>
                    <p className="text-sm text-slate-600">Interfaces limpias con jerarquía visual clara</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-slate-900">Personalización</h6>
                    <p className="text-sm text-slate-600">Dashboards adaptables a necesidades del usuario</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-slate-900">Micro-interacciones</h6>
                    <p className="text-sm text-slate-600">Feedback visual inmediato en todas las acciones</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-slate-900">Accesibilidad</h6>
                    <p className="text-sm text-slate-600">Cumplimiento WCAG 2.1 AA como estándar</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Shield className="mr-2 h-5 w-5" />
                Oportunidades Identificadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-slate-900">Navegación Simplificada</h6>
                    <p className="text-sm text-slate-600">Competidores tienen demasiados niveles de navegación</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-slate-900">Onboarding Mejorado</h6>
                    <p className="text-sm text-slate-600">Procesos de alta complejos en todas las apps</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-slate-900">Gestión de Favoritos</h6>
                    <p className="text-sm text-slate-600">Funcionalidad poco desarrollada en el mercado</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-slate-900">Transparencia</h6>
                    <p className="text-sm text-slate-600">Información de comisiones poco clara</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Conclusiones Clave del Benchmark</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-blue-300">Funcionalidad</h4>
              <p className="text-sm text-slate-300">
                Todas las apps ofrecen funciones similares, pero la diferenciación 
                está en la simplicidad y velocidad de ejecución.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-green-300">Diseño</h4>
              <p className="text-sm text-slate-300">
                Tendencia hacia interfaces minimalistas, pero muchas sacrifican 
                funcionalidad por simplicidad visual.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-purple-300">Seguridad</h4>
              <p className="text-sm text-slate-300">
                Todas priorizan seguridad, pero los procesos de autenticación 
                pueden ser más fluidos sin comprometer la protección.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
