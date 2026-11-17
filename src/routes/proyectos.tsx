import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [{ title: "Proyectos — JuaxtianMoar" }],
  }),
  component: Proyectos,
});

function Proyectos() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto fade-up">
      <div className="mb-16 border-b border-border/50 pb-12">
        <p className="eyebrow text-muted-foreground mb-4">Laboratorio y Desarrollo</p>
        <h1 className="text-5xl md:text-6xl font-serif text-foreground">
          Mis <em className="text-primary">Proyectos</em>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
          El ecosistema digital, herramientas en construcción y laboratorio de negocios. 
          Aquí documento lo que estoy levantando desde cero.
        </p>
      </div>
      
      {/* PANEL DE PROYECTOS (Grid de 3 columnas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* PROYECTO 1: Juaxtian Store */}
        <article className="viewfinder-card group flex flex-col justify-between min-h-[320px] hover:border-[#10b981]/50 transition-colors">
          <div className="mb-6 flex justify-between items-start">
            <span className="font-mono text-[10px] tracking-widest text-[#10b981] bg-[#10b981]/10 px-3 py-1.5 rounded border border-[#10b981]/20">
              🟢 ACTIVO
            </span>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">E-commerce</span>
          </div>
          <div className="mt-auto">
            <h3 className="text-2xl text-foreground mb-3 font-serif group-hover:text-[#10b981] transition-colors">
              Juaxtián Store
            </h3>
            <p className="prose-editorial text-sm mb-6">
              E-commerce en Shopify enfocado en la distribución de calzado importado (categorías 1.1 y Triple A). Operando con integraciones de pago contra entrega vía Dropi.
            </p>
            <Link to="/bitacora" className="link-gold !text-[#10b981] !bg-gradient-to-r !from-[#10b981] !to-[#10b981] text-sm">
              Ver métricas y aprendizajes →
            </Link>
          </div>
        </article>

        {/* PROYECTO 2: JXTN Languages Academy */}
        <article className="viewfinder-card group flex flex-col justify-between min-h-[320px] hover:border-blue-500/50 transition-colors">
          <div className="mb-6 flex justify-between items-start">
            <span className="font-mono text-[10px] tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded border border-blue-500/20">
              🔵 ACTIVO
            </span>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Educación</span>
          </div>
          <div className="mt-auto">
            <h3 className="text-2xl text-foreground mb-3 font-serif group-hover:text-blue-400 transition-colors">
              JXTN Languages Academy
            </h3>
            <p className="prose-editorial text-sm mb-6">
              Academia de idiomas virtual. Una plataforma que combina inmersión tecnológica, showrooms 3D e Input Comprensible para que los estudiantes vivan el idioma.
            </p>
            <a href="#" className="link-gold !text-blue-400 !bg-gradient-to-r !from-blue-400 !to-blue-400 text-sm">
              Explorar plataforma →
            </a>
          </div>
        </article>

        {/* PROYECTO 3: Zigncia */}
        <article className="viewfinder-card group flex flex-col justify-between min-h-[320px] hover:border-[#d946ef]/50 transition-colors">
          <div className="mb-6 flex justify-between items-start">
            <span className="font-mono text-[10px] tracking-widest text-[#d946ef] bg-[#d946ef]/10 px-3 py-1.5 rounded border border-[#d946ef]/20">
              🌌 CREATIVO
            </span>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Animación</span>
          </div>
          <div className="mt-auto">
            <h3 className="text-2xl text-foreground mb-3 font-serif group-hover:text-[#d946ef] transition-colors">
              Zigncia
            </h3>
            <p className="prose-editorial text-sm mb-6">
              Proyecto de animación original explorando mundos simbólicos, personajes únicos y narrativas visuales con una identidad distintiva.
            </p>
            <a href="https://facebook.com/Zigncia" target="_blank" rel="noreferrer" className="link-gold !text-[#d946ef] !bg-gradient-to-r !from-[#d946ef] !to-[#d946ef] text-sm">
              Ver proyecto en Facebook →
            </a>
          </div>
        </article>

      </div>
    </main>
  );
}