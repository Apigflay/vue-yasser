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

 3
