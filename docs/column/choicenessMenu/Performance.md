# 💬 序言

平常我们在加载网页的时候，首先需要先加载网页代码，之后渲染出页面，在这个期间会执行若干个 `JS` 。那么，如果想要让网页呈现速度和渲染速度快，我们就得保证我们的代码在浏览器这个运行环境当中**稳定且高效**。这就谈到一个前端性能优化的问题。

**以下这篇文章将讲解一些关于性能优化的常考题，欢迎大家查阅~**

# 💯 思维导图抢先看

我们先用一张思维导图来梳理一遍知识点。**详情见下图 👇**

![性能优化](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270821852.png)



思维导图收进囊中了。现在，我们一起来看常见的面试题解答~

# 👁️‍🗨️ 一、html、css、js、jq 优化

### 1、针对 HTML，如何优化性能？

**具体方法如下：**

**（1）** 对于资源加载，**按需加载**和**异步加载**。

**（2）** 首次加载的资源不超过 `1024KB(1M)` ，即越小越好。

**（3）** 压缩 `HTML、CSS、 JavaScript` 文件。

**（4）** 减少 `DOM` 节点。

**（5）** 避免空 `src`（空 `src` 在部分浏览器中会导致无效请求）。

**（6）** 避免 `30` 、 `40` 、 `50` 请求错误。

**（7）** 添加 `Favicon.ico`，如果没有设置图标 `ico` ，则默认的图标会导致发送一个 404 或者 500 的请求错误。

### 2、针对 CSS，如何优化性能？

**具体优化方法如下：**

**（1）** 正确使用 `display` 属性， `display` 属性会影响页面的渲染，因此要注意以下几方面。

```
display:inline 后不应该再使用 width、 height、 margin、 padding和float 。
display:inline-block 后不应该再使用 float。
display:block 后不应该再使用 vertical-align。
display:table-* 后不应该再使用 margin或者float。
```

**（2）** 不滥用 `float` 。

**（3）** 不声明过多的 `font-size` 。

**（4）** 当**值为 0**时不需要单位。

**（5）** 将样式表放在**页面顶部**。

**（6）** 使用`less` 、`scss` 表达式。

**（7）** 使用 `link` 不使用 `@import` 引入样式。

- `link` 是 `HTML` 方式，`@import` 是 `CSS` 方式；
- `link` 最大限度支持并行下载，`@import` 过多嵌套会导致串行下载，会出现 `FOUC` （文档样式短暂失效）；
- 浏览器对 `link` 支持早于 `@import` ，可以使用 `@import` 对老浏览器隐藏样式；
- 总体来说：`link` 优于 `@import` ，且 `link` 优先级也更高。

**（8）** 尽量使用 `id` 、 `class` 选择器设置样式（避免使用 `style` 属性设置行内样式）。

**（9）** 标准化各种浏览器前缀，并注意以下**几个方面：**

- 浏览器无前缀应放在**最后**。
- `CSS` 动画只用（ -webkit- 和 无前缀）两种即可。
- 其他前缀包括 -webkit-、-moz-、-ms-、无前缀（ Opera 浏览器改用 blink 内核，所以-0-被淘汰）。

**（10）** 避免让选择符看起来像是正则表达式。高级选择器不容易读懂，执行时间也长。

**（11）** 禁止使用 `gif` 图片实现 `loading` 效果，尽量使用 `CSS3` 动画实现（降低 CPU 消耗，提升渲染性能）。

**（12）** 使用 `css3` 代码代替 `js` 动画，尽可能地避免重绘和回流。

### 3、哪些方法能提升移动端 CSS3 动画体验？

**（1）** 尽可能多地利用硬件能力，如使用 `3D` 变形来开启 `GPU加速` ，例如以下代码。

```css
-webkit-transform: translate3d(0, 0, 0);
-moz-transform: translate3d(0, 0, 0);
-ms-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
```

一个元素通过 `translate3d` 右移 `500PX` 的动画流畅度会明显优于使用 `left` 属性实现的动画移动，原因是`CSS` 动画属性会触发整个页面重排、重绘、重组。

`paint` 通常是最耗性能的，尽可能避免使用触发 `paint` 的 `CSS` 动画属性。

如果动画执行过程中**有闪烁**（通常发生在动画开始的时候），可以通过如下方式处理。

```css
-webkit-backface-visibility:hidden;
-moz-backface-visibility:hidden;
-ms-backface-visibility:hidden;
backface-visibility:hidden;
-webkit-perspective：1000;
-moz-perspective：1000;
-ms-perspective：1000;
perspective：1000;
```

