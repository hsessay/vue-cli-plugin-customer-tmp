const fs = require ('fs');

module.exports = (api, opts, rootOpts) => {
  // 添加 npm 命令
  api.extendPackage ({
    scripts: {
      dev: 'vue-cli-service serve --copy',
      build: 'vue-cli-service build',
      review: 'serve -s dist',
      lint: 'vue-cli-service lint',
      serve: 'vue-cli-service serve',
    },
  });

  // 开发依赖包
  api.extendPackage ({
    devDependencies: {
      serve: '^10.0.1',
      'style-resources-loader': '1.2.1',
      "vue-template-compiler": "^2.5.21",
      less: '^2.7.2',
      'less-loader': '^3.0.0',
      "vue-template-compiler": '^2.5.21', 
    },
  });

  api.extendPackage ({
    dependencies: {
      flyio: '^0.6.14', 
      lodash: '^4.17.11',
      'normalize.css': '^8.0.0',
      nprogress: '^0.2.0',
      countup: '^1.8.2', 
      vant: '^1.6.9',
      "weixin-js-sdk": "^1.4.0-test",
      "vue-qr": "^1.5.2",
      vconsole: "^3.3.0",
    },
  }); 

  // 扩展 .eslintrc 配置
  api.extendPackage ({
    eslintConfig: {
      rules: {
        'vue/no-parsing-error': [2, {'x-invalid-end-tag': false}],
      },
    },
  });

  // 删除多余的模板
  api.render (files => {
    Object.keys (files)
      .filter (path => path.startsWith ('src/') || path.startsWith ('public/') || path.startsWith('tests/'))
      .forEach (path => delete files[path]);
  });

  api.render('./templates');
 
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true
  })
};
