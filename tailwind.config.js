/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        nest: {
          bg: '#F3E8BC',      // Sidecar Yellow — page background
          card: '#FFF8DD',    // card surface
          teal: '#035352',    // Authentic Teal — primary
          deep: '#014140',    // accent, hovers, emphasis
          ink: '#0B2322'      // near-black teal for body copy
        }
      },
      borderColor: {
        nest: 'rgba(3,83,82,0.15)'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif']
      },
      borderRadius: {
        xl2: '1.25rem',
        block: '0.6rem'
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(3,83,82,0.25)',
        card: '0 4px 18px -6px rgba(3,83,82,0.15)'
      },
      backgroundImage: {
        'grid-dots': 'radial-gradient(rgba(3,83,82,0.14) 1px, transparent 1px)'
      },
      backgroundSize: {
        'grid-16': '16px 16px'
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
}
