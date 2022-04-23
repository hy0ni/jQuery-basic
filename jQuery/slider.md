> 슬라이더 기능 구현

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>슬라이더 기능 구현</title>
    <link rel="stylesheet" href="./css/study1.css">
    <!-- jQuery 설치 CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/study1.js"></script>
  </head>
  <body>
    <div class="station">
      <ul class='train'>
        <li class="on">
          <img src="./img/cat.jpg" alt="고양이이미지">
          <h2>고양이</h2>
        </li>
        <li>
          <img src="./img/dog.jpg" alt="강아지이미지">
          <h2>강아지</h2>
        </li>
        <li>
          <img src="./img/elephants.jpg" alt="코끼리이미지">
          <h2>코끼리</h2>
        </li>
        <li>
          <img src="./img/Lion.jpg" alt="사자이미지">
          <h2>사자</h2>
        </li>
        <li>
          <img src="./img/penguins.jpg" alt="펭귄이미지">
          <h2>펭귄</h2>
        </li>
      </ul>
      <div class="controler">
        <a class="btnPrev" href="#">이전</a>
        <a class="btnNext" href="#">다음</a>
      </div>
      <div class="pagination">
        <ul>
          <li class="on">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <div class="progress">
        <div class="currentBar"></div>
      </div>
    </div>
  </body>
</html>

```

```css
/* reset */
* {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}

img {
  max-width: 100%;
}


