import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface-2)',
        ink: 'var(--text)',
        muted: 'var(--text-muted)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        border: 'var(--border)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-14px)' } },
        floatSlow: { '0%,100%': { transform: 'translateY(0px) rotate(0deg)' }, '50%': { transform: 'translateY(-10px) rotate(6deg)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        popIn: { '0%': { opacity: '0', transform: 'scale(.94)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        gradientPan: { '0%': { backgroundPosition: '0% center' }, '100%': { backgroundPosition: '220% center' } },
        auroraDrift: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(40px,-30px) scale(1.12)' },
          '100%': { transform: 'translate(-30px,20px) scale(.95)' },
        },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        scrollDot: { '0%': { opacity: '0', transform: 'translateY(0)' }, '35%': { opacity: '1' }, '100%': { opacity: '0', transform: 'translateY(12px)' } },
        pingRing: { '0%': { transform: 'scale(.65)', opacity: '.7' }, '80%,100%': { transform: 'scale(1.55)', opacity: '0' } },
        shimmer: { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        fadeUp: 'fadeUp .7s ease forwards',
        popIn: '.25s ease forwards popIn',
        gradientPan: 'gradientPan 7s ease-in-out infinite',
        auroraDrift: 'auroraDrift 22s ease-in-out infinite alternate',
        marquee: 'marquee 32s linear infinite',
        scrollDot: 'scrollDot 1.8s ease-in-out infinite',
        pingRing: 'pingRing 2.6s cubic-bezier(.22,1,.36,1) infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
