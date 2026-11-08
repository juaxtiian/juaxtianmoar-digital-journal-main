import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JuaxtianMoar — Creador Digital" },
      {
        name: "description",
        content:
          "Centro de operaciones de JuaxtianMoar. E-commerce, herramientas digitales y creación de contenido remoto.",
      },
      { property: "og:title", content: "JuaxtianMoar — Creador Digital" },
      {
        property: "og:description",
        content: "Creador remoto y builder. E-commerce, herramientas y contenido.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [modo, setModo] = useState<'creador' | 'builder'>('creador');

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-20 pt-20 md:grid-cols-12 md:px-10 md:pt-28">
        <div className="fade-up md:col-span-7">
          
          {/* HUD DE TELEMETRÍA */}
          <div className="hud-bar fade-up mb-8">
            <span className="hud-dot"></span>
            <span>⚡ 23 AÑOS</span>
            <span className="opacity-50">/</span>
            <span>📍 COLOMBIA (REMOTO)</span>
            <span className="opacity-50">/</span>
            <span>🛠️ 3 PROYECTOS ACTIVOS</span>
          </div>

          {/* TITULAR ACTUALIZADO */}
          <h1 className="text-5xl leading-[1.08] text-foreground md:text-6xl lg:text-7xl mb-6">
            De querer... <br/>
            <em className="text-primary font-serif">a SER.</em>
            <span className="block mt-4 text-3xl md:text-4xl lg:text-5xl text-foreground/80 font-light">
              Y de SER... <em className="text-primary font-serif">a tener.</em>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Creador remoto y builder. Exploro, aprendo y construyo una vida extraordinaria a través del conocimiento, la tecnología y la disciplina.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            {/* BOTÓN ACTUALIZADO A EXPLORAR */}
            <Link to="/proyectos" className="btn-gold group">
              <span className="text-xl group-hover:text-white transition-colors">◎</span>
              Explorar Proyectos
            </Link>
            <Link to="/sobre-mi" className="link-gold ml-2">
              Descubrir mi historia
            </Link>
          </div>
        </div>

        <div className="fade-up md:col-span-5 [animation-delay:150ms]">
          <HeroPortrait />
        </div>
      </section>

      {/* BENTO GRID DE PROYECTOS Y CONTENIDO */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10 border-t border-border/50 pt-16">
          <div>
            <p className="eyebrow text-muted-foreground">
              {modo === 'creador' ? 'Lo que estoy escribiendo y grabando' : 'Laboratorio y Desarrollo'}
            </p>
            <h2 className="mt-4 text-4xl text-foreground md:text-5xl font-serif">
              {modo === 'creador' ? 'Modo Creador' : 'Modo Builder'}
            </h2>
          </div>
          
          {/* SWITCH INTERACTIVO */}
          <div className="inline-flex bg-[#0A111F] border border-gold-line/30 p-1 rounded-md gap-1 self-start md:self-auto">
            <button 
              onClick={() => setModo('creador')}
              className={`px-4 py-2 text-xs font-mono rounded transition-colors ${
                modo === 'creador' ? 'bg-primary/15 text-primary border border-primary/30' : 'text-muted-foreground hover:text-foreground border border-transparent'
              }`}
            >
              🎬 Contenido
            </button>
            <button 
              onClick={() => setModo('builder')}
              className={`px-4 py-2 text-xs font-mono rounded transition-colors ${
                modo === 'builder' ? 'bg-primary/15 text-primary border border-primary/30' : 'text-muted-foreground hover:text-foreground border border-transparent'
              }`}
            >
              🛠️ Proyectos
            </button>
          </div>
        </div>

        {modo === 'creador' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            {/* VIVE / VLOG (Ocupa 2 columnas) */}
            <article className="md:col-span-2 viewfinder-card group flex flex-col justify-between min-h-[340px] p-8">
              <div className="flex justify-between items-start mb-6">
                <span className="rec-badge"><span className="rec-dot"></span> REC · VIVE (VLOG)</span>
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">4K · Día 01 a los 23</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl text-foreground mb-3 group-hover:text-primary transition-colors font-serif">Aprender en público da miedo, y por eso lo hago</h3>
                <p className="prose-editorial text-sm mb-6 max-w-lg">Publicar algo que todavía no domino es incómodo. Pero cada vez que lo hago, alguien me corrige, me enseña o me dice que le sirvió.</p>
                <Link to="/bitacora" className="link-gold">Ver episodio / nota →</Link>
              </div>
            </article>

            {/* CURA / STACK (Ocupa 1 columna) */}
            <article className="viewfinder-card group flex flex-col justify-between min-h-[340px] p-8 bg-gradient-to-br from-card to-background">
              <div className="mb-6">
                <span className="font-mono text-[10px] tracking-widest text-primary bg-primary/10 px-3 py-1 rounded">⚙️ CURA · STACK</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl text-foreground mb-3 group-hover:text-primary transition-colors font-serif">Las pocas herramientas que de verdad uso cada día</h3>
                <p className="prose-editorial text-sm mb-6">Probé decenas de apps de productividad. Me quedé con cuatro. Lista honesta sin promesas mágicas.</p>
                <Link to="/curaduria" className="link-gold">Explorar mi stack →</Link>
              </div>
            </article>

            {/* EXPLICA (Ocupa 1 columna) */}
            <article className="viewfinder-card group flex flex-col justify-between min-h-[340px] p-8">
              <div className="mb-6">
                <span className="font-mono text-[10px] tracking-widest text-primary bg-primary/10 px-3 py-1 rounded">🧠 EXPLICA</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl text-foreground mb-3 group-hover:text-primary transition-colors font-serif">Cómo configuré mi entorno de trabajo en VS Code</h3>
                <p className="prose-editorial text-sm mb-6">Un paso a paso de las extensiones y atajos que uso para programar más rápido y mantener el enfoque.</p>
                <Link to="/herramientas" className="link-gold">Ver tutorial →</Link>
              </div>
            </article>

            {/* PIENSA (Ocupa 2 columnas) */}
            <article className="md:col-span-2 viewfinder-card group flex flex-col justify-between min-h-[340px] p-8 bg-gradient-to-bl from-card to-background border-primary/20">
              <div className="mb-6">
                <span className="font-mono text-[10px] tracking-widest text-primary bg-primary/10 px-3 py-1 rounded">💭 PIENSA</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl text-foreground mb-3 group-hover:text-primary transition-colors font-serif">No te falta motivación, te falta identidad.</h3>
                <p className="prose-editorial text-sm mb-6 max-w-lg">Esperar a sentirte "listo" es el error más común. La constancia no viene de las ganas, viene de decidir quién quieres ser.</p>
                <Link to="/reflexiones" className="link-gold">Leer reflexión →</Link>
              </div>
            </article>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            {/* SOFTWARE / SISTEMAS (Ocupa 2 columnas) */}
            <article className="md:col-span-2 viewfinder-card group flex flex-col justify-between min-h-[340px] p-8 !border-[#10b981]/30 hover:!border-[#10b981]">
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[10px] tracking-widest text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded">● EN DESARROLLO · 80%</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl text-foreground mb-3 group-hover:text-[#10b981] transition-colors font-serif">Ecosistema Digital JuaxtianMoar</h3>
                <p className="prose-editorial text-sm mb-6 max-w-lg">Construyendo mi centro de operaciones remoto, plantillas interactivas y automatizaciones usando IA y código en VS Code.</p>
                <Link to="/proyectos" className="link-gold !text-[#10b981] !bg-gradient-to-r !from-[#10b981] !to-[#10b981]">Ver panel de proyectos →</Link>
              </div>
            </article>

            {/* NEGOCIO / E-COMMERCE (Ocupa 1 columna) */}
            <article className="viewfinder-card group flex flex-col justify-between min-h-[340px] p-8">
              <div className="mb-6">
                <span className="font-mono text-[10px] tracking-widest text-primary bg-primary/10 px-3 py-1 rounded">⚡ COMERCIO</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl text-foreground mb-3 group-hover:text-primary transition-colors font-serif">Juaxtián Store</h3>
                <p className="prose-editorial text-sm mb-6">Laboratorio real de e-commerce vendiendo calzado importado y optimizando la tasa de conversión.</p>
                <Link to="/proyectos" className="link-gold">Ver stack de negocio →</Link>
              </div>
            </article>

            {/* PRÓXIMO PROYECTO (Ocupa 1 columna) */}
            <article className="viewfinder-card group flex flex-col justify-between min-h-[340px] p-8 opacity-60">
              <div className="mb-6">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground bg-white/5 px-3 py-1 rounded">🔒 PRÓXIMAMENTE</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl text-foreground mb-3 font-serif">Herramienta SaaS para Creadores</h3>
                <p className="prose-editorial text-sm mb-6">Sistema para gestionar ingresos, colaboraciones y métricas en un solo lugar. En fase de ideación.</p>
                <span className="text-muted-foreground text-sm font-mono">En pausa...</span>
              </div>
            </article>
          </div>
        )}
      </section>
    </>
  );
}

// ==========================================
// COMPONENTE: MARCO PARA TU FOTO
// ==========================================
function HeroPortrait() {
  return (
    <figure className="mx-auto w-full max-w-sm md:ml-auto">
      <div className="relative">
        <div className="absolute inset-0 translate-x-4 translate-y-4 border border-gold-line" aria-hidden />
        <div className="relative aspect-[4/5] overflow-hidden border border-primary/30 bg-card">
          <img 
            src="/juaxtian-foto.jpg" 
            alt="JuaxtianMoar" 
            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A111F]/80 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs font-mono text-white/80">
            <span>DESDE COLOMBIA</span>
            <span className="text-primary">[ 23 AÑOS ]</span>
          </div>
        </div>
      </div>
    </figure>
  );
}