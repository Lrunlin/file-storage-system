# 文件存储系统

系统目前开发中 2025/09 之前开发完毕，会用于自己的[https://blogweb.cn](https://blogweb.cn)项目
目前只是搭建脚手架完成

## 开发目的

很多开发者有存储文件的替代 OSS 的需求，因为有云服务器并且可能有多余的存储空间没有使用。目前很多开源的项目对于部署和使用不友好或者功能复杂，云服务商 OSS 过于昂贵并且存在盗刷问题，同时压缩、水印等优化图片功能费用过高，因此开发次系统用于个人用户在开发系统时替代 OSS。

## 系统说明

分为管理系统和接口文档部分，同时提供 Node.js 的 SDK。

## 相关技术

前端:Next.js (React.js 19、app router)  
服务端:Koa2+Sequelize(ORM)  
数据库:MySQL、Redis

开发语言 TypeScript  
组件库使用 Ant Design  
CSS 方案 Tailwind CSS  
React 状态管理 Zustand

## 联系方式

<div>
    <img src="https://disk.blogweb.cn/me/qq.webp"  width=160 alt="QQ">
    <img src="https://disk.blogweb.cn/me/wechat.webp" width=160 alt="微信">
</div>

## 相关链接

1. **[博客预览地址:https://blogweb.cn](https://blogweb.cn "作者个人博客")**

## 功能

一个用户多个项目、一个项目多个 Token 用于处理文件。考虑未来考虑为管理员以及管理多用户模式，并且已在数据库设计时为升级做准备。

### SDK

1. 文件上传
2. 文件删除、覆盖、列表查询
3. 文件压缩、水印设置

### 管理系统

1. 用户管理
2. 项目管理
3. 文件管理
4. 黑白名单以及防盗链
5. 压缩、水印设置

### 环境变量

1. client 文件夹在 env 文件夹中.env.production 文件并按照.env.development 填写完整
2. server 文件夹在 env 文件夹中将 template 重命名为环境变量名(development/production)后补全内容

### 启动

#### 环境

1. Node.js 20+
2. MySQL 8.x
3. Redis

#### 启动步骤

_如果在安装时出现了`sharp`插件安装失败的问题，可以翻墙使用代理节点重新执行`install`，或参考[sharp 文档中相关内容 chinese mirror](https://sharp.pixelplumbing.com/install#chinese-mirror)_

1. 导入 SQL 文件
2. npm install yarn -g _(如果有 yarn 请忽略)_
3. 点击 install.bat 自动安装依赖 _(完成后关闭 cmd 窗口)_
4. 点击 dev.bat 启动项目

## 生产环境部署

本站使用宝塔 Linux 进行网站部署,对于不同开发者来说生产环境服务器不同。如果你在项目部署时遇到了问题可以通过顶部的联系方式联系我。

若出现 sharp 插件报错请根据报错信息检查 Node.js 版本或者排除是否需要根据信息安装 os=linux 版本的 sharp 插件。

## 服务器推荐

1. 服务器:[腾讯云](https://curl.qcloud.com/VEizLhRn "腾讯云,轻量应用服务器")（推荐）
2. 服务器:[阿里云](https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=46qdmkc0 "阿里云,轻量应用服务器")
3. CDN/OSS:[七牛云](https://s.qiniu.com/NZ3Iz2 "七牛云,CDN,OSS")
