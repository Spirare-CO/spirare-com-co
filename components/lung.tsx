type LungProps = {
  className?: string;
  labelled?: boolean;
};

export function Lung({ className = "", labelled = false }: LungProps) {
  return (
    <svg
      viewBox="0 0 680 900"
      className={className}
      role={labelled ? "img" : "presentation"}
      aria-hidden={labelled ? undefined : true}
      aria-label={labelled ? "Ilustración de pulmones translúcidos con el árbol bronquial" : undefined}
    >
      <defs>
        <radialGradient id="lungGlow" cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#7BDEFA" stopOpacity="0.55" />
          <stop offset="42%" stopColor="#2399F3" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#101D67" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lobe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9AE7FF" stopOpacity="0.38" />
          <stop offset="45%" stopColor="#2399F3" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#1476D4" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="lobeEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8FBFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#7BDEFA" stopOpacity="0.15" />
        </linearGradient>
        <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="340" cy="470" rx="300" ry="340" fill="url(#lungGlow)" className="drift" />

      <g className="breath">
        <path
          d="M318 150 C250 168 132 230 92 360 C52 494 78 670 168 760 C230 822 300 812 332 724 C352 668 346 560 338 470 C330 360 336 240 318 150 Z"
          fill="url(#lobe)"
          stroke="url(#lobeEdge)"
          strokeWidth="1.4"
        />
        <path
          d="M352 156 C430 168 560 236 596 372 C634 508 598 676 508 762 C444 820 372 800 346 712 C328 650 334 548 342 468 C350 360 346 230 352 156 Z"
          fill="url(#lobe)"
          stroke="url(#lobeEdge)"
          strokeWidth="1.4"
        />
        <path
          d="M346 430 C372 470 392 520 386 590 C382 640 360 690 348 710"
          fill="none"
          stroke="#7BDEFA"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />

        <g fill="none" strokeLinecap="round">
          <path d="M340 78 V188" stroke="#E8FBFF" strokeWidth="7" strokeOpacity="0.9" />
          <path d="M340 188 C340 230 300 250 250 286" stroke="#7BDEFA" strokeWidth="4.5" />
          <path d="M340 188 C340 230 392 248 444 286" stroke="#7BDEFA" strokeWidth="4.5" />
          <path d="M250 286 C210 320 176 330 150 378" stroke="#9AE7FF" strokeWidth="3" />
          <path d="M250 286 C214 348 196 390 188 450" stroke="#2399F3" strokeWidth="2.6" />
          <path d="M250 286 C268 340 262 410 246 490" stroke="#7BDEFA" strokeWidth="2.2" />
          <path d="M150 378 C124 410 112 430 108 468" stroke="#7BDEFA" strokeWidth="1.5" strokeOpacity="0.85" />
          <path d="M150 378 C138 400 150 430 168 452" stroke="#E8FBFF" strokeWidth="1.3" strokeOpacity="0.7" />
          <path d="M188 450 C160 490 154 530 166 590" stroke="#7BDEFA" strokeWidth="1.6" />
          <path d="M188 450 C206 500 198 560 184 620" stroke="#2399F3" strokeWidth="1.4" />
          <path d="M246 490 C220 540 214 600 230 670" stroke="#9AE7FF" strokeWidth="1.5" />
          <path d="M246 490 C262 550 250 620 236 690" stroke="#7BDEFA" strokeWidth="1.2" strokeOpacity="0.75" />
          <path d="M444 286 C490 322 520 338 544 390" stroke="#9AE7FF" strokeWidth="3" />
          <path d="M444 286 C478 350 496 410 486 490" stroke="#7BDEFA" strokeWidth="2.4" />
          <path d="M444 286 C430 360 446 430 470 500" stroke="#2399F3" strokeWidth="2" />
          <path d="M544 390 C566 430 570 470 552 520" stroke="#7BDEFA" strokeWidth="1.5" />
          <path d="M486 490 C510 545 506 610 478 670" stroke="#9AE7FF" strokeWidth="1.5" />
          <path d="M470 500 C492 560 486 630 460 690" stroke="#7BDEFA" strokeWidth="1.3" />
          <path d="M166 590 C150 620 156 650 176 672" stroke="#E8FBFF" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M478 670 C500 700 492 724 468 736" stroke="#E8FBFF" strokeWidth="1" strokeOpacity="0.65" />
        </g>

        <circle cx="340" cy="188" r="5" fill="#E8FBFF" />
        <circle cx="250" cy="286" r="3.5" fill="#7BDEFA" />
        <circle cx="444" cy="286" r="3.5" fill="#7BDEFA" />
        <circle cx="150" cy="378" r="2.4" fill="#E8FBFF" />
        <circle cx="544" cy="390" r="2.4" fill="#E8FBFF" />
      </g>
    </svg>
  );
}

export function BronchialMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 6 V24 M32 24 C32 30 24 32 16 40 C10 46 8 52 10 58 M32 24 C32 30 40 32 48 40 C54 46 56 52 54 58 M16 40 C12 46 14 50 18 52 M48 40 C52 46 50 50 46 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
