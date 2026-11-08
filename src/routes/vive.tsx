import { createFileRoute } from "@tanstack/react-router";
import { NoteCard } from "@/components/note-card";
import { notes } from "@/lib/content";

export const Route = createFileRoute("/vive")({
  head: () => ({
    meta: [
      { title: "Vive — JuaxtianMoar" },
      {
        name: "description",
        content:
          "El diario de lo que voy construyendo. Experiencias reales, viajes y aprendizajes. Esto me pasó, esto entendí.",
      },
    ],
  }),
  component: Vive,
});

function Vive() {
  // Filtramos las notas para que solo salgan las de la categoría "bitacora"
  const notasVive = notes.filter((note) => note.category === "bitacora");

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      
      {/* Cabecera del Pilar */}
      <div className="max-w-3xl mb-16">
        <p className="eyebrow text-primary mb-4">Experiencias y Aprendizajes</p>
        <h1 className="text-5xl md:text-6xl text-foreground mb-6 font-serif">
          Vive<span className="text-primary">.</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          El diario de lo que voy construyendo. Aquí no solo muestro mi día, 
          cuento algo que me pasó y lo que entendí de eso. La experiencia es la materia prima, 
          pero el aprendizaje es lo que te llevas tú.
        </p>
        
        {/* La fórmula de Vive */}
        <div className="flex flex-wrap items-center gap-3 mt-8 font-mono text-xs uppercase tracking-widest">
          <span className="border border-gold-line px-3 py-1 text-foreground bg-card/50">
            Esto me pasó
          </span>
          <span className="text-primary text-lg">→</span>
          <span className="border border-primary/50 px-3 py-1 text-primary bg-primary/10">
            Esto entendí
          </span>
        </div>
      </div>

      {/* Grid de Artículos */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 border-t border-border/50 pt-12">
        {notasVive.length > 0 ? (
          notasVive.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))
        ) : (
          // Mensaje por si aún no hay posts en esta categoría
          <div className="col-span-full py-12 text-center border border-dashed border-border/50 bg-card/20">
            <p className="text-muted-foreground font-mono text-sm">
              [ ESPACIO RESERVADO ] <br/>
              Pronto subiré historias de viajes, retos y vida remota aquí.
            </p>
          </div>
        )}
      </div>

      {/* Llamado a la acción final */}
      <div className="mt-20 border-t border-gold-line/30 pt-12 text-center">
        <p className="font-serif text-2xl text-foreground mb-4">
          "La constancia no depende de sentirte listo, depende de aparecer incluso sin ganas."
        </p>
        <p className="font-mono text-xs text-primary tracking-widest uppercase">
          De querer... a SER.
        </p>
      </div>

    </div>
  );
}