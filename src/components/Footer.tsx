
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
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
  );
};
