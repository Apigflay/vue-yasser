
<template>
  <div class="main_rap">
    <div class="main">
      <div class="draw_area">
        <canvas id="canvas" width="800" height="600"></canvas>
        <div class="pokonyan">
          <!--头-->
          <div class="header">
            <!--脸-->
            <div class="face"></div>
            <!--眼睛-->
            <div class="eye eyel">
              <div class="eyeBlack">
                <div class="eyeWhite"></div>
              </div>
            </div>
            <div class="eye eyer">
              <div class="eyeBlack">
                <div class="eyeWhite"></div>
              </div>
            </div>
            <!--线-->
            <div class="noseLine"></div>
            <div class="quilt"></div>
            <!--鼻子-->
            <div class="nose">
              <div class="white"></div>
            </div>
            <!--嘴-->
            <div class="mouthBox">
              <div class="mouth"></div>
            </div>
            <!--胡须-->
            <div class="beard beard1"></div>
            <div class="beard beard2"></div>
            <div class="beard beard3"></div>
            <div class="beard beard4"></div>
            <div class="beard beard5"></div>
            <div class="beard beard6"></div>
          </div>
          <!--脖子-->
          <div class="neckBox">
            <div class="neck"></div>
          </div>
          <!--铃铛-->
          <div class="bell">
            <div class="line"></div>
            <div class="linebg"></div>
            <div class="center"></div>
            <div class="top"></div>
            <div class="top2"></div>
          </div>
          <!--屁股-->
          <div class="arse">
            <div class="neck"></div>
          </div>
          <!--肚子-->
          <div class="tummy"></div>
          <!--尾巴-->
          <div class="tail">
            <div class="circle"></div>
            <div class="lineBox" >
              <div class="line"></div>
            </div>
          </div>
          <!--腿-->
          <div class="leg"></div>
          <div class="legbottomBox">
            <div class="legbottom"></div>
          </div>
          <!--脚-->
          <div class="foot"></div>
          <!--<div class="foottop"></div>-->
          
          <!--左手-->
          <div class="handr">
            <div class="line"></div>
            <div class="palm"></div>
          </div>
          <!--右手-->
          <div class="handtop"></div>
          <div class="handlBox">
            <div class="handl">
              <div class="line"></div>
            </div>
          </div>
          <div class="palml"></div>
        </div>
      </div>
      <div class="swiper">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="audio">
        <audio src="song.mp3" controls="controls" loop="loop" autoplay="autoplay">亲 您的浏览器不支持html5的audio标签</audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'home'
    }
  },
  created () {
    this.$axios.get('/api/music/netease/songList', {  
      //params参数必写 , 如果没有参数传{}也可以
        params: {  
         "key": '579621905',
          "id": '3778678',
          "limit":'10',
          "offset":"0"
        }
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  mounted () {
     this.draw()//大风车
     
  },
  methods: {
    //画大风车
    draw:function(){
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
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_rap{

}
.main{
  width:1200px;
  margin:auto;
  background:#cecece;
}
.draw_area{
  width:1200px;
  height:600px;
  margin:auto;
  position: relative;
}
.swiper{width:1200px;margin:auto}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
/* 大风车 */
#canvas{
  display: none;
  position: absolute;
  top:-7%;
}
/* 大风车 */
/* 多啦a梦 */
.pokonyan{display:none;width:572px; height:397px; margin:0 auto; position: absolute; left:22%; top:56%; margin-left:-286px; margin-top:-198px;}

.header{width:340px; height:318px; position:absolute; right:12px; top:0; border-top-left-radius:50%; border-top-right-radius:50%; border-bottom-left-radius:50%; border-bottom-right-radius:48%; background:#00a0e9; border:#000 solid 2px; z-index: 6;}
.header .face{width: 305px; height:235px;  position: absolute; right: -8px; bottom: 0px; background:#fff; border:#000 solid 2px; border-top-left-radius:40%; border-top-right-radius:40%; border-bottom-left-radius:50%; border-bottom-right-radius:50%;  -webkit-transform:rotate(-25deg); -moz-transform:rotate(-25deg); transform:rotate(-25deg);}

.header .eye{width:75px; right:182px; height:97px; position: absolute; border:#000 solid 2px; border-radius: 50%; background:#fff; top:34px; -webkit-transform:rotate(-20deg); -moz-transform:rotate(-20deg); transform:rotate(-20deg);}
.header .eyeBlack{width:18px; height:36px; position:absolute; right:7px; bottom:23px; overflow:hidden; background:#000; border-radius: 50%;}
.header .eyeWhite{width:8px; height:12px; position:absolute; right:3px; bottom:13px; overflow:hidden; background:#fff;  border-radius: 50%; }
.header .eyer{right:110px; top:2px; -webkit-transform:rotate(-28deg); -moz-transform:rotate(-28deg); transform:rotate(-28deg);}

.header .eyer .eyeBlack{left:14px;  bottom:28px;}

.header .noseLine{width:20px; height:160px; border-right:#000 solid 2px; border-radius:50%; position:absolute; right:120px; top:100px;  -webkit-transform:rotate(-20deg); -moz-transform:rotate(-20deg); transform:rotate(-20deg);}
.header .quilt{width:100px; height:60px; background:#fff; border-radius:50%;  position:absolute; top:220px; right:60px;}

.header .nose{width: 44px; height:44px; position: absolute; top:84px; right:132px; background:#e0002a; border-radius:50%; border: 2px solid #000; } 
.header .nose .white{width:13px; height:13px; position: absolute; top:14px; left:10px; background:#fff; border-radius:50%; }

.header .mouthBox{width:290px; height:82px; position:absolute; bottom:84px; right: 0px;  overflow:hidden;  -webkit-transform:rotate(-20deg); -moz-transform:rotate(-20deg); transform:rotate(-20deg);}
.header .mouthBox .mouth{width: 290px; height:200px; border-radius:50%; position:absolute; bottom:0; right:0; border:#000 solid 2px; }

.header .beard{width:107px; height:3px; background:#000; position:absolute; border-radius:50%; overflow: hidden;}
.header .beard1{top:170px; left:60px; -webkit-transform:rotate(-10deg); -moz-transform:rotate(-10deg); transform:rotate(-10deg);}
.header .beard2{top:200px; left:62px; -webkit-transform:rotate(-20deg); -moz-transform:rotate(-20deg); transform:rotate(-20deg);}
.header .beard3{top:230px; left:68px; -webkit-transform:rotate(-30deg); -moz-transform:rotate(-30deg); transform:rotate(-30deg);}

.header .beard4{top:120px; right:-10px; -webkit-transform:rotate(-20deg); -moz-transform:rotate(-20deg); transform:rotate(-30deg);}
.header .beard5{top:150px; right:-20px; -webkit-transform:rotate(-30deg); -moz-transform:rotate(-30deg); transform:rotate(-20deg);}
.header .beard6{top:180px; right:-30px; -webkit-transform:rotate(-40deg); -moz-transform:rotate(-40deg); transform:rotate(-10deg);}

/*脖子*/
.neckBox{width:302px; height:318px; position:absolute;  background:#e0002a; border:#000 solid 2px; z-index: 4; right:41px; top:18px;  overflow:hidden; border-top-left-radius:50%; border-top-right-radius:50%; border-bottom-left-radius:50%; border-bottom-right-radius:48%;}
.neckBox .necka{width:340px; height:318px; position:absolute;  background:#e0002a; z-index: 4; right:5px; bottom:-3px; border-top-left-radius:50%; border-top-right-radius:50%; border-bottom-left-radius:50%; border-bottom-right-radius:48%;}

/*铃铛*/
.bell{width:56px; height:56px; background:#ffe43b; border:#000 solid 2px; border-radius:50%; position: absolute; bottom:27px; right:110px; z-index: 5; overflow:hidden;}
.bell .line{width:56px; height:50px; border-right:#000 solid 2px; position:absolute; top:20px; left:-24px; border-radius: 50%;}
.bell .linebg{width:86px; height:56px; background:#ffe43b;  position:absolute; bottom:18px; left:-30px; border-radius: 50%;}

.bell .center{width:15px; height:7px; border-radius:50%; background:#7d6b56; border:#000 solid 2px; position: absolute; top:33px; left:22px; -webkit-transform:rotate(-10deg); -moz-transform:rotate(-10deg); transform:rotate(-10deg);}
.bell .top{width:86px; height:56px; background:#ffe43b; border:#000 solid 2px; position:absolute; bottom:28px; left:-30px; border-radius: 50%;}
.bell .top2{width:86px; height:56px; background:#ffe43b; border:#000 solid 2px; position:absolute; bottom:35px; left:-30px; border-radius: 50%;}

/*屁股*/
.arse{width:186px; height:186px; position: absolute; top:160px; left:106px; border-radius:50%; background:#00a0e9; border-top:#000 solid 2px;  border-left:#000 solid 2px; border-bottom:#00a0e9 solid 2px; -webkit-transform:rotate(40deg); -moz-transform:rotate(40deg); transform:rotate(40deg);  z-index: 3;}
/*肚子*/
.tummy{width:240px; height:186px; position: absolute; bottom:33px; left:146px; border-radius:50%; background:#00a0e9; border-bottom:#000 solid 2px;  border-right:#000 solid 2px; border-left:#00a0e9 solid 2px; z-index: 3;}


@-webkit-keyframes tail {
    0%{
        margin-left:0;
    }
    25%{
        margin-left:-10px;
    }
    50%{
        margin-left:-20px;
    }
    75%{
        margin-left:10px;
    }
    100%{
        margin-left:20px;
    }
}

/*尾巴*/
.tail{width:58px; height:58px; position: absolute; bottom:216px; left:92px; z-index: 2; }
.tail .circle{width:50px; height:50px; background:#e0002a; border:#000 solid 2px;  border-radius:50%;}
.tail .lineBox{width:18px; height:18px; position: absolute; bottom:0; right:4px; overflow:hidden;}
.tail .lineBox .line{width:50px; height:50px; border:#000 solid 2px; position:absolute; bottom:-30px; left:-36px; border-radius:50%;}
/*腿*/
.leg{width:120px; height:120px; position: absolute; bottom:37px; left:82px; border-radius:50%; background:#00a0e9;  border:#000 solid 2px; z-index: 2;}
.legbottomBox{width:169px; height:120px; background:#333333; overflow:hidden; position: absolute; bottom:30px; left:90px; border-radius:40%; z-index: 3;}
.legbottomBox .legbottom{width:240px; height:120px; position:relative; bottom:4px; left:-40px; border-radius:50%; background:#00a0e9;  border:#000 solid 2px;   border-bottom:#000 solid 2px;  -webkit-transform:rotate(0deg); -moz-transform:rotate(0deg); transform:rotate(0deg);}

/*脚*/
.foot{width:120px; height:100px; position: absolute; bottom:38px; left:22px; border-radius:50%; background:#fff; border:#000 solid 2px;  -webkit-transform:rotate(-10deg); -moz-transform:rotate(-10deg); transform:rotate(-20deg);   z-index: 1;}
.foottop{width:97px; height:100px; position: absolute; bottom:20px; left:-16px; border-bottom-left-radius:50%;  border-top-left-radius:50%; background:#fff; border:#000 solid 2px; border-right:none;  -webkit-transform:rotate(-10deg); -moz-transform:rotate(-10deg); transform:rotate(-20deg);   z-index: 1;}

.handr{width:130px; height:90px; position: absolute; bottom:46px; right:0px; border-radius:50%; background:#00a0e9; border:#000 solid 2px; z-index: 3;}
.handr .palm{width: 78px; height:60px; position: absolute; top:-30px; right:-10px; border-radius:50%; background:#fff; border:#000 solid 2px; z-index: 3; -webkit-transform:rotate(-45deg); -moz-transform:rotate(-45deg); transform:rotate(-45deg);}
.handr .line{width: 80px; height:80px; position: absolute; border-left:#000 solid 2px; border-bottom:transparent solid 2px; top:8px; right:-6px; border-radius: 50%; -webkit-transform:rotate(50deg); -moz-transform:rotate(50deg); transform:rotate(50deg);}

.handtop{width:74px; height:40px; background:#00a0e9; border-top:#000 solid 2px; border-left:#00a0e9 solid 2px; position: absolute; bottom:58px; right:240px;  -webkit-transform:rotate(30deg); -moz-transform:rotate(30deg); transform:rotate(20deg); z-index:5;}
.handlBox{width:180px; height:70px; position: absolute; bottom:6px; right:152px; overflow: hidden; z-index:5;}
.handlBox .handl{width:260px; height:110px; border:#000 solid 2px;  background:#00a0e9; border-left:transparent solid 2px; position:absolute; bottom:26px; right:-3px; border-radius: 50%; -webkit-transform:rotate(30deg); -moz-transform:rotate(30deg); transform:rotate(30deg);}
.handlBox .handl .line{width:40px; height:80px; position: absolute; background:none; border-left:#000 solid 2px; top:0px; right:48px;}
.palml{width:86px; height:70px; position: absolute; bottom:32px; right:168px; border-radius:50%; background:#fff; border:#000 solid 2px; z-index: 3; -webkit-transform:rotate(20deg); -moz-transform:rotate(20deg); transform:rotate(20deg); z-index: 7;}

 
/* 多啦a梦 */
</style>
