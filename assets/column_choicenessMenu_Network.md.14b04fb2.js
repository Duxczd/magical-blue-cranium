import{_ as t,o as e,c as o,O as l}from"./chunks/framework.a8664ac5.js";const P=JSON.parse('{"title":"⚾ 序言","description":"","frontmatter":{},"headers":[],"relativePath":"column/choicenessMenu/Network.md","filePath":"column/choicenessMenu/Network.md","lastUpdated":1685696218000}'),r={name:"column/choicenessMenu/Network.md"},n=l('<h1 id="⚾-序言" tabindex="-1">⚾ 序言 <a class="header-anchor" href="#⚾-序言" aria-label="Permalink to &quot;⚾ 序言&quot;">​</a></h1><p>大家都知道，计算机网络是前端面试中非常爱考的面试题了，不得不说是八股文的经典。在周一刚开始接触计网时，也是一直看到类似于<strong>三次握手四次握手之类</strong>的问题。刚开始我是知识比较浮于表面，对计网知识的了解就一直停留在知道有那么一些内容。但随着学习的深入，慢慢地我觉得，在了解一个东西之前，不仅仅要知道它是什么？还要知道它为什么出现？它的出现又解决了什么问题？这样的学习会更加有利于将其运用到我们的日常开发中。</p><p>在下面这篇文章中，将分享在秋招备试的过程中我学习计网的一个过程，以及自己整理的关于计网常考的一些面经题。</p><p>下面开始进入今天文章的讲解~😜</p><h1 id="🏐-一、基础知识环节" tabindex="-1">🏐 一、基础知识环节 <a class="header-anchor" href="#🏐-一、基础知识环节" aria-label="Permalink to &quot;🏐 一、基础知识环节&quot;">​</a></h1><h2 id="_1、专栏学习" tabindex="-1">1、专栏学习 <a class="header-anchor" href="#_1、专栏学习" aria-label="Permalink to &quot;1、专栏学习&quot;">​</a></h2><p>刚开始面对的是学校发的一本非常厚重的书，u1s1，面对那<strong>接近 1000 页</strong>的书，我的心里其实蛮奔溃的。后面在机缘巧合下，在一个公众号上看到了一位前端博主的文章，<strong>零一</strong>。紧接着在 <code>csdn</code> 上看到他写的很多精选专栏，看完他的博客之后，才下意识地感觉……原来还有写的这么好的文章。这一段废话有点多……以后有机会再谈。</p><p>我当时先学的是零一博主的 <code>TCP</code> 专栏，博主的每一篇文章对小白都是极其友好类型，非常地通俗易懂。下面附上 <code>TCP</code> 专栏相关的文章链接 👇</p><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">文章</th><th style="text-align:center;">链接</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>1</strong></td><td style="text-align:center;">【TCP/IP】概述网络分层以及协议介绍</td><td style="text-align:center;"><a href="https://lpyexplore.blog.csdn.net/article/details/108925528" target="_blank" rel="noreferrer">https://lpyexplore.blog.csdn.net/article/details/108925528</a></td></tr><tr><td style="text-align:center;"><strong>2</strong></td><td style="text-align:center;">【TCP/IP】IP 地址的划分及其分类</td><td style="text-align:center;"><a href="https://lpyexplore.blog.csdn.net/article/details/108935757" target="_blank" rel="noreferrer">https://lpyexplore.blog.csdn.net/article/details/108935757</a></td></tr><tr><td style="text-align:center;"><strong>3</strong></td><td style="text-align:center;">【TCP/IP】链路层的简单认识</td><td style="text-align:center;"><a href="https://lpyexplore.blog.csdn.net/article/details/109248705" target="_blank" rel="noreferrer">https://lpyexplore.blog.csdn.net/article/details/109248705</a></td></tr><tr><td style="text-align:center;"><strong>4</strong></td><td style="text-align:center;">【TCP/IP】详解 DNS 具体作用过程</td><td style="text-align:center;"><a href="https://lpyexplore.blog.csdn.net/article/details/109128967" target="_blank" rel="noreferrer">https://lpyexplore.blog.csdn.net/article/details/109128967</a></td></tr><tr><td style="text-align:center;"><strong>5</strong></td><td style="text-align:center;">【TCP/IP】图解 TCP 的通信机制</td><td style="text-align:center;"><a href="https://lpyexplore.blog.csdn.net/article/details/109133096" target="_blank" rel="noreferrer">https://lpyexplore.blog.csdn.net/article/details/109133096</a></td></tr><tr><td style="text-align:center;"><strong>6</strong></td><td style="text-align:center;">专栏传送门</td><td style="text-align:center;"><a href="https://blog.csdn.net/l_ppp/category_10448348.html" target="_blank" rel="noreferrer">https://blog.csdn.net/l_ppp/category_10448348.html</a></td></tr></tbody></table><p>以上文章可以按顺序学哦~</p><h2 id="_2、书籍学习" tabindex="-1">2、书籍学习 <a class="header-anchor" href="#_2、书籍学习" aria-label="Permalink to &quot;2、书籍学习&quot;">​</a></h2><p>学习完上面的 5 篇博客之后，前后大概花了<strong>15-20h</strong>左右的时间。看完之后，算是稍微入了个门。但是计网的内容远远不止这些，所以，在学习了博客文章之后，我继续用书籍来深挖知识点。</p><p>搜寻了知乎和豆瓣，还有身边的小伙伴的推荐，大家都说对前端比较友好的书籍是： <strong>《图解 TCP/IP》</strong> 这一本书。<strong>看下图 👇</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270821911.jpeg" alt="计网书籍推荐"></p><p>这本书以图解的形式，讲解了计算机网络的大部分知识。可以说对入门选手和对看书就容易犯困的小伙伴来说实在是太太太友好了……强烈安利！</p><p>看完这本书之后，应对面试基本上算是足够了。如果还有想要深挖的小伙伴，可以去看深色封面的那本书……只是听过，但是我没有看过，所以这里只简单概括一下~</p><p>有了基础知识预备之后，就可以看一下一些面经题目，尝试着回顾和用自己的话语来回答。同时在文章下面的内容中，我也将对我遇到的系列题目进行归纳总结~</p><h1 id="⚽-二、思维导图环节" tabindex="-1">⚽ 二、思维导图环节 <a class="header-anchor" href="#⚽-二、思维导图环节" aria-label="Permalink to &quot;⚽ 二、思维导图环节&quot;">​</a></h1><p>我们先用一张思维导图来了解该系列面经题的知识体系。<strong>具体如下图 👇</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270821911.png" alt="计算机网络面试复习框架"></p><p>思维导图收入囊中，下面开始分享面经题的解答流程~</p><h1 id="🎳-三、osi-七层模型" tabindex="-1">🎳 三、OSI 七层模型 <a class="header-anchor" href="#🎳-三、osi-七层模型" aria-label="Permalink to &quot;🎳 三、OSI 七层模型&quot;">​</a></h1><h2 id="_1、osi-模型是什么" tabindex="-1">1、OSI 模型是什么？ <a class="header-anchor" href="#_1、osi-模型是什么" aria-label="Permalink to &quot;1、OSI 模型是什么？&quot;">​</a></h2><p><code>OSI</code> 七层模型，即网络通信的七个层次。之所以将其分为七个层次，是为了让开发人员可以在不同领域分别实现整个系统的不同部分。就像一个非常庞大的工程，每个员工都有自己擅长的岗位和专门负责的工作。</p><p>那么七个层次主要包括：物理层、数据链路层、网络层、传输层、会话层、表示层以及应用层。</p><p><strong>接下来谈论各个层次的作用。</strong></p><p><strong>第一个，应用层</strong>。应用层是为应用程序提供服务并规定应用程序中通信相关的细节。包括文件传输、电子邮件、远程登录（虚拟终端）等协议。</p><p><strong>第二个，表示层</strong>。表示层是将应用处理的信息转换为适合网络传输的格式，或将来自下一层的数据转换为上一层能够处理的格式。因此它主要负责数据格式的转换。</p><p><strong>第三个，会话层</strong>。会话层是负责建立和断开通信连接，以及数据的分割等数据传输相关的管理。</p><p><strong>第四个，传输层</strong>。传输层起着可靠传输的作用，它只在通信双方的节点上进行处理，而无需在路由器上处理。</p><p><strong>第五个，网络层</strong>。网络层将数据传输到<strong>目标地址</strong>上，目标地址可以是多个网络通过路由器连接而成的某一个地址。因此这一层主要<strong>负责寻址和路由选择</strong>。</p><p><strong>第六个，数据链路层</strong>。数据链路层负责物理层面上互联的、结点之间的通信传输。</p><p><strong>第七个，物理层</strong>。负责 0、1 比特流（0、1 序列）与电压的高低、光的闪灭之间的互换。</p><h2 id="_2、osi-七层模型遵循原则" tabindex="-1">2、OSI 七层模型遵循原则 <a class="header-anchor" href="#_2、osi-七层模型遵循原则" aria-label="Permalink to &quot;2、OSI 七层模型遵循原则&quot;">​</a></h2><p><strong>OSI 参考模型遵循五个原则：</strong></p><ul><li><p>各个层级之间有清晰的边界，便于理解各个层级的功能；</p></li><li><p>每个层实现的功能不一样，并且不会互相影响；</p></li><li><p>层与层之间是<strong>服务与被服务</strong>关系；</p></li><li><p>层次划分有利于国际标准协议的制定；</p></li><li><p>层次数目越多，就越能避免各个层之间的<strong>功能重复</strong>。</p></li></ul><h1 id="🏏-四、tcp-与-udp" tabindex="-1">🏏 四、TCP 与 UDP <a class="header-anchor" href="#🏏-四、tcp-与-udp" aria-label="Permalink to &quot;🏏 四、TCP 与 UDP&quot;">​</a></h1><h2 id="_1、tcp-与-udp-的区别" tabindex="-1">1、TCP 与 UDP 的区别 <a class="header-anchor" href="#_1、tcp-与-udp-的区别" aria-label="Permalink to &quot;1、TCP 与 UDP 的区别&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">TCP</th><th style="text-align:center;">UDP</th></tr></thead><tbody><tr><td style="text-align:center;">TCP 在传输层上</td><td style="text-align:center;">UDP 在传输层上</td></tr><tr><td style="text-align:center;">面向连接</td><td style="text-align:center;">面向无连接</td></tr><tr><td style="text-align:center;">面向字节流</td><td style="text-align:center;">面向报文</td></tr><tr><td style="text-align:center;">一对一通信</td><td style="text-align:center;">一对一、一对多、多对一、多对多通信</td></tr><tr><td style="text-align:center;">需要建立可靠的连接</td><td style="text-align:center;">不需要建立可靠的连接</td></tr><tr><td style="text-align:center;">适用于可靠传输的应用：web browsing、email、文件传输等</td><td style="text-align:center;">适用于实时应用：线上游戏、直播、IP 电话、语音会议等</td></tr></tbody></table><p><strong>白话文回答：</strong></p><ul><li><code>TCP</code> 是面向连接的，<code>UDP</code> 是面向无连接的，即<strong>发送数据前</strong>不需要建立连接。</li><li><code>TCP</code> 提供可靠的传输服务，通过 <code>TCP</code> 连接传送的数据，无差错，不丢失，不重复，且按序到达，而 <code>UDP</code> 则是尽最大努力交付，不保证可靠传输。</li><li>因此，因为 <code>TCP</code> 可靠，面向连接且不会丢失数据，所以 <code>TCP</code> 适合大数据量的交换。</li><li><code>TCP</code> 面向字节流，实际是 <code>TCP</code> 把数据看成是<strong>一连串无结构的字节流</strong>； <code>UDP</code> 则是面向报文的，且没有拥塞控制，因此，网络出现拥堵的情况下不会使原主机的发送速率降低，但是这个过程会出现丢包，所以它对实时的应用很有用，比如 <code>IP</code> 电话、视频会议和直播等等。</li><li>每一条 <code>TCP</code> 连接，只能是一对一的，<code>UDP</code> 则支持一对一、一对多、多对一和多对多的交互通信。</li><li><code>TCP</code> 的首部开销为<strong>20 字节</strong>，而 <code>UDP</code> 的只有<strong>8 字节</strong>。</li><li>综上所述，<code>TCP</code> 是面向连接的可靠性传输，而 <code>UDP</code> 则是不可靠的。</li></ul><p>注： <code>TCP</code> 需建立三次连接、且 <code>TCP</code> 的包可以进行分组发送，会产生建立连接开销和分组开销。</p><h2 id="_2、tcp-udp-的优缺点" tabindex="-1">2、TCP/UDP 的优缺点 <a class="header-anchor" href="#_2、tcp-udp-的优缺点" aria-label="Permalink to &quot;2、TCP/UDP 的优缺点&quot;">​</a></h2><h3 id="_1-tcp-的优点" tabindex="-1">（1）TCP 的优点 <a class="header-anchor" href="#_1-tcp-的优点" aria-label="Permalink to &quot;（1）TCP 的优点&quot;">​</a></h3><ul><li><p><strong>可靠、稳定。</strong></p></li><li><p><code>TCP</code> 的可靠体现在 <code>TCP</code> 在传递数据之前，会有三次握手来建立连接；</p></li><li><p>且在数据传递时，有<strong>确认</strong>、<strong>窗口</strong>、<strong>重传</strong>、<strong>拥塞控制</strong>等机制；</p></li><li><p>在数据完成传送以后，还会通过断开连接来节约资源。</p></li></ul><h3 id="_2-tcp-的缺点" tabindex="-1">（2）TCP 的缺点 <a class="header-anchor" href="#_2-tcp-的缺点" aria-label="Permalink to &quot;（2）TCP 的缺点&quot;">​</a></h3><ul><li><strong>慢、效率低、占用系统资源高，易被攻击。</strong></li><li><code>TCP</code> 在传递数据前，要先建立连接，这会消耗时间；</li><li>且在传递数据时，确认机制、重传机制、拥塞控制机制等都会消耗大量的时间；</li><li>同时要在每台设备上维护所有的传输连接，事实上，每个连接都会占用系统的 <code>CPU</code> 、内存等硬件资源；</li><li>而且，因为 <code>TCP</code> 有三次握手机制，这些也会导致 <code>TCP</code> 容易被人利用，实现 <code>DOS</code> 、 <code>DDOS</code> 等攻击。</li></ul><h3 id="_3-udp-的优点" tabindex="-1">（3）UDP 的优点 <a class="header-anchor" href="#_3-udp-的优点" aria-label="Permalink to &quot;（3）UDP 的优点&quot;">​</a></h3><ul><li><strong>快、比 TCP 稍安全。</strong></li><li><code>UDP</code> 是一个无状态的传输协议，且 <code>UDP</code> 没有 <code>TCP</code> 的握手、确认、窗口、重传、拥塞控制等机制，所以它在传递数据时非常快。没有 <code>TCP</code> 的这些机制，<code>UDP</code> 较 <code>TCP</code> 能被攻击者利用的漏洞就要少一些。</li><li>但 <code>UDP</code> 也是无法避免攻击的，比如：<code>UDP flood</code> 攻击。</li></ul><h3 id="_4-udp-的缺点" tabindex="-1">（4）UDP 的缺点 <a class="header-anchor" href="#_4-udp-的缺点" aria-label="Permalink to &quot;（4）UDP 的缺点&quot;">​</a></h3><ul><li><strong>不可靠、不稳定。</strong></li><li>因为 <code>UDP</code> 没有 <code>TCP</code> 那些可靠的机制，所以在数据传递时，如果网络质量不好，就会很容易<strong>丢包</strong>。</li></ul><h2 id="_3、ddos-攻击-由-tcp-和-udp-的缺点引出-ddos-攻击问题" tabindex="-1">3、DDOS 攻击（由 TCP 和 UDP 的缺点引出 DDOS 攻击问题） <a class="header-anchor" href="#_3、ddos-攻击-由-tcp-和-udp-的缺点引出-ddos-攻击问题" aria-label="Permalink to &quot;3、DDOS 攻击（由 TCP 和 UDP 的缺点引出 DDOS 攻击问题）&quot;">​</a></h2><h3 id="_1-什么是-ddos-攻击" tabindex="-1">（1）什么是 DDOS 攻击？ <a class="header-anchor" href="#_1-什么是-ddos-攻击" aria-label="Permalink to &quot;（1）什么是 DDOS 攻击？&quot;">​</a></h3><ul><li>分布式拒绝服务攻击（Distributed denial of sevice attack）；</li><li>即向目标系统同时提出<strong>数量庞大</strong>的服务请求。</li></ul><h3 id="_2-ddos-攻击方式" tabindex="-1">（2）DDOS 攻击方式？ <a class="header-anchor" href="#_2-ddos-攻击方式" aria-label="Permalink to &quot;（2）DDOS 攻击方式？&quot;">​</a></h3><p>攻击者如何攻击目标主机呢？</p><ul><li>通过使<strong>网络过载</strong>来<u>干扰甚至阻断</u>正常的网络通讯。</li><li>通过向服务器提出大量的服务请求、使服务器超负荷。</li><li>阻断<strong>某一用户</strong>访问服务器。</li><li>阻断<strong>某服务</strong><u>与特定系统或个人</u>的通讯。</li></ul><h3 id="_3-如何应对-ddos-攻击" tabindex="-1">（3）如何应对 DDOS 攻击？ <a class="header-anchor" href="#_3-如何应对-ddos-攻击" aria-label="Permalink to &quot;（3）如何应对 DDOS 攻击？&quot;">​</a></h3><ul><li>黑名单。</li><li><code>DDOS</code> 清洗：对用户请求的数据进行<strong>实时监控</strong>，及时发现 <code>DOS</code> 攻击等异常流量，在不影响正常业务开展的情况下清洗掉这些异常流量。</li><li><code>CDN</code> 加速。</li><li>高仿服务器：高仿服务器主要是指能独立防御<strong>50Gbps 以上</strong> ( <code>1Gbps=1024Mbps，即每秒1000M</code> ) 的服务器，能够帮助网站<strong>拒绝服务攻击</strong>，定期扫描<strong>网络主节点</strong>。</li></ul><h2 id="_4、tcp-为什么可靠" tabindex="-1">4、TCP 为什么可靠？ <a class="header-anchor" href="#_4、tcp-为什么可靠" aria-label="Permalink to &quot;4、TCP 为什么可靠？&quot;">​</a></h2><ul><li><code>TCP</code> 会通过<strong>检验和</strong>、<strong>序列号</strong>、<strong>确认应答</strong>、<strong>重发控制</strong>、<strong>连接管理</strong>及<strong>窗口控制</strong>等机制实现可靠性传输。</li><li><strong>那如何通过以上机制来实现可靠性传输呢？</strong></li><li>在 <code>TCP</code> 中，当发送端的数据到达接收主机时，接收端主机会返回一个已收到消息的通知。这个消息叫做确认应答 <code>（ACK）</code> 。（确认应答）</li><li>相反，当发送端发送数据出去之后，且在一段时间内，没有等到确认应答，则数据极有可能出现丢失的情况。</li><li>如果在一定时间内没有等到确认应答，那么发送方就可以认为数据已经丢失，并进行重发。由此，即使产生了丢包，仍然能够保证数据能够到达对端，实现可靠传输。（丢包重发）</li><li>此外，也有可能因为一些其他原因导致确认应答<strong>延迟到达</strong>，此时，发送主机同样会按照机制重发数据。（延迟重发）</li><li>但是这对于目标主机来说，简直是一个巨大的灾难。因为目标主机会反复收到相同的数据。</li><li>为此，需要引入一种新的机制，<strong>序列号</strong>。序列号能够识别<strong>是否已经接收数据</strong>，及<strong>是否需要接收数据</strong>。（序列号）</li><li>序列号是按照顺序给发送数据的每一个字节都<strong>标上号码的编号</strong>。接收端会查询所接收数据中 <code>TCP</code> 首部的序列号和数据的长度，将自己下一步应该接收的序号作为确认应答返送回去。（序列号）</li><li>就这样，通过序列号、确认应答等机制，实现 <code>TCP</code> 的可靠传输。</li></ul><p><strong>注：</strong> 序列号主要是让接收端可以丢弃数据并返回下一个应答号，这样就不会频繁地收到同一个数据。</p><h2 id="_5、tcp-的三次握手和四次挥手" tabindex="-1">5、TCP 的三次握手和四次挥手 <a class="header-anchor" href="#_5、tcp-的三次握手和四次挥手" aria-label="Permalink to &quot;5、TCP 的三次握手和四次挥手&quot;">​</a></h2><h3 id="_1-tcp-的三次握手" tabindex="-1">（1）TCP 的三次握手 <a class="header-anchor" href="#_1-tcp-的三次握手" aria-label="Permalink to &quot;（1）TCP 的三次握手&quot;">​</a></h3><p><strong>场景模拟：</strong></p><ul><li>如通话一样，比如我现在跟面试官您打电话。那我会先问，喂，您好，听得到吗？</li><li>你会回我说，听到啦！那你能听到我的话吗？</li><li>我会再回你说，听到了，我们可以开始聊天了。</li></ul><p><strong>三次握手：</strong></p><ul><li>首先，客户端会发送一个带有 <code>SYN</code> 标志的数据包给对方；</li><li>接收方收到以后，会返回一个带有 <code>SYN/ACK</code> 标志的数据包返回给发送端，代表成功传达消息；</li><li>之后发送端再回传一个带有 <code>ACK</code> 标志的数据包，代表握手结束。</li></ul><h3 id="_2-tcp-为什么要三次握手" tabindex="-1">（2）TCP 为什么要三次握手？ <a class="header-anchor" href="#_2-tcp-为什么要三次握手" aria-label="Permalink to &quot;（2）TCP 为什么要三次握手？&quot;">​</a></h3><ul><li>验证服务端和客户端是否遵循 <code>TCP/IP</code> 协议；</li><li>为了防止已失效的<strong>连接请求报文段</strong>突然又传送到服务端，避免错误产生。</li></ul><h3 id="_3-tcp-的四次挥手" tabindex="-1">（3）TCP 的四次挥手 <a class="header-anchor" href="#_3-tcp-的四次挥手" aria-label="Permalink to &quot;（3）TCP 的四次挥手&quot;">​</a></h3><p><strong>第一次挥手：</strong></p><ul><li>客户端进程发出<strong>连接释放报文</strong>，并且<strong>停止发送数据</strong>。</li></ul><p><strong>第二次挥手：</strong></p><ul><li>服务器收到<strong>连接释放报文</strong>，发出<strong>确认报文</strong>，此时，服务端就进行了 <code>close-wait</code> （关闭等待）状态。（客户端向服务器方向释放了，但是服务器发送数据，客户端依然要接收）</li><li>客户端收到服务器的确认请求后，客户端就进入了 <code>Fin-wait-2</code> （终止等待 2）状态，等待服务器发送<strong>连接释放报文</strong>（在这之前还需要接收服务器发送的最后数据）。</li></ul><p><strong>第三次挥手：</strong></p><ul><li>服务器将最后的数据发送完毕后，就向客户端发送连接释放报文，服务器就进入了 <code>Last-ack</code> （最后确认）。</li></ul><p><strong>第四次挥手：</strong></p><ul><li>客户端收到服务器的连接释放报文后，必须发出确认，客户端就进入了 <code>time-wait</code> （时间等待）状态。</li><li>服务端只要收到了客户端发出的确认，立即进入 <code>closed</code> 状态。</li><li>至此，就结束了这次的 <code>TCP</code> 连接。（服务器结束 <code>TCP</code> 连接的时间要比客户端早一些）</li></ul><h3 id="_4-tcp-为什么要四次挥手" tabindex="-1">（4）TCP 为什么要四次挥手？ <a class="header-anchor" href="#_4-tcp-为什么要四次挥手" aria-label="Permalink to &quot;（4）TCP 为什么要四次挥手？&quot;">​</a></h3><ul><li><p>之所以要四次挥手，其实是<strong>确保双方数据都已发送完毕</strong>。</p></li><li><p><code>TCP</code> 是全双工模式，这就意味着，当 <code>主机1</code> 发送 <code>FIN</code> 报文段时，只是表示 <code>主机1</code> 已经没有数据要发送了， <code>主机1</code> 告诉 <code>主机2</code> ，它的数据已经全部发送完毕了。</p></li><li><p>当 <code>主机2</code> 返回 <code>ACK</code> 报文段时，表示它已经知道 <code>主机1</code> 没有数据发送了，但是 <code>主机2</code> 还是可以发送数据到 <code>主机1</code> 的。</p></li><li><p>当<code>主机2</code> 也发送了 <code>FIN</code> 报文段时，这个时候就表示 <code>主机2</code> 也没有数据要发送了，就会告诉 <code>主机1</code> ，我也没有数据要发送了。</p></li><li><p>最后， <code>主机1</code> 再发送 <code>ACK</code> 报文段来确认握手结束，之后彼此就会愉快的断开此次的 <code>TCP</code> 连接。</p></li></ul><h3 id="_5-什么是面向连接协议-什么是面向无连接协议" tabindex="-1">（5）什么是面向连接协议？什么是面向无连接协议？ <a class="header-anchor" href="#_5-什么是面向连接协议-什么是面向无连接协议" aria-label="Permalink to &quot;（5）什么是面向连接协议？什么是面向无连接协议？&quot;">​</a></h3><p><strong>面向连接协议：</strong></p><ul><li>通信双方在通信时，需要事先建立好一条虚拟的通信线路。</li><li>通信过程有“<u>建立连接</u>、<u>维护连接</u>、<u>断开连接</u>“三个阶段。</li></ul><p><strong>面向无连接协议：</strong></p><ul><li>与面向连接相对，通信双方不需要事先建立<u>通信线路</u>，而是把每个<strong>带有目的地址的报文分组</strong>送到通信线路上，由系统自主<u>选定线路</u>进行传输。</li><li>面向无连接只有“<u>传送数据</u>”的过程。</li></ul><h3 id="_6-为什么建立连接是三次握手-关闭连接是四次挥手呢" tabindex="-1">（6）为什么建立连接是三次握手，关闭连接是四次挥手呢？ <a class="header-anchor" href="#_6-为什么建立连接是三次握手-关闭连接是四次挥手呢" aria-label="Permalink to &quot;（6）为什么建立连接是三次握手，关闭连接是四次挥手呢？&quot;">​</a></h3><ul><li>建立连接的时候，服务器在 <code>listen</code> 状态下，收到建立连接请求的 <code>SYN</code> 报文后，服务器把 <code>ACK</code> 和 <code>SYN</code> 放在一个报文里发送给客户端。</li><li>而关闭连接时，服务器收到对方的 <code>FIN</code> 报文时，仅仅表示<strong>①</strong>对方不再发送数据了但是还能接收数据，而<strong>②</strong>自己也未必所有数据都已经发送给对方了，所以己方可以立即关闭，也可以发送一些数据给对方，之后 ③ 己方再发送 <code>FIN </code>报文给对方来表示同意现在关闭连接。因此，己方 <code>ACK</code> 和 <code>FIN</code> 一般都会<strong>分开发送</strong>，从而导致多了一次。</li></ul><p><strong>注：</strong> ①②③ 表示第一二三次挥手</p><h3 id="_7-如果已经建立了连接-但是客户端突然出现故障了该怎么办" tabindex="-1">（7）如果已经建立了连接，但是客户端突然出现故障了该怎么办？ <a class="header-anchor" href="#_7-如果已经建立了连接-但是客户端突然出现故障了该怎么办" aria-label="Permalink to &quot;（7）如果已经建立了连接，但是客户端突然出现故障了该怎么办？&quot;">​</a></h3><ul><li><code>TCP</code> 还有一个<strong>保活计时器</strong>。</li><li>当客户端出现故障时，服务器肯定是不会一直等待下去，白白浪费资源的。</li><li>服务器每收到一次客户端的请求后都会重新复位这个计时器，时间通常设置为 <code>2h</code> ，若 <code>2h</code> 还没有收到客户端的任何数据，服务器就会发送一个 <strong>探测报文段</strong> 给客户端，以后每隔 <code>75s</code> 发送一次。</li><li>若一连发送 <strong>10 个探测报文段</strong> 仍没有反应，服务器就认为客户端出了故障，紧接着就会关闭连接。</li></ul><p><strong>注：</strong> <code>10x75=750s=12.5min</code></p><h1 id="🏒-五、tcp-的通信机制" tabindex="-1">🏒 五、TCP 的通信机制 <a class="header-anchor" href="#🏒-五、tcp-的通信机制" aria-label="Permalink to &quot;🏒 五、TCP 的通信机制&quot;">​</a></h1><h2 id="_1、tcp-的重发控制" tabindex="-1">1、TCP 的重发控制 <a class="header-anchor" href="#_1、tcp-的重发控制" aria-label="Permalink to &quot;1、TCP 的重发控制&quot;">​</a></h2><ul><li>我们都知道，在数据传输过程中可能会因为各种原因出现丢包现象，而当出现丢包现象时，即发送端在发完数据并等待一段时间以后，未接收到接收方应答，则视为丢包，于是就会进行重发。</li><li>其中，丢包现象分为两种：<strong>①</strong>发送过程丢包；<strong>②</strong>接收过程丢包。</li><li>那么，发送端发送完数据以后多久没有收到确认应答才判定数据丢包了呢？</li><li>这个一般都是随着网络环境的变化而变化的， <code>TCP</code> 会在每次发包时计算<strong>往返时间</strong>以及<strong>偏差</strong>来决定等待时间。</li><li>若重发后又出现了丢包，则下一次等待的时间会以<strong>2 倍</strong>、<strong>4 倍</strong>的指数函数增长。</li><li>但它肯定是不会无限进行重发的，当重发次数达到一定程度后<sup>[1]</sup>，会判定为网络异常，两端通信就会被强制关闭。</li></ul><p>[1]：<code>TCP</code> 有一个保活计时器，如果在 <code>2h</code> 后还没有收到客户端的数据，那么就会重新复位这个计时器，之后每隔 <code>75s</code> 会发送一次，如果一连发送 10 个还是没有收到，那么就会断开连接。</p><h2 id="_2、tcp-的滑动窗口控制" tabindex="-1">2、TCP 的滑动窗口控制 <a class="header-anchor" href="#_2、tcp-的滑动窗口控制" aria-label="Permalink to &quot;2、TCP 的滑动窗口控制&quot;">​</a></h2><p><strong>解题：</strong></p><ul><li>什么原因导致需要有滑动窗口？</li><li>有了滑动窗口后可以解决什么问题？</li></ul><p><strong>白话文回答：</strong></p><ul><li>我们都知道，数据不应该一次性发送，不然丢失了都不知道往哪里找，因此应该采取 <strong>分段发送</strong> 的措施。</li><li>但是呢， <code>TCP</code> 将数据分段发送，虽然提高了传输的可靠性，但是存在着一个<u>致命的缺点</u>，那就是 <strong>效率非常低</strong> 。</li><li>因为每发送一段数据，都要等待接收端的确认应答后才能继续发送，若整个数据的分段较多，那么通信的性能就会很低了，因此 <code>TCP</code> 引入了 <strong>窗口</strong> 这个概念。</li><li><strong>所谓窗口</strong>，表示的是<u>无需等待</u>接收方的确认应答而可以<strong>连续发送多段数据</strong>。</li><li><strong>举个例子</strong>：假设要发送 <code>4</code> 段数据，如果每次都要发送后接收完才能再重新发送，那来回就得 <code>8</code> 次。但如果用滑动窗口的话，四段数据可以同时发出去，接收端再返回相应的确认应答给发送方。</li><li>这个时候发送方会根据相应的确认应答继续发送比该确认序列中序列号大的数据即可。</li></ul><h2 id="_3、滑动窗口的重发控制" tabindex="-1">3、滑动窗口的重发控制 <a class="header-anchor" href="#_3、滑动窗口的重发控制" aria-label="Permalink to &quot;3、滑动窗口的重发控制&quot;">​</a></h2><ul><li>若使用滑动窗口这一技术后，即使某段数据出现<strong>丢包现象</strong>，也不会造成很大的影响。</li><li>因为接收端会一边接收发送端传过来的数据，一边用某种方式告知发送端前面丢失了哪一段数据。</li></ul><h2 id="_4、tcp-的流量控制机制" tabindex="-1">4、TCP 的流量控制机制 <a class="header-anchor" href="#_4、tcp-的流量控制机制" aria-label="Permalink to &quot;4、TCP 的流量控制机制&quot;">​</a></h2><p><strong>为什么需要流量控制机制？</strong></p><ul><li>有时，发送端发送给接收端的数据超过了接收端的<strong>最大承载能力</strong>，就会造成数据<strong>无法接收</strong>的情况，从而导致之后会进行<strong>数据重发</strong>，这样子会非常<strong>浪费性能</strong>。</li></ul><p><strong>如何解决这种问题呢？引出流量控制机制</strong></p><ul><li>为了防止上述情况发生，<code>TCP</code> 提供了一种<strong>机制</strong>（即<u>流量控制机制</u>）来使得发送端每次发送的数据尽可能的在接收端的<strong>承载范围之内</strong>。</li><li>而实现方式就是， <code>接收端</code> 向 <code>发送端</code> 告知自己能够接收的<strong>数据大小</strong>，如此一来，发送端每次发送的数据就都不会超过<u>该值</u>，我们成该值为<strong>窗口大小</strong>。</li><li>一旦接收端暂时无法接收任何数据，它会告知发送端，因此发送端会<strong>暂停数据的发送</strong>。</li><li>但为了后续数据的正常发送，发送端会不时地向接收端发送一个 <strong>窗口探测</strong> ，试探性地看一下接收端<strong>能否继续接收数据</strong>。</li></ul><h2 id="_5、tcp-的拥塞控制" tabindex="-1">5、TCP 的拥塞控制 <a class="header-anchor" href="#_5、tcp-的拥塞控制" aria-label="Permalink to &quot;5、TCP 的拥塞控制&quot;">​</a></h2><ul><li>因为出现了窗口控制，数据不再是一段一段发送，而是连续发送多段数据包，因此有时候如果出现网络拥堵的情况下，而我们又同时发送了大量的数据包，这很有可能会导致网络瘫痪。</li><li>TCP 运用了一种叫做 <strong>慢启动</strong> 的技巧缓解上述问题。那何为 <strong>慢启动</strong> 呢？</li><li>就是不要在一开始就瞬间发送大量数据包，而是先发送一部分，然后再根据收发情况再发送更多的数据包。</li><li>总结就是每次发送的数据包会以 <code>1,2,4</code> 的指数型增长，但窗口大小也不会无限指数型增大，而是会达到某个值时进行一些调整，该值称为 <strong>慢启动阈值</strong> 。</li></ul><blockquote><p>流量控制机制和拥塞控制机制的区别：</p><ul><li>流量控制是以<strong>接收端</strong>为主导，接收端明确自己想要的窗口大小，然后发送端再把数据发送给接收端；</li><li>而拥塞控制机制则是以<strong>发送端</strong>为主导，发送端试探性的以 1,2,4 的指数型增长给接收端发送数据，探测接收端的承载能力，等到接收端不能再接收数据时，发送端就会知道接收端没法承载这么多数据，于是就会进行向下调整。</li></ul></blockquote>',111),a=[n];function d(s,i,c,g,p,h){return e(),o("div",null,a)}const b=t(r,[["render",d]]);export{P as __pageData,b as default};
