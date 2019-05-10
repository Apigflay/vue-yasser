# vue-yasser
yasser.top官网
 1 webpack 3.+版本有bug 可以退到 2.8+

 2 更改配置 自动打开浏览器
//找到/config/index.js文件，你会发现很多参数配置都在里面
// 各种设备设置信息
host: 'localhost', //主机名
port: 8080, // 端口号（默认8080）
autoOpenBrowser: false,//是否自动打开浏览器
//想让浏览器自动打开，只需将false改为true即可，为防止端口号冲突，这里也可以随意更改端口号

 3 打包之后无法本地打开
 更改config/index.js下build的assetsPublicPath属性值为"./"，妥

 4 使用axios  
 import axios from 'axios';//引入axios
Vue.prototype.$axios = axios; //添加axios到Vue的原型对象上

5 vue项目打包后资源相对引用路径的和背景图片路径问题
1、修改config => index.js => build => assetsPublicPath 中的'/'成为'./'
2、在build => util.js 里找到ExtractTextPlugin.extract增加一行：publicPath: '../../'，主要解决背景图片路径的问题。


6 vue  线上请求出问题
https://www.jianshu.com/p/686f17737ffb
