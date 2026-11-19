import Image from "next/image";

type LogoProps = {
  variant?: "marea" | "light";
  className?: string;
};

export function Logo({ variant = "marea", className = "h-8 w-auto" }: LogoProps) {
  const src = variant === "light" ? "/brand/logo-horizontal-light.png" : "/brand/logo-horizontal.png";
  return (
    <Image
      src={src}
      alt=""
      width={1200}
      height={316}
      className={`block h-full w-auto max-h-full object-contain ${className}`}
      style={{ width: "auto", height: "100%" }}
      priority={variant === "marea"}
    />
  );
}

export function AirCycle({ className = "", tone = "marea" }: { className?: string; tone?: "marea" | "mist" }) {
  const src = tone === "mist" ? "/brand/symbol-mist.png" : "/brand/symbol.png";
  return <Image src={src} alt="" width={800} height={786} className={className} style={{ width: "auto", height: "auto" }} />;
}
