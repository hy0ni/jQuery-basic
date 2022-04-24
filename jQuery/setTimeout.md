> setTimeout

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>setTimeout</title>
    <link rel="stylesheet" href="./css/study1.css">
    <!-- jQuery-->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/study1.js"></script>
  </head>
  <body>
    <div class="loding">
      <div class="circle"></div>
      <span>loding...</span>
    </div>
    <div class="contents"></div>
    <h1>setTimeout</h1>
    <p>일정한 시간 뒤에 어떤 동작을 실행하는 함수</p>
    <p>타이머를 리턴</p>
    <a href="./study2.html">study2로 바로가기</a>
  </body>
</html>

```


```css
.loding{
  width:100%;height:100vh;
  background:#000;
  position:fixed;left:0;top:0;
  z-index:1000;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
  transition:all 0.6s ease 0s;
}
.circle{
  border:1px solid #fff;
  border-radius:50%;
  border-top:none;
  border-bottom:none;
  width:100px;height:100px;
  display:flex;
  justify-content:center;
  align-items:center;
  animation:circleRotate 8s linear 0s infinite;
}
.loding.hide{
  height:0vh;
}
.loding span{
  color:#fff;
  position:absolute;left:50%;top:50%;
  transform:translate(-50%,-50%);
  animation:opa 2s linear infinite alternate;
  /* display:block;width:100%;height:100%;
  text-align:center;
  line-height:100px; */
}
@keyframes circleRotate {
  0%{transform:rotate(0deg);}
  100%{transform:rotate(360deg);}
}
@keyframes opa {
  0%{opacity:0;}
  100%{opacity:1;}
}

```


```javascript
$(document).ready(function(){

  setTimeout(function(){
    $(".loding").addClass("hide");
  },3000);

});

```