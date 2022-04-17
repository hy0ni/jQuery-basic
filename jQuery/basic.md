######제이쿼리 기초문법


<div style="font-size:14px;background:#EFF5FB;padding:10px;border-radius:10px">
<p style="font-size:15px;font-weight:bold;color:#585858">
-DOM선택 (아이디,클래스,태그선택자)-</p>
$("#.btns").css({"border":"1px solid red"});
<br>
$(".btns").css({"border":"1px solid red"});

</div>
<br>
<div style="font-size:14px;background:#EFF5FB;padding:10px;border-radius:10px">
<p style="font-size:15px;font-weight:bold;color:#585858">
-이벤트 연결하기-
<br>이벤트문 안쪽에서의 this는 이벤트발생한 바로 "그" 요소 선택.
</p>
$(".btns").on("click",function(){
	<br>
  console.log(this);
});
</div>
<br>
<div style="font-size:14px;background:#EFF5FB;padding:10px;border-radius:10px">
<p style="font-size:15px;font-weight:bold;">
-버튼 클릭시 클릭한 요소의 순서 구하기-
<br>선택자.index() : 선택자의 순서값을 반환하는 제이쿼리 전용 내장 함수
</p>
$(".btns li").on("click",function(){
<br>	var i = $(this).index(); //click한 li의 순번
<br>	//alret(i) //ex.[0] [1] [2] ...
});
</div>
<br>
<div style="font-size:14px;background:#EFF5FB;padding:10px;border-radius:10px">
<p style="font-size:15px;font-weight:bold;">
-여러개의 요소중에 특정 요소만 선택했을때 해당 요소만 활성화-
<br>-순간적으로 모든 요소를 선택해서 일단은 비활성화-
<br>-이벤트가 발생한 요소만 활성화-

</p>
$(".btns li").on("click",function(){
  <br>//.btns li click했을때 동작
	<br>//.btns li의 직계 자식중 모든 a의 color를 black로 변경
  <br>
	<br>$(".btns li").children("a").css({"color":"black"});
	<br>//내가 선택한 직계 자식중 a의 color를 red로 변경
	<br>$(this).children("a").css({"color":"red"});
});
</div>
<br>
<div style="font-size:14px;background:#EFF5FB;padding:10px;border-radius:10px">
<p style="font-size:14px;color:#585858">
<br>선택자.attr() 선택한 DOM의 속성(Attribute)를 제어
<br>선택자.attr({"변경할 속성명":"속성값"}) : 해당 속성명에 해당하는 값을 변경
<br>선택자.attr("알아낼 속성명") : 해당 속성명의 값을 알아냄
<br>선택자.text() : 선택자에 텍스트값 가져오기
<br>선택자.text("바꿀 텍스트") : 선택자에 텍스트값 변경하기
</p>
</div>
<br>
```html
<body>
	<a href="https://www.naver.com" target="_blank" 
  title="네이버로 이동" id="test">네이버</a>

   <section id="test"></section>
</body>
```
```Jquery
$(function(){

$("#test".attr({
	href: "http:www.google.com",
	target: "_self",
title: "구글로 이동"
}).text("구글");

});
```
<br>
###### Attribute 제어
```jQery
이벤트 연결 메서드 .on
- 하나의 DOM에 여러개의 이벤트 등록이 필요한데 실행할 함수가 같을때 
선택자.on("이벤트명1, 이벤트명2", 함수);

하나의 DOM에 여러개의 이벤트 등록이 필요한데, 각 이벤트마다 실행할 함수가 다를때 
선택자 on({
	"이벤트명1" : 함수1,
	"이벤트명2" : 함수2
});

$("#test").on({
	//요소를 클릭했을때
	"click": function(){
			console.log("클릭했습니다.");
		},
		//요소에 마우스 포인터가 진입하면 발생
			"mouseenter": function(){
			console.log("마우스가 들어갔습니다.");
		}
	
});
```
<br>
######mouseover / mouseenter
```jquery
//mouseover와 mouseenter 차이점
mouseover : 직접 이벤트를 걸지 않은 자식요소에 마우스 포인터가 와도 발생.
(자바스크립트의 "mouseover" 이벤트가 이벤트 핸들러에 연결되고, 
해당 요소에 "mouseover" 이벤트가 발생되었을 때 설정한 함수가 실행된다.


mouseenter : 오로지 자기 자신에게 마우스 포인터가 진입해야 이벤트 발생
(해당 요소 위로 마우스가 진입할 때 발생하는 이벤트가 이벤트 핸들러에 연결되고, 
해당 요소에 마우스 진입 이벤트가 발생되었을 때 설정한 함수가 실행된다.)

```
<br>
######width / height 
```jquery
width() : Element의 너비를 구함
height() : Element의 높이를 구함
innerWidth() : padding까지 너비를 구함
innerHeight() : padding까지 높이를 구함
outerWidth() : border까지의 너비를 구함
outerHeight() : border까지의 높이를 구함
outerWidth(true) : margin까지의 너비를 구함
outerHeight(true) : margin까지의 높이를 구함
```

<br>
######clone()
```jquery

<body>

  <b>Hello</b>
  <p>, how are you?</p>

  <script>
    $("b").clone().prependTo("p");
  //b태그를 복사해서 p태그의 내용의 앞에 추가


  </script>

</body>
```
<br>
```jquery

  <div id="buttons2">
    <button></button>
    <button></button>
    <button></button>
    <button></button>
  </div>

<script>
$(function(){
	var $duration = 300,
			$button = $('#buttons2 button');

	/* var $buttons = document.getElementsByTagName('button');
	//$button[0],style.top = '-40'
	//$button[1],style.top = '0'
	//$button[2],style.top = '-40'
	//$button[3],style.top = '0'

	//i 0 = -40, i 1 = 0, i 2 = 40
	// for반복문
	for(var i = 0; i <= $button.length; i++){
		$button[i],style.top = i*40 - 40 + 'px';
	}*/

	var newTop =  idx* i*40 - 40 + 'px'
	$button.each(function(idx){ //button들 마다 할일
		console.log(idx); //idx 매개변수 넣어주면 순번찍어줌  0 1 2 3 4
		$(this).css({top:idx* i*40 - 40 + 'px'}) 
		// $(this).css({top:newTop}) 
	});
	


});
</script>
```