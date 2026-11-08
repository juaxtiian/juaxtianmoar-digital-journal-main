import { Link } from "@tanstack/react-router";
import { categories, type Note } from "@/lib/content";

export function NoteCard({ note }: { note: Note }) {
  // Calcula un tiempo de lectura estimado basado en la longitud del extracto
  const readingTime = Math.max(1, Math.ceil(note.excerpt.split(" ").length / 40)) + " min";

  return (
    <article className="group flex h-full flex-col border border-gold-line bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.15)]">
      <div className="flex items-center justify-between">
        <Link to={categories[note.category].path} className="eyebrow text-primary">
          {categories[note.category].label}
        </Link>
        <span className="text-xs text-muted-foreground/70 font-mono">
          {note.date} · {readingTime}
        </span>
      </div>

      <h3 className="mt-8 font-serif text-2xl leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
        {note.title}
      </h3>

      <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
        {note.excerpt}
      </p>

      <div className="mt-10 flex items-center border-t border-border pt-5">
        <Link to="/notas/$slug" params={{ slug: note.slug }} className="link-gold flex items-center gap-2">
          Leer más 
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}