### 编码规范补充

##### 一、vue

&emsp;&emsp;本规范延续Vue官方风格规则

##### 	优先级B ：强烈推荐

###### 	  不使用纯-HTML  

&emsp;&emsp;小程序里所有的 BOM／DOM 都不能用，也就是说在有可替代方案的情况下尽量不使用`v-html` 指令。	

######  	 不使用复杂的JavaScript渲染表达式

&emsp;&emsp;mpvue框架会把 template 中的 `{{}}` 双花括号的部分，直接编码到 wxml 文件中，由于微信小程序的能力限制([数据绑定](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/data.html))，所以无法支持复杂的 JavaScript 表达式。

&emsp;&emsp;目前可以使用的有 `+ - * % ?: ! == === > < [] .`。

```vue
<!-- 反例 -->
<p>{{ message.split('').reverse().join('') }}</p>
```



###### 	  不使用过滤器

&emsp;&emsp;mpvue渲染部分会转成 wxml ，wxml 不支持过滤器，故有可替代方案时不建议使用过滤器。



###### 	  不在template `{{}}`中使用methods中的函数

&emsp;&emsp;使用computed代替。

```vue
<!-- 反例 -->
<p>时间{{formatTime(time)}}</p>  

<!-- 好例子 -->
<p>时间{{cptTime(time)}}</p> 
<script>
export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    formatTime () {
      return '测试';
    }
  },
  computed: {
      cptTime () {
          return '测试';
      }
  },
</script>

```



###### 	  不使用Class与Style绑定

&emsp;&emsp;从性能和小程序兼容方面考虑，不建议使用官方提供的[Class与Style绑定](https://cn.vuejs.org/v2/guide/class-and-style.html)，可以使用computed方法生成class或者style字符串，插入到页面中：

```vue
<template>
    <!-- 反例 -->
    <div class="container" :class="computedClassStr"></div>
    <div class="container" :class="{active: isActive}"></div>

    <!-- 好例子 -->
    <div class="container" :class="computedClassObject"></div>
</template>
<script>
    export default {
        data () {
            return {
                isActive: true
            }
        },
        computed: {
            computedClassStr () {
                return this.isActive ? 'active' : ''
            },
            computedClassObject () {
                return { active: this.isActive }
            }
        }
    }
</script>
```

##### 二、html

&emsp;&emsp;使用双引号(“”) 而不是单引号(‘’) 。

```html
<!-- 反例 -->
<div class='news-article'></div>
 <!-- 好例子 -->
<div class="news-article"></div>
```

##### 三、CSS

###### id和class的命名

&emsp;id和class的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称。

###### 0后不带单位

&emsp;省略0后面的单位

```css
// 反例
padding-bottom: 0px;
margin: 0em;
//  好例子
padding-bottom: 0;
margin: 0;
```

























