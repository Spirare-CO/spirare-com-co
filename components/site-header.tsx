"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/pacientes", label: "Pacientes" },
  { href: "/instituciones", label: "Instituciones" },
  { href: "/pacientes/educacion", label: "Educación" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const nav = mobileNav.current;
    const previous = document.activeElement as HTMLElement | null;
    nav?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-marea transition ${
        scrolled || open ? "bg-bruma/95 shadow-[0_1px_0_rgba(0,69,90,0.08)] backdrop-blur-md" : "bg-bruma"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 md:h-[4.5rem] md:px-8">
        <Link href="/" className="flex h-8 shrink-0 items-center md:h-9" aria-label="spirare, inicio">
          <Logo className="h-8 max-h-8 w-auto md:h-9 md:max-h-9" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  (pathname.startsWith(`${link.href}/`) &&
                    !links.some(
                      (other) =>
                        other.href !== link.href &&
                        other.href.startsWith(`${link.href}/`) &&
                        (pathname === other.href || pathname.startsWith(`${other.href}/`)),
                    ));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${active ? "text-pulso" : "text-marea/80 hover:text-marea"}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <WhatsAppCTA intent="cita" event="agendar_cita" className="min-h-11 px-3 lg:min-h-10 lg:px-5">
            <span className="lg:hidden">Cita</span>
            <span className="hidden lg:inline">Agendar cita</span>
          </WhatsAppCTA>
          <button
            ref={menuButton}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-marea/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span className={`h-px bg-marea transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px bg-marea transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav ref={mobileNav} id="mobile-nav" className="max-h-[calc(100svh-4rem)] overflow-auto border-t border-marea/10 bg-bruma px-4 py-6 lg:hidden" aria-label="Móvil">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-3 text-2xl display text-marea">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <WhatsAppCTA intent="cita" event="agendar_cita" className="mt-6 w-full">
            Agendar cita
          </WhatsAppCTA>
        </nav>
      ) : null}
    </header>
  );
}
