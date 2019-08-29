// babel的编译
  // 首先安装 nodejs
  // cmd --> 安装三个包  @babel/core; // babel 的核心  @babel/cli;  @babel/prese-env; 这三个包是在进入我们自己项目的目录下进行安装
  // 安装之前 npm init -y 帮助我们生成一个工程文件。

  // package.json  文件中添加如下：
  // "scripts": {
  //   "build": "babel src -d dest"  // 定义变异文件的路径
  // }


//  创建 .bablelrc 文件  声明 preset 预设
//   {
//     "presets": ["@babel/preset-env"]  // 告诉babel按照什么样的方式编译
//   }
