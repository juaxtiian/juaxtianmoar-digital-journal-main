import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, notes } from "@/lib/content";

export const Route = createFileRoute("/notas/")({
  head: () => ({
    meta: [
      { title: "Notas — JuaxtianMoar" },
      {
        name: "description",
        content: "Herramientas, reflexiones y bitácora de un creador remoto que aprende en público.",
      },
      { property: "og:title", content: "Notas — JuaxtianMoar" },
      { property: "og:description", content: "Lo que estoy escribiendo: herramientas, notas y bitácora." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NotasPage,
});

function NotasPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 md:px-10 md:pt-28">
      <p className="eyebrow text-primary">Notas</p>
      <h1 className="mt-6 text-5xl text-foreground md:text-6xl">Lo que estoy escribiendo</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Apuntes sin pulir del todo. Algunos envejecerán mal, y está bien: son parte del camino.
      </p>

      <ul className="mt-16 border-t border-gold-line">
        {notes.map((note) => (
          <li key={note.slug} className="border-b border-border">
            <Link
              to="/notas/$slug"
              params={{ slug: note.slug }}
              className="group grid gap-3 py-10 md:grid-cols-[9rem_1fr] md:gap-10"
            >
              <div className="space-y-2">
                <span className="eyebrow block text-primary">{categories[note.category].label}</span>
                <span className="block text-xs text-muted-foreground/70">{note.date}</span>
              </div>
              <div>
                <h2 className="text-2xl text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {note.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{note.excerpt}</p>
                <span className="link-gold mt-5 inline-block">Leer más →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
