import{_ as s,o as a,c as n,O as l}from"./chunks/framework.a8664ac5.js";const A=JSON.parse('{"title":"GitHub Action + VitePress 部署","description":"","frontmatter":{},"headers":[],"relativePath":"column/articleMenu/vuepress.md","filePath":"column/articleMenu/vuepress.md","lastUpdated":1687922002000}'),p={name:"column/articleMenu/vuepress.md"},o=l(`<h1 id="github-action-vitepress-部署" tabindex="-1">GitHub Action + VitePress 部署 <a class="header-anchor" href="#github-action-vitepress-部署" aria-label="Permalink to &quot;GitHub Action + VitePress 部署&quot;">​</a></h1><p>本文教你如何使用 GitHub Action + vitepress 自动化部署在 GitHub Pages</p><h2 id="vitepress" tabindex="-1">VitePress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;VitePress&quot;">​</a></h2><p>VitePress 是一个以 Markdown 为中心的静态网站生成器，VitePress 能在 Markdown 里使用 Vue 语法，并且每个页面都会预渲染生成静态的 HTML，也就是说加载性能好还有非常好的 SEO 支持，非常适合用来写文档和博客。</p><h2 id="项目搭建" tabindex="-1">项目搭建 <a class="header-anchor" href="#项目搭建" aria-label="Permalink to &quot;项目搭建&quot;">​</a></h2><h3 id="_1-创建项目" tabindex="-1">1.创建项目 <a class="header-anchor" href="#_1-创建项目" aria-label="Permalink to &quot;1.创建项目&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 1.创建并进入一个项目文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-starter</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-starter</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 注：不想使用命令创建的可以鼠标右键新建 vitepress-starter 文件夹</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 初始化项目</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装 VuePress 依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue</span></span></code></pre></div><h3 id="_2-添加命令" tabindex="-1">2.添加命令 <a class="header-anchor" href="#_2-添加命令" aria-label="Permalink to &quot;2.添加命令&quot;">​</a></h3><p>在 package.json 文件中添加 scripts 命令</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">docs:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">docs:serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="_3-创建第一篇文章" tabindex="-1">3.创建第一篇文章 <a class="header-anchor" href="#_3-创建第一篇文章" aria-label="Permalink to &quot;3.创建第一篇文章&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mkdir docs</span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;# Hello VitePress&#39; &gt; docs/README.md</span></span></code></pre></div><h3 id="_4-本地启动" tabindex="-1">4.本地启动 <a class="header-anchor" href="#_4-本地启动" aria-label="Permalink to &quot;4.本地启动&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run docs:dev</span></span></code></pre></div><p>然后就可以打开 localhost: xxxx 看到 Hello VitePress 的文章了，并且是支持热更新，因为 vitepress 就是用 webpack-dev-server 驱动的。VitePress 还有很多扩展的配置，在 docs 目录下加新建.vitepress/config.js，在这里可以配置标题、主题、语言、导航栏等等，在这里不展开描述。具体详情可以参考官方文档 <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">官方文档</a>，<a href="https://process1024.github.io/vitepress/" target="_blank" rel="noreferrer">中文文档</a></p><p>最后部署的时候用 npm run docs:build 命令，会在 docs/.vitepress 生成 dist 目录，这个目录后面配置 workflow 会用到。</p><h2 id="github-actions" tabindex="-1">GitHub-Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;GitHub-Actions&quot;">​</a></h2><p>actions 顾名思义就是一堆动作，是一个持续集成服务，持续集成包含了拉代码、运行测试、编译代码、登录远程服务器，发布到第三方服务等等的操作，GitHub 将这些操作称为 actions。</p><p>不同项目的很多操作可以是一样的，比如拉取分支代码、缓存依赖等，每个也就是一个 action 脚本是可以共用的，所以 GitHub 允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。</p><p>GitHub 做了一个<a href="https://github.com/marketplace?type=actions" target="_blank" rel="noreferrer">官方市场</a>，可以让开发者提交 action 供其他人使用，GitHub 官方的 actions 则都放在 <a href="https://github.com/actions" target="_blank" rel="noreferrer">github.com/actions</a> 里面。接下来介绍写一个 VitePress 的 action</p><h3 id="建立仓库" tabindex="-1">建立仓库 <a class="header-anchor" href="#建立仓库" aria-label="Permalink to &quot;建立仓库&quot;">​</a></h3><p>首先在 github 上创建仓库，如果建立的仓库名称是 username.github.io，则最后访问的地址<a href="https://username.github.io/%E3%80%82" target="_blank" rel="noreferrer">https://username.github.io/。</a> 如果不是这个名称，则最后访问的地址是<a href="https://username.github.io/repo/" target="_blank" rel="noreferrer">https://username.github.io/repo/</a> ,repo 就是仓库名字，此时还需要先修改.vuepress/config.js，该文件导出一个对象，增加 base 的配置项，值为“/repo/”。</p><h3 id="添加-github-相关配置文件" tabindex="-1">添加.github 相关配置文件 <a class="header-anchor" href="#添加-github-相关配置文件" aria-label="Permalink to &quot;添加.github 相关配置文件&quot;">​</a></h3><p>在项目的根目录下新建.github/workflows 目录，workflow 就是 GitHub Actions 的配置文件。随便新建.yml 文件就是一个 flow，github 会自动运行 workflows 目录下所有的 yml 文件。介绍下 workflow 最重要的几个配置和概念。</p><ol><li><p>name：是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名</p></li><li><p>on：指定触发 workflow 的条件，通常是某些事件。在本文实例里用的是 push，指的就是当 git push 事件发生时触发该 workflow。</p></li><li><p>jobs：是 workflow 最重要的部分，表示 workflow 要执行的任务，可以是一个或者多个。</p></li></ol><p>接下里开始就是本文示例的部署内容。</p><p>我们希望的流程是，本地改完代码，上传到 github 后能自动打包部署到 gh-pages 分支。先配置触发条件 on：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 触发条件</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 每当 push 到 master 分支时触发部署</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 是否手动触发部署</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">workflow_dispatch</span><span style="color:#89DDFF;">:</span></span></code></pre></div><p>接下来配置重头戏 jobs:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">docs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 指定运行所需要的虚拟机环境（必填）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">fetch-depth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Setup Node.js</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;"># 选择要使用的 node 版本</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">16</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 缓存 node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Cache dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/cache@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn-cache</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">            **/node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ runner.os }}-yarn-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">restore-keys</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">            \${{ runner.os }}-yarn-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 如果缓存没有命中，安装依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Install dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 运行构建脚本</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build VuePress site</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 查看 workflow 的文档来获取更多信息</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crazy-max/ghaction-github-pages@v2</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">GITHUB_TOKEN</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.ACTION_SECRET }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;"># 部署到 gh-pages 分支</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">target_branch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gh-pages</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;"># 部署目录为 VuePress 的默认输出目录</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">build_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vuepress/dist</span></span></code></pre></div><p>完整示例（可以直接复制拿去用）</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build to my github</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">permissions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">contents</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">write</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># - name: CreateTag</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">#   run git tag -a</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">github_token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.PERSONAL_TOKEN }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">publish_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span></code></pre></div><p>首先 job 里配置运行这个脚本需要的虚拟机环境，这个虚拟机环境由 github 提供，可用的包括 windows、linux、macos 等环境，具体看官方文档。在此示例中其实不论哪个系统都是可以的，因为我们需要的是 node 环境，而 node 本身就是跨平台的。</p><p>接下里设置获取源码、需要的 node 版本、增加缓存依赖，这里使用官方提供的 actions/setup-node@v1、setup-node@v1、cache@v2。这里的@表示版本，使用别人的 action 时最好都加上版本，以防后面更新的 action 不兼容当前的脚本。这些前置条件配置好，接下来就是熟悉的 npm install、npm run build:docs，安装依赖使用--frozen-lockfile 来锁定版本。最后一步就是将打包的目录更新到 gh-pages 分支。因为要更新 github 代码，所以还需要配置 github-token。</p><p>1.获取 github-token<br> 点击 GitHub 个人头像 --&gt; Settings --&gt; Developer settings<br> 注意：token 生成后及时复制保存好，离开此页面后 token 将不可见 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/252e3d42460a4d56be3ca8bb9e84ea37~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>2.在仓库的 setting 下找到 secert，新建一个 secert，文件名可以随便取，在 workflow 的环境变量里 secerts 指的就是这里 secert，后面就是 secert 里文件的具体名称，在这里取为 PERSONAL_TOKEN，env 配置 secerts.PERSONAL_TOKEN 就行。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2dabc93487b3475a8632ede81597abfa~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/343a9e7b59db4804b0611920d4013fde~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb25a834b30d4c708378d1670cc0bc2e~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>最后指定部署的分支名称，和部署到分支的默认输出目录就行。</p><p>尝试着推送代码，可以看到仓库的 Actions 开始自动运行了，并且能看到运行的日志。 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bff978097bbd4334bcea76c1532f0743~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>运行完后访问 <a href="https://username.github.io/repo" target="_blank" rel="noreferrer">https://username.github.io/repo</a> 就能看到部署后的效果了。</p><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><p>gitHub: <a href="https://github.com/Duxczd/magical-blue-cranium" target="_blank" rel="noreferrer">https://github.com/Duxczd/magical-blue-cranium</a></p>`,44),e=[o];function t(c,r,i,y,D,C){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};