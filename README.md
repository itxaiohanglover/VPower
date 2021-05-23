# VPower#### 
0前言：

我国居民现阶段生活水平提高，消费能力和意愿逐年上升，同时，当代健康问题使得大众健康意识强烈，对运动健身有更多关注，推动运动健身行业持续发展。

#### 1项目名称：VPower（元动力）

#### 2项目成员：刘宇航、李嘉康、赵新浩、樊振华

#### 3项目介绍：

![小程序介绍](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\小程序介绍.JPG)

#### 4项目效果截图：

![首页](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\首页.jpg)

![个人中心](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\个人中心.jpg)

![计时功能](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\计时功能.jpg)

![客服](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\客服.jpg)

![匹配功能](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\匹配功能.jpg)

![社区](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\社区.jpg)



![订阅](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\订阅.jpg)

####  5项目体验小程序二维码 ：

![体验二维码](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\体验二维码.jpg)

#### 6部署教程：

![数据库部署](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\数据库部署.JPG)

![数据库部署01](C:\Users\a\Desktop\#云开发挑战赛#-VPower-无问战队\image\数据库部署01.JPG)

1. 克隆或下载本仓库并导入微信开发者工具

2. 注册小程序并修改 `project.config.json` 中的 `appid`

3. 使用云开发控制台建立 1个数据库集合: `society`（数据权限均为: 所有用户可读, 仅创建者可读写）

4. 上传并部署 `/cloudfunctions` 中全部 3 个 云函数

5. 预览/上传 后即可使用

6. （可选）打开订阅消息功能

   进入微信公众平台小程序管理，选择功能-订阅消息-添加模板（标题:  预约成功通知 , 关键词:  上课地点 、 授课教练、 课程名称 、 温馨提示 ，场景说明：健身学习）

7. （可选）编辑 `/miniprogram/config.js` 中的 `env` 修改运行环境