**（2）** 尽可能少使用 `box- shadows` 和 `gradients`，它们往往严重影响页面的性能，尤其是在一个元素中同时都使用时。

**（3）** 尽可能让动画元素**脱离文档流**，以减少重排，如以下代码所示。

```css
position: fixed;
position: absolute;
```

### 4、针对 JavaScript，如何优化性能？

**（1）** 缓存 DOM 的选择和计算。

**（2）** 尽量使用**事件委托模式**，避免批量绑定事件。

**（3）** 使用 `touchstart` 、` touchend` 代替 `click`。

**（4）** 合理使用 `requestAnimation Frame` 动画代替 `setTimeOut`。

**（5）** 适当使用 `canvas` 动画。

**（6）** 尽量避免在高频事件（如 `TouchMove`、 `Scroll`事件）中修改视图，这会导致多次渲染。

### 5、jQuery 性能优化如何做？

**（1）使用最新版本的 `jQuery` 类库**

- `JQuery` 类库每一个新的版本都会对上一个版本进行 Bug 修复和一些优化，同时也会包含一些创新，所以建议使用最新版本的 `jQuery` 类库提高性能。不过需要注意的是，在更换版本之后，不要忘记测试代码，毕竟有时候不是完全向后兼容的。

**（2）使用合适的选择器**

- `jQuery` 提供非常丰富的选择器，选择器是开发人员最常使用的功能，但是使用不同选择器也会带来性能问题。建议使用以下选择器，如 `id` 选择器、类选择器，同时不要将 `id` 选择器嵌套等。

**（3）以数组方式使用 `jQuery` 对象**

- 使用 `jQuery` 选择器获取的结果是一个 `jQuery` 对象。然而， `jQuery` 类库会让你感觉正在使用一个定义了**索引**和**长度**的数组。在性能方面，建议使用简单的 `for` 或者 `while` 循环来处理，而不是 `$. each()` ，这样能使代码更快。

**（4）使用事件委托模式**

- 每一个`JavaScript` 事件（例如 `click`、 `mouseover`等）都会冒泡到**父级节点**。当需要给多个元素绑定**相同的回调函数**时，建议使用**事件委托模式**。

**（5）使用 join()来拼接字符串**

- 使用 `join()` 拼接长字符串，而不要使用 `“+”` 拼接字符串，这有助于性能优化，特别是处理长字符串的时候。

**（6）合理利用 HTML5 中的 data 属性**

- `HTML5` 中的 `data` 属性有助于插入数据，特别是前、后端的数据交换；
- `jQuery` 的 `data()` 方法能够有效地利用 `HTML5` 的属性来自动获取数据。

# 🗨️ 二、网站端、移动端优化

### 1、谈谈你对重构的理解。

网站重构是指在不改变外部行为的前提下，简化结构、添加可读性，且在网站前端保持一致的行为。也就是说，在不改变 `UI` 的情况下，对网站进行优化，在扩展的同时保持一致的 `UI` 。

**对于传统的网站来说，重构通常包括以下方面。**

- 把表格 (table) 布局改为 `div+css` 。
- 使网站前端兼容现代浏览器。
- 对**移动平台**进行优化。
- 针对**搜索引擎**进行优化。

**深层次的网站重构应该考虑以下方面。**

- 减少代码间的耦合。
- 让代码保持弹性。
- 严格按规范编写代码。
- 设计可扩展的 `API` 。
- 代替旧的框架、语言（如 `VB` ）。
- 增强用户体验。
- 对速度进行优化。
- 压缩 `JavaScript、CSS、 image` 等前端资源（通常由**服务器**来解决）。
- 优化程序的性能（如数据读写）。
- 采用 `CDN` 来加速资源加载。
- 优化 ` JavaScript DOM` 。
- 缓存 `HTTP` 服务器的文件。

### 2、列举你知道的 Web 性能优化方法。

**具体优化方法如下：**

- 压缩源码和图片。
  - `JavaScript` 采用混淆压缩；
  - `CSS` 进行普通压缩；
  - `JPG` 图片根据具体质量压缩为 `50%~70%` ，把 `PNG` 图片从**24 色**压缩成**8 色**以去掉一些 `PNG` 格式信息等）。
- 选择合适的图片格式（颜色数多用 `JPG` 格式，而很少使用 `PNG` 格式，如果能通过服务器端判断浏览器支持`WebP` 就用`WebP` 或 `SVG` 格式）。
- 合并静态资源（减少 `HTTP` 请求）。
- 把多个 `CSS` 合并为一个 `CSS` ，把图片组合成**雪碧图**。
  - **雪碧图是什么？有什么优点？**
  - 雪碧图也称为**精灵图**，指将多张图片合并到一张图片中，可以减小图片的总大小；
  - 将多张图片合并到一张图片后，只需**一次网络请求**就可以将所需的资源全部下载，减小建立连接的消耗，在移动端尤为明显。
