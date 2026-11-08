export const categories = {
  herramientas: {
    label: "Herramientas",
    path: "/herramientas",
    title: "Herramientas",
    description: "Recursos y tutoriales: lo que uso de verdad, explicado paso a paso y sin enlaces de afiliado escondidos.",
  },
  curaduria: {
    label: "Curaduría",
    path: "/curaduria",
    title: "Curaduría",
    description: "Mis reacciones a podcasts, noticias y lecturas que me hicieron pensar. Lo que encontré y por qué me importó.",
  },
  reflexiones: {
    label: "Reflexiones",
    path: "/reflexiones",
    title: "Reflexiones",
    description: "Ensayos personales sobre crear, trabajar en remoto y aprender en público. Ideas a medio cocinar, contadas con honestidad.",
  },
  bitacora: {
    label: "Bitácora",
    path: "/bitacora",
    title: "Bitácora",
    description: "El diario de lo que voy construyendo: avances, tropiezos y decisiones, tal como van pasando.",
  },
} as const;

export type CategoryKey = keyof typeof categories;

export type Note = {
  slug: string;
  category: CategoryKey;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: string[];
};

// Newest first: the home page shows the first three.
export const notes: Note[] = [
  {
    slug: "lo-que-me-dejo-un-podcast-sobre-trabajo-profundo",
    category: "curaduria",
    title: "Lo que me dejó un podcast sobre trabajo profundo",
    excerpt:
      "Escuché una conversación larga sobre concentración y la apagué con tres ideas anotadas. Aquí van, con mis dudas incluidas.",
    date: "6 nov 2026",
    readingTime: "4 min",
    body: [
      "Lo escuché caminando, que es como mejor escucho. Era una conversación larga sobre concentración y sobre por qué nos cuesta tanto sostener la atención en una sola cosa.",
      "La primera idea que me quedó: la concentración no es un talento, es un entorno. Si tu entorno está diseñado para interrumpirte, ninguna fuerza de voluntad alcanza.",
      "La segunda: el trabajo profundo necesita bordes claros. Un inicio y un final. Sin eso, todo se convierte en una jornada difusa donde nunca terminas nada del todo.",
      "La tercera me incomodó: a veces llamamos productividad a lo que en realidad es evitar lo difícil. No estoy seguro de estar de acuerdo del todo, pero me quedé pensando en ello toda la semana.",
    ],
  },
  {
    slug: "herramientas-que-uso-a-diario",
    category: "herramientas",
    title: "Las pocas herramientas que de verdad uso cada día",
    excerpt:
      "Probé decenas de apps de productividad. Me quedé con cuatro. Esta es la lista honesta, sin enlaces de afiliado ni promesas mágicas.",
    date: "2 nov 2026",
    readingTime: "5 min",
    body: [
      "Durante meses caí en la trampa de pensar que la herramienta correcta iba a resolver mi falta de constancia. Instalaba, configuraba, me emocionaba dos días y volvía al caos. El problema nunca fue la app.",
      "Hoy uso muy poco: un editor de notas sencillo para pensar, un calendario para proteger mis horas de trabajo profundo, una lista de tareas que reviso cada mañana y una carpeta compartida donde vive todo lo que publico.",
      "Lo que aprendí es que menos herramientas significa menos decisiones. Y menos decisiones significa más energía para lo que importa: crear, publicar y aprender del resultado.",
      "No te digo que copies mi lista. Te sugiero algo más incómodo: elimina la mitad de lo que tienes instalado y observa qué echas de menos de verdad.",
    ],
  },
  {
    slug: "aprender-en-publico",
    category: "reflexiones",
    title: "Aprender en público da miedo, y por eso lo hago",
    excerpt:
      "Publicar algo que todavía no domino es incómodo. Pero cada vez que lo hago, alguien me corrige, me enseña o me dice que le sirvió.",
    date: "24 oct 2026",
    readingTime: "4 min",
    body: [
      "Hay una voz que me dice que espere. Que todavía no sé lo suficiente, que otros lo explican mejor, que no tengo autoridad para hablar de esto. La conozco bien.",
      "Decidí escribir de todas formas. No como experto, sino como alguien que va dos pasos por delante de quien empieza hoy, y muchos pasos por detrás de quien ya llegó.",
      "Aprender en público me obliga a ordenar lo que pienso. Me expone a errores, sí, pero también a conversaciones que nunca habría tenido si me hubiese quedado callado.",
      "Si estás esperando sentirte listo para compartir lo que haces, te cuento un secreto: ese momento no llega. Se construye publicando.",
    ],
  },
  {
    slug: "primer-mes-en-remoto",
    category: "bitacora",
    title: "Primer mes trabajando en remoto: lo que nadie me contó",
    excerpt:
      "La libertad de horarios suena increíble hasta que te das cuenta de que nadie va a poner límites por ti. Notas sinceras de las primeras semanas.",
    date: "15 oct 2026",
    readingTime: "6 min",
    body: [
      "La primera semana trabajé más horas que nunca y terminé con la sensación de no haber hecho nada. Saltaba de una tarea a otra, contestaba mensajes al instante y comía frente a la pantalla.",
      "La segunda semana probé lo contrario: horarios fijos, una alarma para parar y una caminata obligatoria después de almorzar. Mejoró todo, incluso lo que produje.",
      "Lo que nadie me contó es que trabajar en remoto es, sobre todo, un ejercicio de autoconocimiento. Tienes que descubrir a qué hora piensas mejor, qué te distrae y cuándo necesitas hablar con alguien.",
      "Sigo ajustando. Esta bitácora es precisamente para eso: dejar registro de lo que funciona, de lo que no, y de lo que todavía no entiendo.",
    ],
  },
];

export function notesIn(category: CategoryKey) {
  return notes.filter((n) => n.category === category);
}

export const contactEmail = "juaxtian@gmail.com";
