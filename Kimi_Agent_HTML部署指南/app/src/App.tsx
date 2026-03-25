import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Cloud, 
  Github, 
  Server, 
  Globe, 
  ChevronRight, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  FileCode,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import './App.css';

// 导航组件
function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: '首页', icon: Globe },
    { path: '/netlify', label: 'Netlify', icon: Cloud },
    { path: '/vercel', label: 'Vercel', icon: Server },
    { path: '/github-pages', label: 'GitHub Pages', icon: Github },
    { path: '/aliyun', label: '阿里云ECS', icon: Database },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="font-bold">网页部署教程</span>
        </Link>
        <ScrollArea className="flex-1 whitespace-nowrap">
          <div className="flex space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </nav>
  );
}

// 首页组件
function HomePage() {
  const platforms = [
    {
      title: 'Netlify',
      description: '拖拽上传，无需命令行，5分钟快速上线',
      icon: Cloud,
      difficulty: '极简',
      time: '5分钟',
      cost: '免费',
      color: 'bg-blue-500',
      path: '/netlify'
    },
    {
      title: 'Vercel',
      description: 'Git集成，自动部署，前端项目首选',
      icon: Server,
      difficulty: '简单',
      time: '10分钟',
      cost: '免费',
      color: 'bg-black',
      path: '/vercel'
    },
    {
      title: 'GitHub Pages',
      description: '完全免费，与Git仓库绑定',
      icon: Github,
      difficulty: '简单',
      time: '10分钟',
      cost: '免费',
      color: 'bg-gray-800',
      path: '/github-pages'
    },
    {
      title: '阿里云ECS + 宝塔',
      description: '完整控制权，适合需要后端的场景',
      icon: Database,
      difficulty: '中等',
      time: '30分钟',
      cost: '¥99/年起',
      color: 'bg-orange-500',
      path: '/aliyun'
    }
  ];

  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          HTML网页部署完整教程
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          从本地到云端，手把手教你将HTML网页部署到互联网
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Badge variant="secondary">零基础友好</Badge>
          <Badge variant="secondary">2025最新</Badge>
          <Badge variant="secondary">实测可用</Badge>
        </div>
      </div>

      {/* 方案对比 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <Card key={platform.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{platform.title}</CardTitle>
                <CardDescription>{platform.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">难度</span>
                    <span className="font-medium">{platform.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">预计时间</span>
                    <span className="font-medium">{platform.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">成本</span>
                    <span className="font-medium">{platform.cost}</span>
                  </div>
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link to={platform.path}>
                    查看教程 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 前置准备 */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5" />
            前置准备
          </CardTitle>
          <CardDescription>
            开始部署前，请确保你已经准备好以下内容
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">必需</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>一个包含 <code className="bg-muted px-1 rounded">index.html</code> 的项目文件夹</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>可用的邮箱账号（用于注册平台）</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">部分方案需要</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                  <span>GitHub账号（Vercel、GitHub Pages）</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                  <span>已安装的Git工具</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                  <span>阿里云账号（ECS方案）</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>重要提示：</strong>index.html 是网站的入口文件，服务器会默认寻找这个文件。
              如果命名成"首页.html"或"home.html"，访问时会报错！
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 项目结构示例 */}
      <Card>
        <CardHeader>
          <CardTitle>推荐的项目文件夹结构</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`my-website/
├── index.html          ← 必须是这个名字！
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── logo.png`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}

