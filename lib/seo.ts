import type { Metadata } from "next";

export function meta(path: string, title: string, description: string, absolute = false): Metadata {
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}
