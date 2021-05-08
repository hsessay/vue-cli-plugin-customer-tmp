const os = require('os')
const fs = require('fs')
const path = require('path')

module.exports = (api, options, rootOptions) => {
  // 命令
  api.extendPackage({
    scripts: {
      'lint:fix': 'vue-cli-service lint --fix',
      'build:sit': 'vue-cli-service build --mode sit',
      'build:uat': 'vue-cli-service build --mode uat',
      'build:prod': 'vue-cli-service build --mode production'
    }
  }) 

  // 项目依赖
  api.extendPackage({
    dependencies: {
      "@htong/net": "^1.0.4",
      "@htong/common": "^1.0.27",
      'vue-router': '^3.0.1',
      'vuex': '^3.0.1',
      'normalize.css': '^8.0.0',
      'nprogress': '>=0.2.0',
      'vue-qr': '>=1.5.2',
      "js-base64": "^2.5.1",
    }
  })
  let platformDependecies = {}

  if (options.moblie) { 
    api.extendPackage({
      dependencies: { 
        'weixin-js-sdk': '^1.4.0-test',
        'vconsole': '>=3.3.0',
        'flyio': '>=0.6.14',
        'vant': '>=2.1.1', 
        
      }
    })  
  } else {
    api.extendPackage({dependencies: {"element-ui": "^2.10.1",}})
    api.extendPackage({devDependencies: {"babel-preset-es2015": "^6.24.1"}})
  }

  

  // css 预处理 - sass
  // 在 preset.json cssPreprocessor 配置
  // 会自动添加 sass 依赖
  // 自动配置 loader

  // 添加 postcss 插件
  api.extendPackage({
    devDependencies: {
      // 'postcss-px-to-viewport': '0.0.3',
      'babel-plugin-import': '^1.11.0',
      "babel-plugin-component": "^1.1.1",
    }
  })


  // api.extendPackage({
  //   postcss: {
  //     'plugins': {
  //       'autoprefixer': {},
  //       'postcss-px-to-viewport': {
  //         'viewportWidth': 750,
  //         'viewportHeight': 1334,
  //         'unitPrecision': 3,
  //         'viewportUnit': 'vw',
  //         'selectorBlackList': [
  //           'ignore'
  //         ],
  //         'minPixelValue': 1,
  //         'mediaQuery': false
  //       }
  //     }
  //   }
  // })

  // 自动导入
  api.extendPackage({
    devDependencies: {
      'style-resources-loader': '1.2.1'
    }
  })

  // eslint
  // 有一些功能在 preset.json 中配置，例如：
  // package.json devDependencies 包含 "@vue/eslint-config-standard"
  // .eslintrc extends 包含 "@vue/standard"
  // package.json gitHooks 包含 "pre-commit": "lint-staged"
  api.extendPackage({
    eslintConfig: {
      rules: {
        'indent': ['error', 2],
        'vue/script-indent': ['error', 2]
      }
    }
  })
 

  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })

  // 生成项目文件
  if (options.moblie) {
    api.render('./template/moblie')
  } else {
    api.render('./template/web')
  }
  

  // 屏蔽 generator 之后的文件写入操作
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true
  })
}
