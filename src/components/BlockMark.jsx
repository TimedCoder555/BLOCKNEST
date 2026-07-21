// BlockMark — the site's signature motif: a single isometric cube made of
// three rhombic faces, echoing a Minecraft block without leaning on pixel-art
// cliché. Reused as the logo, the loader, and section dividers.
export default function BlockMark({ size = 28, spin = false, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={`${spin ? 'animate-[spin_2.4s_linear_infinite]' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* top face */}
      <path d="M20 2 L36 11 L20 20 L4 11 Z" fill="#F3E8BC" />
      {/* left face */}
      <path d="M4 11 L20 20 L20 38 L4 29 Z" fill="#035352" />
      {/* right face */}
      <path d="M36 11 L20 20 L20 38 L36 29 Z" fill="#014140" />
    </svg>
  )
}
