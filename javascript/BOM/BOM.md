## BOM (Browser Object Model)

<br>

> BOM (Browser Object Model)
 - 웹브라우저에는 전역 컨텍스트 객체가 존재하는데, 그 객체는 window 객체다. window객체를 이용하는 프로그래밍을 BOM 이라고 부른다.

<br>

      ========
      전역 컨텍스트 객체
      ========
      생략가능한

      alert(“하지 마세요”)
      prompt()
      confirm()
      isNaN()
      parseInt()
      parseFloat()

```javascript
  window["alert"]("dasd");
  window.alert("asd");
  alert("asdasd");
```
<br>

> window객체가 제공하는 다양한 기능들 #1
-  window.alert 함수 사용자에게 메시지를 보여주는 창을 띄운다.
  
-  window.confirm 함수 사용자로부터 진리값을 입력받는다.
  
-  window.prompt 함수 사용자로부터 문자열을 입력받는다.
  
-  window.location 객체 현재 웹브라우저가 열고있는 웹문서의 주소에 관한 기능을 제공하는 객체.
  
-  window.location.href 문자열 웹브라우저가 현재 열고있는 웹문서의 주소를 얻어내거나 또는 새로운 주소로 이동하게 한다.

```javascript
console.log( window.location.href );
location.href = 'http://naver.com';
```

- window.Math 객체 수학계산과 관련된 기능을 담고 있는 객체.
  
  - window.Math.abs 함수 인자로 주어진 수의 절대값을 구한다.

  - window.Math.floor 함수 인자로 주어진 실수에서 소수부를 버림하고 정수를 구한다.

  - window.Math.ceil 함수 인자로 주어진 실수에서 소수부를 올림하고 정수를 구한다.

  - window.Math.round 함수 인자로 주어진 실수에서 소수부를 반올림하고 정수를 구한다.

  - window.Math.random 함수 무작위값을 구한다. 구해지는 무작위값의 범위는 0 ~ 1 사이의 실수다.
  
  ```javascript
  //1000~2000 사이의 랜덤한 수 
  var min = 1000;
  var max = 2000;
  for(var i=0; i<10; i+=1) {
    console.log( parseInt(window.Math.random()*100000000000)%(max-min)+min );
    }
  ```


- <span style="color:green"> window.Date 함수 날짜와 시간에 관련된 기능을 제공하는 date객체를 생성하는 객체생성자함수. </span>

// date객체 생성하기
```javascript
var d1 = new window.Date() // 이 코드가 실행되 그 순간의 date객체 생성

var d2 = new window.Date(년,월,일,시,분,초); // 그 시점의 date객체 생성 (javascript에서는 0~11월까지 있다. )
```

// date객체 이용하기

    date객체.getFullYear() 해당 객체가 나타내는 순간의 년도를 4자리로 얻어낸다.

    date객체.getMonth() 해당 객체가 나타내는 순간의 월을 얻어낸다. (0~11)

    date객체.getDate() 해당 객체가 나타내는 순간의 일을 얻어낸다.

    date객체.getHours() 해당 객체가 나타내는 순간의 시각을 얻어낸다.

    date객체.getMinutes() 해당 객체가 나타내는 순간의 분을 얻어낸다.

    date객체.getSeconds() 해당 객체가 나타내는 순간의 초를 얻어낸다.

    date객체.getDay() 해당 객체가 나타내는 순간의 요일을 얻어낸다. (일요일=0, 토요일=6) // 요일이 숫자로 나옴

     date객체.getTime() 해당 객체가 나타내는 순간의 타임스탬프를 얻어낸다.
     타임스탬프란, 1970년 1월 1일 자정을 기준으로 해당 순간까지 경과한 총 밀리세컨드.
  

```javascript
var d1 = new window.Date()
console.log(d1)
//2022-06-13 13:48
console.log( d1.getFullYear() + "-" + ("0"+(d1.getMonth()+1)).slice(-2) + "-" + ("0"+d1.getDate()).slice(-2) + " " + ("0"+d1.getHours()).slice(-2) + ":" + ("0"+d1.getMinutes()).slice(-2) + ":" + ("0"+d1.getSeconds()).slice(-2) );

var d2 = new window.Date(2021, 11, 25, 0, 0, 0);
  console.log( "크리스마스까지 남은 시간은 ", (d2.getTime() - d1.getTime())/1000/60/60/24, "일 남았습니다." );
```


- window.innerWidth 숫자 웹브라우저에서 웹문서가 표시되는 영역의 넓이

- window.innerHeight 숫자 웹브라우저에서 웹문서가 표시되는 영역의 높이

<br>

> window객체가 제공하는 다양한 기능들 #2

- window.open() 새 웹브라우저 창을 연다.
- window.setTimeout() 일정시간이 경과한 뒤에 실행될 코드를 예약해둔다.
- window.clearTimeout() setTimeout으로 예약해두었던 코드의 실행을 취소한다.
- window.setInterval() 일정시간이 경과할때 마다 실행될 코드를 예약해둔다.
- window.clearInterval() setInterval로 예약해두었던 코드의 실행을 중단한다.

<br>

> 비동기 코드 (asynchronous code)

  자바스크립트 코드는 위에서 아래로 차례대로 실행된다.<br>
  그런데, 코드를 순서대로 실행하는게 아니고, 미래의 어느 시점에 실행될 코드를 웹브라우저에게 맡겨두는 경우가 있다.<br>
  비동기 코드 내부에서 비동기 코드 밖에서 만들어진 변수를 사용하는 경우,
  비동기 코드가 실행되는 시점이 미래의 어느 시점이라는 특성때문에 변수의 값이 내가 예측할 수 없게 변하는 현상이 있다.<br>
  이런 현상을 막기위해 비동기 코드를 맡기는 그 시점의 변수값을 미래에도 유지하는 방법이 let 키워드로 변수를 만드는 방법이다.

```javascript

// 비동기 코드
  console.log( 1 );
  setTimeout(function() {
    console.log( 2 );
  }, 3000);
  console.log( 3 );


 for( var i=1 ; i<=5 ; i+=1 ) {
    setTimeout(function() {
      console.log( i );
    }, i*1000);
  }
  비동기코드 사용시
  var로 변수를 만들게 되면 시간이 모두 경과한 상태의 값인 6을 console.log에 5번 찍어주게된다.


 for( let i=1 ; i<=5 ; i+=1 ) {
    setTimeout(function() {
      console.log( i );
    }, i*1000);
  }
  비동기코드 사용시
  let으로 변수를 만들게 되면 코드를 맡기는 그 시점에 변수값이 유지됨.
```