- 开启服务器端的 `Gzip` 压缩（对文本资源非常有效）。
  - **Gzip 压缩如何压缩文件？**
  - `gzip` 对于要压缩的文件，首先使用 `LZ77` 算法的一个变种进行压缩，对得到的结果再使用 `Huffman` 编码的方法。
- 使用 `CDN`（对公开库共享缓存）。
  - **CDN 是什么？**
  - `CDN` 指的是内容分发网络。
  - 其基本思路是尽可能的避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。
  - **如何使用 CDN？**
  - 在云服务商购买 `CDN` 服务，之后使用 `CDN` 加载静态资源。
- 延长静态资源缓存时间。
- 把 `CSS` 放在页面头部，把 `JavaScript` 代码放在页面底部（这样避免阻塞页面渲染而使页面出现长时间的空白）。

### 3、移动端性能如何优化？

优化方式如下。

- 尽量使用 `CSS3` 动画，开启**硬件加速**。
- 适当使用 `touch` 事件代替 `click` 事件。
- 避免使用`CSS3` 渐变阴影效果。
- 可以用 `transform:translateZ(0)`来开启硬件加速。
- 不滥用 `Float` , `Float` 在渲染时计算量比较大，尽量少使用。
- 不滥用 `Web` 字体， `Web` 字体需要下载、解析、重绘当前页面，尽量少使用。
- 合理使用 `requestAnimation Frame` 动画代替 `setTimeout` 。
- 合理使用 `CSS` 中的属性（ `CSS3 transitions` 、 `CSS3 3D transforms` 、 `Opacity` 、 `Canvas` 、 `WebGL` 、`Video` ）来触发 GPU 渲染。过度使用会使手机耗电量増加。

### 4、哪些方法可以提升网站前端性能？

- 精灵图合并，减少 HTTP 请求；
- 压缩 `HTML、CSS、JavaScript` 文件；
- 使用 `CDN` 托管静态文件；
- 使用 `localstorage` 缓存和 `mainfest` 应用缓存。

### 5、谈谈性能优化问题。

可以在以下层面优化性能。

- **缓存利用**：缓存 `Ajax` ，使用 `CDN` 、外部 `JavaScript` 和 `CSS` 文件缓存，添加 `Expires` 头部，在服务器端配置 `Etag` ，减少 `DNS` 查找等。
- **请求数量**：合并样式和脚本，使用 `CSS` 图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。
- **请求带宽**：压缩文件，开启 `GZIP` 。
- **CSS 代码**：避免使用 `CSS` 表达式、高级选择器、通配选择器。
- **JavaScript 代码**：用**散列表**来优化查找，少用**全局变量**，用 `innerHTML` 代替 `DOM` 操作，减少 `DOM` 操作次数，优化 `JavaScript` 性能，用 `setTimeout` 避免页面失去响应，缓存 `DOM` 节点查找的结果，避免使用 `with`（ `with` 会创建自己的作用域，增加作用域链的长度），多个变量声明合并。
- **HTML 代码**：避免图片和 `iFrame` 等 `src` 属性为空。`src` 属性为空，会重新加载当前页面，影响速度和效率，尽量避免在 `HTML` 标签中写 `Style` 属性。

### 6、如果一个页面上有大量的图片（大型电商网站），网页加载很慢，可以用哪些方法优化这些图片的加载，从而提升用户体验？

- 对于**图片懒加载**，可以为页面添加一个**滚动条事件**，判断图片是否在可视区域内或者即将进入可视区域，优先加载。
- 如果为幻灯片、相册文件等，可以使用**图片预加载**技术，对于当前展示图片的前一张图片和后一张图片优先下载。
- 如果图片为 `CSS` 图片，可以使用 `CSS Sprite` 、 `SVG sprite` 、 `iconfont` 、 `Base64` 等技术。
  - **什么时候用 base64 编码？**
  - 当图片足够小，且需要多次复用时使用 base64 编码。
  - **注意：①**大图片使用 `base64` 编码后，可能会使图片增大原图的 `1/3` ，所以 `base64` 编码并不适用于大图片。**②**使用 `base64` 编码图片并不意味着性能优化。
- 如果图片过大，可以使用**特殊编码**的图片，加载时会先加载一张压缩得特别小的缩略图，以提高用户体验。
- 如果图片展示区域小于图片的真实大小，则应在服务器端根据业务需要先行进行图片压缩，图片压缩后，图片大小与展示的就一致了。