// Netlify教程页面
function NetlifyPage() {
  const steps = [
    {
      title: '准备项目文件夹',
      content: '在桌面创建一个文件夹，命名为 my-website，在文件夹内创建 index.html 文件。',
      code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>我的网站</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`
    },
    {
      title: '注册 Netlify 账号',
      content: '访问 netlify.com，点击 Sign up。推荐使用 GitHub 账号一键登录，也可以直接使用邮箱注册。'
    },
    {
      title: '拖拽部署',
      content: '登录后进入 Netlify Dashboard，点击左侧 "Sites"，然后点击 "Add new site" → "Deploy manually"。将项目文件夹拖拽到指定区域，等待上传完成（通常3-10秒）。'
    },
    {
      title: '访问你的网站',
      content: '上传完成后，Netlify 会自动生成一个随机域名（如 https://elated-babbage-123456.netlify.app）。点击域名即可访问！'
    }
  ];

  return (
    <div className="container py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-foreground">首页</Link>
          <ChevronRight className="h-4 w-4" />
          <span>Netlify</span>
        </div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Cloud className="h-8 w-8 text-blue-500" />
          Netlify 拖拽部署
        </h1>
        <p className="text-muted-foreground mt-2">
          最简单的部署方式，无需命令行，5分钟快速上线
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{step.content}</p>
                {step.code && (
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                )}
              </CardContent>
            </Card>
          ))}

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">自定义域名（可选）</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700">
              <ol className="list-decimal list-inside space-y-2">
                <li>在 Site settings → Domain management → Add custom domain</li>
                <li>输入你的域名（如 www.yourname.com）</li>
                <li>在域名服务商处添加 CNAME 记录指向你的 Netlify 域名</li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>方案特点</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>拖拽上传，零配置</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>自动 HTTPS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>全球 CDN 加速</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>支持自定义域名</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>免费额度</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">月流量</span>
                  <span>100GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">构建时间</span>
                  <span>300分钟/月</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" variant="outline" asChild>
            <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
              访问 Netlify <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Vercel教程页面
function VercelPage() {
  const steps = [
    {
      title: '创建 GitHub 仓库',
      content: '访问 github.com/new，创建一个新仓库。输入仓库名称（如 my-website），选择 Public，点击 Create repository。',
    },
    {
      title: '上传代码到 GitHub',
      content: '将本地项目推送到 GitHub 仓库。如果还没有安装 Git，请先下载安装。',
      code: `# 进入项目文件夹
cd my-website

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 连接远程仓库（替换为你的用户名和仓库名）
git remote add origin https://github.com/你的用户名/my-website.git

# 推送到 GitHub
git push -u origin main`
    },
    {
      title: '注册 Vercel 并导入项目',
      content: '访问 vercel.com，点击 "Sign Up"，选择 "Continue with GitHub" 授权登录。登录后点击 "Add New Project"，在列表中找到你的仓库，点击 "Import"。'
    },
    {
      title: '配置并部署',
      content: 'Vercel 会自动检测项目类型。对于纯 HTML 项目，Framework Preset 选择 "Other"。点击 "Deploy"，等待部署完成（约30秒）。'
    },
    {
      title: '体验自动更新',
      content: '本地修改代码后，执行 git push，Vercel 会自动重新部署。每次 push 都会触发新的部署。',
      code: `# 修改代码后
git add .
git commit -m "更新网站内容"
git push

# Vercel 会自动部署新版本`
    }
  ];

  return (
    <div className="container py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-foreground">首页</Link>
          <ChevronRight className="h-4 w-4" />
          <span>Vercel</span>
        </div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Server className="h-8 w-8" />
          Vercel 自动部署
        </h1>
        <p className="text-muted-foreground mt-2">
          Git 集成，代码提交即自动部署，专业开发工作流
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{step.content}</p>
                {step.code && (
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                )}
              </CardContent>
            </Card>
          ))}

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">常用 Git 命令速查</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <code className="bg-purple-100 px-2 py-1 rounded">git init</code>
                  <p className="text-purple-700 mt-1">初始化本地仓库</p>
                </div>
                <div>
                  <code className="bg-purple-100 px-2 py-1 rounded">git add .</code>
                  <p className="text-purple-700 mt-1">添加所有更改</p>
                </div>
                <div>
                  <code className="bg-purple-100 px-2 py-1 rounded">git commit -m "描述"</code>
                  <p className="text-purple-700 mt-1">提交更改</p>
                </div>
                <div>
                  <code className="bg-purple-100 px-2 py-1 rounded">git push</code>
                  <p className="text-purple-700 mt-1">推送到远程</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>方案特点</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Git 集成，自动部署</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>每次 push 自动更新</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>PR 预览链接</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>国内访问速度较好</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CLI 部署方式（可选）</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-3 rounded-lg text-sm">
{`# 安装 Vercel CLI
npm i -g vercel

# 部署
cd 项目文件夹
vercel`}
              </pre>
            </CardContent>
          </Card>

          <Button className="w-full" variant="outline" asChild>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              访问 Vercel <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

// GitHub Pages教程页面
function GitHubPagesPage() {
  const steps = [
    {
      title: '创建特殊命名的仓库',
      content: '访问 github.com/new，Repository name 必须输入：你的用户名.github.io（例如：zhangsan.github.io）。选择 Public，点击 Create repository。',
    },
    {
      title: '上传网站文件',
      content: '将 index.html 和其他文件上传到仓库。可以通过网页直接上传，或使用 Git 命令。',
      code: `# 网页上传方式：
# 进入仓库 → Add file → Upload files → 选择文件 → Commit changes

# 或 Git 命令方式：
git add .
git commit -m "添加网站文件"
git push`
    },
    {
      title: '启用 GitHub Pages',
      content: '进入仓库页面，点击 Settings → 左侧 Pages → Source 选择 "Deploy from a branch" → Branch 选择 "main" → 点击 Save。',
    },
    {
      title: '等待并访问',
      content: '等待1-2分钟，刷新 Pages 设置页面，会看到绿色提示 "Your site is live at https://zhangsan.github.io"。点击链接即可访问！'
    }
  ];

  return (
    <div className="container py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-foreground">首页</Link>
          <ChevronRight className="h-4 w-4" />
          <span>GitHub Pages</span>
        </div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Github className="h-8 w-8" />
          GitHub Pages 部署
        </h1>
        <p className="text-muted-foreground mt-2">
          完全免费，与 Git 仓库绑定，无需第三方平台
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{step.content}</p>
                {step.code && (
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                )}
              </CardContent>
            </Card>
          ))}

          <Card className="bg-gray-50 border-gray-200">
            <CardHeader>
              <CardTitle>项目站点（可选）</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                如果不想用用户名命名仓库，也可以创建任意名称的仓库（如 my-project）。启用 Pages 后，访问地址为：
              </p>
              <code className="bg-gray-100 px-3 py-2 rounded block">
                https://你的用户名.github.io/仓库名/
              </code>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>方案特点</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>完全免费，无广告</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>与 Git 仓库绑定</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>自动 HTTPS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>支持 Jekyll 主题</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>免费额度</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">存储空间</span>
                  <span>1GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">月请求数</span>
                  <span>100万次</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" variant="outline" asChild>
            <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">
              访问 GitHub Pages <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

