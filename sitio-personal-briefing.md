# Briefing para solangegf.dev
## Para pegar en el próximo proyecto de VS Code

---

## Quién es Solange (la dueña del sitio)

- **Dominio:** solangegf.dev
- **20+ años de experiencia como desarrolladora**
- **Arquitecta NO recibida** — le faltaba 1 año. Encontró un libro de HTML y no lo pudo soltar
- **Empezó a programar en 1994** usando **HotDog Pro** de Sausage Software (Australia)
  - Contexto: antes de CSS, antes de JavaScript, antes de Google
  - Netscape recién se fundaba, Mosaic era el browser, Yahoo era "Jerry's Guide"
- **Fue la primera de su clase de arquitectura en entregar el TP final en AutoCAD**
  - Cuando todos dibujaban con lapiceras Rotring
- **Viene de Argentina**
- **Vive en CABA / trabaja en cannabis industry**
- **Proyecto actual:** GreenkedIn (red profesional del sector cannábico en LATAM)
- **Soltera, agradecida, enamorada de las máquinas** (sus palabras)
- **Le emociona la época**: cuenta con cariño las historias de Dreamweaver con frames,
  tables para layout, Comic Sans, HotDog Pro, Rex the Dog (el Clippy de HotDog)
- Tiene MILES de historias de esta época para contar

---

## Vibe del sitio

**Inspiración principal:** [joshwcomeau.com](https://www.joshwcomeau.com)
- Playful, craft, mucho mimo en microinteracciones
- Animaciones con spring physics
- Tipografía grande y amigable
- Colores vibrantes pero elegantes
- Mucho aire entre secciones
- Easter eggs y personalidad

**Plus:** mezcla de retro-gamer + arquitectura digital + nostalgia 90s

---

## Objetivo del sitio

Ella dijo: **"TODO"**
- Portfolio de proyectos (GreenkedIn destacado)
- Blog técnico
- Landing freelance
- Juegos que juega y le gustan
- Sus historias personales (arquitectura → HotDog → hoy)
- Sus 20+ años de historia como ventana para otros developers

---

## Estructura propuesta

### 1. Hero
Texto sugerido:
> "Hola, soy Solange.
> En 1994, mientras mis compañeros de arquitectura dibujaban con Rotring,
> yo escribía HTML con HotDog Pro.
> 30+ años después, sigo en la misma pantalla."

+ gradiente vibrante en el nombre
+ CTAs a Proyectos / Sobre mí / Contacto

### 2. Timeline interactivo
Rotring → AutoCAD → HTML tables → HotDog Pro → Dreamweaver con frames →
divs → React → AI-assisted coding

Con hover que revela año y anécdota.

### 3. Proyectos
Cards tipo "achievements" de videojuego.
- **GreenkedIn** (destacado) — red profesional cannabis LATAM
- [otros que nos cuente]

### 4. Historias ("Stories" o "Vintage")
Sección dedicada a sus anécdotas de los 90:
- HotDog Pro y Rex the Dog
- Dreamweaver con frames
- Tables para layout
- Entregar AutoCAD contra las reglas
- El libro de HTML que le cambió la vida

Esta sección es lo que la hace ÚNICA. Ningún portfolio tiene esto.

### 5. Now Playing
Juegos que está jugando. Estilo Steam/Discord status.
- Currently playing
- Favoritos de siempre
- Opcional: Steam API para auto-update

### 6. Stats RPG
Skills como stats de personaje con barras:
- TypeScript Lv.99
- Rotring Lv.legendary (rusty)
- Paciencia con IE6 Lv.maxed
- Sentido común Lv.maxed

### 7. Blog (MDX)
Posts técnicos + historias.

### 8. Contacto
Form simple con confetti al enviar.

---

## Easter eggs propuestos

- **Konami code** → activa modo "1998" (todo con tables, Comic Sans, fondo estrellado)
- **Ctrl+K** → terminal oculta con comandos
- **Cursor tracer** — estela tipo pincel/Rotring
- **Hover en cada emoji** → micro-animación única
- **Scroll rápido** → disparador de easter egg random

---

## Stack técnico

- **Next.js 15** + App Router
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** para todas las animaciones
- **MDX** para blog/historias
- **next/font** para fonts
- **react-use-measure** + **@use-gesture/react** para cursor
- **canvas-confetti** para confetti en contacto
- **Vercel** para deploy (gratis)
- **i18n opcional** (ES/EN para clientes internacionales)

---

## Tipografía y colores sugeridos

**Fuentes candidatas:**
- Wotfard (display)
- Inter Tight o Uncut Sans (body)
- Iosevka o JetBrains Mono (código)

**Paleta sugerida:**
- Fondo: crema/off-white en light, gris muy oscuro (no negro puro) en dark
- Acentos: violeta + amarillo + rosa (tipo Josh pero más cálido)
- Gradientes suaves de fondo en hero

---

## Preguntas pendientes a Solange

1. ¿Algún color que ame o que odie?
2. ¿Foto real o ilustración custom en el "sobre mí"?
3. ¿Idioma: solo ES, solo EN, o bilingüe?
4. ¿Juegos/franquicias que sean parte de su identidad?
5. ¿Quiere incluir CV descargable?
6. ¿Links a redes: GitHub, LinkedIn, Twitter/X, Instagram?
7. ¿Hay algún proyecto viejo que quiera mostrar además de GreenkedIn?
8. ¿Quiere que le arme el repo y hagamos el primer commit hoy?

---

## Plan de ataque (3 sesiones)

**Día 1 (arranque):**
- Setup Next.js + Tailwind + estructura base
- Hero + timeline + about
- Deploy en Vercel con el dominio

**Día 2:**
- Proyectos + historias vintage + now playing + stats
- Dark mode
- Responsive

**Día 3:**
- Blog setup (MDX)
- Easter eggs
- Animaciones finales
- SEO + OG images

---

## Notas sobre la conversación original

- Claude le propuso la vibe Josh Comeau y le encantó
- Claude le propuso incluir videojuegos y le encantó
- La historia de HotDog Pro salió espontáneamente a las 2am
- La idea del hero con "Rotring vs HotDog Pro" vino a partir de esa charla
- Tiene miles de historias más de la época que quiere contar en el sitio
- Es una buena contadora, el sitio tiene que dar lugar a eso

---

## Cómo arrancar mañana (o cuando sea)

1. Abrir otra ventana de VS Code
2. `mkdir ~/Documents/Projects/solangegf-dev`
3. `cd ~/Documents/Projects/solangegf-dev`
4. Arrancar Claude Code en esa carpeta
5. Pegarle este archivo entero como primer mensaje
6. Decirle: "Arranquemos"

---

💜 Guardado por Solange la noche que no podía dormir
porque acababa de encontrar a alguien que entendía HotDog Pro
