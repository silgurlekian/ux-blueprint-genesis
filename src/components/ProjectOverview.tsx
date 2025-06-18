
import { Target, Users, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ProjectOverview = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Resumen del Proyecto
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mejoramos la experiencia de banca móvil para aumentar la satisfacción del usuario 
            y reducir las llamadas al servicio de atención al cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Objetivo</h3>
              <p className="text-sm text-slate-600">
                Simplificar procesos complejos y mejorar la navegación
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Usuarios</h3>
              <p className="text-sm text-slate-600">
                +50,000 usuarios activos mensuales estudiados
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Tiempo</h3>
              <p className="text-sm text-slate-600">
                8 semanas de investigación, diseño y testing
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Resultado</h3>
              <p className="text-sm text-slate-600">
                35% mejora en satisfacción del usuario
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                El Desafío
              </h3>
              <p className="text-slate-600 mb-6">
                Los usuarios reportaban dificultades para completar transacciones básicas, 
                navegación confusa y una interfaz obsoleta que no cumplía con los estándares 
                modernos de experiencia de usuario.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">67% de usuarios abandonaban transacciones</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">+200 llamadas diarias de soporte</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Puntuación NPS de solo 23</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                La Solución
              </h3>
              <p className="text-slate-600 mb-6">
                Rediseñamos completamente la arquitectura de información, simplificamos 
                los flujos de usuario y modernizamos la interfaz siguiendo principios 
                de diseño centrado en el usuario.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Navegación simplificada en 3 niveles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Procesos reducidos en 40%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Interfaz responsive y accesible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
