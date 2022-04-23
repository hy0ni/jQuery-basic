> 마우스따라다니는태그
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>마우스따라다니는태그</title>
    <link rel="stylesheet" href="./css/study1.css">
    <!-- google web font - Playfair Display -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- jQuery 설치 CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  </head>
  <body>
    <div class="cursor"></div>
    <header>
      <div class="cover"></div>
      <div class="btn_open">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="gnb">
        <li><a href="#">cat #1</a></li>
        <li><a href="#">cat #2</a></li>
        <li><a href="#">cat #3</a></li>
        <li><a href="#">cat #4</a></li>
      </ul>
      </header>
      <div class="wrap">
        <section>
          <h1>Dear you</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <figure>
            <img src="./img/yort.jpg" alt="요트">
          </figure>
        </section>
      </div>
  </body>
</html>

```

```css
/* font-family: 'Playfair Display', serif; */

/* reset */
*{margin:0;padding:0;}
a{text-decoration:none;color:#000;}
ul,ol{list-style:none;}
h1,h2,h3,h4,h5,h6{font-weight:normal;font-size:inherit;}
i,em{font-style:normal;}
strong,b{font-weight:normal;}
table{border-collapse:collapse;}
hr{display:none;}

/* layout */

.wrap{width:1320px;margin:0 auto;}

/* common */
html{font-family: 'Playfair Display', serif;}
body{overflow:hidden;}

/* header */
.cover{
  position:fixed;
  width:50px;height:50px;
  right:24px;top:24px;
  background:pink;
  border-radius:50%;
  transition:all .6s ease 0s;
}
.cover.on{
  transform:scale(100);
  opacity:0.7;
}

.btn_open{
  position:fixed;
  right:30px;top:28px;
  width:40px;height:40px;
  cursor:pointer;
  z-index:500;
}
.btn_open span{
  display:block;
  width:31px;height:1px;
  margin:10px auto;
  background:black;
  transition:all .4s ease 0s;
  transform-origin:0 0;

}
.btn_open.on span:nth-of-type(1){transform:rotate(45deg);}
.btn_open.on span:nth-of-type(2){opacity:0;}
.btn_open.on span:nth-of-type(3){transform:rotate(-45deg);}

.gnb{
  position:fixed;
  width:100%;height:100%;
  left:0;top:0;
}
.gnb > li{
  width:25%;height:100%;
  box-sizing:border-box;
  float:left;background:#fff;
  transform:rotateY(90deg);
  transform-origin:left center;
  position:relative;
  pointer-events:none;
}
.gnb > li:nth-of-type(1){transition:all .5s ease 0.6s}
.gnb > li:nth-of-type(2){transition:all .5s ease 0.7s}
.gnb > li:nth-of-type(3){transition:all .5s ease 0.8s}
.gnb > li:nth-of-type(4){transition:all .5s ease 0.9s}
.gnb.on > li{
  transform:rotateY(0deg);
  pointer-events:auto;
}
.gnb > li:after{
  content:"";
  position:absolute;
  width:1px;height:0%;
  right:0;top:0;
  background:#000;
  transition:all 0.5s ease 1.3s;
}
.gnb > li:nth-of-type(1):after{transition:all 0.5s ease 1.3s;}
.gnb > li:nth-of-type(2):after{transition:all 0.5s ease 1.4s;}
.gnb > li:nth-of-type(3):after{transition:all 0.5s ease 1.5s;}
.gnb > li:last-of-type:after{display:none;}
.gnb.on > li:after{height:100%;}

.gnb > li > a{
  display:block;height:100%;
  font-size:50px;
  text-align:center;line-height:100vh;
}

/* wrap */
section{padding:30px 0;}
section h1{font-size:30px;margin-bottom:10px;}

.cursor{
  width:30px;height:30px;
  background:pink;border-radius:50%;
  position:absolute;left:0;top:0;
  display:none;
  z-index:1000;
  pointer-events:none;
  opacity:0.7;
  transition:width 1s ease 0s,height 1s ease 0s;
}

.cursor.on1{
  border-radius:0;
  width:300px;height:500px;
  background:url("../img/cat1.jpg") no-repeat 50% 50%;
}
.cursor.on2{
  border-radius:0;
  width:500px;height:300px;
  background:url("../img/cat2.jpg") no-repeat 50% 50%;
}
.cursor.on3{
  border-radius:0;
  width:300px;height:500px;
  background:url("../img/cat3.jpg") no-repeat 50% 50%;
}
.cursor.on4{
  border-radius:0;
  width:500px;height:300px;
  background:url("../img/cat4.jpg") no-repeat 50% 50%;
}

```

```javascript
$(document).ready(function(){

  // cursor클래스가 마우스 커서를 따라다닐 수 있도록 하는 기능
  // 마우스를 움직일 때  $(document).mousemove();
  // 1. 움직이는 커서의 좌표를 알아야함(x/y좌표를 알아내야함)
  // 2. 알아낸 좌표의 x/y좌표값을 cursor클래스의 left/top 값에 적용
  $(document).mousemove(function(e){ //e이벤트 객체(사용자의 이벤트)
    // console.log("마우스커서의 x좌표 : "+e.pageX);
    // console.log("마우스커서의 y좌표 : "+e.pageY);
    var posX= e.pageX;
    var posY= e.pageY;
    $(".cursor").css("display","block");
    $(".cursor").css("left",posX-15).css("top",posY-15);
  });

  //  메뉴버튼을 눌렀을 때
  var btnOpenStatus = false; //처음 상태는 off

  $(".btn_open").click(function(){
    if(btnOpenStatus == false){
      //버튼이 비활성화 되어있는 경우
      // 1. 삼선 -> X모양으로 바뀌는 기능
      $(this).addClass("on");
      $(".cover").addClass("on");
      $(".gnb").addClass("on");
      btnOpenStatus = true;
    }else{
      // 버튼이 활성화 되어있는 경우
      // X모양 -> 삼선모양으로 바뀌는 기능
      $(this).removeClass("on");
      $(".cover").removeClass("on");
      $(".gnb").removeClass("on");
      $(".cursor").removeClass("on1");
      $(".cursor").removeClass("on2");
      $(".cursor").removeClass("on3");
      $(".cursor").removeClass("on4");
      btnOpenStatus = false;
    }
  });

  //리스트에 마우스를 올렸을 때 순번에 맞는 고양이 사진이 보일 수 있도록
  $(".gnb > li").mouseover(function(){

  var idx = $(this).index();
  $(".cursor").removeClass("on1");
  $(".cursor").removeClass("on2");
  $(".cursor").removeClass("on3");
  $(".cursor").removeClass("on4");
  $(".cursor").addClass("on"+(idx+1));

  });

});

```