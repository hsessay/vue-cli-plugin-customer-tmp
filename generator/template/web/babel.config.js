module.exports = {
  // presets: ['@vue/app']
  "presets": ["es2015", { "modules": false }],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
 