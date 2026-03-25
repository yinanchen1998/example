# HTML网页部署完整教学手册

> 适用对象：零基础学员  
> 课程目标：学会将本地HTML网页部署到互联网，让全世界都能访问

---

## 课程大纲

| 课时 | 内容 | 预计时间 |
|------|------|----------|
| 第1课 | 快速上线 - Netlify拖拽部署 | 15分钟 |
| 第2课 | 专业工作流 - GitHub + Vercel自动部署 | 20分钟 |
| 第3课 | 完全免费 - GitHub Pages部署 | 15分钟 |
| 第4课 | 云服务器实战 - 阿里云ECS + 宝塔面板 | 30分钟 |

---

## 课前准备

### 学员需要准备

1. **一个写好的HTML网页**
   - 至少包含 `index.html` 文件
   - 文件夹结构示例：
   ```
   my-website/
   ├── index.html          ← 必须是这个名字！
   ├── css/
   │   └── style.css
   ├── js/
   │   └── script.js
   └── images/
       └── photo.jpg
   ```

2. **一个邮箱账号**（用于注册各种平台）

3. **一个GitHub账号**（第2、3课需要）

> **重要提示**：`index.html` 是网站的入口文件，服务器会默认寻找这个文件。如果命名成 `首页.html` 或 `home.html`，访问时会报错！

---

## 第1课：Netlify 拖拽部署（5分钟上线）

### 本课目标
让学员在5分钟内看到自己的网站上线互联网，建立信心。

### 适用场景
- 个人作品展示
- 快速原型验证
- 临时页面分享

### 详细步骤

#### Step 1：准备项目文件夹

