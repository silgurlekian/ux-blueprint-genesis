
import { Users, Target, TrendingUp, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const UsabilityTesting = () => {
  const testResults = [
    {
      task: "Realizar una transferencia",
      beforeSuccess: 45,
      afterSuccess: 89,
      improvement: 44,
      avgTime: "2:15",
      previousTime: "4:30"
    },
    {
      task: "Consultar movimientos",
      beforeSuccess: 72,
      afterSuccess: 94,
      improvement: 22,
      avgTime: "0:45",
      previousTime: "1:20"
    },
    {
      task: "Pagar una factura",
      beforeSuccess: 38,
      afterSuccess: 85,
      improvement: 47,
      avgTime: "1:50",
      previousTime: "3:15"
    }
  ];

  return (
    <section id="testing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Pruebas de Usabilidad
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Validamos nuestro diseño con usuarios reales para medir la efectividad 
            de las mejoras implementadas y identificar áreas de optimización.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Users className="mr-2 h-5 w-5 text-blue-600" />
                Participantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <p className="text-sm text-slate-600 mb-4">usuarios diversos</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Edad 25-35:</span>
                  <span className="font-medium">8 personas</span>
                </div>
                <div className="flex justify-between">
                  <span>Edad 36-50:</span>
                  <span className="font-medium">10 personas</span>
                </div>
                <div className="flex justify-between">
                  <span>Edad 51-65:</span>
                  <span className="font-medium">6 personas</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Target className="mr-2 h-5 w-5 text-green-600" />
                Tareas Evaluadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <p className="text-sm text-slate-600 mb-4">escenarios de uso</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">Transferencias</Badge>
                <Badge variant="secondary" className="text-xs">Pagos</Badge>
                <Badge variant="secondary" className="text-xs">Consultas</Badge>
                <Badge variant="secondary" className="text-xs">Configuración</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <TrendingUp className="mr-2 h-5 w-5 text-purple-600" />
                Mejora General
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-2">+37%</div>
              <p className="text-sm text-slate-600 mb-4">en satisfacción</p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>SUS Score:</span>
                  <span className="font-medium">78/100</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>NPS:</span>
                  <span className="font-medium">+41</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Resultados por Tarea
          </h3>
          
          {testResults.map((result, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">{result.task}</h4>
                    <div className="flex items-center">
                      {result.improvement > 40 ? (
                        <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      ) : result.improvement > 20 ? (
                        <AlertCircle className="h-4 w-4 text-yellow-600 mr-1" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-600 mr-1" />
                      )}
                      <span className="text-sm text-slate-600">
                        +{result.improvement}% mejora
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 mb-2">Tasa de éxito</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Antes: {result.beforeSuccess}%</span>
                        <span>Después: {result.afterSuccess}%</span>
                      </div>
                      <Progress value={result.afterSuccess} className="h-2" />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 mb-2">Tiempo promedio</p>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{result.avgTime}</div>
                      <div className="text-xs text-slate-500 line-through">{result.previousTime}</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className={`text-2xl font-bold ${
                      result.improvement > 40 ? 'text-green-600' : 
                      result.improvement > 20 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      +{result.improvement}%
                    </div>
                    <p className="text-xs text-slate-500">mejora</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-green-700">Insights Positivos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Navegación Intuitiva</p>
                    <p className="text-xs text-slate-600">94% de usuarios completaron tareas sin ayuda</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Feedback Visual</p>
                    <p className="text-xs text-slate-600">Los usuarios valoraron las confirmaciones claras</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Confianza Mejorada</p>
                    <p className="text-xs text-slate-600">Aumento del 45% en percepción de seguridad</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Accesibilidad</p>
                    <p className="text-xs text-slate-600">Excelente usabilidad en todos los grupos de edad</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50">
            <CardHeader>
              <CardTitle className="text-orange-700">Áreas de Mejora</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Búsqueda de Contactos</p>
                    <p className="text-xs text-slate-600">Algunos usuarios necesitaron más tiempo del esperado</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Historial Detallado</p>
                    <p className="text-xs text-slate-600">Filtros podrían ser más prominentes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Ayuda Contextual</p>
                    <p className="text-xs text-slate-600">Usuarios solicitaron más tooltips explicativos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Onboarding</p>
                    <p className="text-xs text-slate-600">Nuevos usuarios necesitan más orientación inicial</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Impacto del Rediseño</h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Los resultados superaron las expectativas iniciales, demostrando que un enfoque 
              centrado en el usuario puede generar mejoras significativas en todos los KPIs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">-67%</div>
              <p className="text-sm text-slate-300">Llamadas de soporte</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">+89%</div>
              <p className="text-sm text-slate-300">Transacciones completadas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">+37%</div>
              <p className="text-sm text-slate-300">Satisfacción del usuario</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">-58%</div>
              <p className="text-sm text-slate-300">Tiempo por tarea</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
