// "Vibes": sets curados de color + tipografía que combinan entre sí.
// El id se escribe en <html data-vibe="…">; globals.css define color/fonts por id.
// Acá vive además la paleta del CursorField y si la onda es oscura (blend screen).

export type Vibe = {
  id: string;
  name: string;
  dark: boolean;
  palette: string[];
};

export const VIBES: Vibe[] = [
  {
    id: "blueprint",
    name: "blueprint",
    dark: false,
    palette: ["#a5b4fc", "#67e8f9", "#f9a8d4", "#fcd34d", "#86efac", "#c4b5fd", "#93c5fd"],
  },
  {
    id: "ink",
    name: "ink",
    dark: true,
    palette: ["#818cf8", "#22d3ee", "#f472b6", "#fbbf24", "#4ade80", "#a78bfa", "#60a5fa"],
  },
  {
    id: "cream",
    name: "cream",
    dark: false,
    palette: ["#f4b483", "#e89f8b", "#ddc18a", "#bcc79a", "#e0a6b0", "#d8b08a"],
  },
  {
    id: "editorial",
    name: "editorial",
    dark: false,
    palette: ["#c7d2fe", "#a5f3fc", "#ddd6fe", "#bbf7d0", "#fbcfe8", "#bfdbfe"],
  },
  {
    id: "terminal",
    name: "terminal",
    dark: true,
    palette: ["#4ade80", "#22d3ee", "#a3e635", "#fde047", "#34d399", "#2dd4bf"],
  },
];

export const DEFAULT_VIBE = "ink";

export function getVibe(id: string | null): Vibe {
  return VIBES.find((v) => v.id === id) ?? VIBES[0];
}
