module.exports = [
  {
    // css预编译，默认less
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
  
  // 是否支持pwa，默认否
  {
    name: 'pwa',
    type: 'confirm',
    message: 'Progressive Web App (PWA) Support (default: None)',
    default: false
  }
   
]