### 7、如何对网站的文件进行优化？

- 可以进行**文件合并**、**文件压缩**使文件最小化；
- 可以使用 `CDN` 托管文件，让用户更快速地访问；
- 可以使用**多个域名**来缓存静态文件。

### 8、请说出几种缩短页面加载时间的方法。

**具体方法如下：**

**（1）** 优化图片。

**（2）** 选择图像存储格式（比如， `GIF` 提供的颜色较少，可用在一些**对颜色要求不高**的地方）。

**（3）** 优化 `CSS` （压缩、合并 `CSS` ）。

**（4）** 在网址后加斜杠。

**（5）** 为图片标明**高度**和**宽度**（如果浏览器没有找到**高度和宽度**这两个参数，它需要一边下载图片一边计算大小。如果图片很多，浏览器需要不断地调整页面。这不但影响速度，而且影响浏览体验。当浏览器知道**高度和宽度**参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容，从而优化加载时间，提升浏览体验）。

### 9、你知道哪些优化性能的方法？

具体方法如下。

**（1）** 减少 `HTTP` 请求次数，控制`CSS Sprite`、`JavaScript` 与 `CSS` 源码、图片的大小，使用网页 `Gzip` 、`CDN` 托管、`data` 缓存、图片服务器。

**（2）** 通过前端模板 `JavaScript` 和数据，减少由于 HTML 标签导致的带宽浪费，在前端用变量保存 Ajax 请求结果，每次操作本地变量时，不用请求，减少请求次数。

**（3）** 用 `innerHTML` 代替 `DOM` 操作，减少 `DOM` 操作次数，优化 `JavaScript` 性能。

**（4）** 当需要设置的样式很多时，设置 `className ` 而不是直接操作 `Style` 。

**（5）** 少用全局变量，缓存 `DOM` 节点查找的结果，减少 `I/O` 读取操作

**（6）** 避免使用 `CSS` 表达式，它又称**动态属性**。

**（7）** 预加载图片，将**样式表**放在顶部，将**脚本**放在底部，加上**时间戳**。

**（8）** 避免在页面的主体布局中使用表，表要在其中的内容完全下载之后才会显示出来，显示的速度比 `DIV+CSS` 布局慢。

### 10、你知道哪些 SEO 搜索引擎优化的方法？

- 合理的 `title` 、`description` 、`keywords` ：
  - 搜索对着三项的权重逐个减小， `title` 值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同页面 `title` 要有所不同；
  - `description` 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 `description` 有所不同；
  - `keywords` 列举出重要关键词即可。
- 语义化的 `HTML` 代码，符合 `W3C` 规范：语义化代码让搜索引擎容易理解网页。
- 重要内容 `HTML` 代码放在最前：搜索引擎抓取 `HTML` 顺序是从上到下，有的搜索引擎对**抓取长度**有限制，保证重要内容一定会被抓取。
- 重要内容不要用 `js`输出：爬虫不会执行 `js` 获取内容。
- 少用 `iframe` ：搜索引擎不会抓取 `iframe` 中的内容。
- 非装饰性图片必须加 `alt`。
- 提高网站速度：网站速度是搜索引擎排序的一个重要指标。

# 🗯️ 三、代码、服务器端优化

### 1、平时你是如何对代码进行性能优化的？

（1）利用性能分析工具监测性能，包括静态 `Analyze` 工具和运行时的 `Profile` 工具（在 `Xcode` 工具栏中依次单击 `Product→ Profile` 项可以启动）。

（2）比如测试程序的运行时间，当单击 `Time Profiler` 项时，应用程序开始运行，这就能获取到运行整个应用程序所消耗时间的分布和百分比。为了保证数据分析在同一使用场景下的真实性，一定要使用真机，因为此时模拟器在 `Mac` 上运行，而 `Mac` 上的 `CPU` 往往比 `iOS` 设备要快。

### 2、如何优化服务器端？

**具体方法如下：**

（1）对组件启用 `Gzip` 压缩。

（2）延长资源缓存时间，合理设置资源的过期时间，对于一些长期不更新的静态资源，其过期时间可以设置得长一些。

（3）减少 `cookie` 头部信息的大小，头部信息越大，资源传输速度越慢。

（4）图片或者 `CSS` 、`JavaScript` 文件均可使用 `CDN` 来加速。

### 3、如何优化服务器端的接口？

**具体方法如下：**

**（1）接口合并**：如果一个页面需要请求两部分以上的数据接口，则建议合并成一个以减少 `HTTP` 请求数。

