import { Link } from "@tanstack/react-router";
import { categories, notesIn, type CategoryKey } from "@/lib/content";

export function categoryHead(key: CategoryKey) {
  const c = categories[key];
  return {
    meta: [
      { title: `${c.title} — JuaxtianMoar` },
      { name: "description", content: c.description },
      { property: "og:title", content: `${c.title} — JuaxtianMoar` },
      { property: "og:description", content: c.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function CategoryPage({ category }: { category: CategoryKey }) {
  const c = categories[category];
  const list = notesIn(category);

  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 md:px-10 md:pt-28">
      <p className="eyebrow text-primary">{c.label}</p>
      <h1 className="mt-6 text-5xl text-foreground md:text-6xl">{c.title}</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.description}</p>

      {list.length === 0 ? (
        <p className="mt-16 border-t border-gold-line pt-10 text-muted-foreground">
          Todavía no hay nada publicado aquí. Pronto.
        </p>
      ) : (
        <ul className="mt-16 border-t border-gold-line">
          {list.map((note) => (
            <li key={note.slug} className="border-b border-border">
              <Link
                to="/notas/$slug"
                params={{ slug: note.slug }}
                className="group grid gap-3 py-10 md:grid-cols-[9rem_1fr] md:gap-10"
              >
                <div className="space-y-2">
                  <span className="block text-xs text-muted-foreground/70">{note.date}</span>
                  <span className="block text-xs text-muted-foreground/70">{note.readingTime}</span>
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
      )}
    </section>
  );
}
