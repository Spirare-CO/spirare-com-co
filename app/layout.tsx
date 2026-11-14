import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SPIRARE — Respirar mejor empieza aquí",
    template: "%s — SPIRARE",
  },
  description: site.support,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: "SPIRARE — Respirar mejor empieza aquí",
    description: site.support,
  },
  twitter: {
    card: "summary_large_image",
    title: "SPIRARE — Respirar mejor empieza aquí",
    description: site.support,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.support,
  knowsAbout: [
    "Neumología",
    "Espirometría",
    "FeNO",
    "Terapia respiratoria",
    "Poligrafía respiratoria",
    "CPAP",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <div id="contenido">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
