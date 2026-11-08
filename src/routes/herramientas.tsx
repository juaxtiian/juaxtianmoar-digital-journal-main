import { createFileRoute } from "@tanstack/react-router";
import { NoteCard } from "@/components/note-card";
import { notes } from "@/lib/content";

export const Route = createFileRoute("/herramientas")({
  head: () => ({
    meta: [
      { title: "Explica — JuaxtianMoar" },
      {
        name: "description",
        content:
          "Herramientas de IA, recursos y tutoriales paso a paso. Si estás intentando algo, aquí encontrarás cómo hacerlo.",
      },
    ],
  }),
  component: Explica,
});

function Explica() {
  // Filtramos las notas para que solo salgan las de la categoría "herramientas"
  // (Asegúrate de que en tu archivo content.ts las notas de este pilar tengan category: "herramientas")
  const notasExplica = notes.filter((note) => note.category === "herramientas");

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      
      {/* Cabecera del Pilar */}
      <div className="max-w-3xl mb-16">
        <p className="eyebrow text-primary mb-4">Utilidad y Recursos</p>
        <h1 className="text-5xl md:text-6xl text-foreground mb-6 font-serif">
          Explica<span className="text-primary">.</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Herramientas de IA, páginas web, aplicaciones y tutoriales paso a paso. 
          Mi objetivo aquí es darte algo concreto que puedas usar hoy. 
          Entra por el problema, sal con la solución.
        </p>
        
        {/* Los 3 niveles de Explica */}
        <div className="flex flex-wrap gap-4 mt-8">
          <span className="font-mono text-xs uppercase tracking-widest border border-gold-line px-3 py-1 text-foreground bg-card/50">
            1. Aprende la idea
          </span>
          <span className="font-mono text-xs uppercase tracking-widest border border-gold-line px-3 py-1 text-foreground bg-card/50">
            2. Explica la herramienta
          </span>
          <span className="font-mono text-xs uppercase tracking-widest border border-gold-line px-3 py-1 text-foreground bg-card/50">
            3. Guía el paso a paso
          </span>
        </div>
      </div>

      {/* Grid de Artículos */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 border-t border-border/50 pt-12">
        {notasExplica.length > 0 ? (
          notasExplica.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))
        ) : (
          // Mensaje por si aún no hay posts en esta categoría
          <div className="col-span-full py-12 text-center border border-dashed border-border/50 bg-card/20">
            <p className="text-muted-foreground font-mono text-sm">
              [ ESPACIO RESERVADO ] <br/>
              Pronto subiré tutoriales y herramientas aquí.
            </p>
          </div>
        )}
      </div>

      {/* Llamado a la acción final */}
      <div className="mt-20 border-t border-gold-line/30 pt-12 text-center">
        <p className="font-serif text-2xl text-foreground mb-4">
          "Ninguna herramienta te construye por ti, pero quitan excusas."
        </p>
        <p className="font-mono text-xs text-primary tracking-widest uppercase">
          De querer... a SER.
        </p>
      </div>

    </div>
  );
}