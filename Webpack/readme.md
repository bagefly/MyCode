<!-- TOC -->

- [1. 安装](#1-安装)
    - [1.1. 前提条件](#11-前提条件)
    - [1.2. 本地安装](#12-本地安装)
    - [1.3. 全局安装](#13-全局安装)
    - [1.4. 最新体验版本](#14-最新体验版本)
- [2. 起步](#2-起步)
    - [2.1. 基本安装](#21-基本安装)
    - [2.2. 创建一个 bundle 文件](#22-创建一个-bundle-文件)
    - [2.3. 模块](#23-模块)
    - [2.4. 使用一个配置文件](#24-使用一个配置文件)
    - [2.5. NPM 脚本(NPM Scripts)](#25-npm-脚本npm-scripts)
    - [2.6. 结论](#26-结论)
- [3. 管理资源](#3-管理资源)
    - [3.1. 安装](#31-安装)
    - [3.2. 加载CSS](#32-加载css)
    - [3.3. 加载图片](#33-加载图片)
    - [3.4. 加载数据](#34-加载数据)
    - [3.5. 全局资源](#35-全局资源)
    - [3.6. 回退处理](#36-回退处理)
- [4. 管理输出](#4-管理输出)
    - [4.1. 预先准备](#41-预先准备)

<!-- /TOC -->
# 1. 安装

本指南介绍了安装 webpack 的各种方法。

## 1.1. 前提条件

在开始之前，请确保安装了 Node.js 的最新版本。使用 Node.js 最新的长期支持版本(LTS - Long Term Support)，是理想的起步。使用旧版本，你可能遇到各种问题，因为它们可能缺少 webpack 功能以及/或者缺少相关 package 包。

## 1.2. 本地安装

最新的webpack版本是：v4.0.1


要安装最新版本或特定版本，请运行以下命令之一：

    npm install --save-dev webpack
    npm install --save-dev webpack@<version>

对于大多数项目，建议本地安装。这可以使我们在引入破坏式变更(breaking change)的依赖时，更容易分别升级项目。通常，webpack 通过运行一个或多个 npm scripts，会在本地 node_modules 目录中查找安装的 webpack：

    "scripts": {
        "start": "webpack --config webpack.config.js"
    }

当你在本地安装 webpack 后，你能够从 node_modules/.bin/webpack 访问它的 bin 版本。

## 1.3. 全局安装

以下的 NPM 安装方式，将使 webpack 在全局环境下可用：

    npm install --global webpack

不推荐全局安装 webpack。这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。

## 1.4. 最新体验版本

如果你热衷于使用最新版本的 webpack，你可以使用以下命令，直接从 webpack 的仓库中安装：

    npm install webpack@beta

# 2. 起步

webpack 用于编译 JavaScript 模块。一旦完成安装，你就可以通过 webpack 的 CLI 或 API 与其配合交互。如果你还不熟悉 webpack，请阅读核心概念和打包器对比，了解为什么你要使用 webpack，而不是社区中的其他工具。

## 2.1. 基本安装

首先我们创建一个目录，初始化 npm，以及在本地安装 webpack：

    mkdir webpack-demo && cd webpack-demo
    npm init -y
    npm install --save-dev webpack

现在我们将创建以下目录结构和内容：

**project**

    webpack-demo
    |- package.json
    + |- index.html
    + |- /src
    +   |- index.js

src/index.js

    function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
    }

    document.body.appendChild(component());


index.html

```html
<html>
  <head>
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```

在此示例中，script标签之间存在隐式依赖关系。index.js 文件执行之前，还依赖于页面中引入的 lodash。之所以说是隐式的是因为 index.js 并未显式声明需要引入 lodash，只是假定推测已经存在一个全局变量 _。

使用这种方式去管理 JavaScript 项目会有一些问题：

无法立即体现，脚本的执行依赖于外部扩展库(external library)。
如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行。
如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码。
让我们使用 webpack 来管理这些脚本。

## 2.2. 创建一个 bundle 文件

首先，我们稍微调整下目录结构，将“源”代码(/src)从我们的“分发”代码(/dist)中分离出来。“源”代码是用于书写和编辑的代码。“分发”代码是构建过程产生的代码最小化和优化后的“输出”目录，最终将在浏览器中加载：

project

    webpack-demo
    |- package.json
    + |- /dist
    +   |- index.html
    - |- index.html
    |- /src
        |- index.js


要在 index.js 中打包 lodash 依赖，我们需要在本地安装 library。

    npm install --save lodash

然后在我们的脚本中 import。


src/index.js


    + import _ from 'lodash';
    +
    function component() {
        var element = document.createElement('div');

    -   // Lodash, currently included via a script, is required for this line to work
    +   // Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    }

    document.body.appendChild(component());

现在，由于通过打包来合成脚本，我们必须更新 index.html 文件。因为现在是通过 import 引入 lodash，所以将 lodash script标签 删除，然后修改另一个 script 标签来加载 bundle，而不是原始的 /src 文件：


dist/index.html

```html
  <html>
   <head>
     <title>Getting Started</title>
-    <script src="https://unpkg.com/lodash@4.16.6"></script>
   </head>
   <body>
-    <script src="./src/index.js"></script>
+    <script src="bundle.js"></script>
   </body>
  </html>
```

在这个设置中，index.js 显式要求引入的 lodash 必须存在，然后将它绑定为 _（没有全局作用域污染）。通过声明模块所需的依赖，webpack 能够利用这些信息去构建依赖图，然后使用图生成一个优化过的，会以正确顺序执行的 bundle。

可以这样说，执行 npx webpack，会将我们的脚本作为入口起点，然后输出为 bundle.js。Node 8.2+ 版本提供的 npx 命令，可以运行在初始安装的 webpack 包(package)的 webpack 二进制文件（./node_modules/.bin/webpack）：

    npx webpack src/index.js dist/bundle.js

    Hash: 857f878815ce63ad5b4f
    Version: webpack 3.9.1
    Time: 332ms
        Asset    Size  Chunks                    Chunk Names
    bundle.js  544 kB       0  [emitted]  [big]  main
    [0] ./src/index.js 222 bytes {0} [built]
    [2] (webpack)/buildin/global.js 509 bytes {0} [built]
    [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 1 hidden module

输出可能会稍有不同，但是只要构建成功，那么你就可以继续。
在浏览器中打开 index.html，如果一切访问都正常，你应该能看到以下文本：'Hello webpack'。

## 2.3. 模块

ES2015 中的 import 和 export 语句已经被标准化。虽然大多数浏览器还无法支持它们，但是 webpack 却能够提供开箱即用般的支持。

事实上，webpack 在幕后会将代码“转译”，以便旧有浏览器可以执行。如果你检查 dist/bundle.js，你可以看到 webpack 具体如何实现，这是独创精巧的设计！除了 import 和 export，webpack 还能够很好地支持多种其他模块语法，更多信息请查看模块 API。

注意，webpack 不会更改代码中除 import 和 export 语句以外的部分。如果你在使用其它 ES2015 特性，请确保你在 webpack 的 loader 系统中使用了一个像是 Babel 或 Bublé 的转译器。

## 2.4. 使用一个配置文件

大多数项目会需要很复杂的设置，这就是为什么 webpack 要支持配置文件。这比在终端(terminal)中输入大量命令要高效的多，所以让我们创建一个取代以上使用 CLI 选项方式的配置文件：

project

    webpack-demo
    |- package.json
    + |- webpack.config.js
    |- /dist
        |- index.html
    |- /src
        |- index.js


webpack.config.js

    const path = require('path');

    module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
    };


现在，让我们通过新配置再次执行构建：

    npx webpack --config webpack.config.js

    Hash: 857f878815ce63ad5b4f
    Version: webpack 3.9.1
    Time: 298ms
        Asset    Size  Chunks                    Chunk Names
    bundle.js  544 kB       0  [emitted]  [big]  main
    [0] ./src/index.js 222 bytes {0} [built]
    [2] (webpack)/buildin/global.js 509 bytes {0} [built]
    [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 1 hidden module


比起 CLI 这种简单直接的使用方式，配置文件具有更多的灵活性。我们可以通过配置方式指定 loader 规则(loader rules)、插件(plugins)、解析选项(resolve options)，以及许多其他增强功能。了解更多详细信息，请查看配置文档。

## 2.5. NPM 脚本(NPM Scripts)

考虑到用 CLI 这种方式来运行本地的 webpack 不是特别方便，我们可以设置一个快捷方式。在 package.json 添加一个 npm 脚本(npm script)：

package.json

    {
    ...
    "scripts": {
        "build": "webpack"
    },
    ...
    }


现在，可以使用 npm run build 命令，来替代我们之前使用的 npx 命令。注意，使用 npm 的 scripts，我们可以像使用 npx 那样通过模块名引用本地安装的 npm 包。这是大多数基于 npm 的项目遵循的标准，因为它允许所有贡献者使用同一组通用脚本（如果必要，每个 flag 都带有 --config 标志）。

现在运行以下命令，然后看看你的脚本别名是否正常运行：

    npm run build

    Hash: 857f878815ce63ad5b4f
    Version: webpack 3.9.1
    Time: 294ms
        Asset    Size  Chunks                    Chunk Names
    bundle.js  544 kB       0  [emitted]  [big]  main
    [0] ./src/index.js 222 bytes {0} [built]
    [2] (webpack)/buildin/global.js 509 bytes {0} [built]
    [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 1 hidden module


通过向 npm run build 命令和你的参数之间添加两个中横线，可以将自定义参数传递给 webpack，例如：npm run build -- --colors。


## 2.6. 结论

现在，你已经实现了一个基本的构建过程，你应该移至下一章节的 Asset Management 指南，以了解如何通过 webpack 来管理资源，例如图片、字体。此刻你的项目应该和如下类似：

project

    webpack-demo
    |- package.json
    |- webpack.config.js
    |- /dist
    |- bundle.js
    |- index.html
    |- /src
    |- index.js
    |- /node_modules

# 3. 管理资源

将动态打包(dynamically bundle)所有依赖项（创建所谓的依赖图(dependency graph)）。这是极好的创举，因为现在每个模块都可以_明确表述它自身的依赖，我们将避免打包未使用的模块。

webpack 最出色的功能之一就是，除了 JavaScript，还可以通过 loader 引入任何其他类型的文件。也就是说，以上列出的那些 JavaScript 的优点（例如显式依赖），同样可以用来构建网站或 web 应用程序中的所有非 JavaScript 内容。让我们从 CSS 开始起步，或许你可能已经熟悉了这个设置过程。

## 3.1. 安装

## 3.2. 加载CSS

为了从 JavaScript 模块中 import 一个 CSS 文件，你需要在 module 配置中 安装并添加 style-loader 和 css-loader：

    npm install --save-dev style-loader css-loader


webpack.config.js

    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
        },
    +   module: {
    +     rules: [
    +       {
    +         test: /\.css$/,
    +         use: [
    +           'style-loader',
    +           'css-loader'
    +         ]
    +       }
    +     ]
    +   }
    };

这使你可以在依赖于此样式的文件中 import './style.css'。现在，当该模块运行时，含有 CSS 字符串的 style 标签，将被插入到 html 文件的 head 标签中。

我们尝试一下，通过在项目中添加一个新的 style.css 文件，并将其导入到我们的 index.js 中：

project

    webpack-demo
    |- package.json
    |- webpack.config.js
    |- /dist
        |- bundle.js
        |- index.html
    |- /src
    +   |- style.css
        |- index.js
    |- /node_modules


src/style.css

    .hello {
    color: red;
    }


src/index.js

    import _ from 'lodash';
    + import './style.css';

    function component() {
        var element = document.createElement('div');

        // lodash 是由当前 script 脚本 import 导入进来的
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    +   element.classList.add('hello');

        return element;
    }

    document.body.appendChild(component());

现在运行构建命令：

    npm run build

    Hash: 9a3abfc96300ef87880f
    Version: webpack 2.6.1
    Time: 834ms
        Asset    Size  Chunks                    Chunk Names
    bundle.js  560 kB       0  [emitted]  [big]  main
    [0] ./~/lodash/lodash.js 540 kB {0} [built]
    [1] ./src/style.css 1 kB {0} [built]
    [2] ./~/css-loader!./src/style.css 191 bytes {0} [built]
    [3] ./~/css-loader/lib/css-base.js 2.26 kB {0} [built]
    [4] ./~/style-loader/lib/addStyles.js 8.7 kB {0} [built]
    [5] ./~/style-loader/lib/urls.js 3.01 kB {0} [built]
    [6] (webpack)/buildin/global.js 509 bytes {0} [built]
    [7] (webpack)/buildin/module.js 517 bytes {0} [built]
    [8] ./src/index.js 351 bytes {0} [built]


再次在浏览器中打开 index.html，你应该看到 Hello webpack 现在的样式是红色。要查看 webpack 做了什么，请检查页面（不要查看页面源代码，因为它不会显示结果），并查看页面的 head 标签。它应该包含我们在 index.js 中导入的 style 块元素。

## 3.3. 加载图片

假想，现在我们正在下载 CSS，但是我们的背景和图标这些图片，要如何处理呢？使用 file-loader，我们可以轻松地将这些内容混合到 CSS 中：

    npm install --save-dev file-loader

现在，当你 import MyImage from './my-image.png'，该图像将被处理并添加到 output 目录，并且 MyImage 变量将包含该图像在处理后的最终 url。当使用 css-loader 时，如上所示，你的 CSS 中的 url('./my-image.png') 会使用类似的过程去处理。loader 会识别这是一个本地文件，并将 './my-image.png' 路径，替换为输出目录中图像的最终路径。html-loader 以相同的方式处理 < img src="./my-image.png" / >。

我们向项目添加一个图像，然后看它是如何工作的，你可以使用任何你喜欢的图像：

project

    webpack-demo
    |- package.json
    |- webpack.config.js
    |- /dist
        |- bundle.js
        |- index.html
    |- /src
    +   |- icon.png
        |- style.css
        |- index.js
    |- /node_modules


src/index.js

    import _ from 'lodash';
    import './style.css';
    + import Icon from './icon.png';

    function component() {
        var element = document.createElement('div');

        // Lodash，现在由此脚本导入
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');

    +   // 将图像添加到我们现有的 div。
    +   var myIcon = new Image();
    +   myIcon.src = Icon;
    +
    +   element.appendChild(myIcon);

        return element;
    }

    document.body.appendChild(component());
    
    
src/style.css

    .hello {
        color: red;
    +   background: url('./icon.png');
    }


如果一切顺利，和 Hello webpack 文本旁边的 img 元素一样，现在看到的图标是重复的背景图片。如果你检查此元素，你将看到实际的文件名已更改为像 5c999da72346a995e7e2718865d019c8.png 一样。这意味着 webpack 在 src 文件夹中找到我们的文件，并成功处理过它！

## 3.4. 加载数据

此外，可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML。类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行。要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。让我们处理这三类文件：

    npm install --save-dev csv-loader xml-loader

## 3.5. 全局资源

上述所有内容中最出色之处是，以这种方式加载资源，你可以以更直观的方式将模块和资源组合在一起。无需依赖于含有全部资源的 /assets 目录，而是将资源与代码组合在一起。例如，类似这样的结构会非常有用：

    - |- /assets
    + |– /components
    + |  |– /my-component
    + |  |  |– index.jsx
    + |  |  |– index.css
    + |  |  |– icon.svg
    + |  |  |– img.png

这种配置方式会使你的代码更具备可移植性，因为现有的统一放置的方式会造成所有资源紧密耦合在一起。假如你想在另一个项目中使用 /my-component，只需将其复制或移动到 /components 目录下。只要你已经安装了任何扩展依赖(external dependencies)，并且你已经在配置中定义过相同的 loader，那么项目应该能够良好运行。

但是，假如你无法使用新的开发方式，只能被固定于旧有开发方式，或者你有一些在多个组件（视图、模板、模块等）之间共享的资源。你仍然可以将这些资源存储在公共目录(base directory)中，甚至配合使用 alias 来使它们更方便 import 导入。

## 3.6. 回退处理

清除掉增加的模块


# 4. 管理输出

到目前为止，我们在 index.html 文件中手动引入所有资源，然而随着应用程序增长，并且一旦开始对文件名使用哈希(hash)]并输出多个 bundle，手动地对 index.html 文件进行管理，一切就会变得困难起来。然而，可以通过一些插件，会使这个过程更容易操控。

## 4.1. 预先准备

我们在 src/print.js 文件中添加一些逻辑：print.js

我们在 src/print.js 文件中添加一些逻辑：

        export default function printMe() {
    console.log('I get called from print.js!');
    }

并且在 src/index.js 文件中使用这个函数：

我们还要更新 dist/index.html 文件，来为 webpack 分离入口做好准备：

现在调整配置。我们将在 entry 添加 src/print.js 作为新的入口起点（print），然后修改 output，以便根据入口起点名称动态生成 bundle 名称：

执行 npm run build


我们可以看到，webpack 生成 print.bundle.js 和 app.bundle.js 文件，这也和我们在 index.html 文件中指定的文件名称相对应。如果你在浏览器中打开 index.html，就可以看到在点击按钮时会发生什么。

但是，如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，会发生什么？生成的包将被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin 来解决这个问题。