# 标准中文README

[![](https://img.shields.io/badge/%E4%B8%BB%E9%A1%B5-CoyyCo%2FelectronBookStore-orange)](https://github.com/CoyyCo/bookStore_node)

目前，市场对前端开发人员的要求也越来越高，不仅需要会Web端、移动端、小程序，而且还得会桌面端开发，因而报着边学习边开发的思想采用electron+node.js+python+mongodb来做一款bookstore，适用于electron初学者学习或有Node.js学习需求的码友们。该项目为项目的后端部分。

## 目录

- [背景](#背景)
- [安装](#安装)
- [功能](#用法)
- [相关项目（可选）](#相关项目)
- [主要项目负责人](#主要项目负责人)
- [参与贡献方式](#参与贡献方式)
    - [贡献人员](#贡献人员)
- [开源协议](#开源协议)

## 背景
项目想法来源于电子书找起来很费劲，而且后续还会遇到电子书管理、存储的问题。因此，初步想法是做一个可以进行电子书收集（python 爬虫）、电子书售卖（爬虫资源免费放送，同时支持其它用户上传电子书进行售卖【1元店】）、电子书在线阅读等功能的一个桌面端程序。

## 安装

[![](https://img.shields.io/badge/%E4%B8%8B%E8%BD%BD-README.md-orange)](README.md)
```
git clone https://github.com/CoyyCo/bookStore_node.git
yarn install
yarn dev
```


## 功能

| 序号 | 功能模块 | 以实现功能 | 待实现功能 |
| :----: | :----: | :----: | :----: |
|1|系统搭建|基于koa2搭建mvc项目，实现常用中间件安装、自动引入路由、jwt鉴权|-|
|2|mongodb|引入nosql数据库mongodb|-|
|3|用户管理|实现登录、注册|用户信息管理、书籍下载、收藏、购买|
|4|书籍检索|实现按热度、最近更新两种方式检索不同类别的书籍|-|
|5|数据采集|-|使用python爬虫进行数据采集|
|6|支付模块|-|对接微信或支付宝支付模块|
|7|Docker|...|实现容器自动化部署|

## 相关项目

项目前端地址[@CoyyCo/bookStore](https://github.com/CoyyCo/bookStore_electron)

## 主要项目负责人

[@CoyyCo](https://github.com/CoyyCo)

## 参与贡献方式

### 贡献人员

感谢所有贡献的人。

[@CoyyCo](https://github.com/CoyyCo)

## 开源协议

[MIT](LICENSE) © CoyyCo