import type { Metadata } from "next";
import { Libre_Baskerville, Parkinsans, Roboto } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const park = Parkinsans({
  subsets: ["latin"],
  variable: "--font-park",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "spirare — Respirar mejor empieza aquí",
    template: "%s — spirare",
  },
  description: site.support,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: "spirare — Respirar mejor empieza aquí",
    description: site.support,
  },
  twitter: {
    card: "summary_large_image",
    title: "spirare — Respirar mejor empieza aquí",
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
    <html lang="es" className={`${park.variable} ${roboto.variable} ${baskerville.variable}`}>
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
