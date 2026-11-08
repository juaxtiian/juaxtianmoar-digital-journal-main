import { createFileRoute } from "@tanstack/react-router";
import { NoteCard } from "@/components/note-card";
import { notes } from "@/lib/content";

export const Route = createFileRoute("/curaduria")({
  head: () => ({
    meta: [
      { title: "Cura — JuaxtianMoar" },
      {
        name: "description",
        content:
          "Selección de contenido valioso, podcasts y lecturas con mi contexto y mi opinión. El criterio es el filtro.",
      },
    ],
  }),
  component: Cura,
});

function Cura() {
  // Filtramos las notas para que solo salgan las de la categoría "curaduria"
  const notasCura = notes.filter((note) => note.category === "curaduria");

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      
      {/* Cabecera del Pilar */}
      <div className="max-w-3xl mb-16">
        <p className="eyebrow text-primary mb-4">Curaduría de Contenido</p>
        <h1 className="text-5xl md:text-6xl text-foreground mb-6 font-serif">
          Cura<span className="text-primary">.</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Funciono como un curador de museo: no pinto los cuadros, pero decido cuáles merecen estar en la sala. 
          Filtro podcasts, entrevistas y lecturas de alto valor, les doy contexto y te digo qué pienso al respecto.
        </p>
        
        {/* Los 4 pasos de Cura */}
        <div className="flex flex-wrap gap-3 mt-8">
          <span className="font-mono text-[10px] uppercase tracking-widest border border-gold-line px-3 py-1 text-foreground bg-card/50">
            1. Descubrir
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest border border-gold-line px-3 py-1 text-foreground bg-card/50">
            2. Seleccionar
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest border border-gold-line px-3 py-1 text-foreground bg-card/50">
            3. Contextualizar
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest border border-primary/50 px-3 py-1 text-primary bg-primary/10">
            4. Interpretar
          </span>
        </div>
      </div>

      {/* Grid de Artículos */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 border-t border-border/50 pt-12">
        {notasCura.length > 0 ? (
          notasCura.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))
        ) : (
          // Mensaje por si aún no hay posts en esta categoría
          <div className="col-span-full py-12 text-center border border-dashed border-border/50 bg-card/20">
            <p className="text-muted-foreground font-mono text-sm">
              [ ESPACIO RESERVADO ] <br/>
              Pronto subiré las mejores curadurías de podcasts y lecturas aquí.
            </p>
          </div>
        )}
      </div>

      {/* Llamado a la acción final */}
      <div className="mt-20 border-t border-gold-line/30 pt-12 text-center">
        <p className="font-serif text-2xl text-foreground mb-4">
          "Compartir lo viral es ruido. Darle contexto a lo valioso es criterio."
        </p>
        <p className="font-mono text-xs text-primary tracking-widest uppercase">
          De querer... a SER.
        </p>
      </div>

    </div>
  );
}