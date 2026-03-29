/**
 * Tailwind theme — Editorial Organicism (see DESIGN.md §2)
 * Primary core / container MUST match the doc: #47532b / #5f6b41 (olive)
 * Secondary: #a03f30 / #fe8672 (terracotta) · Background: #fcf9ef
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // —— Core palette (DESIGN.md §2)
        primary: '#47532b',
        'primary-container': '#5f6b41',
        'on-primary': '#ffffff',
        'on-primary-container': '#fcfdf8',

        secondary: '#a03f30',
        'secondary-container': '#fe8672',
        'on-secondary-container': '#741f13',
        'on-secondary': '#ffffff',

        background: '#fcf9ef',
        surface: '#fcf9ef',
        'on-background': '#1c1c16',
        'on-surface': '#1c1c16',
        'on-surface-variant': '#524a42',

        // Surface hierarchy (Levels 0–3)
        'surface-container-low': '#f7f4e9',
        'surface-container': '#f1eee4',
        'surface-container-high': '#ebe7dc',
        'surface-container-highest': '#e3ddd0',
        'surface-container-lowest': '#ffffff',
        'surface-bright': '#fcf9ef',
        'surface-dim': '#e8e4db',
        'surface-variant': '#e5e0d6',
        'surface-tint': '#5f6b41',

        outline: '#8a8278',
        'outline-variant': '#cfc8be',

        // Fixed chips / soft fills (editorial support)
        'primary-fixed': '#e8efe0',
        'primary-fixed-dim': '#c5d4b8',
        'on-primary-fixed': '#1a1f12',
        'on-primary-fixed-variant': '#2d3820',

        'secondary-fixed': '#fde8e4',
        'secondary-fixed-dim': '#f8c9c0',
        'on-secondary-fixed': '#4a1410',
        'on-secondary-fixed-variant': '#741f13',

        tertiary: '#7c5c20',
        'tertiary-container': '#c49a3a',
        'tertiary-fixed': '#f0e6c8',
        'tertiary-fixed-dim': '#dcc89a',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#1f1606',
        'on-tertiary-fixed': '#221a08',
        'on-tertiary-fixed-variant': '#5c4a1f',

        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',

        inverse: '#32302b',
        'inverse-on-surface': '#f5f0e8',
        'inverse-primary': '#c5d4b8',
        'inverse-surface': '#32302b',
      },
      fontFamily: {
        headline: ['Noto Serif', 'serif'],
        display: ['Noto Serif', 'serif'],
        body: ['Be Vietnam Pro', 'sans-serif'],
        label: ['Be Vietnam Pro', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'title-md': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-md': ['1rem', { lineHeight: '1.55' }],
        'label-md': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },
      letterSpacing: {
        'display-tight': '-0.02em',
      },
      borderRadius: {
        // DESIGN.md §5: buttons rounded-md 0.75rem, cards rounded-lg 1rem
        DEFAULT: '0.25rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      boxShadow: {
        // DESIGN.md §4 — ambient light, on-surface tint
        ambient: '0 12px 32px rgba(28, 28, 22, 0.06)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(145deg, #47532b 0%, #5f6b41 100%)',
        'gradient-secondary': 'linear-gradient(145deg, #a03f30 0%, #fe8672 100%)',
      },
      backdropBlur: {
        glass: '20px',
      },
    },
  },
  plugins: [],
}
