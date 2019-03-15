## 工程目录说明

```
.
├── README.md 项目说明
├── babel.config.js  ES6语法编译等配置
├── node_modules node包管理模块
├── doc 项目相关文档
│   ├── description-of-project-catalogue.md 目录工程说明文档
│   ├── encoding-specification.md 编码规范补充文档
│   ├── images 配图
│   │   ├── components-files.png
│   │   ├── user-code-new.png
│   │   ├── user-code-vscode.png
│   │   └── user-code.png
│   └── vue-base-environment-configuration.md 基础工程环境配置
├── package-lock.json
├── package.json 项目及工具的依赖配置文件
├── public 公共文件，如index.html入口文件 
│   └── index.html
└── src
    ├── App.vue vue的根组件
    ├── api 网络请求模块
    │   └── network.js
    ├── assets 资源文件，如样式类文件(css，less，sass)
    │   ├── iconfonts
    │   └── images 
    ├── others 其他类型文件
    ├── components 共用业务组件，必要时可按类划分 
    │   └── SlideBar.vue 
    ├── store.js vuex模块，必要时可单独成文件夹
    ├── main.js 主函数入口文件 
    ├── router.js 路由相关，必要时可单独成文件夹
    └── views 项目页面，按模块分类  
        ├── login 登录模块
        │   ├── components 模块组件，必要时可再行细分
        │   |	├── PasswordInput.vue 模块组件
        |	|	└── VerifyCode VerifyCode页面组件
        |	├── VerifyCode.vue 模块组件
        │   └── Login.vue 登录页面
        └── mine 我的模块

```

#### 文件及文件夹说明

##### 注：项目中，src/components 和 src/views目录中的二级目录均需在本文档中增加相关说明描述

##### 	1.1  doc【重要】

&emsp;&emsp;本目录统一存放着项目相关的说明信息文档及其配套图片，如《工程目录说明》等。一般由项目管理人员统筹做修改并记录修改日志。	

##### 	1.2  node-modules

&emsp;&emsp;依赖的node库文件，node自动管理，通常情况下开发人员无需关注。

##### 	1.3  public

&emsp;&emsp;公共文件存放处，此文件夹下的文件并不会被Webpack处理。它们会直接被复制到最终的打包目录（文件名需指定）下。**必须使用绝对路径引用**这些文件，简单说就是用来存放**万年不变**的文件，通常为未被webpack管理的三方类库资源文件。一般情况下按需加入如下文件夹/文件进行区分：

&emsp;&emsp;iconfonts：字体图片

&emsp;&emsp;images：图片资源

&emsp;&emsp;svgs：矢量图片

&emsp;&emsp;jsons：静态json数据

&emsp;&emsp;js：js文件或文件夹，多为三方库

&emsp;&emsp;index.html：项目入口，一般情况下无需变动

##### 1.4 node_modules

&emsp;&emsp;本文件夹主要是用于放用包管理工具（npm）下载安装了的包，切勿修改本文件夹内中内容

##### 	1.5  src【重要】

&emsp;&emsp;项目核心文件，所写代码均存放在此文件夹下。

######   	1.5.1  assets

&emsp;&emsp; 此目录下的存放属于本项目的资源文件，按需分类加入如下文件夹中：

&emsp;&emsp;&emsp;&emsp;iconfonts：字体图片，一般情况下基于本工程做开发时统一使用iconfont来加载图片【强烈推荐】

&emsp;&emsp;&emsp;&emsp;images：图片资源，在必要情况时使用【推荐】

&emsp;&emsp;&emsp;&emsp;svgs：矢量图片，在必要情况时使用【推荐】

&emsp;&emsp;&emsp;&emsp;jsons：静态json数据

&emsp;&emsp;&emsp;&emsp;js：js文件或文件夹，存放项目自行封装公共方法

&emsp;&emsp;**若项目中某模块资源文件较多，可单列文件夹进行管理分类。**

######   	1.5.2  components

&emsp;&emsp;这里存放的是项目中多出使用的功能性组件，或由项目提取封装的可多次复用功能性组件。

######   	1.5.3  views

&emsp;&emsp;这里按模块存放组件页文件和模块所需业务UI组件，这些.vue文件主要进行业务逻辑处理，并由本文件下components中的组件构成页面UI。必要时components中组件可按页面进行划分，例如：

&emsp;&emsp; views/login：代表登录模块

&emsp;&emsp; views/login/Login.vue：存放登录页面，处理登录业务

&emsp;&emsp; views/login/components：存放登录模块中所用的业务、功能性组件

&emsp;&emsp; views/login/components/PasswordInput.vue：代表密码输入组件

&emsp;&emsp;……

######   	1.5.4  App.vue

&emsp;&emsp;项目主组件，也是项目所有组件和路由的出口，之后它会被渲染到项目根目录的 index.html 中显示出来，我们可以在这里写一些适合全局的css样式。

######   	1.5.5  main.js

&emsp;&emsp;入口文件，引入了vue模块和app.vue组件以及路由router，我们需要在全局使用的一些东西也可以定义在这里面。

######   	1.5.6  router.js

&emsp;&emsp;路由配置文件，控制项目路由信息。 项目路由结构较为简单时直接使用一个js文件进行管理，若项目结构复杂，路由模块可按需划分文件夹进行管理。

###### 1.5.7 store.js

&emsp;&emsp;状态管理文件，管理项目状态信息，即缓存共用数据。项目数据结构较为简单时直接使用一个js文件进行管理，若项目结构复杂，状态管理需按照项目业务模块单列modules/actions/getters进行管理。

###### 1.5.8 others

&emsp;&emsp;除以上类型外，其他类型文件存放处。通常情况下此文件夹中不应存在任何文件，而应根据实际用途划分归类划分。



