/* layout */
.station {
  width: 100%;
  height: 700px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.train {
  height: 100%;
  width: 500%;
  position: relative;
  left: 0px;
  transition: all 1s ease 0s;
}

.train>li {
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}

.train:after {
  content: "";
  display: block;
  clear: both;
}

.train>li>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.train>li>h2 {
  position: absolute;
  right: 20%;
  bottom: 50px;
  font-size: 80px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.6s ease 1s;
  color: #fff;
}

.train>li.on>h2 {
  transform: rotateY(0);
  opacity: 1;
}


.controler {
  position: absolute;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.controler .btnPrev {
  float: left;
}

.controler .btnNext {
  float: right;
}

.controler a {
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 0;
  width: 40px;
  height: 40px;
  position: relative;
  transition: all 0.4s ease 0s;
}

.controler a:hover {
  background: rgba(255, 255, 255, 0.5);
}

.controler a:hover:after {
  border: 1px solid #000;
}

.controler a:after {
  content: "";
  width: 14px;
  height: 14px;
  border: 1px solid #fff;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.controler .btnPrev:after {
  border-top: none !important;
  border-right: none !important;
  left: 60%;
}

.controler .btnNext:after {
  border-bottom: none !important;
  border-left: none !important;
  left: 40%;
}


.pagination {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
}

.pagination ul>li {
  float: left;
  font-size: 0;
  width: 16px;
  height: 16px;
  background: #fff;
  margin: 0 3px;
  border-radius: 50%;
  cursor: pointer;
}

.pagination ul>li.on {
  background: orange;
}

.pagination ul:after {
  content: "";
  display: block;
  clear: both;
}


.progress {
  border: 1px solid lime;
  width: 60%;
  height: 10px;
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
}

.currentBar {
  width: 20%;
  height: 100%;
  background: lime;
  transition: all 0.6s ease 0s;
}

```

```javascript
$(document).ready(function(){

  // 넥스트버튼 클릭 시 다음 슬라이드로 이동
  //1. 넥스트버튼 클릭 했을 때 train클래스의 left 값이 변경
  // 1-1. 1번 클릭했을 때 left : -500px
  // 1-2. 2번 클릭했을 때 left : -1000px;
  // 1-3. 3번 클릭했을 때 left : -1500px;
  //1-4.번 4번클릭했을 때 left : -2000px;
  //1-5.번 5번클릭했을 때 left : -2500px; // count == 5
  var count = 0;
  var slideWidth = $(".train > li").width(); // 너비를 계산해서 남겨주는 함수

  //자동슬라이드기능
  var timer1 = setInterval(function(){
    count++; //넥스트일때는 더하고
    if(count > 4){
      count = 0;
    }
    slideMove(slideWidth,count);
  },2000);

    $(".station").mouseover(function(){
      clearInterval(timer1);
    });
    $(".station").mouseout(function(){
      timer1 = setInterval(function(){
        count++; //넥스트일때는 더하고
        if(count > 4){
          count = 0;
        }
        slideMove(slideWidth,count);
      },2000);
    });

    //버튼넥스트를 클릭했을 때 슬라이드를 이동하게하기위한
  $(".btnNext").click(function(){
    count++; //넥스트일때는 더하고
    if(count > 4){
      count = 0;
    }
    slideMove(slideWidth,count);
    // $(".train").css("left",-slideWidth*count+"px");
    // $(".train > li").removeClass("on");
    // $(".train > li").eq(count).addClass("on");
    // $(".pagination > ul > li").removeClass("on");
    // $(".pagination > ul > li").eq(count).addClass("on");
    // $(".currentBar").css("width",20*(count+1)+"%");
  });

  $(".btnPrev").click(function(){
    count--; //이전일때는 빼고
    if(count < 0 ){
      count = 4;
    }
    slideMove(slideWidth,count);
    var a = 0;

    // $(".train").css("left",-slideWidth*count+"px");
    // $(".train > li").removeClass("on");
    // $(".train > li").eq(count).addClass("on");
    // $(".pagination > ul > li").removeClass("on");
    // $(".pagination > ul > li").eq(count).addClass("on");
    // $(".currentBar").css("width",20*(count+1)+"%");
  });

  // pagination 안의 li태그를 클릭했을 때 순번에 맞는 슬라이드가 보여질 수 있도록 기능을 작성해보시오.
  $(".pagination > ul > li").click(function(){
    //내가 클릭한 리스트가 몇번째 순번인지(자식인지) 알림창을 통해서 나타내보시오.
    count = $(this).index(); // 기존에 있던 변수를 부름
    $(".train").css("left",-slideWidth*count+"px");
    $(".train > li").removeClass("on");
    $(".train > li").eq(count).addClass("on");

    $(".pagination > ul > li").removeClass("on");
    $(".pagination > ul > li").eq(count).addClass("on");
    // $(this).addClass("on");

  });

  function slideMove(sWidth,sCount){
    $(".train").css("left",-sWidth*sCount+"px");
    $(".train > li").removeClass("on");
    $(".train > li").eq(sCount).addClass("on");
    $(".pagination > ul > li").removeClass("on");
    $(".pagination > ul > li").eq(sCount).addClass("on");
    $(".currentBar").css("width",20*(sCount+1)+"%");

  };


    // var count = 0;
    // var slideWidth = $(".train > li").width(); // 너비를 계산해서 남겨주는 함수
    //
    // $(".btnNext").click(function(){
    //   count++;
    //   if(count > 4){
    //     count = 0;
    //   }
    //   mySliderMove(slideWidth,count);
    //   // $(".train").css("left",-slideWidth*count+"px");
    //   // $(".train > li").removeClass("on");
    //   // $(".train > li").eq(count).addClass("on");
    //
    // });
    //
    // $(".btnPrev").click(function(){
    //   count--;
    //   if(count < 0 ){
    //     count = 4;
    //   }
    //     mySliderMove(slideWidth,count);
    //   // $(".train").css("left",-slideWidth*count+"px");
    //   // $(".train > li").removeClass("on");
    //   // $(".train > li").eq(count).addClass("on");
    // });
    //
    // function mySliderMove(sw,sc){
    //
    //   $(".train").css("left",-sw*sc+"px");
    //   $(".train > li").removeClass("on");
    //   $(".train > li").eq(sc).addClass("on");

    //함수로 만들어서 사용

  //
  // };

});

```