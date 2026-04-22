// GPT Image 2 提示词数据

export const categories = [
  { id: 'all', label: '全部', emoji: '🎨' },
  { id: 'douyin', label: '抖音 / TikTok', emoji: '🎵' },
  { id: 'xiaohongshu', label: '小红书', emoji: '📕' },
  { id: 'weixin', label: '微信朋友圈', emoji: '💬' },
  { id: 'weibo', label: '微博', emoji: '📎' },
  { id: 'twitter', label: 'X / Twitter', emoji: '🐦' },
  { id: 'bilibili', label: 'B站', emoji: '📺' },
  { id: 'poster', label: '海报 / 杂志', emoji: '🖼️' },
  { id: 'product', label: '产品 / 电商', emoji: '📦' },
  { id: 'infographic', label: '信息图 / 长图', emoji: '📊' },
  { id: 'comic', label: '漫画 / 分镜', emoji: '💭' },
  { id: 'retro', label: '怀旧 / 老印刷品', emoji: '📜' },
  { id: 'game', label: '游戏 / UI', emoji: '🎮' },
  { id: 'template', label: '通用模板', emoji: '🔧' },
];

export const prompts = [
  // ===== 抖音/TikTok =====
  {
    id: 'dy-1',
    category: 'douyin',
    title: '直播界面截图',
    emoji: '🎵',
    platform: '抖音',
    description: '生成逼真的抖音直播界面，含评论、点赞、观众人数等元素',
    prompt: `一张抖音直播界面截图，一位主播在直播卖货，
左侧评论区滚动评论和弹幕，
右侧有点赞按钮（显示128万）、分享按钮、礼物图标，
顶部观众人数显示"3.2万人"，
底部有弹幕跑马灯，
深色模式，手机竖屏比例 9:16，所有UI元素层级正确，
文字清晰可读，无水印。`
  },
  {
    id: 'dy-2',
    category: 'douyin',
    title: '短视频封面',
    emoji: '🎵',
    platform: '抖音',
    description: '大字标题+夸张表情的人物封面',
    prompt: `一张抖音视频封面图，左侧大字标题"我让AI演我妈唠叨，笑到邻居报警"，
字体红色加粗，右侧是主播笑到飙泪的夸张表情大头照，
左下角点赞数"328万"，右下角话题标签"#AI整活 #笑不活了"，
手机竖屏比例 9:16，高饱和度网感配色。`
  },
  {
    id: 'dy-3',
    category: 'douyin',
    title: '马斯克直播卖老干妈',
    emoji: '🎵',
    platform: '抖音',
    description: '整活类虚拟直播截图',
    prompt: `一张抖音直播截图，马斯克在抖音直播间卖老干妈辣椒酱，
画面中马斯克拿着老干妈瓶子和镜头打招呼，
直播间标题"马斯克的中国之旅"，
观众人数50万，评论区全是"哈哈哈哈""中国辣酱YYDS"，
点赞数89万，右侧有礼物飘屏特效。`
  },
  {
    id: 'dy-4',
    category: 'douyin',
    title: '热搜榜',
    emoji: '🎵',
    platform: '微博/抖音',
    description: '生成完整热搜榜截图',
    prompt: `一个微博热搜榜截图，前十条热搜：
第一条"马斯克又发推了"带红色"爆"字标签，
第三条"GPT把我作业写成文言文"带红色"沸"字标签，
第五条"奥特曼和马斯克隔空互怼"带红色"热"字标签，
顶部搜索框和底部导航栏完整，白色背景。`
  },
  {
    id: 'dy-5',
    category: 'douyin',
    title: '电商产品图',
    emoji: '🎵',
    platform: '抖音/淘宝',
    description: '带促销文案的商品图',
    prompt: `一张电商产品摄影图，一个色彩鲜艳的游泳圈放在热带海滩上，
身后是蓝色的海洋和椰树，阳光照射下有水滴飞溅效果，
右下角有红色促销标签写着"夏日特惠 ¥59"，
整体高饱和度网感风格，16:9横版比例，无水印。`
  },

  // ===== 小红书 =====
  {
    id: 'xhs-1',
    category: 'xiaohongshu',
    title: '笔记截图',
    emoji: '📕',
    platform: '小红书',
    description: '完整小红书笔记界面，含九宫格、正文、emoji、话题标签',
    prompt: `一张小红书笔记截图，标题"救命！让Sam Altman帮我改简历真的会变强吗？"，
九宫格配图（前3格是ChatGPT对话截图，中间3格是OMG表情，后3格是改后简历对比），
正文带大量emoji和话题标签"#打工人 #AI神器 #求职"，
底部收藏按钮（显示2.3万）、点赞按钮（显示5.8万），
白色背景，圆角卡片风格。`
  },
  {
    id: 'xhs-2',
    category: 'xiaohongshu',
    title: '中国地方早餐大赏',
    emoji: '📕',
    platform: '小红书',
    description: '竖版攻略长图',
    prompt: `一张竖版信息长图，主题"中国地方早餐大赏"，
顶部大字标题配一张冒热气的手绘插画，
下方用网格把豆浆油条、胡辣汤、生煎、肠粉、热干面、牛肉粉等12种早餐分类展示，
每种配小插画、起源地、关键食材、吃法口诀，
米黄色底配暖棕色，整体像设计师做的印刷品，
竖版比例 4:5。`
  },
  {
    id: 'xhs-3',
    category: 'xiaohongshu',
    title: '二十四节气穿搭指南',
    emoji: '📕',
    platform: '小红书',
    description: '节气/季节穿搭信息图',
    prompt: `一张竖版信息长图"二十四节气穿搭指南"，
横向时间轴贯穿整图，每个节气一个小人偶展示当日穿搭，
标注气温范围、材质建议、配饰点睛，
浅米色底配二十四种渐变色，
竖版比例 4:5，像一本时尚杂志的内页。`
  },
  {
    id: 'xhs-4',
    category: 'xiaohongshu',
    title: '豚骨拉面美食摄影',
    emoji: '📕',
    platform: '小红书',
    description: '米其林级美食图',
    prompt: `米其林星级餐厅美食摄影，45度角俯拍，
一碗正宗东京豚骨拉面放在深色胡桃木桌上，
碗：手工陶瓷深蓝色冰裂釉纹理，
汤底：浓郁奶油色猪骨汤，可见胶原光泽，
配料：两片叉烧肉（可见脂肪层次和焦痕），
完美对半切开的溏心蛋（橙色流心蛋黄），
竹笋、海苔、葱花、红白鱼板，
背景：虚化的日式居酒屋暖色灯笼光斑，
筷子放在右侧陶瓷筷架上，
柔光箱从左打入，90mm微距镜头，f/2.8，暖色温，
超诱人，无文字无水印。`
  },
  {
    id: 'xhs-5',
    category: 'xiaohongshu',
    title: '硅谷大佬作息图鉴',
    emoji: '📕',
    platform: '小红书',
    description: 'Q版卡通九宫格分类图鉴',
    prompt: `Q版卡通九宫格图鉴"硅谷大佬一天作息"：
格子1：Sam Altman — 早上6点"思考AGI对齐问题"，
格子2：Elon Musk — 早上7点"发5条推文"，
格子3：黄仁勋 — 上午9点"穿皮衣开周会"，
格子4：Zuckerberg — 上午10点"喝能量饮料改代码"，
格子5：Jeff Bezos — 中午12点"吃健康沙拉"，
格子6：Tim Cook — 下午1点"看iPhone销量"，
格子7：Bill Gates — 下午3点"读一本书"，
格子8：Larry Page — 下午5点"研究量子计算"，
格子9：Satya Nadella — 晚上7点"健身后开会"，
粉蓝配色，每个格子配时间和吐槽对话框。`
  },
  {
    id: 'xhs-6',
    category: 'xiaohongshu',
    title: '中国六大城市性格拟人',
    emoji: '📕',
    platform: '小红书',
    description: 'Q版城市角色图鉴',
    prompt: `Q版手绘六宫格"中国六大城市性格拟人"：
北京：唐装撸串的胡同大爷，性格标签"大气"，
上海：金丝眼镜精英白领手握咖啡，性格标签"精致"，
深圳：卫衣程序员抱着笔记本，性格标签"搞钱"，
杭州：汉服女孩捧抹茶和平板，性格标签"文艺"，
成都：短裤人字拖围着火锅半躺，性格标签"巴适"，
广州：人字拖喝早茶的老广，性格标签"务实"，
每格配性格标签、招牌台词、雷达图（节奏/美食/天气/房价/包容度），
精灵图鉴风格。`
  },
  {
    id: 'xhs-7',
    category: 'xiaohongshu',
    title: '睡眠质量自测长图',
    emoji: '📕',
    platform: '小红书',
    description: '功能性自测长图',
    prompt: `一张竖版信息长图"睡眠质量自测"，
顶部是入睡时间、夜醒次数、做梦频率三个自测表，
中部列九种常见睡眠问题对号入座，
底部是睡前仪式清单，
莫兰迪蓝色调，像一份有设计感的体检报告，
竖版比例 3:4。`
  },

  // ===== 微信朋友圈 =====
  {
    id: 'wx-1',
    category: 'weixin',
    title: '假朋友圈截图',
    emoji: '💬',
    platform: '微信朋友圈',
    description: '逼真的朋友圈动态截图',
    prompt: `一条微信朋友圈截图，头像为商务人士，
正文"今天终于完成了这个项目，感谢团队的努力！🎉💪"，
配图三张：公司大楼、团队聚餐、项目成果PPT，
点赞32个（显示其中5个赞的头像），
评论：老王"恭喜！""厉害👍"，小李"团队的力量！"，
界面完整，底部有"赞"和"评论"按钮。`
  },
  {
    id: 'wx-2',
    category: 'weixin',
    title: '80年代黑板报',
    emoji: '💬',
    platform: '朋友圈/怀旧',
    description: '年代感怀旧内容',
    prompt: `一张80年代中学黑板报扫描效果，
粉笔手写字迹"迎接新学期"，
配粉笔画的红旗、书本、火箭图案，
角落写着名言警句"知识改变命运"和值日生名字"李明"，
黑板木框和粉笔灰细节齐全，
带做旧痕迹和扫描感。`
  },
  {
    id: 'wx-3',
    category: 'weixin',
    title: '老奖状',
    emoji: '💬',
    platform: '朋友圈/怀旧',
    description: '复古奖状设计',
    prompt: `一张80年代老式奖状，大红烫金边框，
中间毛笔字"先进工作者"，
获奖人姓名"张伟 同志"，
底部单位落款"硅谷人民通用人工智能委员会"和日期"二〇二六年四月"，
背景印有麦穗和五角星纹样，纸张微微泛黄。`
  },
  {
    id: 'wx-4',
    category: 'weixin',
    title: '中秋节海报',
    emoji: '💬',
    platform: '朋友圈/节日',
    description: '节日祝福海报',
    prompt: `一张中秋节海报，
背景是圆月和桂花树，
中央大字"花好月圆 中秋快乐"，
下方小字"阖家团圆 幸福安康"，
底部一轮明月倒映在水面上，
暖金色调，传统中国风。`
  },

  // ===== 微博 =====
  {
    id: 'wb-1',
    category: 'weibo',
    title: '热搜榜',
    emoji: '📎',
    platform: '微博',
    description: '完整微博热搜榜',
    prompt: `微博热搜榜截图，前十条热搜：
第一条"马斯克又发推了"带红色"爆"字标，
第二条"今天好热啊"带黄色"热"字标，
第三条"GPT把我作业写成文言文"带红色"沸"字标，
第四条"周末去哪里玩"带黄色"热"字标，
第五条"奥特曼和马斯克隔空互怼"带红色"沸"字标，
顶部搜索框有占位文字"搜索你想找的内容"，
底部导航栏"首页/发现/微博/我"，
白色背景，竖版比例。`
  },
  {
    id: 'wb-2',
    category: 'weibo',
    title: '大V微博',
    emoji: '📎',
    platform: '微博',
    description: '认证大V微博截图',
    prompt: `一条微博截图，认证用户"央视新闻"（蓝V），
正文"刚刚！中国航天再创辉煌！嫦娥六号成功带回月球背面样品🌕🚀"，
配图三张：发射场景、月球表面、样品特写，
转发5.2万，评论3.8万，点赞12万，
时间显示"4月22日 14:30"，
底部有"转发"、"评论"、"赞"按钮。`
  },
  {
    id: 'wb-3',
    category: 'weibo',
    title: 'AI大模型表情包',
    emoji: '📎',
    platform: '微博',
    description: 'AI模型拟人化设计',
    prompt: `一张表情包设计，拟人化AI大模型：
左边ChatGPT：白色身体、绿色渐变头、友好微笑表情，
右边Claude：橙色身体、温和表情、手拿书本，
中间Gemini：彩色身体、自信表情，
下方Grok：黑色身体、酷酷表情、戴墨镜，
右下角Dall·e：粉色身体、拿着画笔，
整体Q版卡通风格，白色背景，
下方配文字"当AI模型们聚在一起"。`
  },

  // ===== X/Twitter =====
  {
    id: 'tw-1',
    category: 'twitter',
    title: 'ChatGPT Image 2 官方推文',
    emoji: '🐦',
    platform: 'X/Twitter',
    description: '生成官方发布推文',
    prompt: `一张X/Twitter推文截图，深色模式，
认证用户@OpenAI（蓝色认证勾），
推文正文"ChatGPT Image 2 正式上线。这一代在中文字形、复杂版式、长文排版上全面升级。无需长提示词，三五句描述就能生成杂志封面、信息长图、风格海报等专业级视觉内容。"
附带一张深色官方宣传图（蓝紫渐变背景，大字"Introducing ChatGPT Image 2"），
下方评论1.2万、转发3.1万、点赞19.8万、收藏1.4万、浏览1840万。`
  },
  {
    id: 'tw-2',
    category: 'twitter',
    title: 'Sam Altman 推文',
    emoji: '🐦',
    platform: 'X/Twitter',
    description: '大V互动截图',
    prompt: `一张X/Twitter截图，Sam Altman蓝勾认证发推：
"going to bed. agi can wait."
下方一万多转发，八万多点赞，
最热评论"it literally cannot"，获得5.6万赞，
深色模式界面，完整推文布局。`
  },

  // ===== B站 =====
  {
    id: 'bilibili-1',
    category: 'bilibili',
    title: '视频封面',
    emoji: '📺',
    platform: 'B站',
    description: 'B站风格视频封面',
    prompt: `一张B站视频封面图，
左侧是一位戴眼镜的年轻UP主对着镜头说话，表情惊讶，
右侧大字标题"我用AI做了一整期视频，观众以为是实拍？！"，
背景是渐变的蓝紫色调，
底部有UP主头像和昵称"AI探索者"，
右下角有播放量"328万"和弹幕数"1.2万"的标签，
16:9横版比例。`
  },
  {
    id: 'bilibili-2',
    category: 'bilibili',
    title: '红楼梦Online 游戏界面',
    emoji: '📺',
    platform: 'B站',
    description: '虚构MMO游戏截图',
    prompt: `一张虚构开放世界MMO游戏《红楼梦Online》的游戏截图，
主角是古装女子背影立于大观园街市场景，
远处有多个NPC丫鬟小厮往来，
左上角人物头像血条蓝条"林黛玉 Lv.32 HP 1326/1326 MP 856/856"，
顶部显示地点"潇湘馆外(1234,567)"和一排活动/福利/商城/背包/菜单图标，
右上角小地图，右侧任务面板列"主线：海棠诗社"，
左下系统消息"【世界】【贾宝玉】大观园新开了醉月楼 有缘人同去"，
右下技能栏六个技能图标，底部经验条，
整体中文UI元素密度极高，接近3A大作水准。`
  },

  // ===== 海报 / 杂志 =====
  {
    id: 'poster-1',
    category: 'poster',
    title: '时代周刊封面（马斯克）',
    emoji: '🖼️',
    platform: '全平台',
    description: '杂志封面风格',
    prompt: `《时代周刊》风格封面，红色经典边框，
主角Elon Musk手里同时拿着火箭、汽车、脑机接口和一只柴犬，
大字标题"THE MAN WHO WON'T SIT STILL"，
下方一行人物小传，角标logo和条形码齐全，
竖版比例 3:4。`
  },
  {
    id: 'poster-2',
    category: 'poster',
    title: 'GQ 封面（黄仁勋）',
    emoji: '🖼️',
    platform: '全平台',
    description: '时尚杂志封面',
    prompt: `《GQ》杂志封面，主角黄仁勋穿着标志性皮衣斜靠在发光GPU上叼着辣条，
金色烫印大字标题"LEATHER JACKET EMPIRE"，
深绿色背景，右下角条形码和期号，
竖版比例 3:4。`
  },
  {
    id: 'poster-3',
    category: 'poster',
    title: '福布斯封面（猫）',
    emoji: '🖼️',
    platform: '全平台',
    description: '创意幽默封面',
    prompt: `《福布斯》杂志封面，一只戴着金丝墨镜和金链子的橘猫，
西装笔挺坐在一堆发光的快递纸箱上，
大字标题"THE PACKAGE KING"，
副标题"净资产2.4兆颗猫条"，红色经典刊名，
竖版比例 3:4。`
  },
  {
    id: 'poster-4',
    category: 'poster',
    title: '80年代港产警匪片海报',
    emoji: '🖼️',
    platform: '小红书/B站',
    description: '复古电影海报',
    prompt: `一张80年代港产警匪片VCD封面，标题"夺命代码"，
主角戴墨镜穿西装一手握电脑一手持枪，
背景爆炸火光和城市夜景，
粤语副标题"一念天堂 一念死机"，
右下角写满发行信息，四角略微磨损，
做旧质感。`
  },
  {
    id: 'poster-5',
    category: 'poster',
    title: '昭和特摄片海报',
    emoji: '🖼️',
    platform: '小红书/B站',
    description: '复古特摄风格',
    prompt: `一张昭和特摄片电影海报，标题《超兽战士·键盘侠》，
机甲形态的打工人对战巨型表情包怪兽，
背景是冒烟的城市天际线，
右下角"昭和六十年发行"字样和电影公司徽标，
高饱和度特摄风格。`
  },
  {
    id: 'poster-6',
    category: 'poster',
    title: '音乐节海报',
    emoji: '🖼️',
    platform: '全平台',
    description: '现代活动海报',
    prompt: `一张竖版音乐节海报，
背景是黄昏时分的城市天际线剪影，天空为渐变橙紫色，
画面中央大号粗体文字"SUMMER VIBE 2026"，
下方小字"8月15日 · 深圳湾体育中心"，
底部一排艺人名字"Luna / Echo / Neon Dreams"，
文字必须清晰可读无拼写错误，
现代、活力、略带复古胶卷感。`
  },

  // ===== 产品 / 电商 =====
  {
    id: 'product-1',
    category: 'product',
    title: 'iPhone 高端广告',
    emoji: '📦',
    platform: '小红书/朋友圈',
    description: '极简奢华产品摄影',
    prompt: `一张iPhone 16 Pro Max高端商业广告，
产品居中，冷峻高级的苹果质感，
白色大理石台面，自然侧光从左侧打入，
产生柔和阴影和通透的玻璃折射，
背景干净浅米色，
画面右下角品牌名"AURA"字样清晰可读，
极简奢华风格，16:9横版，无水印。`
  },
  {
    id: 'product-2',
    category: 'product',
    title: '香水瓶摄影',
    emoji: '📦',
    platform: '小红书/朋友圈',
    description: '高端产品摄影',
    prompt: `高端香水瓶商业摄影，透明玻璃瓶身，淡金色液体，
置于白色大理石台面上，自然侧光从左侧打入，
产生柔和阴影和通透的玻璃折射，
背景干净浅米色，
画面右下角品牌名"AURA"字样清晰可读，
极简奢华风格，16:9横版，无水印。`
  },
  {
    id: 'product-3',
    category: 'product',
    title: '产品分解图',
    emoji: '📦',
    platform: '小红书/B站',
    description: '科技感产品拆解',
    prompt: `给"张雪机车"摩托车设计一张酷炫的产品分解图，
悬浮的零件排布，引擎、轮毂、车架、排气管各组件分解展示，
极具科技感的光影，
深色背景，金色高亮线条标注，
横版比例 16:9。`
  },

  // ===== 信息图 / 长图 =====
  {
    id: 'info-1',
    category: 'infographic',
    title: '露营装备完全清单',
    emoji: '📊',
    platform: '小红书',
    description: '实用攻略长图',
    prompt: `一张竖版长图"露营装备完全清单"，
分睡眠、烹饪、照明、收纳、应急五个模块，
每个模块列七到八件具体装备，
配小图标和入门友好度星级，
卡其绿主色，纸质感底图，
竖版比例 3:4。`
  },
  {
    id: 'info-2',
    category: 'infographic',
    title: '中式面食家族图谱',
    emoji: '📊',
    platform: '小红书/B站',
    description: '分类信息长图',
    prompt: `一张竖版长图"中式面食家族图谱"，像族谱一样展示：
北方面：拉面、刀削面、手擀面、揪片子
南方面：肠粉、云吞面、拌面、米粉
西部面：拉条子、炒面、揪面片
沿海面：鱼面、虾面、海鲜面
每支延伸五到六种面食，配手绘面碗插画，
宣纸底色加朱红点缀。`
  },
  {
    id: 'info-3',
    category: 'infographic',
    title: '科学插图（植物细胞）',
    emoji: '📊',
    platform: '小红书/B站',
    description: '教育科普用',
    prompt: `教育科学插图，干净教科书风格，白色背景，
植物细胞详细横截面示意图，
标注的细胞器带引线清晰文字：
细胞壁（粗深绿色边框+纤维素纹理）
细胞核（中心大紫色球体+染色质线条）
线粒体（三个豆形橙色结构+内部嵴折叠）
叶绿体（五个椭圆绿色结构+类囊体堆叠）
液泡（占40%体积的大透明中心囊泡）
所有标注用黑色无衬线字体12pt，
浅绿色细胞质背景，
适合生物教科书使用。`
  },

  // ===== 漫画 / 分镜 =====
  {
    id: 'comic-1',
    category: 'comic',
    title: '三格漫画（AI修复代码）',
    emoji: '💭',
    platform: '全平台',
    description: '程序员日常漫画',
    prompt: `三格漫画：
第一格"开发者盯着Bug"——程序员抓头发，
第二格"问AI帮忙"——对着电脑打字，
第三格"代码瞬间修复"——电脑屏幕显示绿色对勾，
对话气泡在英文中，Q版卡通风格。`
  },
  {
    id: 'comic-2',
    category: 'comic',
    title: '成年人睡前拖延图鉴',
    emoji: '💭',
    platform: '小红书',
    description: '十二宫格Q版漫画',
    prompt: `"成年人睡前拖延图鉴"Q版漫画，十二宫格，
从"再刷五分钟手机"一路拖到"干脆不睡了"，
每格一个黑眼圈小人偶和一句内心OS，
粉色暖黄配色。`
  },
  {
    id: 'comic-3',
    category: 'comic',
    title: '猫咪性格分类图鉴',
    emoji: '💭',
    platform: '小红书',
    description: '萌系九宫格',
    prompt: `"猫咪性格分类图鉴"萌系手绘信息图，九宫格，
九种不同花色的猫咪，每格配：
性格关键词、日常行为描述、互动建议，
暖色系水彩风，竖版比例 4:5。`
  },
  {
    id: 'comic-4',
    category: 'comic',
    title: 'Graphic Novel 封面',
    emoji: '💭',
    platform: '小红书/B站',
    description: '科幻漫画封面',
    prompt: `A graphic novel cover titled "THE LAST ARCHIVIST",
silhouette of a woman walking into a giant library,
sci-fi atmosphere, cover illustration style with publisher logo.
`
  },

  // ===== 怀旧 / 老印刷品 =====
  {
    id: 'retro-1',
    category: 'retro',
    title: '民国报纸',
    emoji: '📜',
    platform: '朋友圈/微博',
    description: '复古报纸扫描效果',
    prompt: `一张民国三十年代报纸头版扫描件，竖排繁体，
头条"西洋奇术东渐 沪上学界议论纷纭"，
副标题讲一个叫"机器脑"的玩意儿能作诗答题，
右上天气农历，版面还有戏院广告、药铺广告、寻人启事，
整体泛黄纸质感。`
  },
  {
    id: 'retro-2',
    category: 'retro',
    title: '中医药方',
    emoji: '📜',
    platform: '全平台',
    description: '幽默中药方',
    prompt: `一张中医药方单，毛笔楷书竖排"拖延症加减方"，
药材清单：决心三钱、专注五钱、番茄钟两枚、deadline一剂，
落款"大聪明堂 执业编号XX001"，
宣纸质感带红色印章。`
  },
  {
    id: 'retro-3',
    category: 'retro',
    title: '将进酒 书法',
    emoji: '📜',
    platform: '全平台',
    description: '古诗词书法配图',
    prompt: `中国古典水墨配诗图，横版，
李白《将进酒》全文竖排繁体书法居中，
从"君不见黄河之水天上来"写到"与尔销万古愁"，
画面右侧是李白持酒杯望月形象，白衣飘飘立于山水之间，
身后松枝探出，远处瀑布和阁楼，
左下角酒坛贴着"酒"字、香炉、墨竹，
诗题"将进酒"大字楷书居中，落款"唐·李白"配红色朱砂印章，
泛黄宣纸底色。`
  },
  {
    id: 'retro-4',
    category: 'retro',
    title: '复古超市促销海报',
    emoji: '📜',
    platform: '全平台',
    description: '九十年代超市风格',
    prompt: `一张复古风超市促销海报，大红价签贴满版面，
商品包括"专注力 一斤 99元""快乐 买一送一""时间 限时特惠""睡眠 清仓处理"，
每件商品配手绘图和"今日限定"小爆炸贴纸，
整体九十年代超市风，横版比例 16:9。`
  },
  {
    id: 'retro-5',
    category: 'retro',
    title: '梦境航空登机牌',
    emoji: '📜',
    platform: '全平台',
    description: '超现实仿真票证',
    prompt: `一张虚构航空公司的登机牌，
标题"梦境航空 Dream Airlines"，
乘客"Elon Musk"，
起飞地"火星"，目的地"地球"，
航班号"DA420"，登机口"枕头3号"，
舱位"黄粱一梦"，
条形码齐全，仿真度高。`
  },

  // ===== 游戏 / UI =====
  {
    id: 'game-1',
    category: 'game',
    title: '记账App 月度总览',
    emoji: '🎮',
    platform: 'B站/小红书',
    description: '虚构App界面',
    prompt: `一张虚构记账App的月度总览页面截图，
顶部环形图展示支出分类，
中部收支柱状图，
下方最近交易列表五条，
整体莫兰迪配色，右上角设置齿轮图标，
手机竖屏比例，圆角卡片UI。`
  },
  {
    id: 'game-2',
    category: 'game',
    title: '阅读App 书架',
    emoji: '🎮',
    platform: 'B站/小红书',
    description: '虚构阅读App界面',
    prompt: `一张虚构阅读App的书架界面，
三行书封网格展示十二本虚构书名：
《和AI谈恋爱是一种什么体验》《硅谷厨房42道菜》《马斯克教我发推特》等，
顶部搜索框和筛选标签，
右下角悬浮添加按钮，
整体米色羊皮纸质感，
手机竖屏比例。`
  },
  {
    id: 'game-3',
    category: 'game',
    title: '音乐App 播放页',
    emoji: '🎮',
    platform: 'B站/小红书',
    description: '深色毛玻璃风格',
    prompt: `一张虚构音乐App的正在播放页面，
顶部专辑封面大图是一只戴耳机的橘猫，
中部歌曲名"猫叫版《孤勇者》"和歌手名"DJ橘座"，
下方进度条和控制按钮，
底部歌词滚动区，
整体深色模糊玻璃效果（毛玻璃），
手机竖屏比例。`
  },

  // ===== 通用模板 =====
  {
    id: 'tmpl-1',
    category: 'template',
    title: '结构化提示词模板',
    emoji: '🔧',
    platform: '所有场景',
    description: '推荐使用的万能结构化模板',
    prompt: `场景：
[地点、时间、背景、环境]

主体：
[画面焦点是什么]

重要细节：
[材质、服装、纹理、光线、相机角度、构图、氛围]

用途：
[编辑照片 / 产品样机 / 海报 / UI界面 / 信息图 / 概念图]

限制：
[无水印 / 无logo / 无多余文字 / 保留面部 / 保留布局]`
  },
  {
    id: 'tmpl-2',
    category: 'template',
    title: '一句话提示词模板',
    emoji: '🔧',
    platform: '所有场景',
    description: '简洁场景描述 + 文字 + 风格 + 光线 + 相机',
    prompt: `[场景描述]，[文字内容]，[风格关键词]，[光线]，[相机/角度]

示例：
咖啡店橱窗展示，招牌写着"营业 7:00-21:00 免费WiFi"，
暖色黄金时刻光线，人行道视角，照片级真实`
  },
  {
    id: 'tmpl-3',
    category: 'template',
    title: '图片编辑模板',
    emoji: '🔧',
    platform: '所有场景',
    description: '修改已有图片的模板',
    prompt: `修改：[精确指出要改什么]
保留：[面部、姿势、光线、构图、背景、文字]
限制：[无多余物体、无重新设计、无logo漂移、无水印]`
  },
  {
    id: 'tmpl-4',
    category: 'template',
    title: '多图合并模板',
    emoji: '🔧',
    platform: '所有场景',
    description: '用参考图换装/合成',
    prompt: `图片1：保留的基础场景
图片2：外套参考
图片3：靴子参考

指令：用图片2的外套和图片3的靴子给图片1的人换装，
保留图片1的面部、体型、姿势、背景、光线和构图，
不加额外配饰。`
  },

  // ===== 试卷 / 文件 =====
  {
    id: 'retro-6',
    category: 'retro',
    title: '小学期末试卷',
    emoji: '📝',
    platform: '抖音/微博（整活）',
    description: '逼真的考试试卷',
    prompt: `广州市小学数学四年级下册期末测试卷，
卷头标题"广州市小学数学四年级下册期末测试"，
填空题下划线，几何图形标注，
试卷特有的宋体/楷体排版风格，
第一眼看完全就是真实考卷，
竖版A4比例。`
  },
];

// 搜索辅助
export function searchPrompts(query, activeCategory) {
  let filtered = prompts;
  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.prompt.toLowerCase().includes(q) ||
      p.platform.toLowerCase().includes(q)
    );
  }
  return filtered;
}
