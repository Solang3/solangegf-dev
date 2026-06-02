import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Press_Start_2P,
  Syne,
  Fraunces,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";
import { VIBES, DEFAULT_VIBE } from "@/lib/vibes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

// Fuentes de las "vibes" extra — sin preload (se cargan al cambiar la onda).
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solangegf.dev"),
  title: {
    default: "Solange Gonzalez — Full-stack developer & AI builder",
    template: "%s · solangegf.dev",
  },
  description:
    "Desarrolladora full-stack y AI builder con 20+ años. Escribo HTML desde 1994. Buenos Aires, Argentina.",
  openGraph: {
    title: "Solange Gonzalez — Full-stack developer & AI builder",
    description:
      "20+ años construyendo producto digital. AI-native. Buenos Aires, Argentina.",
    url: "https://solangegf.dev",
    siteName: "solangegf.dev",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrains.variable} ${pressStart.variable} ${syne.variable} ${fraunces.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var v=localStorage.getItem('solangegf-vibe');var ok=${JSON.stringify(
              VIBES.map((x) => x.id),
            )};if(ok.indexOf(v)<0){v='${DEFAULT_VIBE}';}document.documentElement.setAttribute('data-vibe',v);}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
