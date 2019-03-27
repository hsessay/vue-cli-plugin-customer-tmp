function renderFiles (api, opts) {

  const fs = require('fs')

  // 通过preset的形式配置opts.router，这里则不需要
  const routerPath = api.resolve('./src/router.js')
  opts.router = opts.router || fs.existsSync(routerPath)

  const filesToDelete = [
    'src/assets/logo.png',
    'src/views/About.vue',
    'src/views/Home.vue',
    'src/store.js',
    'src/views/Hello.vue'
  ]

  console.log('\n[custom-tpl plugin tips]\n \t GeneratorAPI options:', opts)

  if (opts.replaceTemplates) {

    // https://github.com/vuejs/vue-cli/issues/2470
    api.render(files => {
      Object.keys(files)
        .filter(name => filesToDelete.indexOf(name) > -1)
        .forEach(name => delete files[name])
    })

    api.render('./templates/base') 
  }
}

function addDependencies (api) {
  api.extendPackage({
    dependencies: {
      'flyio': '^0.6.14', 
      'lodash': '^4.17.11',
      'normalize.css': '^8.0.0',
      'nprogress': '^0.2.0',
      'countup': '^1.8.2', 
      'vant': '^1.6.9',
      "weixin-js-sdk": "^1.4.0-test",
      "vue-qr": "^1.5.2",
      'vconsole': "^3.3.0",
      "vuex": "^3.1.0"
    },
    devDependencies: { 
      'style-resources-loader': '1.2.1',
      'vue-template-compiler': '^2.5.21',
      'less': '^2.7.2',
      'less-loader': '^3.0.0' 
    }
  })
}

module.exports = (api, opts, rootOpts) => {

  addDependencies(api)

  renderFiles(api, opts)
}