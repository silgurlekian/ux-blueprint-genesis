
import { MessageCircle, Users, BarChart3, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ResearchPhase = () => {
  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Fase de Research
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Investigación profunda para entender las necesidades reales de los usuarios 
            y los puntos de dolor en la experiencia actual.
          </p>
        </div>

        <Tabs defaultValue="interviews" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="interviews">Entrevistas</TabsTrigger>
            <TabsTrigger value="personas">Personas</TabsTrigger>
            <TabsTrigger value="journey">Journey Map</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="interviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5 text-blue-600" />
                  Entrevistas con Usuarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Metodología</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 15 entrevistas semi-estructuradas de 45 minutos</li>
                      <li>• Usuarios entre 25-65 años, diferentes niveles tecnológicos</li>
                      <li>• Observación de uso en tiempo real</li>
                      <li>• Grabación y análisis de patrones</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Hallazgos Clave</h4>
                    <div className="space-y-3">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-800">"No encuentro fácilmente mis transferencias recientes"</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-800">"El proceso para pagar servicios es muy confuso"</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-800">"No confío en hacer transferencias grandes por móvil"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="personas" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-green-600" />
                    María González - Usuario Frecuente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-500">Edad: 34 años | Ocupación: Arquitecta</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900">Objetivos</h5>
                      <ul className="text-sm text-slate-600 mt-1">
                        <li>• Gestionar finanzas de forma rápida</li>
                        <li>• Tener control total de gastos</li>
                        <li>• Realizar transferencias seguras</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900">Frustraciones</h5>
                      <ul className="text-sm text-slate-600 mt-1">
                        <li>• Navegación lenta y confusa</li>
                        <li>• Falta de feedback en transacciones</li>
                        <li>• Dificultad para encontrar historial</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-blue-600" />
                    Roberto Martín - Usuario Ocasional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-500">Edad: 58 años | Ocupación: Profesor</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900">Objetivos</h5>
                      <ul className="text-sm text-slate-600 mt-1">
                        <li>• Consultar saldo y movimientos</li>
                        <li>• Pagar facturas básicas</li>
                        <li>• Sentirse seguro al usar la app</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900">Frustraciones</h5>
                      <ul className="text-sm text-slate-600 mt-1">
                        <li>• Interfaz muy compleja</li>
                        <li>• Terminología técnica confusa</li>
                        <li>• Temor a cometer errores</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="journey" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-purple-600" />
                  Customer Journey Map - Transferencia de Dinero
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <div className="min-w-full">
                    <div className="grid grid-cols-5 gap-4 mb-6">
                      <div className="text-center">
                        <div className="bg-blue-100 p-4 rounded-lg mb-2">
                          <h5 className="font-medium text-blue-900">Acceso</h5>
                        </div>
                        <p className="text-sm text-slate-600">Usuario abre la app</p>
                        <div className="mt-2 text-xs text-red-600">😟 Carga lenta</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-orange-100 p-4 rounded-lg mb-2">
                          <h5 className="font-medium text-orange-900">Navegación</h5>
                        </div>
                        <p className="text-sm text-slate-600">Busca opción de transferencia</p>
                        <div className="mt-2 text-xs text-red-600">😫 Difícil de encontrar</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-red-100 p-4 rounded-lg mb-2">
                          <h5 className="font-medium text-red-900">Formulario</h5>
                        </div>
                        <p className="text-sm text-slate-600">Completa datos</p>
                        <div className="mt-2 text-xs text-red-600">😤 Muchos campos</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-yellow-100 p-4 rounded-lg mb-2">
                          <h5 className="font-medium text-yellow-900">Confirmación</h5>
                        </div>
                        <p className="text-sm text-slate-600">Verifica datos</p>
                        <div className="mt-2 text-xs text-orange-600">😐 Información confusa</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-green-100 p-4 rounded-lg mb-2">
                          <h5 className="font-medium text-green-900">Resultado</h5>
                        </div>
                        <p className="text-sm text-slate-600">Transferencia completada</p>
                        <div className="mt-2 text-xs text-green-600">😊 Éxito</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Heart className="mr-2 h-5 w-5" />
                    Dolor Principal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Los usuarios abandonan procesos por navegación compleja y falta de claridad.
                  </p>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-sm font-medium text-red-800">67% de abandono</p>
                    <p className="text-xs text-red-600">en transferencias</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Oportunidad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Simplificar la arquitectura de información y mejorar el feedback visual.
                  </p>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="text-sm font-medium text-orange-800">+40% eficiencia</p>
                    <p className="text-xs text-orange-600">potencial mejora</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <Users className="mr-2 h-5 w-5" />
                    Fortaleza
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Alta confianza en la seguridad del banco y lealtad de usuarios existentes.
                  </p>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm font-medium text-green-800">89% confianza</p>
                    <p className="text-xs text-green-600">en seguridad</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
