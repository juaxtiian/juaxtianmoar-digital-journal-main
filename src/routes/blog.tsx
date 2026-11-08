import { createFileRoute } from "@tanstack/react-router";
import { NoteCard } from "@/components/note-card";
import { notes } from "@/lib/content";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — JuaxtianMoar" },
      {
        name: "description",
        content:
          "Todas mis notas, reflexiones, curadurías y herramientas en un solo lugar.",
      },
    ],
  }),
  component: Blog,
});

function Blog() {
  // Aquí ordenamos las notas para que las más recientes salgan primero
  const todasLasNotas = [...notes].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      
      {/* Cabecera del Blog */}
      <div className="max-w-2xl mb-16">
        <p className="eyebrow text-primary mb-4">Archivo General</p>
        <h1 className="text-5xl md:text-6xl text-foreground mb-6 font-serif">
          El <em className="text-primary">Blog</em>.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Todas mis ideas, pruebas, herramientas y aprendizajes. 
          Sin filtros, sin poses, escrito con calma.
        </p>
      </div>

      {/* Lista de Tarjetas */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {todasLasNotas.map((note) => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </div>

    </div>
  );
}