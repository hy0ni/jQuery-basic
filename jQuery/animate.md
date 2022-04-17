
animate



```html

<body>
  <header class="page-header" role="banner">
    <h1>Creative jQuery Sample</h1>
  </header>
  <div class="page-main" role="main">
    <div id="typo">
      <div class="inner">Creative jQuery</div>
    </div>
  </div>
  <ul id="list">
    <li>meun1
      <ul class="mlist">
        <li>list1</li>
        <li>list2</li>
      </ul>
    </li>
    <li>meun2</li>
    <li>meun3</li>   
  </ul>


  <div id="box1">
    <p>
      <span></span>
    </p>
  </div>
</body>

```
<br>

```css

body{background-color: cadetblue;}

.inner{
  font-size: 40px;
  font-weight:bold;
  text-align: center;
  color:#fff;
  cursor: pointer;
  }
.mlist{display: none;}

#box1{
  width:100px;
  height:100px;
  background-color:blanchedalmond;
  position: absolute;
  }

```


<br>


```jquery

<!-- 공백 o = find('span') 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용
공백 x = filter(선택자) 선택한 요소에서 선택자, 변수, 함수를 통해 선택하는 메서드 -->
  
    $(function(){
      //inner클릭하면 opacity & font-size 작아지면서 없어지게
 
      
      $('#typo .inner').click(function(){
        //선택자.animate({속성:값, 속성:값}, 시간, 이징, 다른 할일);
        // linear, swing
        //function(){할일} 임의함수(익명함수)
        $(this).animate({opacity:0, fontSize:'0px'}, 1500,'linear',function(){
          $(this).animate({opacity:1, fontSize:'40px'},500);
        });
      });

      $('#list li').mouseover(function(){
        $(this).css({color:"#ccc"});
      })
      .mouseout(function(){
        $(this).css({color:"#000"});
      })

      //animate 수치바뀌는 것만 가능
      // .stop().animate({})    //.animate({})함수는 .stop()써줘야함
      $('#list li').click(function(){
          $(this).children().css({display:"block"});
          $('#box1').animate({left:'250px'},1000,'linear',);
      });
      $('#box1').mouseover(function(){
        $(this).css({height:'500px'},500,'linear');
      }).mouseout(function(){
        $(this).css({width:'500px'},1000,'linear');
      })
    });

```