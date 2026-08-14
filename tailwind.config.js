/** @type {import('tailwindcss').Config} */
module.exports = {
  // Which files to scan for Tailwind classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",  // If using App Router
  ],
  
  // Enable dark mode with class strategy
  darkMode: 'class',
  
  // Extend Tailwind's default theme
  theme: {
    extend: {
      // Custom colors
      colors: {
        primary: '#2563eb',        // Blue-600
        primaryDark: '#1d4ed8',    // Blue-700
        secondary: '#7c3aed',      // Purple-600
        accent: '#f59e0b',         // Amber-500
      },
      
      // Custom fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      
      // Custom keyframes for animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Custom breakpoints
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  
  // Plugins
  plugins: [],
}