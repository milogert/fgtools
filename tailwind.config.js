module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    './components/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      },
      aspectRatio: {
        'spell-card': '2.5 / 3.5',
      },
    },
  },
  variants: {
    // extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer'),
  ],
}
