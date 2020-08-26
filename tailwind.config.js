/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  // },
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#d1dae3',
      secondary: '#5e6679',
      danger: '#e3342f',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#d1dae3',
      secondary: '#5e6679',
      danger: '#e3342f',
    }),
    placeholderColor: (theme) => ({
      ...theme('colors'),
      primary: '#d1dae3',
      secondary: '#5e6679',
      danger: '#e3342f',
    }),
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
