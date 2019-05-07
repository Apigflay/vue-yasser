//获取画布的2d上下文
var ctx = document.getElementById("canvas").getContext("2d");
//定义一个函数 ，封装风车的底部基座
 function buttom(){
     ctx.beginPath();                                        //开始一条新的绘制路径
     var liner = ctx.createLinearGradient(390,600,410,600);    //设置变量（颜色渐变的方向-起点-终点）
     liner.addColorStop(0,"#ccc");                            //设置起点颜色
     liner.addColorStop(0.5,"#fff");                            //设置中点颜色
     liner.addColorStop(1,"#ccc");                            //设置终点颜色
     ctx.fillStyle = liner;                                    //梯形的填充方式设置为 变量（渐变颜色）   
     ctx.moveTo(395,300);                                    //提起我们的画笔，起点设置为（395,300）
     ctx.lineTo(405,300);                                    //连接起点画线
     ctx.lineTo(410,600);
     ctx.lineTo(390,600);                                   
     ctx.closePath();                                        //闭合路径
     ctx.fill();                                                //填充梯形
      
 }
buttom();　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//要调用函数，才能在浏览器显示
var num =0;
function yezi(){
       ctx.save();  //保存默认情况下的canvas变换状态
       ctx.beginPath();
       ctx.translate(400,300);
       // ctx.globalAlpha = 0.9;
       // 设置第一次状态下 坐标系旋转度数
       ctx.rotate((Math.PI/180)*num);
       var liner1 = ctx.createLinearGradient(30,-12,30,12);      //这里设置颜色渐变填充的样式
           liner1.addColorStop(0,"#ccc");
           liner1.addColorStop(0.5,"#fff");
           liner1.addColorStop(1,"#ccc");
           ctx.fillStyle = liner1;
       ctx.save();                 //保存第一次状态  平移坐标系变换
           ctx.beginPath();
           bind();                //调用函数
           //绘制第二片叶子
           ctx.beginPath();
           ctx.rotate((Math.PI/180)*120);   //坐标系旋转120°
           ctx.save();                        //保存旋转坐标系状态，为第三片叶子做铺垫
               bind();            //调用函数
               //绘制第三片叶子
               ctx.beginPath();
               ctx.rotate((Math.PI/180)*120);   //坐标系旋转120°
               ctx.save();   
                   bind();     //调用函数
               ctx.restore();    //回复第3次状态前（旋转坐标系）
           ctx.restore();        //回复第2次状态前（旋转坐标系）
           //绘制叶子中心圆圈
           ctx.beginPath();
           var arcgradient = ctx.createRadialGradient(0,0,0,0,0,16);
           arcgradient.addColorStop(0,"#ccc");
           arcgradient.addColorStop(0.1,"#fff");
           arcgradient.addColorStop(1,"#ccc");
           ctx.arc(0,0,10,0,Math.PI*2);
           ctx.fillStyle  = arcgradient;
           ctx.fill();
       ctx.restore();             //回复第1次状态前（平移坐标系）
       num+=5;   //第一状下  环境1   态坐标系旋转度数增加********************************这个num使得环境1的旋转角度在不停的变化，**********************************************
       ctx.restore();
   }
   //绘制每片叶子都重复的代码，这里做一个函数包装
   function bind(){
       ctx.moveTo(0,0);                   
       ctx.quadraticCurveTo(10,-12,30,-12);　　　　//比赛尔曲线
       ctx.lineTo(190,-3);
       ctx.quadraticCurveTo(200,0,190,3);　　　　
       ctx.lineTo(30,12);
       ctx.moveTo(0,0);
       ctx.quadraticCurveTo(10,12,30,12);
       ctx.fill();
   }
setInterval(function(){
       ctx.clearRect(0,0,800,600);　　　　//每次执行代码前，都要将画布清空，不然画出的图形会滞留在画布上；
       buttom();　　　　　　　　　　　　　　　//调用函数　
       yezi();
   },50);