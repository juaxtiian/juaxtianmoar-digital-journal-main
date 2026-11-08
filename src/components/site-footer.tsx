import { useState } from "react";
import { Instagram, Youtube, Linkedin, Facebook, Copy, Check, Github } from "lucide-react";
import { contactEmail } from "@/lib/content";
import { Logo } from "./site-header";

// Íconos personalizados para redes que no están en Lucide
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const KickIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1.333 0h8v5.333h2.667V2.667h2.667V0h8v8h-2.667v2.667h-2.666v2.666h2.666V16h2.667v8h-8v-2.667h-2.667V18.667h-2.667V24h-8V0zm5.334 5.333v13.334h2.666V16h2.667v-2.667h2.667V10.667h-2.667V8h-2.667V5.333H6.667z"/>
  </svg>
);

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socials = [
  { label: "Instagram", href: "https://instagram.com/juaxtian", Icon: Instagram },
  { label: "TikTok", href: "https://tiktok.com/@juaxtian", Icon: TikTokIcon },
  { label: "Facebook", href: "https://facebook.com/juaxtian", Icon: Facebook },
  { label: "YouTube", href: "https://youtube.com/@juaxtian", Icon: Youtube },
  { label: "Kick", href: "https://kick.com/juaxtian", Icon: KickIcon },
  { label: "Pinterest", href: "https://pinterest.com/juaxtian", Icon: PinterestIcon },
  { label: "X / Twitter", href: "https://x.com/juaxtian", Icon: XIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juan-sebastian-moreno-arevalo-851020434/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/juaxtian", Icon: Github },
];

export function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-16 border-t border-gold-line">
      
      {/* Sección de Newsletter */}
      <div className="border-b border-gold-line/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 flex flex-col items-center text-center">
          <p className="eyebrow text-primary mb-4">Newsletter</p>
          <p className="text-sm text-muted-foreground mb-8 max-w-md">
            Recibe mis pruebas, herramientas y apuntes reales cuando publique algo nuevo. Cero ruido, escrito con calma.
          </p>
          <form className="flex w-full max-w-md flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="tu@correo.com" 
              required
              className="flex-1 bg-background border border-border px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors rounded-sm"
            />
            <button type="submit" className="btn-gold px-8 py-3 whitespace-nowrap rounded-sm">
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      {/* Sección Principal del Footer */}
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
            Escríbeme, leo todos los correos:{" "}
            <button 
              onClick={handleCopyEmail}
              className="group relative flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              title="Copiar correo"
            >
              {contactEmail}
              {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4 opacity-50 group-hover:opacity-100 transition-opacity" />}
              
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-border px-2 py-1 text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {copied ? "¡Copiado!" : "Copiar correo"}
              </span>
            </button>
          </p>
        </div>

        <div className="space-y-6 md:text-right">
          {/* Lista de redes sociales (se acomodan automáticamente) */}
          <ul className="flex flex-wrap gap-5 md:justify-end max-w-md ml-auto">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-primary/70 transition-colors hover:text-primary block"
                  title={label}
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-[10px] tracking-widest text-primary uppercase font-mono font-bold">
              • CREA+ • SOSTIENE+ • EXPANDE+
            </p>
            <p className="text-xs tracking-wide text-muted-foreground/70">
              © {new Date().getFullYear()} JuaxtianMoar. Escrito con calma.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}