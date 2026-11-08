import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre-mi")({
  component: SobreMi,
});

function SobreMi() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-32">
      
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12">
        Sobre mí
      </h1>

      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          Durante mucho tiempo quise empezar. Quería cambiar, crear algo propio y acercarme a la persona que imaginaba ser.
        </p>
        <p>
          Pero querer no es lo mismo que empezar. El primer paso llega cuando dejas de esperar a sentirte listo y decides hacerlo con lo que tienes.
        </p>
        <p className="font-medium text-foreground">
          Hoy es ese día.
        </p>
        <p>
          Soy Juan Sebastián, aunque aquí me conocerás como <strong className="text-primary font-normal italic">JUAXTIÁN</strong>: un nombre que creé a partir del mío y que se convirtió en la identidad de este proyecto.
        </p>
        <p>
          Tengo 23 años y estoy construyendo este espacio para compartir mi camino como creador digital: los proyectos que desarrollo, las ideas que exploro, lo que aprendo y las experiencias que forman parte de mi evolución.
        </p>
        <p>
          También estoy enfocando mi desarrollo profesional en el entorno digital y remoto, tanto en mis propios proyectos como en equipos donde pueda aprender, colaborar y aportar valor a largo plazo.
        </p>
        <p>
          No lo tengo todo resuelto. Estoy aquí para construirlo, compartir el proceso y conectar con quienes también están creando algo.
        </p>
        <p className="font-serif text-2xl text-foreground pt-4">
          Bienvenido a mi mundo.
        </p>
      </div>

      {/* Slogan */}
      <div className="mt-16 pt-8 border-t border-border/50">
        <p className="font-mono text-sm tracking-widest text-primary uppercase">
          • CREATE+ • SUSTAIN+ • EXPAND+
        </p>
      </div>

    </div>
  );
}