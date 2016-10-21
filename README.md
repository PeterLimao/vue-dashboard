# vue-dashboard

## 简介
- 结合了vue+vuex+vue-router+webpack的项目架构模板
- 采用偏中大型项目的设计方案，会持续构思完善，为新项目服务 (过度！过度！过度设计！越抽越好)
- 后续会作为用于个人demo的看板

## 技术栈
- vue@1.0.26
- vue-router@0.7.13
- vuex@0.6.2

## 构建工具
- webpack@1.13.1

## 目录设计
![img](https://github.com/PeterLimao/vue-starter/raw/master/docs/images/src.png)

### 说明
- api: 用于封装网络请求,通过index.js文件暴露对外的接口,通过config.js来配置url,可根据需求进行扩展
- components: 封装组件,通过index.js文件暴露出组件供外部使用,assets存在这个组件依赖的静态资源,如: fonts, styles等
- directive: 封装Vuejs的指令功能,通过index.js来注册指令
- filter: 封装Vuejs的过滤器功能,通过index.js来注册过滤器
- pages: 用于封装框架组件,通常与路由配合,一个路由指向一个框架组件,框架组件通用用于包裹其他子组件
- router: 用于封装路由, 通过index.js来封装路由
- store
- app.html: 整个项目的页面模板,所有的dom元素都会挂载到此模板上
- app.js: 整个项目的初始化文件, 负责初始化工作，如：router的初始化，plugin的初始化等
- app.vue: 整个项目的根组件(SPA原则上只有一个root component)

## Store设计

## 如何搞起？
```bash
> npm install
> npm run dev
```
## LICENCE
MIT
