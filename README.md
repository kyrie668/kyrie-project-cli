# kyrie-project-cli

一个用于快速创建项目的命令行工具，支持多种项目模板，包括管理后台、数据可视化大屏、官网、小程序、移动应用和 Tauri 应用模板等。

## 安装

您可以使用以下任一包管理器全局安装此 CLI 工具：

### npm

```sh
npm install -g kyrie-project-cli
```

### yarn

```sh
yarn global add kyrie-project-cli
```

### pnpm

```sh
pnpm install -g kyrie-project-cli
```

## 使用方法

创建新项目：

```sh
create-kyrie-project <项目名称>
```

运行命令后，工具将：

1. 检查目录是否已存在（如存在会询问是否覆盖）
2. 提供模板选择菜单
3. 从 GitHub 克隆选定的模板
4. 自动清理 Git 历史记录
5. 提供下一步操作指引

## 支持的项目模板

| 模板名称               | 描述                                      | 仓库地址                                                                     |
| ---------------------- | ----------------------------------------- | ---------------------------------------------------------------------------- |
| `admin`                | 管理后台系统模板                          | [kyrie-admin](https://github.com/kyrie668/kyrie-admin.git)                   |
| `visualization-screen` | 数据可视化大屏模板                        | [visualization-screen](https://github.com/kyrie668/visualization-screen.git) |
| `official-website`     | 官方网站模板                              | [kyrie-website](https://github.com/kyrie668/kyrie-website.git)               |
| `taro-mini-program`    | Taro 小程序模板                           | [weapp-taro4](https://github.com/kyrie668/weapp-taro4.git)                   |
| `react-native-app`     | React Native 移动应用模板                 | [native-app](https://github.com/kyrie668/native-app.git)                     |
| `react-native-expo`    | React Native 移动应用模板(使用 expo 构建) | [native-expo](https://github.com/kyrie668/expo-app.git)                      |
| `tauri-app`            | Tauri 应用模板(Vite+React)                | [tauri-app](https://github.com/kyrie668/tauri-app.git)                       |
| `next13-template`         | Nextjs13模板                | [next13-template](https://github.com/kyrie668/kyrie-next13.git)                       |

## 示例

创建一个名为 "my-project" 的新项目：

```sh
create-kyrie-project my-project
```

然后选择您需要的模板，完成后安装依赖并启动项目：

### 使用 npm

```sh
cd my-project
npm install
npm run dev
```

### 使用 yarn

```sh
cd my-project
yarn install
yarn dev
```

### 使用 pnpm

```sh
cd my-project
pnpm install
pnpm dev
```

## 特性

- 🚀 快速项目初始化
- 📦 多种预配置模板
- 🎨 现代化技术栈（根据模板而定）
- 🔧 自动清理 Git 历史
- 💡 友好的交互式命令行界面
- ⚡ 基于 Vite 构建（部分模板）

## 技术栈

根据不同模板可能包含：

- Vite
- ShadCN UI
- TypeScript
- Tailwind CSS
- React
- Taro（小程序模板）
- React Native（移动应用模板）
- Tauri

## GitHub

https://github.com/kyrie668

## 许可证

MIT © KYRIE668
