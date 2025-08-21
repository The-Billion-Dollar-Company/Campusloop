/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    // add other paths if needed
  ],
  theme: {
    extend: {
      colors: {
        // Custom Campus Loop Color Palette
        campus: {
          // Primary greens
          'forest': '#2D473E',      // Dark forest green
          'sage': '#8EA77B',        // Medium sage green
          'mint': '#D7E4C2',        // Light mint green

          // Secondary grays
          'slate': '#788881',       // Blue-gray slate
          'ash': '#ABB2B0',         // Light ash gray
          'pearl': '#F6F2EE',       // Off-white pearl
        },

        // Semantic colors using the palette
        primary: {
          50: '#F6F2EE',   // pearl
          100: '#D7E4C2',  // mint
          200: '#8EA77B',  // sage
          300: '#788881',  // slate
          400: '#2D473E',  // forest
          500: '#2D473E',  // forest (main)
          600: '#244037',  // darker forest
          700: '#1B3229',  // darkest forest
          800: '#12241B',
          900: '#0A150E',
        },

        secondary: {
          50: '#F6F2EE',   // pearl
          100: '#ABB2B0',  // ash
          200: '#788881',  // slate
          300: '#6B7B74',
          400: '#5E6E67',
          500: '#788881',  // slate (main)
          600: '#4A5851',
          700: '#3C4741',
          800: '#2E3631',
          900: '#202521',
        },

        // Status colors that complement the palette
        success: '#8EA77B',  // sage green
        warning: '#D4B96A',  // warm beige
        error: '#B85450',    // muted red
        info: '#6B8CAE',     // muted blue
      },

      // Custom spacing that works well for mobile
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      // Roboto Font Family
      fontFamily: {
        'roboto': ['Roboto', 'system-ui', 'sans-serif'],
        'sans': ['Roboto', 'system-ui', 'sans-serif'], // Override default sans
      },

      // Custom Typography Scale - Roboto
      fontSize: {
        // Headlines
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '400' }],  // Roboto 32/40
        'headline-sm': ['24px', { lineHeight: '32px', fontWeight: '400' }],  // Roboto 24/32

        // Titles
        'title-lg': ['22px', { lineHeight: '28px', fontWeight: '500' }],     // Roboto 22/28
        'title-md': ['16px', { lineHeight: '24px', fontWeight: '500' }],     // Roboto 16/24
        'title-sm': ['14px', { lineHeight: '20px', fontWeight: '500' }],     // Roboto 14/20

        // Body
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],      // Roboto 16/24
        'body-md': ['14px', { lineHeight: '20px', fontWeight: '400' }],      // Roboto 14/20

        // Labels
        'label-lg': ['14px', { lineHeight: '20px', fontWeight: '500' }],     // Roboto 14/20
        'label-md': ['12px', { lineHeight: '16px', fontWeight: '500' }],     // Roboto 12/16
      },

      // Custom shadows for depth
      boxShadow: {
        'campus': '0 4px 14px 0 rgba(45, 71, 62, 0.1)',
        'campus-lg': '0 10px 25px 0 rgba(45, 71, 62, 0.15)',
      },

      // Custom border radius
      borderRadius: {
        'campus': '12px',
        'campus-lg': '16px',
        'campus-xl': '24px',
      },
    },
  },
  plugins: [],
};

