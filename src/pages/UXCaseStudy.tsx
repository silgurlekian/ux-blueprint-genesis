
import { useState, useEffect } from "react";
import { 
  ArrowDown, 
  Menu, 
  X, 
  Target, 
  Users, 
  Clock, 
  TrendingUp,
  MessageCircle,
  BarChart3,
  Heart,
  Smartphone,
  Star,
  Shield,
  Layout,
  Monitor,
  Zap,
  CheckCircle,
  AlertCircle,
  XCircle,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const UXCaseStudy = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "research", label: "Research" },
    { id: "benchmark", label: "Benchmark" },
    { id: "wireframes", label: "Wireframes" },
    { id: "testing", label: "Testing" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsNavOpen(false);
  };

  const scrollToOverview = () => {
    const element = document.getElementById("overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Research Data
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-900">UX Case Study</h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                {isNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {isNavOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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

      {/* Project Overview */}
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

      {/* Research Phase */}
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

      {/* Benchmark Phase */}
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

      {/* Wireframes Section */}
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

      {/* Usability Testing */}
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

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre este Proyecto</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Este caso de estudio demuestra un proceso completo de UX/UI design, 
                desde la investigación inicial hasta la validación con usuarios reales. 
                Cada fase siguió metodologías establecidas y mejores prácticas de la industria.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Metodologías Aplicadas</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Design Thinking</li>
                <li>• User-Centered Design</li>
                <li>• Lean UX</li>
                <li>• Agile Design Process</li>
                <li>• Accessibility Guidelines (WCAG 2.1)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Herramientas Utilizadas</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                <div>• Figma</div>
                <div>• Miro</div>
                <div>• Principle</div>
                <div>• InVision</div>
                <div>• UserTesting</div>
                <div>• Hotjar</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">
                © 2024 Caso de Estudio UX/UI - Rediseño App Bancaria
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UXCaseStudy;
