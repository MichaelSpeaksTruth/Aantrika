/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cotton: '#F7F3EE',
        sand: '#E8DED1',
        moss: '#5F6F52',
        sage: '#A9B29D',
        terracotta: '#C97C5D',
        dustyRose: '#D9B8A8',
        blush: '#F6D5DD',
        rose: '#D99AAE',
        petal: '#F7E1E7',
        soil: '#3E322C',
        ink: '#1F1F1F',
        charcoal: '#2B2724'
      },
      boxShadow: {
        soft: '0 16px 36px rgba(62, 50, 44, 0.065)',
        paper: '0 12px 28px rgba(31, 31, 31, 0.065), 0 1px 2px rgba(217, 154, 174, 0.06)',
        inward: 'inset 0 0 0 1px rgba(31, 31, 31, 0.04)'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif']
      },
      borderRadius: {
        soft: '28px',
        panel: '36px'
      },
      backgroundImage: {
        'paper-gradient': 'radial-gradient(circle at left top, rgba(247,243,238,0.95), rgba(232,222,209,0.95) 45%, transparent 100%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        revealIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        reveal: 'revealIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both'
      }
    }
  },
  plugins: []
};
