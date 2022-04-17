scrollTop&offset



<br>




```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>scrollTop&offset</title>
</head>
<body>
  
  <h5>Hello</h5>
  <h5>2nd Paragraph</h5>

  <p>Hello</p>
  <p></p>

</body>
</html>

```



<br>



```css

  *{margin:0;padding:0;}
    p{margin:10px;padding:5px;border:2px solid #666;height:600px;}

    h5{margin-left:10px;}

```




<br>




```jquery

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

$(function(){

 var win = $(window);
  $("p:last").text("scrollTop" + win.scrollTop());

  var h5 = $('h5:last');
  var offset = h5.offset() // 무조건 화면 상단에서의 거리, 화면 좌측에서의 거리 

  //A.position() 가까운 부모중에 포지션이 기본값이 아닌 요소를 기준으로 좌측, 우측에서의 거리
  h5.html('left:' + offset.left + 'top:' + offset.top);

})

```