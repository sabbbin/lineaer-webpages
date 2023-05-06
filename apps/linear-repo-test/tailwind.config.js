const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const { readBuilderProgram } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      sans: 'sans-serif',
    },
    fontSize: {
      xs: '1.3rem',
      sm: ['.14rem', '1.3'],
      md: '1.6rem',
      lg: ['2.2rem', '1.3'],
      xl: '2.4rem',
      '2xl': '2.6rem',
      '3xl': '3.2rem',
      '4xl': '4rem',
      '5xl': '4.4rem',
      '6xl': '4.8rem',

      '7xl': ['8rem', 1],
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      background: '#000212',
      gray: '#858699',
      'white-a08': 'rgba(255,255,255,0.08)',
      'grey-dark': '#222326',
      'primary-text': 'rgb(180,-188,-208)',
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',

      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',

      10: '4rem',
      11: '4.4rem',
      12: '4.8rem',
      'navigation-height': 'var(--navigation-height)',
    },
    backgroundImage: {
      'primary-gradient':
        'linear-gradient(93.44deg , rgb(45,66,103), 9.155%, rgb(86,67,204))',
      'page-gradient':
        'radial-gradient(ellipse 50% 80% at 20% 40% , rgba(93,52,221,0.1), transparent), radial-gradient(ellipse 50% 80% ad 80% 50%, rgba(120,119,198,0.15), transparent)',
      'hero-gradient':
        'radial-gradient(ellipse 50% 80% at 20% 40% , red, transparent)  radial-gradient(ellipse 50% 80% at 80% 50%, blue, transparent)',
      'hero-glow':
        'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)',
      'glow-lines':
        'linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)',
      'radial-faded':
        'radial-gradient(circle at bottom center,var(--color),transparent 70%)',
      'glass-gradient':
        'radial-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255, 0.05) 100%)',
    },
    boxShadow: {
      primary: 'rgb(80 63 205 / 50%) 0px 1px 40px',
    },

    transitionDelay: {
      0: '0ms',
    },
    keyframes: {
      'fade-in': {
        from: { opacity: 0, transform: 'translateY(-10px)' },
        to: { opacity: 1, transform: 'none' },
      },
      'image-glow': {
        '0%': {
          opacity: 0,
          'animation-timing-function': 'cubic-bezier(0.74,0.25,0.76,1)',
        },
        '10%': {
          opacity: 1,
          'animation-timing-function': 'cubic-bezier(0.12,0.01,0.08,0.99)',
        },
        '100%': {
          opacity: 0.2,
        },
      },
      'sketch-lines': {
        '0%': { 'stroke-dashoffset': 1 },
        '50%': { 'stroke-dashoffset': 0 },
        '99%': { 'stroke-dashoffset': 0 },
        '100%': { visiblity: 'hidden' },
      },
      'glow-line-horizontal': {
        '0%': { opacity: 0, transform: 'translateX(0)' },
        '5%': { opacity: 1, transform: 'translateX(0)' },
        '90%': { opacity: 1 },
        '100%': {
          opacity: 0,
          transform: 'translateX(min(60vw, 45rem))',
        },
      },
      'glow-line-vertical': {
        '0%': { opacity: 0, transform: 'translateY(0)' },
        '5%': { opacity: 1, transform: 'translateY(0)' },
        '90%': {
          opacity: 1,
        },
        '100%': { opacity: 0, transform: 'translateY(min(21vw,45rem))' },
      },
      zap: {
        '0%, 9%, 11%, 100%': {
          fill: 'transparent',
        },
        '10%': {
          fill: 'white',
        },
      },
    },
    animation: {
      'fade-in': 'fade-in 1200ms  var(--animation-delay, 0ms) ease forwards',
      'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
      'sketch-lines': 'sketch-lines  1000ms ease-out forwards',
      'glow-line-horizontal': 'glow-line-horizontal  1000ms ease-in forwards',
      'glow-line-vertical':
        'glow-line-vertical var(--animation-duration) ease-in forwards',
      zap: 'zap 2250ms calc(var(--index) *20ms) linear infinite',
    },
  },
  plugins: [],
};
