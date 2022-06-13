## 함수(Function)
<br/>

> 함수 (= Function)
-  함수는 실행 가능한 코드의 모음이다.<br/>
    컴퓨터가 수행할 수 있는 기본기능들을 조합해서 새로운 기능을 만드는 수단.

<br>

    a) 함수는 호출(=call)되어야만 실행된다.
    b) 함수를 여러번 호출하면 동일한 코드를 여러번 실행할 수 있다. (= 코드를 재사용)
    c) 함수는 호출될때마다 매번 새로운 실행흐름을 만든다.
    d) 함수를 호출할 때, 함수 내부에서 필요한 데이터를 외부에서 넣어줄 수 있다. (= 인자argument)
       함수가 실행을 마쳤을 때, 함수가 최종적으로 도출한 결과를 외부로 전달할 수 있다. (= 리턴값return value)

<br>

> 함수를 호출하는 방법

    함수이름();
    함수이름( 인자 );
    함수이름( 인자1, 인자2, 인자3 );
    var r = 함수이름();
  
    console.log( “효니” );
    var name = prompt( “이름을 입력하세요.” );
    parseInt()
    isNaN()
    숫자.toString()

> 함수를 만드는 방법

    * 인자도 없고, 리턴값도 없는 함수 *
    function 함수이름()
    {
      // 함수 내부에서 실행할 코드들;
    }
  
    * 인자가 있고, 리턴값은 없는 함수 *
    function 함수이름( 매개변수1, 매개변수2, 매개변수3, … )
    {
      // 함수 내부에서 실행할 코드들;
    }
  
    * 인자가 있고, 리턴값도 있는 함수 *
    function 함수이름( 매개변수1, … )
    {
      // 함수 내부에서 실행할 코드들;
      return 리턴값;
    }

```javascript
function sayHello() {
   console.log( "안녕하세요" );
 }
 sayHello();

 function sum1( num1, num2, num3 ) {
   console.log( num1+num2+num3 );
 }
 sum1( 5, 10, 20 );

 function sum2( n1, n2, n3 ) {
   return n1+n2+n3;
 }
 var result = sum2( 10, 30, 60 );
 console.log( result ); // 100
```
<br>

> 함수의 역할

  함수를 사용하면 알고리즘이 간결해진다.<br>
  프로그램의 세부기능을 분리하여 코드를 간략화하는데에 사용할 수 있다.<br>
  프로그램의 기능 조각을 “모듈(module)”이라고 부르는데,<br> 함수를 적절히 사용해서 큰 기능의 프로그램을 작은 단위의 모듈로 분리.<br>
  사람이 코드를 읽고 쓰고 수정하기가 용이해진다.

<br>

> 변수의 유효범위 (= scope)

  - 전역변수(global variable) : 함수 바깥에서 만들어진 변수 <br>
  - 지역변수(local variable)  : 함수 내부에서 만들어진 변수 <br>
   전역변수는 코드 어디에서나 사용가능한 변수인 반면, 지역변수는 변수가 만들어진 함수 내에서만 사용가능하다.<br>
  만일 전역변수와 같은 이름의 지역변수가 존재할 경우, 전역변수에는 접근할 수 없고 지역변수만 사용할 수 있다.

```javascript

 var r = 100; // 전역변수
 function fn() {
   var r = 1; //지역변수
   console.log( r ); // 1
 }
 fn();
 console.log( r ); //100
```

<br>

> 가변인자함수

-  받아들이는 인자의 갯수가 정해져있지 않은 함수. //ex. console.log(); <br>
  함수 내부에서 arguments 라는 변수를 사용할 수 있는데, <br> 
  이 변수에는 호출할 당시에 주어졌던 인자들이 배열로 들어있다.

```javascript
function sum3() {
   var result = 0; // 더한값을 담을 변수
   //i가 0부터 arguments.length까지 i가 하나씩 증가
   for(var i=0; i<arguments.length; i+=1) {
     //result = arguments i번째 숫자를 합산
     result += arguments[i];
   }
   return result;
 }
 //인자의 갯수에 구애받지 않음.
 var result = sum3( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );
 console.log( result );
```

<br>

> 함수를 변수에 대입하기

    var f = prompt;
    f();
  
    함수를 변수에 담으면, 변수이름을 마치 함수이름인것마냥 사용해서 호출할 수 있다.


<br>


> 익명함수(anonymous function)

```javascript
  function () {
    // 함수 내부에서 실행할 코드들
  }
```

<br>

1) 익명함수가 실행되는 경우 #1

```javascript
  // 변수에 함수를 담아 변수로 함수를 호출
  var f = function() {
  console.log(“asd”);
  }
  f();  
```  
<br>

2) 익명함수가 실행되는 경우 #2 : <br> Intermediately-Invoked Function Expression (IIFE)
- 전역변수를 만들고싶지 않을 때 사용하는 용법.

```javascript
  (function () {
      var animal = “강아지”;
      console.log( “우리집 “+animal+” 귀여움 ㅋㅋ” );
    })(); // 익명함수를 만든 자리에서 한번만 호출

  var animal = “강아지”;
  console.log( “우리집 “+animal+” 귀여움 ㅋㅋ” );
  
```

<br>
  
3) 익명함수가 실행되는 경우 #3
  
```javascript
  function fn( A ) {
  A();
  }

  fn( function() {
  console.log( “hello world” );
  } );
  // 이벤트리스너
  // 타이머

  setTimeout( function() {
  }, 1000 );

  document.getElementById(“asd”).addEventListener(“click”, function() {
  } );
```

  <br>

> 함수의 인자로 함수가 들어가는 경우의 예

  배열을 순회하는 경우

```javascript
 var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 // 일반적인 방법
 for(var i=0; i<arr.length; i+=1) {
   console.log( arr[i] );
 }

/*
배열이름.forEach()
배열이름.filter()
배열이름.map()
*/

 배열이름.forEach( function(el,idx) {
   console.log( idx+”번 인덱스에는 “+el+” 이 들어있다.” );
 } );

 var newArray = 배열이름.filter( function(el,idx) {
   return true;
   return false;
 } );

 var newArray = 배열이름.map( function(el,idx) {
   return [Something];
 } );

```

  <br>

> 함수의 리턴값으로 함수가 나오는 경우

 function fn() {
      return function() {
         console.log( “안녕하세요~~” );
      }
    }
    var r = fn();
    r();
  
    function getPoint() {
      var point = 70;
      return function() {
         console.log( “당신의 점수는 “+point+”점 입니다.” );
      }
    }
    var printPoint = getPoint();
    printPoint();
  
    지역변수를 이용하여 중요한 데이터를 보호하는 기법 => 클로저(closure)
  
  <br>

> 재귀함수 (recursive function/call)

- 함수가 내부에서 자기자신을 다시 호출하는 경우.<br>
    재귀호출은 같은 형태의 상황을 반복해서 해결하고자 하는 경우에 적용할 수 있는 프로그래밍 기법이다.<br>
    알고리즘 문제에서 자주 등장한다.