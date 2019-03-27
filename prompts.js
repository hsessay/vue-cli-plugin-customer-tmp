 module.exports = [
  {
    name: 'cssPreprocessor',
    type: 'list',
    message: 'Add support for CSS pre-processors like Sass or Less',
    choices: [
      {
        name: 'Less',
        value: 'less'
      },
      {
        name: 'Sass/SCSS',
        value: 'sass'
      }
    ],
    default: 'less'
  },
  {
    name: 'Vue Router mode',
    type: 'list',
    message: 'Choice Vue Router History mode',
    choices: [
      {
        name: 'Hash',
        value: 'hash'
      },
      {
        name: 'history',
        value: 'history'
      }
    ],
    default: 'hash'
  },
  {
    name: 'Typescript',
    type: 'confirm',
    message: 'Add support for the TypeScript language (default: None)',
    default: false
  },
  {
    name: 'pwa',
    type: 'confirm',
    message: 'Progressive Web App (PWA) Support (default: None)',
    default: false
  },
  {
    name: 'SSR',
    type: 'list',
    message: 'Add support for Server-Side Rendering',
    choices: [
      {
        name: 'None',
        value: 'none'
      },
      {
        name: 'Nuxt',
        value: 'nuxt'
      } 
    ],
    default: 'none'
  },
  {
    name: 'Server Port',
    type: 'input',
    message: 'Input DevServer Port(default: 8081)',
    default: '8081',
    validate: (n) => {
      return !isNaN(+n)
    }
  }
]
