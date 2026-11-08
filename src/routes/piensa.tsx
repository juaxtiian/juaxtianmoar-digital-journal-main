import { createFileRoute } from "@tanstack/react-router";
import { NoteCard } from "@/components/note-card";
import { notes } from "@/lib/content";

export const Route = createFileRoute("/piensa")({
  head: () => ({
    meta: [
      { title: "Piensa — JuaxtianMoar" },
      {
        name: "description",
        content:
          "Reflexiones, filosofía y observaciones propias. Mi forma de ver el mundo, el trabajo y la construcción del ser.",
      },
    ],
  }),
  component: Piensa,
});

function Piensa() {
  // Filtramos las notas para que solo salgan las de la categoría "reflexiones"
  const notasPiensa = notes.filter((note) => note.category === "reflexiones");

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      
      {/* Cabecera del Pilar */}
      <div className="max-w-3xl mb-16">
        <p className="eyebrow text-primary mb-4">Filosofía y Mentalidad</p>
        <h1 className="text-5xl md:text-6xl text-foreground mb-6 font-serif">
          Piensa<span className="text-primary">.</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Aquí no vengo a enseñarte una herramienta. Vengo a compartir mi mirada. 
          Cuestiono creencias, analizo el entorno y comparto ideas a medio cocinar. 
          Si EXPLICA te dice qué usar, PIENSA te dice cómo veo las cosas.
        </p>
      </div>

      {/* Grid de Artículos */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 border-t border-border/50 pt-12">
        {notasPiensa.length > 0 ? (
          notasPiensa.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))
        ) : (
          // Mensaje por si aún no hay posts en esta categoría
          <div className="col-span-full py-12 text-center border border-dashed border-border/50 bg-card/20">
            <p className="text-muted-foreground font-mono text-sm">
              [ ESPACIO RESERVADO ] <br/>
              Pronto subiré mis ensayos y reflexiones más profundas aquí.
            </p>
          </div>
        )}
      </div>

      {/* Llamado a la acción final */}
      <div className="mt-20 border-t border-gold-line/30 pt-12 text-center">
        <p className="font-serif text-2xl text-foreground mb-4">
          "La identidad no se encuentra, se construye."
        </p>
        <p className="font-mono text-xs text-primary tracking-widest uppercase">
          De querer... a SER.
        </p>
      </div>

    </div>
  );
}