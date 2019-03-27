# vue-cli-plugin-customer-tmp
[![Build Status](https://travis-ci.com/yuezhilunhui2009/vue-cli3-preset-seed.svg?branch=master)](https://travis-ci.com/yuezhilunhui2009/vue-cli3-preset-seed)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

vue-cli-plugin-customer-tmp 是一个 web 前端项目骨架，用于配合 Vue.js 开发标准工具 [Vue CLI 3](https://cli.vuejs.org/zh/) 在创建新项目时使用。

## 准备工作
确认计算机已安装 [nodejs v8.11.0+](https://nodejs.org/en/download/) 与 npm

## 快速开始
```bash
# 安装 vue-cli
npm install -g @vue/cli

# 根据远程 preset 创建项目 
vue create --preset hsessay/vue-cli-plugin-customer-tmp project-name 

# 本地预览
# 示例链接：http://localhost:8080/simple.html
# 示例链接：http://localhost:8080/verbose.html
cd preset-seed-demo && npm run serve

# 构建测试版本
npm run build:test

# 构建部署版本
npm run build:prod

# 代码提交
git-cz
```

## 环境变量
* dev 模式
```bash
NODE_ENV=development
VUE_APP_BUILD_MODE=DEV
```
* test 模式
```bash
NODE_ENV=production
VUE_APP_BUILD_MODE=TEST
```
* prod 模式
```bash
NODE_ENV=production
VUE_APP_BUILD_MODE=PROD
```

2018/10/15 ~ 2018/10/19

- [x] commitizen、cz-conventional-changelog 配置，辅助生成标准提交格式
- [x] commitlint、@commitlint/config-conventional 配置，检验提交信息格式
- [x] git-hook 配置，强制 git 提交前执行 eslint、commitlint
- [x] 自动 @import variables.less
- [ ] API 层
- [x] proxy 配置
- [x] 环境变量配置
- [x] vuex、vue-router 示例
- [x] simple、verbose 两个示例页面

