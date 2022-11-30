/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        socialsEntry : {
          '0%': {transform: 'translateX(-20vw)'},
          '50%': {transform: 'translateX(10vw)'},
          '100%': {transform: 'translateX(0)'},
        },
        contactBtnEntry : {
          '0%': {transform: 'translateX(20vw)'},
          '50%': {transform: 'translateX(-10vw)'},
          '100%': {transform: 'translateX(0)'},
        },
        descripEntry : {
          from : {transform: 'translateY(50px)'}
        },
        avatarEntry : {
          from: {transform: 'scale(.1)'}
        },
        navLinksEntry : {
          from : {transform: 'translateY(-50px)'}
        },
        projectCardOverlay: {
          from: {opacity: '0'}
        }
      },
      animation: {
        'socials-entry': 'socialsEntry 1s ease',
        'contact-btn-entry' : 'contactBtnEntry 1s ease',
        'descrip-entry' : 'descripEntry 1s ease',
        'avatar-entry' : 'avatarEntry 1s ease',
        'navlinks-entry' : 'navLinksEntry 1s ease',
        'projectcard-overlay' : 'projectCardOverlay .5s ease'
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ]
}