**（2）减少数据量**：去掉接口返回的数据中不需要的数据。

**（3）缓存数据**：首次加载请求后，缓存数据；对于非首次请求，优先使用上次请求的数据，这样可以提升非首次请求的响应速度。

### 4、如何优化脚本的执行？

脚本处理不当会阻塞页面加载、渲染，因此在使用时需注意。

**（1）** 把 `CSS` 写在页面头部，把 `JavaScript` 程序写在页面尾部或异步操作中。

**（2）** 避免图片和 `iFrame` 等的空 `src` ，空 `src` 会重新加载当前页面，影响速度和效率。

**（3）** 尽量避免重设图片大小。重设图片大小是指在页面、`CSS` 、` JavaScript` 文件等中多次重置图片大小，多次重设图片大小会引发图片的多次重绘，影响性能

**（4）** 图片尽量避免使用`DataURL` 。`DataURL` 图片没有使用图片的压缩算法，文件会变大，并且要在解码后再渲染，加载慢，耗时长。

### 5、页面渲染有哪些优化方式？

**具体方法如下：**

**（1）** 通过 HTML 设置 `Viewport` 元标签， `Viewport` 可以加速页面的渲染，如以下代码所示。

```html
<meta name="viewport" content="width=device=width,initial-scale=1" />
```

**（2）** 减少 `DOM` 节点数量，`DOM` 节点太多会影响页面的渲染，应尽量减少 `DOM` 节点数量。

**（3）** 尽量使用 `CSS3` 动画，合理使用 `requestAnimation Frame` 动画代替 `setTimeout` ，适当使用 `canvas` 动画（5 个元素以内使用 `CSS` 动画，5 个元素以上使用 `canvas` 动画（ `iOS 8` 中可使用 `webGL` ）。

**（4）** 对于高频事件优化 `Touchmove` , `Scroll` 事件可导致多次渲染。

- 使用 `requestAnimation Frame` 监听帧变化，以便在正确的时间进行渲染，增加响应变化的时间间隔，减少重绘次数。
- 使用节流模式（基于操作节流，或者基于时间节流），减少触发次数。

**（5）** 提升 `GPU` 的速度，用 `CSS` 中的属性（ `CSS3 transitions` 、`CSS3 3D transforms` 、`Opacity` 、 `Canvas` 、 `WebGL` 、`Video` ）来触发 `GPU` 渲染。

### 6、如何设置 DNS 缓存？

在浏览器地址栏中输入 `URL` 以后，浏览器首先要查询域名 `hostname` 对应服务器的 `IP` 地址，一般需要耗费**20~120ms**的时间。

`DNS` 查询完成之前，浏览器无法识别服务器 `IP` ，因此不下载任何数据。基于性能考虑，`ISP` 运营商、局域网路由、操作系统、客户端（浏览器）均会有相应的`DNS` 缓存机制。

（1）正 `IE` 缓存 `30min` ，可以通过注册表中 `DnsCacheTimeout` 项设置。

（2）`Firefox` 混存 `1min` ，通过 `network.dnsCacheExpiration` 配置。

（3）在 `Chrome` 中通过依次单击 **“设置”→“选项”→“高级选项”** ，并勾选 **“用预提取 DNS 提高网页载入速度”** 选项来配置缓存时间。

### 7、什么时候会出现资源访问失败？

开发过程中，发现很多开发者没有设置图标，而服务器端根目录也没有存放默认的 `Favicon.ico` ，从而导致请求 404 出现。通常在 App 的 `webview` 里打开 `Favicon.ico` ，不会加载这个 `Favicon.ico`，但是很多页面能够分享。

如果用户在浏览器中打开 `Favicon. ico` ，就会调取失败，一般尽量保证该图标默认存在，文件尽可能小，并设置一个**较长的缓存过期时间**。另外，应及时清理缓存过期导致岀现请求失败的资源。

### 8、为什么利用多个域名来存储网站资源会更有效？

- `CDN` 缓存更方便；
- 突破浏览器并发限制；
- 节约 `cookie` 带宽；
- 节约主域名的连接数，优化页面响应速度；
- 防止不必要的安全问题。

### 9、有一个页面，他必须实时展示最新的数据，你有哪些方案？

- `http` 轮询，使用 ajax 配合定时器定时请求数据更新；
- `websocket` ，用来处理服务器端推送的长连接协议。

# 💭 四、性能优化文章补充

> 详解文章补充 👇
>
> - 原文：[关于前端性能优化问题，认识网页加载过程和防抖节流](https://juejin.cn/post/6973062729925918756)
> - 链接：https://juejin.cn/post/6973062729925918756