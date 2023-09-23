# TTR-CLI

## 目标

实现一个项目初始化 CLI，为后续项目提供统一初始化脚手架

## 实现功能

- react + typescript + webpack 项目工程化
- 保存代码自动格式化
- 提交前 commit 校验
- eslint + prettier 校验
- husky 自动装载

## 使用方式

局部安装

```BASH
# 1. 项目中执行
npm i ttr-cli -D

# 2. 在package.json中添加script
"scripts": {
  "ttr-cli": "ttr-cli",
},

# 3. 执行npm run ttr-cli, 即会自动添加依赖
```
