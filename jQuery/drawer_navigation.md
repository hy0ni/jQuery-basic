```html

<body>
  <header class="page-header" role="banner">
    <h1>drawer_side_menu</h1>
  </header>

  <div class="page-main" role="main">
    <aside>
      <ul>
        <li><a href="#" style="background-color:rgb(223, 48, 25)">1</a></li>
        <li><a href="#" style="background-color:rgb(223, 209, 14)">2</a></li>
        <li><a href="#" style="background-color:rgb(21, 197, 94)">3</a></li>
      </ul>
      <button><span>open</span></button>
    </aside>
  </div>
</body>

```
```css

*{margin:0;padding:0;}
  ul{list-style:none;}
  a{text-decoration:none;color:#000;}
      
  .page-main{width:50%;height:600px;border:1px solid #000;}
  .page-main > aside{
    position: fixed;
    top:0;
    left:-350px;
    width:350px;
    height:100%;
    background-color: rgba(0,0,0,0.8);
  }
  .page-main > aside ul{
    position: absolute;
    top:50px;
    left:114px;
  }
  .page-main > aside ul li{
    padding: 10px;
  }
  .page-main > aside ul li a{display: block;width:50px;height: 50px;text-align: center;}
  button{
    position:absolute;
    top:150px;
    left:350px;
    width:52px;
    height:132px;
    border: none;
    background-color: rgba(0,0,0,0.8);
    cursor: pointer;
  }
  button > span{
    color:aliceblue;
    font-size: 18px;
  }

```


<br>



```jquery

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <!-- jQuery ui -->
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script>
  $(function(){
    var $aside = $('aside');
    var $button = $aside.find('button'); // 훨씬 더 빠르게 변수에 저장할 수 있도록
    var $duration = 300; //0.3s
        //버튼을 클릭하면 aside가 나오도록
        //버튼하나로 open or close
        // javascript-> 선택자.classList.add = 'open';

    //속성변경하기, 속성의 값을 반환하기
    //var c = A.attr('src') = a라는 요소의 src라는 속성의 값을 변수명 c에 저장.
    //$button.find('img').attr('src','img/btn_close.png');

      // A.addClass('b c'); A.removeClass('b'); A.toggleClass('b');
      // A.hasClass('b') 조건문에서만 사용.
      // a요소에 b라는 클래스명이 있으면 true, 없으면 false
      
      $button.click(function(){
        
        $aside.toggleClass('open'); 
        
        if($aside.hasClass('open')){

            $aside.stop().animate({left:'-70px'},$duration,'easeOutBack');
            $('span').text('colse')

        }else{

          $aside.stop().animate({left:'-350px'},$duration,'easeInBack');
          $('span').text('open')

        }
      });

  });
</script>

```
