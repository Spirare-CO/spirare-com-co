"use client";

import Link from "next/link";
import { track, type AnalyticsEvent } from "@/lib/analytics";

export function TrackedLink({
  href,
  event,
  className,
  children,
}: {
  href: string;
  event: AnalyticsEvent;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={className} onClick={() => track(event)}>
      {children}
    </Link>
  );
}
