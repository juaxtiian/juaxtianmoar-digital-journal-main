import { createFileRoute } from "@tanstack/react-router";
import { Download, Briefcase, GraduationCap, Code2, Globe } from "lucide-react";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — JuaxtianMoar" },
      {
        name: "description",
        content: "Conoce mi historia, mi experiencia profesional y mi camino como creador digital.",
      },
    ],
  }),
  component: SobreMi,
});

function SobreMi() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 md:px-10 md:py-32">
      
      {/* Cabecera */}
      <div className="max-w-2xl mb-16 fade-up">
        <p className="eyebrow text-primary mb-4">Mi Historia</p>
        <h1 className="text-5xl md:text-6xl text-foreground mb-6 font-serif">
          Sobre <em className="text-primary">mí.</em>
        </h1>
      </div>

      {/* Texto de presentación */}
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-20 fade-up">
        <p>
          Durante mucho tiempo quise empezar. Quería cambiar, crear algo propio y acercarme a la persona que imaginaba ser.
        </p>
        <p>
          Pero querer no es lo mismo que empezar. El primer paso llega cuando dejas de esperar a sentirte listo y decides hacerlo con lo que tienes.
        </p>
        <p className="font-medium text-foreground">
          Hoy es ese día.
        </p>
        <p>
          Soy Juan Sebastián, aunque aquí me conocerás como <strong className="text-primary font-normal italic">JUAXTIÁN</strong>: un nombre que creé a partir del mío y que se convirtió en la identidad de este proyecto.
        </p>
        <p>
          Tengo 23 años y estoy construyendo este espacio para compartir mi camino como creador digital: los proyectos que desarrollo, las ideas que exploro, lo que aprendo y las experiencias que forman parte de mi evolución.
        </p>
        <p>
          También estoy enfocando mi desarrollo profesional en el entorno digital y remoto, tanto en mis propios proyectos como en equipos donde pueda aprender, colaborar y aportar valor a largo plazo.
        </p>
        <p>
          No lo tengo todo resuelto. Estoy aquí para construirlo, compartir el proceso y conectar con quienes también están creando algo.
        </p>
      </div>

      {/* SECCIÓN DE EXPERIENCIA Y EDUCACIÓN */}
      <div className="border-t border-border/50 pt-16 mb-20 fade-up">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-primary mb-2">Trayectoria Profesional</p>
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Experiencia & Skills</h2>
          </div>
          {/* Botón de Descarga del CV */}
          <a 
            href="/cv-juan-sebastian.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="btn-gold group self-start md:self-auto"
          >
            <Download className="size-4 group-hover:scale-110 transition-transform" />
            Descargar CV Completo
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Trabajo 1 */}
          <div className="border border-gold-line bg-card p-6 flex flex-col hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary">
                <Briefcase className="size-5" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Ago 2025 - Nov 2025</span>
            </div>
            <h3 className="text-xl font-serif text-foreground mb-1">Asistente de Gestión de Crédito</h3>
            <p className="text-sm text-primary mb-4">Independent Services (Remoto)</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Gestión de disputas de crédito en EE. UU. utilizando plataformas como Dispute Fox y Letter Stream. Análisis de reportes (Equifax, Experian, TransUnion) logrando mejoras de 40-80 puntos en el score de los clientes.
            </p>
          </div>

          {/* Trabajo 2 */}
          <div className="border border-gold-line bg-card p-6 flex flex-col hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary">
                <Code2 className="size-5" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Nov 2024 - Feb 2025</span>
            </div>
            <h3 className="text-xl font-serif text-foreground mb-1">Operador de Datos e Inventario</h3>
            <p className="text-sm text-primary mb-4">Intercars & ID Logistics (Polonia)</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Recepción, escaneo y registro de alta precisión de hasta 1,200 productos por turno en sistemas de gestión de inventario. Adaptación rápida a plataformas tecnológicas en un entorno logístico de alto volumen.
            </p>
          </div>

          {/* Educación 1 */}
          <div className="border border-gold-line bg-card p-6 flex flex-col hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary">
                <Globe className="size-5" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">2025 - 2026</span>
            </div>
            <h3 className="text-xl font-serif text-foreground mb-1">Habilidades de Comunicación en Inglés</h3>
            <p className="text-sm text-primary mb-4">Jamestown English Center</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Programa de adquisición del idioma inglés, alcanzando un nivel B2. Capacidad para trabajar y comunicarme efectivamente en entornos profesionales globales.
            </p>
          </div>

          {/* Habilidades Blandas / Stack */}
          <div className="border border-gold-line bg-card p-6 flex flex-col hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary">
                <GraduationCap className="size-5" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Herramientas</span>
            </div>
            <h3 className="text-xl font-serif text-foreground mb-1">Stack & Herramientas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Microsoft Excel / Google Workspace / Sistemas CRM / Notion / Herramientas de IA. Enfoque en organización de información, servicio al cliente y aprendizaje continuo.
            </p>
          </div>

        </div>
      </div>

      {/* Slogan final y Llamado a la Acción */}
      <div className="mt-16 border-t border-border/50 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 fade-up">
        <div>
          <p className="font-serif text-2xl text-foreground mb-2">
            ¿Construimos algo juntos?
          </p>
          <p className="text-muted-foreground">
            Estoy abierto a oportunidades remotas y colaboraciones.
          </p>
        </div>
        <a href="mailto:sebastianmorenoarevalo@gmail.com" className="link-gold text-lg">
          Escríbeme aquí →
        </a>
      </div>

    </div>
  );
}