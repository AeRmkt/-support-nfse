'use client'

interface IconProps {
  size?: number
  className?: string
}

// 1. Bolt — Integração rápida
export function IconBolt({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <defs>
        <linearGradient id="g-bolt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <path d="M28 2L7 26H21L19 46L41 22H27Z" fill="url(#g-bolt)" />
    </svg>
  )
}

// 2. Shield Check — Conformidade contínua
export function IconShieldCheck({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <defs>
        <linearGradient id="g-shield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <path
        d="M24 4C24 4 5 10 5 23C5 36 13 43 24 47C35 43 43 36 43 23C43 10 24 4 24 4Z"
        fill="url(#g-shield)"
      />
      <path
        d="M15 25L21 31L34 18"
        stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// 3. Trend Up — Receita recorrente
export function IconTrendUp({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <defs>
        <linearGradient id="g-trend" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
        <linearGradient id="g-trend-v" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <rect x="4" y="32" width="10" height="12" rx="2.5" fill="url(#g-trend-v)" opacity="0.45" />
      <rect x="19" y="22" width="10" height="22" rx="2.5" fill="url(#g-trend-v)" opacity="0.7" />
      <rect x="34" y="10" width="10" height="34" rx="2.5" fill="url(#g-trend-v)" />
      <path
        d="M7 30L19 22L29 26L42 8"
        stroke="url(#g-trend)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M35 6H44V15"
        stroke="url(#g-trend)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// 4. Bar Revenue — Nova receita mensal
export function IconBarRevenue({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <defs>
        <linearGradient id="g-bar" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <rect x="4" y="28" width="11" height="16" rx="3" fill="url(#g-bar)" opacity="0.5" />
      <rect x="18.5" y="18" width="11" height="26" rx="3" fill="url(#g-bar)" opacity="0.75" />
      <rect x="33" y="6" width="11" height="38" rx="3" fill="url(#g-bar)" />
      <circle cx="38.5" cy="10" r="5" fill="white" opacity="0.2" />
      <path d="M36.5 10H40.5M38.5 7.5V12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

// 5. Users — Maior retenção
export function IconUsers({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <defs>
        <linearGradient id="g-users" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      {/* Person 2 — back right */}
      <circle cx="32" cy="16" r="7" fill="url(#g-users)" opacity="0.55" />
      <path d="M21 44C21 33 26.5 29 32 29C37.5 29 44 33 44 44Z" fill="url(#g-users)" opacity="0.55" />
      {/* Person 1 — front left */}
      <circle cx="18" cy="16" r="8" fill="url(#g-users)" />
      <path d="M4 44C4 33 10 29 18 29C26 29 32 33 32 44Z" fill="url(#g-users)" />
    </svg>
  )
}

// 6. Rocket — Escala com segurança
export function IconRocket({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <defs>
        <linearGradient id="g-rocket" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      {/* Body */}
      <path d="M24 4C15 4 10 13 10 24V35H38V24C38 13 33 4 24 4Z" fill="url(#g-rocket)" />
      {/* Left fin */}
      <path d="M10 28L4 40L14 35V28Z" fill="url(#g-rocket)" opacity="0.75" />
      {/* Right fin */}
      <path d="M38 28L44 40L34 35V28Z" fill="url(#g-rocket)" opacity="0.75" />
      {/* Window */}
      <circle cx="24" cy="21" r="5.5" fill="white" opacity="0.25" />
      <circle cx="24" cy="21" r="3" fill="white" opacity="0.45" />
      {/* Flames */}
      <path d="M16 35C16 40 19 46 24 44C29 46 32 40 32 35Z" fill="#14B8A6" opacity="0.6" />
    </svg>
  )
}

// 7. Layers — Plano por pacote
export function IconLayers({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <defs>
        <linearGradient id="g-layers" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <rect x="4" y="34" width="40" height="10" rx="3.5" fill="url(#g-layers)" opacity="0.45" />
      <rect x="4" y="21" width="40" height="10" rx="3.5" fill="url(#g-layers)" opacity="0.7" />
      <rect x="4" y="8" width="40" height="10" rx="3.5" fill="url(#g-layers)" />
    </svg>
  )
}

// 8. Diamond — Plano premium
export function IconDiamond({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <defs>
        <linearGradient id="g-diamond" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      {/* Main gem */}
      <path d="M24 4L44 20L24 46L4 20Z" fill="url(#g-diamond)" />
      {/* Top facets highlight */}
      <path d="M24 4L44 20H4Z" fill="white" opacity="0.2" />
      {/* Inner depth */}
      <path d="M24 12L38 22L24 40L10 22Z" fill="white" opacity="0.1" />
    </svg>
  )
}

// 9. Activity — Plano por uso
export function IconActivity({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <defs>
        <linearGradient id="g-activity" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <path
        d="M4 26H12L17 12L23 38L29 8L35 30L39 20H44"
        stroke="url(#g-activity)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="29" cy="8" r="3.5" fill="url(#g-activity)" />
    </svg>
  )
}