// 阿里云ECS教程页面
function AliyunPage() {
  const steps = [
    {
      title: '购买轻量应用服务器',
      content: '访问阿里云官网，搜索"轻量应用服务器"。选择地域（建议选离你近的）、镜像选择"宝塔Linux面板"、套餐选择2核2G即可。完成支付。',
    },
    {
      title: '获取服务器信息',
      content: '进入阿里云控制台 → 轻量应用服务器 → 找到你的实例。记录公网IP地址，点击"应用详情"查看宝塔面板的初始用户名和密码。',
    },
    {
      title: '开放端口',
      content: '在服务器详情页，点击"安全组"/"防火墙" → 添加规则，放行以下端口：80（HTTP）、443（HTTPS）、8888（宝塔面板）。',
    },
    {
      title: '登录宝塔面板',
      content: '浏览器访问 http://你的服务器IP:8888，输入用户名和密码登录。首次登录需要绑定宝塔账号（可免费注册）。',
    },
    {
      title: '安装环境',
      content: '首次登录会弹出推荐安装套件窗口，选择 LNMP（推荐），点击"一键安装"。等待约5-10分钟完成安装。',
    },
    {
      title: '创建网站',
      content: '宝塔面板 → 网站 → 添加站点。输入你的域名（或先用服务器IP），其他保持默认，点击提交。',
    },
    {
      title: '上传网站文件',
      content: '宝塔面板 → 文件 → 进入网站根目录（如 /www/wwwroot/你的域名）→ 上传 → 选择你的 index.html 和其他文件。',
    },
    {
      title: '访问网站',
      content: '浏览器输入你的服务器IP或绑定的域名，即可看到网站！',
    }
  ];

  return (
    <div className="container py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-foreground">首页</Link>
          <ChevronRight className="h-4 w-4" />
          <span>阿里云ECS</span>
        </div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Database className="h-8 w-8 text-orange-500" />
          阿里云ECS + 宝塔面板
        </h1>
        <p className="text-muted-foreground mt-2">
          完整的云服务器控制权，适合需要后端、数据库的场景
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.content}</p>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">绑定域名 + HTTPS（可选）</CardTitle>
            </CardHeader>
            <CardContent className="text-orange-700 space-y-4">
              <div>
                <p className="font-medium mb-2">1. 域名解析</p>
                <p className="text-sm">在域名服务商处添加 A 记录，指向你的服务器 IP。</p>
              </div>
              <div>
                <p className="font-medium mb-2">2. 申请 SSL 证书</p>
                <p className="text-sm">宝塔面板 → 网站 → 设置 → SSL → 选择 Let's Encrypt → 申请证书 → 开启强制 HTTPS。</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">常见问题排查</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-medium text-red-700 min-w-[120px]">无法访问网站</span>
                  <span className="text-red-600">检查安全组是否放行 80 端口</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium text-red-700 min-w-[120px]">宝塔打不开</span>
                  <span className="text-red-600">检查 8888 端口是否放行</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium text-red-700 min-w-[120px]">403 错误</span>
                  <span className="text-red-600">检查根目录下是否有 index.html</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium text-red-700 min-w-[120px]">中文乱码</span>
                  <span className="text-red-600">HTML 添加 &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>方案特点</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>完整服务器控制权</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>支持后端、数据库</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>可视化宝塔面板</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>国内访问速度快</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>参考价格（2025）</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">轻量服务器 2核2G</span>
                  <span>~¥68-99/年</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">轻量服务器 2核4G</span>
                  <span>~¥198-297/年</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" variant="outline" asChild>
            <a href="https://www.aliyun.com/product/swas" target="_blank" rel="noopener noreferrer">
              访问阿里云 <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

// 主应用组件
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/netlify" element={<NetlifyPage />} />
            <Route path="/vercel" element={<VercelPage />} />
            <Route path="/github-pages" element={<GitHubPagesPage />} />
            <Route path="/aliyun" element={<AliyunPage />} />
          </Routes>
        </main>
        <footer className="border-t py-6 mt-10">
          <div className="container text-center text-sm text-muted-foreground">
            <p>HTML网页部署教程 | 2025 实测可用</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
