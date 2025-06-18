
import { Layout, Smartphone, Monitor, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const WireframePhase = () => {
  return (
    <section id="wireframes" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Wireframes y Prototipado
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            De conceptos a soluciones tangibles: exploramos diferentes alternativas 
            y validamos ideas a través de prototipos iterativos.
          </p>
        </div>

        <Tabs defaultValue="lowfi" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="lowfi">Low-Fi</TabsTrigger>
            <TabsTrigger value="hifi">Hi-Fi</TabsTrigger>
            <TabsTrigger value="prototype">Prototipo</TabsTrigger>
            <TabsTrigger value="design-system">Sistema</TabsTrigger>
          </TabsList>

          <TabsContent value="lowfi" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layout className="mr-2 h-5 w-5 text-slate-600" />
                  Wireframes de Baja Fidelidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                    <div className="bg-slate-200 h-8 w-full mb-4 rounded"></div>
                    <div className="bg-slate-100 h-4 w-3/4 mx-auto mb-2 rounded"></div>
                    <div className="bg-slate-100 h-4 w-1/2 mx-auto mb-4 rounded"></div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-slate-200 h-16 rounded"></div>
                      <div className="bg-slate-200 h-16 rounded"></div>
                    </div>
                    <div className="bg-slate-300 h-8 w-full rounded"></div>
                    <p className="text-xs text-slate-500 mt-2">Home - Dashboard</p>
                  </div>
                  
                  <div className="bg-white border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                    <div className="bg-slate-200 h-8 w-full mb-4 rounded"></div>
                    <div className="bg-slate-100 h-4 w-2/3 mx-auto mb-4 rounded"></div>
                    <div className="space-y-2 mb-4">
                      <div className="bg-slate-200 h-8 w-full rounded"></div>
                      <div className="bg-slate-200 h-8 w-full rounded"></div>
                      <div className="bg-slate-200 h-8 w-full rounded"></div>
                    </div>
                    <div className="bg-blue-200 h-10 w-full rounded"></div>
                    <p className="text-xs text-slate-500 mt-2">Transferencia</p>
                  </div>
                  
                  <div className="bg-white border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                    <div className="bg-slate-200 h-8 w-full mb-4 rounded"></div>
                    <div className="bg-green-100 h-12 w-full mb-4 rounded flex items-center justify-center">
                      <div className="bg-green-300 h-6 w-6 rounded-full"></div>
                    </div>
                    <div className="bg-slate-100 h-4 w-full mb-2 rounded"></div>
                    <div className="bg-slate-100 h-4 w-3/4 mx-auto mb-4 rounded"></div>
                    <div className="bg-slate-300 h-8 w-full rounded"></div>
                    <p className="text-xs text-slate-500 mt-2">Confirmación</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Principios de Diseño Aplicados</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">Jerarquía Visual</h5>
                      <p className="text-sm text-slate-600">
                        Información más importante en la parte superior, 
                        acciones secundarias en niveles inferiores.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">Flujo Natural</h5>
                      <p className="text-sm text-slate-600">
                        Navegación intuitiva siguiendo patrones mentales 
                        de los usuarios para operaciones bancarias.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hifi" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2 h-5 w-5 text-blue-600" />
                  Wireframes de Alta Fidelidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg p-1">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="font-bold text-blue-700">MiBanco</div>
                        <div className="text-xs text-slate-500">9:41 AM</div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg mb-4">
                        <p className="text-sm opacity-90">Saldo disponible</p>
                        <p className="text-2xl font-bold">€2,847.32</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-slate-50 p-3 rounded-lg text-center">
                          <div className="text-blue-600 mb-1">💸</div>
                          <p className="text-xs font-medium">Transferir</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg text-center">
                          <div className="text-green-600 mb-1">💳</div>
                          <p className="text-xs font-medium">Pagar</p>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500">Movimientos recientes</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg p-1">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <div className="text-blue-600 mr-2">←</div>
                        <div className="font-medium">Nueva transferencia</div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-slate-600 mb-1">Destinatario</p>
                          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                            <p className="text-sm">Juan Pérez</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-slate-600 mb-1">Cantidad</p>
                          <div className="border border-slate-200 rounded-lg p-3">
                            <p className="text-lg font-medium">€150.00</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-slate-600 mb-1">Concepto</p>
                          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                            <p className="text-sm text-slate-400">Opcional</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-600 text-white text-center py-3 rounded-lg mt-4">
                        <p className="text-sm font-medium">Continuar</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg p-1">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-center mb-4">
                        <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                          <div className="text-green-600">✓</div>
                        </div>
                        <p className="font-medium text-green-700">¡Transferencia exitosa!</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg mb-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Para:</span>
                            <span className="font-medium">Juan Pérez</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Cantidad:</span>
                            <span className="font-medium">€150.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Fecha:</span>
                            <span className="font-medium">Hoy, 14:32</span>
                          </div>
                        </div>
                      </div>
                      <div className="border border-blue-200 text-blue-600 text-center py-3 rounded-lg">
                        <p className="text-sm font-medium">Ir al inicio</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prototype" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-purple-600" />
                  Prototipo Interactivo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Funcionalidades Implementadas</h4>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-sm">Navegación completa entre pantallas</span>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-sm">Animaciones de transición</span>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-sm">Validación de formularios en tiempo real</span>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-sm">Estados de carga y feedback</span>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-sm">Gestos touch nativos</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Herramientas Utilizadas</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="bg-purple-100 p-2 rounded-lg mr-3">
                          <Monitor className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Figma</p>
                          <p className="text-xs text-slate-600">Diseño y prototipado</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <Smartphone className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Principle</p>
                          <p className="text-xs text-slate-600">Animaciones avanzadas</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-lg mr-3">
                          <Zap className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">InVision</p>
                          <p className="text-xs text-slate-600">Testing colaborativo</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-medium text-blue-900 mb-2">Métricas del Prototipo</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-blue-700">Pantallas:</span>
                          <span className="font-medium">24</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-700">Interacciones:</span>
                          <span className="font-medium">156</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-700">Componentes:</span>
                          <span className="font-medium">48</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design-system" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sistema de Diseño</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Paleta de Colores</h4>
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      <div className="text-center">
                        <div className="bg-blue-600 h-12 w-full rounded-lg mb-2"></div>
                        <p className="text-xs">Primary</p>
                        <p className="text-xs text-slate-500">#2563EB</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-slate-600 h-12 w-full rounded-lg mb-2"></div>
                        <p className="text-xs">Secondary</p>
                        <p className="text-xs text-slate-500">#475569</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-green-500 h-12 w-full rounded-lg mb-2"></div>
                        <p className="text-xs">Success</p>
                        <p className="text-xs text-slate-500">#10B981</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-red-500 h-12 w-full rounded-lg mb-2"></div>
                        <p className="text-xs">Error</p>
                        <p className="text-xs text-slate-500">#EF4444</p>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-4">Tipografía</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-2xl font-bold text-slate-900">Heading 1</p>
                        <p className="text-xs text-slate-500">Inter Bold, 24px</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-slate-900">Heading 2</p>
                        <p className="text-xs text-slate-500">Inter Semibold, 18px</p>
                      </div>
                      <div>
                        <p className="text-base text-slate-900">Body Text</p>
                        <p className="text-xs text-slate-500">Inter Regular, 16px</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">Caption</p>
                        <p className="text-xs text-slate-500">Inter Regular, 14px</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Componentes</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Botones</p>
                        <div className="flex space-x-2">
                          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Primary</div>
                          <div className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm">Secondary</div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Inputs</p>
                        <div className="border border-slate-200 rounded-lg p-3 bg-white">
                          <p className="text-sm text-slate-400">Placeholder text</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Cards</p>
                        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
                          <p className="text-sm font-medium mb-1">Card Title</p>
                          <p className="text-xs text-slate-600">Card content with description</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Estados</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                            <span>Success State</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                            <span>Warning State</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                            <span>Error State</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
