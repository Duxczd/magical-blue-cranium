# 📸前言

记录个人在日常开发中 vscode 相关的设置以及插件使用

# 一、📡 Vue2

### 1.插件
- Auto Close Tag
- Auto Rename Tag
- Autoprefixer
- AutoScssStruct4Vue
- Chinese Language
- Color Highlight
- Community Material Theme
- Element UI Snippets
- ESLint
- Git History
- HTML CSS Support
- Image preview
- IntelliCode
- JavaScript (ES6) code snippets
- Live Server
- Markdown All in One
- One Dark Pro
- Path Intellisense
- Prettier - Code formatter
- TabOut
- Template String Converter
- vscode-icons
- Vetur
- Vue VSCode Snippets
- vue-helper  
  
以上插件的用法和用途就不一一介绍

# 二、📹 Vue3

### 1.插件
- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- Vue Peek
- Vue Theme
- Vue VSCode Snippets

### 2.相关设置
```js
{
    "workbench.editor.enablePreview": false, //打开文件不覆盖
    "editor.tabSize": 2, // 空格数
    "editor.fontSize": 14, // 设置文字大小
    "editor.lineHeight": 24, // 设置文字行高
    "editor.formatOnSave": true, // 在保存时格式化文件。
    "editor.minimap.enabled": false, // 控制是否显示缩略图
    "editor.cursorSmoothCaretAnimation": "on", // 控制是否启用平滑插入动画
    // 保存时运行的代码操作
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true // 控制是否应在文件保存时运行自动修复操作。
    },
    // prettier格式化规则
    "prettier.semi": false, //去掉代码结尾的分号
    "prettier.singleQuote": true, //使用带引号替代双引号
    "html.format.indentHandlebars": true, // 对双大括号语法进行缩进
    "html.format.wrapAttributes": "force-aligned", // 属性垂直对齐
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
    "[vue]": {
        "editor.defaultFormatter": "Vue.volar"
    },
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```