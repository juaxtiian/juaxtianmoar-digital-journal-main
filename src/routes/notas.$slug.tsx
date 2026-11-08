import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categories, notes } from "@/lib/content";

export const Route = createFileRoute("/notas/$slug")({
  loader: ({ params }) => {
    const note = notes.find((n) => n.slug === params.slug);
    if (!note) throw notFound();
    return { note };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Nota no encontrada — JuaxtianMoar" }, { name: "robots", content: "noindex" }] };
    }
    const { note } = loaderData;
    return {
      meta: [
        { title: `${note.title} — JuaxtianMoar` },
        { name: "description", content: note.excerpt },
        { property: "og:title", content: note.title },
        { property: "og:description", content: note.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: NoteNotFound,
  component: NotePage,
});

function NotePage() {
  const { note } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-2xl px-6 pt-20 md:pt-28">
      <Link to={categories[note.category].path} className="link-gold">
        ← {categories[note.category].label}
      </Link>

      <header className="mt-14 border-b border-gold-line pb-12">
        <div className="flex items-center gap-4 text-xs text-muted-foreground/80">
          <Link to={categories[note.category].path} className="eyebrow text-primary">
            {categories[note.category].label}
          </Link>
          <span aria-hidden>·</span>
          <span>{note.date}</span>
          <span aria-hidden>·</span>
          <span>{note.readingTime} de lectura</span>
        </div>
        <h1 className="mt-6 text-4xl leading-tight text-foreground md:text-5xl">{note.title}</h1>
        <p className="mt-6 font-serif text-xl italic leading-relaxed text-muted-foreground">{note.excerpt}</p>
      </header>

      <div className="prose-editorial mt-12">
        {note.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <footer className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
        Gracias por leer. Si algo de esto te sirvió, cuéntamelo.
      </footer>
    </article>
  );
}

function NoteNotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-28 text-center">
      <p className="eyebrow text-primary">Nota no encontrada</p>
      <h1 className="mt-6 text-4xl text-foreground">Esta nota no existe (todavía).</h1>
      <Link to="/notas" className="link-gold mt-10 inline-block">
        Volver a las notas →
      </Link>
    </section>
  );
}