1. 在桌面创建一个文件夹，命名为 `my-website`
2. 在文件夹内创建 `index.html` 文件
3. 用以下测试代码验证：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一个上线网站</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .container {
            text-align: center;
            color: white;
        }
        h1 { font-size: 3em; margin-bottom: 20px; }
        p { font-size: 1.2em; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 恭喜！</h1>
        <p>你的网站已成功部署到互联网！</p>
        <p id="time"></p>
    </div>
    <script>
        document.getElementById('time').textContent = 
            '当前时间：' + new Date().toLocaleString();
    </script>
</body>
</html>
```

#### Step 2：注册 Netlify 账号

1. 打开浏览器，访问 https://www.netlify.com
2. 点击右上角 **Sign up** 按钮
3. 选择 **Sign up with GitHub**（推荐，一键登录）
   - 如果没有GitHub账号，选择 **Sign up with email**
4. 按照提示完成注册流程

#### Step 3：拖拽部署

1. 登录后进入 Netlify Dashboard（控制台）
2. 找到页面中间的灰色区域，显示 **"Drag and drop your site folder here"**
3. **打开桌面上的 `my-website` 文件夹**
4. **选中文件夹内的所有文件**（不是文件夹本身！）
5. **拖拽到 Netlify 的灰色区域**
6. 等待上传完成（通常3-10秒）

#### Step 4：访问你的网站

1. 上传完成后，Netlify 会自动生成一个随机域名
2. 域名格式类似：`https://elated-babbage-1a2b3c4d.netlify.app`
3. **点击域名即可访问你的网站！**
4. 把这个链接发给朋友，他们也能访问

#### Step 5：自定义域名（可选）

1. 在 Dashboard 点击你的站点
2. 选择 **Site settings** → **Domain management**
3. 点击 **Add custom domain**
4. 输入你购买的域名（如 `www.yourname.com`）
5. 按照提示在域名服务商处添加 DNS 记录：
   - 类型：`CNAME`
   - 主机记录：`www`
   - 记录值：`你的netlify域名.netlify.app`

### 本课作业

1. 修改 `index.html` 的内容，加入你的名字
2. 重新拖拽部署，观察更新后的效果
3. 把链接分享到班级群

---

## 第2课：GitHub + Vercel 自动部署（专业工作流）

### 本课目标
学会使用 Git 工作流，实现"代码提交即自动部署"。

### 适用场景
- 团队协作项目
- 需要频繁更新的网站
- 前端框架项目（React/Vue）

### 课前检查

确保学员已经：
1. 注册 GitHub 账号：https://github.com
2. 安装 Git 工具：https://git-scm.com/downloads
3. 安装了 Node.js（自带 npm）：https://nodejs.org

### 详细步骤

#### Step 1：创建 GitHub 仓库

1. 访问 https://github.com/new
2. **Repository name**：输入 `my-website`（可以自定义）
3. **Description**：可选，填写项目描述
4. **Public** / **Private**：选择 Public（免费）
5. **勾选** "Add a README file"
6. 点击 **Create repository**

#### Step 2：上传代码到 GitHub

**方法一：网页上传（适合新手）**

1. 进入刚创建的仓库页面
2. 点击 **"uploading an existing file"** 链接
3. 点击 **"choose your files"** 或直接拖拽
4. 选择你的 `index.html` 和其他文件
5. 填写提交信息：`添加网站文件`
6. 点击 **Commit changes**

**方法二：命令行上传（推荐学习）**

1. 打开终端（Windows用PowerShell/Git Bash，Mac用Terminal）
2. 进入项目文件夹：
   ```bash
   cd Desktop/my-website
   ```
3. 初始化 Git 仓库：
   ```bash
   git init
   ```
4. 添加所有文件：
   ```bash
   git add .
   ```
5. 提交更改：
   ```bash
   git commit -m "首次提交网站文件"
   ```
6. 连接远程仓库（替换为你的仓库地址）：
   ```bash
   git remote add origin https://github.com/你的用户名/my-website.git
   ```
7. 推送到 GitHub：
   ```bash
   git push -u origin main
   # 或 git push -u origin master
   ```
8. 输入 GitHub 用户名和密码（或Token）

#### Step 3：注册 Vercel 并部署

1. 访问 https://vercel.com
2. 点击 **Sign Up**，选择 **Continue with GitHub**
3. 授权 Vercel 访问你的 GitHub 仓库
4. 点击 **Add New Project**
5. 在列表中找到你的 `my-website` 仓库，点击 **Import**
6. **Project Name**：保持默认或自定义
7. **Framework Preset**：选择 **Other**（纯HTML）
8. 点击 **Deploy**
9. 等待部署完成（约30秒）

#### Step 4：查看部署结果

1. 部署完成后，点击 **Continue to Dashboard**
2. 点击 **Visit** 按钮查看网站
3. 域名格式：`https://my-website-你的用户名.vercel.app`

#### Step 5：体验自动更新

1. 本地修改 `index.html` 文件（如修改标题）
2. 提交并推送更改：
   ```bash
   git add .
   git commit -m "修改网站标题"
   git push
   ```
3. 观察 Vercel Dashboard，会自动开始新的部署
4. 约30秒后，刷新网站，看到更新后的内容

### 常用 Git 命令速查表

| 命令 | 作用 |
|------|------|
| `git init` | 初始化本地仓库 |
| `git add .` | 添加所有更改到暂存区 |
| `git commit -m "描述"` | 提交更改 |
| `git push` | 推送到远程仓库 |
| `git pull` | 拉取远程更新 |
| `git status` | 查看当前状态 |

### 本课作业

1. 修改网站内容，使用 Git 提交并观察自动部署
2. 尝试添加一个新的页面 `about.html`
3. 在 README.md 中写下项目介绍

---

## 第3课：GitHub Pages 部署（完全免费）

### 本课目标
学会使用 GitHub 原生功能部署网站，无需第三方平台。

### 适用场景
- 开源项目文档
- 个人博客
- 作品展示页

### 详细步骤

#### Step 1：创建特殊命名的仓库（用户站点）

1. 访问 https://github.com/new
2. **Repository name**：必须输入 `你的用户名.github.io`
   - 例如：用户名是 `zhangsan`，则输入 `zhangsan.github.io`
3. **Public**：必须选择公开
4. 点击 **Create repository**

> **注意**：这个特殊命名的仓库会自动启用 GitHub Pages

#### Step 2：上传网站文件

参考第2课的 Step 2，将 `index.html` 上传到仓库。

#### Step 3：启用 GitHub Pages

1. 进入仓库页面
2. 点击顶部 **Settings** 标签
3. 左侧菜单找到 **Pages**（在 Code and automation 下）
4. **Source** 选择 **Deploy from a branch**
5. **Branch** 选择 **main**（或 master）
6. **Folder** 选择 **/(root)**
7. 点击 **Save**

#### Step 4：等待并访问

1. 等待1-2分钟
2. 刷新 Pages 设置页面
3. 会看到绿色提示：
   ```
   Your site is live at https://zhangsan.github.io/
   ```
4. 点击链接访问

#### Step 5：项目站点（可选）

如果不想用用户名命名仓库，也可以：
1. 创建任意名称的仓库（如 `my-project`）
2. 启用 Pages 后，访问地址为：
   ```
   https://你的用户名.github.io/仓库名/
   ```
   例如：`https://zhangsan.github.io/my-project/`

### 三种部署方案对比

| 特性 | Netlify | Vercel | GitHub Pages |
|------|---------|--------|--------------|
| 部署速度 | 即时 | 即时 | 1-2分钟 |
| 自动更新 | 需配置 | 原生支持 | 原生支持 |
| 自定义域名 | ✅ | ✅ | ✅ |
| HTTPS | 自动 | 自动 | 自动 |
| 国内访问 | 一般 | 较好 | 一般 |
| 适合框架 | 所有 | React/Vue最佳 | 静态网站 |

### 本课作业

1. 创建自己的 `用户名.github.io` 仓库
2. 部署一个个人简历页面
3. 尝试更换 Jekyll 主题（在 Settings → Pages → Theme 中选择）

---

## 第4课：阿里云ECS + 宝塔面板（完整控制）

### 本课目标
学会使用云服务器部署网站，掌握完整的网站托管能力。

### 适用场景
- 需要后端API（Node.js/Python/PHP）
- 需要数据库
- 需要运行服务器端脚本
- 学习Linux服务器管理

### 课前准备

1. 阿里云账号：https://www.aliyun.com
2. 支付宝或银行卡（用于支付，新用户有免费试用）

### 详细步骤

#### Step 1：购买云服务器

1. 访问 https://www.aliyun.com
2. 登录账号
3. 搜索 **"轻量应用服务器"** 或访问：https://www.aliyun.com/product/swas
4. 点击 **立即购买**
5. 配置选择：
   - **地域**：选择离你最近的（如华东1-杭州）
   - **镜像**：选择 **"宝塔Linux面板"**（新手友好）
   - **套餐**：选择最便宜的即可（2核2G足够）
   - **时长**：1个月或1年
6. 点击 **立即购买** 并完成支付

#### Step 2：获取服务器信息

1. 进入阿里云控制台：https://ecs.console.aliyun.com
2. 点击 **轻量应用服务器**
3. 找到你的服务器实例，点击进入
4. 记录以下信息：
   - **公网IP**：如 `47.100.123.45`
   - **宝塔面板地址**：点击 **应用详情** 查看
   - **宝塔用户名和密码**：在应用详情中查看

#### Step 3：登录宝塔面板

1. 浏览器访问宝塔面板地址
   - 格式：`http://你的服务器IP:8888`
   - 例如：`http://47.100.123.45:8888`
2. 输入用户名和密码登录
3. 首次登录会提示安装环境，选择：
   - **LNMP**（推荐）
   - 或 **LAMP**
4. 点击 **一键安装**，等待约10分钟

#### Step 4：创建网站

1. 宝塔面板左侧菜单点击 **网站**
2. 点击 **添加站点**
3. 填写信息：
   - **域名**：输入你的域名（如果没有，输入服务器IP）
   - **根目录**：保持默认（如 `/www/wwwroot/47.100.123.45`）
   - **FTP**：可选创建
   - **数据库**：纯HTML网站不需要
4. 点击 **提交**

#### Step 5：上传网站文件

**方法一：宝塔文件管理器**

1. 宝塔面板左侧点击 **文件**
2. 进入网站根目录（如 `/www/wwwroot/47.100.123.45`）
3. 点击 **上传** → **选择文件**
4. 选择你的 `index.html` 和其他文件
5. 确保 `index.html` 在根目录下

**方法二：FTP上传**

1. 在宝塔面板创建FTP账号
2. 使用 FileZilla 等FTP客户端连接
3. 上传文件到网站根目录

#### Step 6：访问网站

1. 浏览器访问你的服务器IP
   - 例如：`http://47.100.123.45`
2. 看到你的网站即表示成功！

#### Step 7：绑定域名 + HTTPS（可选但推荐）

**绑定域名：**

1. 在域名服务商（如阿里云域名）购买域名
2. 进入域名解析设置
3. 添加记录：
   - **类型**：A
   - **主机记录**：`@`（主域名）或 `www`（子域名）
   - **记录值**：你的服务器IP
4. 等待DNS生效（几分钟到48小时）

**配置HTTPS：**

1. 宝塔面板 → 网站 → 找到你的网站 → 点击 **设置**
2. 选择 **SSL** 标签
3. 选择 **Let's Encrypt**
4. 勾选你的域名
5. 点击 **申请**
6. 申请成功后，开启 **强制HTTPS**

#### Step 8：安全组配置（重要！）

如果访问不了，检查安全组：

1. 阿里云控制台 → 轻量应用服务器 → 你的实例
2. 点击 **安全组** / **防火墙**
3. 确保以下端口已开放：
   - **80**：HTTP
   - **443**：HTTPS
   - **8888**：宝塔面板
   - **22**：SSH
4. 如果没有，点击 **添加规则** 放行

### 常见问题排查

| 问题 | 解决方案 |
|------|----------|
| 无法访问网站 | 检查安全组是否放行80端口 |
| 宝塔面板打不开 | 检查8888端口是否放行 |
| 显示403错误 | 检查网站根目录下是否有index.html |
| 中文乱码 | HTML文件头部添加 `<meta charset="UTF-8">` |
| 图片不显示 | 检查路径大小写（Linux区分大小写） |

### 本课作业

1. 购买并配置一台云服务器
2. 部署自己的网站
3. 尝试绑定一个域名（可选）
4. 配置HTTPS证书

---

## 附录

### A. 项目文件规范

一个标准的静态网站项目结构：

```
my-website/
├── index.html          # 网站入口（必须）
├── about.html          # 其他页面
├── contact.html
├── css/                # 样式文件夹
│   ├── style.css
│   └── responsive.css
├── js/                 # 脚本文件夹
│   ├── main.js
│   └── utils.js
├── images/             # 图片文件夹
│   ├── logo.png
│   └── banner.jpg
└── README.md           # 项目说明
```

### B. HTML基础模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <!-- 页面内容 -->
    
    <script src="./js/main.js"></script>
</body>
</html>
```

### C. 推荐学习资源

- **Git教程**：https://www.liaoxuefeng.com/wiki/896043488029600
- **MDN Web文档**：https://developer.mozilla.org/zh-CN/
- **宝塔面板文档**：https://www.bt.cn/bbs/thread-3-1-1.html

### D. 各平台免费额度

| 平台 | 免费额度 | 限制 |
|------|----------|------|
| Netlify | 100GB/月流量 | 300分钟构建时间 |
| Vercel | 100GB/月流量 | 无限制项目数 |
| GitHub Pages | 1GB存储 | 每月100万次请求 |
| 阿里云ECS | 新用户免费试用3个月 | 需实名认证 |

---

## 教学建议

### 课堂节奏

1. **第1课**：现场演示Netlify部署，让学员5分钟内看到成果，建立信心
2. **第2课**：讲解Git基础概念，强调工作流的重要性
3. **第3课**：对比GitHub Pages与Vercel的差异
4. **第4课**：根据学员情况，可选择性讲解（时间较长）

### 互动环节

- 每节课后让学员现场操作，老师巡视指导
- 收集学员的部署链接，在班级群分享
- 设置小挑战：如"最快部署奖"、"最美页面奖"

### 延伸内容

- 域名购买和DNS解析
- CDN加速
- 网站性能优化
- 服务器安全基础

---

*文档版本：v1.0*  
*最后更新：2024年*
