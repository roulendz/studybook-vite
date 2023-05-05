const plugin = require("tailwindcss/plugin");

module.exports = {
  corePlugins: {},
  content: [
    "./layouts/**/*.htm",
    "./pages/**/*.htm",
    "./pages/**/*.js",
    "./partials/**/*.htm",
    "./partials/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: {"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"},
        //   primary: {
        //     '50': '#fdf2f7',
        //     '100': '#fbe8f2',
        //     '200': '#f9d1e5',
        //     '300': '#f6abcf',
        //     '400': '#ef77ae',
        //     '500': '#e64e8f',
        //     '600': '#d42e6e',
        //     '700': '#b81e54',
        //     '800': '#981c46',
        //     '900': '#7f1c3e',
        //     '950': '#4d0a21',
        // },
      },
      transitionDuration: {
        // '0': '0ms',
      },
      gridTemplateColumns: {
        full: "100%",
        // 'social': 'repeat(auto-fill, 40px)',
        // 'payments': 'repeat(auto-fit, 56px)',
      },
      gridTemplateRows: {
        // 'auto-fr-auto': 'auto 1fr auto',
      },
      outline: {
        // blue: ['1px dashed #1E40AF', '1px'],
      },
      backgroundSize: {
        // '45': '45%',
        // '65': '65%',
        // '75': '75%',
        // 'info-icon': '12.5rem',
      },
      backgroundImage: {
        // 'check': "url('/themes/studybook-vite/assets/images/check.svg')",
        // 'check-black': "url('/themes/studybook-vite/assets/images/check-black.svg')"
      },
      fontSize: {
        // error: ["9rem", "1"],
      },
      maxWidth: {
        // screen: "100vw",
        // "screen-3xl": "1920px",
        // 225: "900px",
      },
      padding: {
        // 54: "13.5rem",
        // 57: "14.25rem",
      },
      margin: {
        // "-screen-1/2": "-50vw",
      },
      maxHeight: {
        // 160: "40rem",
      },
      minWidth: {
        // 18: "72px",
      },
      width: {
        // 90: "360px",
        // 174: "696px",
        // 23: "92px",
        // 174: "696px",
        // 225: "900px",
      },
      height: {
        // "screen-3xl": "1920px",
        // 225: "900px",
        // 23: "92px",
        // 131: "524px",
      },
      spacing: {
        // 2.25: '9px',
        // 1.75: '7px',
        // 0.25: '1px',
      },
      screens: {
        // 'ml': '840px',
      },
      // margin: ['first', 'last'],
      // textColor: ['active', 'focus-visible', 'visited'],
      // outline: ['focus-visible'],
      // backgroundColor: ['group-focus', 'active', 'focus-visible', 'disabled', 'even'],
      // ringWidth: ['focus-visible'],
      // ringColor: ['hover', 'active', 'focus', 'focus-visible'],
      // ringOffsetWidth: ['responsive', 'focus-visible', 'focus'],
      // opacity: ['hover', 'focus'],
      // fill: ['hover', 'group-hover', 'group-focus', 'focus'],
      // stroke: ['hover', 'group-hover', 'group-focus', 'focus'],
      // width: ['hover'],
      // borderWidth: ['first', 'last']
    },
    fontFamily: {
      //     'body': [
      //   'Inter',
      //   'ui-sans-serif',
      //   'system-ui',
      //   '-apple-system',
      //   'system-ui',
      //   'Segoe UI',
      //   'Roboto',
      //   'Helvetica Neue',
      //   'Arial',
      //   'Noto Sans',
      //   'sans-serif',
      //   'Apple Color Emoji',
      //   'Segoe UI Emoji',
      //   'Segoe UI Symbol',
      //   'Noto Color Emoji'
      // ],
      //     'sans': [
      //   'Inter',
      //   'ui-sans-serif',
      //   'system-ui',
      //   '-apple-system',
      //   'system-ui',
      //   'Segoe UI',
      //   'Roboto',
      //   'Helvetica Neue',
      //   'Arial',
      //   'Noto Sans',
      //   'sans-serif',
      //   'Apple Color Emoji',
      //   'Segoe UI Emoji',
      //   'Segoe UI Symbol',
      //   'Noto Color Emoji'
      // ]
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss-debug-screens"),
    require("prettier-plugin-tailwindcss"),
    // plugin(function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.separator': {
    //       content: 'url(/themes/studybook-vite/assets/images/separator.svg)',
    //     }
    //   };
    //   addUtilities(newUtilities, ['before'])
    // }),

    // plugin(({ addVariant, e }) => {
    //   addVariant('backdrop', ({ modifySelectors, separator }) => {
    //     modifySelectors(({ className }) => `.${e(`backdrop${separator}${className}`)}::backdrop`)
    //   })
    // }),
  ],
};
