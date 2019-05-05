# vue-cli-plugin-customer-tmp 

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
cd project-name && npm run serve

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
* prod 模式
```bash
NODE_ENV=production
VUE_APP_BUILD_MODE=PROD
``` 
