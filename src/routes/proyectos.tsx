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
      
      {/* PANEL DE PROYECTOS (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* PROYECTO 1: E-commerce (ACTIVO) */}
        <article className="viewfinder-card group flex flex-col justify-between min-h-[320px] hover:border-[#10b981]/50 transition-colors">
          <div className="mb-6 flex justify-between items-start">
            <span className="font-mono text-[10px] tracking-widest text-[#10b981] bg-[#10b981]/10 px-3 py-1.5 rounded border border-[#10b981]/20">
              🟢 ACTIVO
            </span>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Negocio</span>
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

        {/* PROYECTO 2: Ecosistema Web (EN DESARROLLO) */}
        <article className="viewfinder-card group flex flex-col justify-between min-h-[320px] hover:border-[#eab308]/50 transition-colors">
          <div className="mb-6 flex justify-between items-start">
            <span className="font-mono text-[10px] tracking-widest text-[#eab308] bg-[#eab308]/10 px-3 py-1.5 rounded border border-[#eab308]/20">
              🟡 EN DESARROLLO · 80%
            </span>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Software</span>
          </div>
          <div className="mt-auto">
            <h3 className="text-2xl text-foreground mb-3 font-serif group-hover:text-[#eab308] transition-colors">
              Centro de Operaciones
            </h3>
            <p className="prose-editorial text-sm mb-6">
              Desarrollo de mi propia plataforma web interactiva y bitácora digital usando React, Tailwind y asistencia de modelos de lenguaje (VS Code + Lovable).
            </p>
            <span className="text-muted-foreground text-sm font-medium italic">
              Estás navegando en él ↓
            </span>
          </div>
        </article>

        {/* PROYECTO 3: Flujo de Contenido (FASE BETA) */}
        <article className="viewfinder-card group flex flex-col justify-between min-h-[320px] hover:border-[#a855f7]/50 transition-colors">
          <div className="mb-6 flex justify-between items-start">
            <span className="font-mono text-[10px] tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-3 py-1.5 rounded border border-[#a855f7]/20">
              🟣 FASE BETA
            </span>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Sistemas</span>
          </div>
          <div className="mt-auto">
            <h3 className="text-2xl text-foreground mb-3 font-serif group-hover:text-[#a855f7] transition-colors">
              Motor de Contenido IA
            </h3>
            <p className="prose-editorial text-sm mb-6">
              Sistema documentado para la estructuración y producción de video persuasivo, combinando un stack estratégico de 3 herramientas gratuitas y 3 de pago.
            </p>
            <Link to="/herramientas" className="link-gold !text-[#a855f7] !bg-gradient-to-r !from-[#a855f7] !to-[#a855f7] text-sm">
              Ver stack de herramientas →
            </Link>
          </div>
        </article>

      </div>
    </main>
  );
}