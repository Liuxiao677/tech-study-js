# tech-study-js

### 原仓库

> https://github.com/TechXueXi/techxuexi-js

基于原作者的原仓库，自行改进和完善

### 描述 Description

- 灵活且貌似轻量的 `学习强国` 油猴脚本。

- 与此同时，提供更加便捷的版本选择

  - [Node.js 版](https://github.com/Xu22Web/tech-study-node 'Node.js 版')

  - [Docker 版](https://github.com/Xu22Web/tech-study-docker 'Docker 版')

### 交流群 Telegram Group

- 链接： [tech-study 互动群](https://t.me/+IJ_YzNc-Iew0MGRl)

- 二维码：

  <img src="./images/group.png" style="width:200px;" alt="Telegram邀请二维码">

注：介于脚本国内敏感，暂时不提供其他交流互动方式。

### 用法 Usage

1. 装个浏览器插件`Tampermonkey`

   1. Microsoft Edge: [插件安装](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN)

   2. Google Chrome: [插件安装](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh)

2. 点击插件里添加按钮，去掉编辑框里原来的代码，复制 [tech-study.js](https://raw.githubusercontent.com/Xu22Web/tech-study-js/master/tech-study.js) 脚本，粘贴进编辑框保存。

3. 开启这个脚本，然后进入网页强国 https://www.xuexi.cn 。

### 优化 Promote

1. 优化整体交互设计，新增一体式扫码登录

2. 新增用户信息显示，包括昵称、头像、总分以及当天分数

3. 新增任务进度以及任务分数详情显示，任务情况清晰明了

4. 优化答题逻辑，新增滑动验证，远离验证烦恼

5. 新增同屏任务以及静默运行，仅需一个页面即可静默运行任务

6. 兼容桌面端以及移动端，手机电脑均可运行（设备均需支持油猴脚本，此外，移动端需要开启同屏任务）

7. 新增定时任务以及远程推送，定时刷新页面，远程微信推送登录二维码

### 使用流程 Process

1. 用户`登录`

   <img src="./images/login.png" style="width:200px;" alt="登录">

2. 点击 `开始学习`，等待完成任务运行

   - `桌面端`运行

     <img src="./images/pc.png" style="width:1000px;" alt="桌面端运行">

   - `移动端`运行

      <img src="./images/mobile.png" style="width:320px;" alt="移动端运行">

3. `完成学习`任务

   <img src="./images/done.png" style="width:300px;" alt="完成学习">

### 更新与维护 Update and Maintenance

1. 修复获取分数失败，界面显示异常的问题

2. 新增类 Composition API，优化代码逻辑，同时压缩脚本文件，减小文件体积

3. 与此同时，提供更加便捷的版本选择

   - [Node.js 版](https://github.com/Xu22Web/tech-study-node 'Node.js 版')

   - [Docker 版](https://github.com/Xu22Web/tech-study-docker 'Docker 版')

### 公告 announcement

- **现征集在线题库，特此公告**

  不知道大家有没有发现，在新版的脚本中，我将原本混乱的搜题`API`，替换成了自行整合的搜题`API`

  由于以下原因:

  1. 答题需要收集和优化题库，方便搜题请求

  2. 便于其他方式的调用，目前，搜题`API`的题库有`7`个

  存在的问题:

  1. 题量有限

  2. 准确度欠佳

- 如果大家发现新的题库或者对于题库有何建议，可以去下面的仓库反馈

- 关于题库: [answer-search-bank](https://github.com/Xu22Web/answer-search-bank) `https://github.com/Xu22Web/answer-search-bank`

最后，希望在大家的帮助下，提供更高质量、更优质的脚本！

### 关于开发 Development

- 脚本配置

  1. 版本配置 `src/config/version.ts`

  2. 脚本配置 `src/config/script.ts`

  3. 编译配置 `src/config/compile.ts`

  4. 接口配置 `src/config/api.ts`

  5. 链接配置 `src/config/url.ts`

  6. 任务配置 `src/config/task.ts`

- CSS 文件

  `src/css/index.css`

  - 根据功能特性（i）

    ```js
    // 将文件'./css/index.css'文本内容赋值到'css'
    import css from './css/index.css?raw';
    ```

  - 根据 Tampermonkey API 函数

    ```js
    // 嵌入样式
    GM_addStyle(css);
    ```

- 脚本内容

  `src/tech-study.ts`

- 编译

  ```
  # 编译生成 'tech-study.js'
  pnpm build
  ```

  即

  ```
   ✔ 完成编译: index.ts -> index.js
   ✔ 已生成 用户脚本配置 注释!
   ✔ 完成编译: ./config/api.ts -> api.js
   ✔ 完成编译: ./config/url.ts -> url.js
   ✔ 完成编译: ./config/task.ts -> task.js

   ... ...

   ✔ 导出整合的脚本文件: tech-study.js
  ```

- 功能特性（基于`TypeScript Compiler API`）

  1. 包含`?raw`结尾的`import`语句

     ```
     import var from 'file?raw';
     ```

     1. 文件`file`文本内容赋值到`var`

     2. 此类型`import`语句不会被编译到结果

  2. 普通的`import`语句

     ```
     import { funName } from 'file';
     ```

     1. 文件`file`文本插入到主文件一起导出，相当于合并多个`*.ts`文件导出为一个`*.js`文件

     2. 此类型`import`语句不会被编译到结果

- 类似组合式接口（类似 `Composition API`）

  模拟 `ref`，`watch`，`watchEffect` 等 API。
