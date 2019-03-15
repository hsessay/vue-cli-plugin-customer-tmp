## 命名规范和使用

#### 一、项目

&emsp;&emsp;项目命名以vue-{project}-{description}格式命名，例如vue-mktact-support。

#### 二、 文件夹

&emsp;&emsp;项目中的文件夹采用小驼峰命名的方式，除特殊情况外均由名词组成。例login，insurancePolicy 。

#### 三、文件

##### &emsp;&emsp;3.1 vue文件

&emsp;&emsp;&emsp;&emsp;以*.vue为后缀的文件在命名时使用大驼峰命名，如有必要可加上特殊前缀，例如MyComponentName，mHeader。

&emsp;&emsp;&emsp;&emsp;作为组件使用`import`时，引入的名称与注册组件的名字保存一致，使用首字母大写，模板中使用组件**必须**使用短横线式。如下图，

![vue-name-notations](/Users/zhouxinyu/Desktop/文档/doc/images/vue-name-notations.png)

##### &emsp;&emsp;3.2 js文件

&emsp;&emsp;&emsp;&emsp;属于类的.js文件，使用大驼峰命名风格。例如，MyArray.js

&emsp;&emsp;&emsp;&emsp;其他类型的.js文件，使用`kebab-case`风格。例如，date-tool.js

##### &emsp;&emsp;3.3 其他

&emsp;&emsp;&emsp;&emsp;其他文件，例如图片、字体等文件均采用`kebab-case`风格命名。

&emsp;&emsp;&emsp;&emsp;例如xd-home-y.png，ping-fang.ttf等

#### 四、方法、变量

##### &emsp;&emsp;4.1  变量

&emsp;&emsp;&emsp;&emsp;使用小驼峰命名，例如，myLists

&emsp;&emsp;&emsp;&emsp;尽量使用单个单词命名

&emsp;&emsp;&emsp;&emsp;bool类型使用is开头，例如，isLoading

##### &emsp;&emsp;4.2 方法

&emsp;&emsp;&emsp;&emsp;使用小驼峰命名，例如，jumpToLoginPage()，judgeAnswer()

&emsp;&emsp;&emsp;&emsp;尽量使用常用单词开头，例如，can，has，is，get……

&emsp;&emsp;&emsp;&emsp;使用动宾短语命名

&emsp;&emsp;&emsp;&emsp;ajax方法以get/post开头，以data结尾。例如，getPolicyListData()

#### 五、html

##### &emsp;&emsp;5.1 class属性

&emsp;&emsp;&emsp;&emsp;类选择器值使用语义化的`kebab-case`风格命名，例如`<div class="article-side-notes">test</div>	`		

##### &emsp;&emsp;5.2 其他属性

&emsp;&emsp;&emsp;&emsp;除标签的class属性值外，其他属性值和自定义属性名均使用小驼峰命名方式，例如`customerType`	      	      

#### 六、最佳实践

![vue-best-practices-one](/Users/zhouxinyu/Desktop/文档/doc/images/vue-best-practices-one.png)

![vue-best-practices-two](/Users/zhouxinyu/Desktop/文档/doc/images/vue-best-practices-two.png)

