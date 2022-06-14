## DOM (Document Object Model)

<br>

> DOM (Document Object Model)

- 자바스크립트로 웹문서의 내용을 조작하는 행위.
  window.document 를 사용해서 이뤄진다.

<br>

> 노드객체 (Node object)

- 노드객체는 자바스크립트에서 HTML 태그 하나에 대응하는 개념이고, HTML태그를 추상화한 자바스크립트상의 객체다.

<br>

##### 노드객체 만들기 #1

- 새로운 태그를 만들면서 노드객체를 생성하는 방법

```javascript
  var div = window.document.createElement(“div”); 
  // 노드를 생성은 했지만 아직 메모리에만 있는 상태다.
```

```javascript
var div = window.document.createElement("div");
// 메모리에 div태그를 하나 생성


- 메모리에 존재하는 노드객체를 웹문서에 붙여넣기
  부모노드.append( 자식노드 );

document.getElementsByTagName("body")[0].append( div ); // 메모리에 존재하던 div태그를 body태그의 하위에 붙여넣는다.
```

<br>

##### 노드객체 만들기 #2

- 기존에 문서에 존재하는 태그를 찾아 노드객체로 얻어내는 방법

```javascript
  window.document.getElementById( ID속성값 ); // 노드객체를 1개 얻어내는 방법
  window.document.getElementsByTagName( 태그이름 ); // 노드객체가 들어있는 배열형태의 결과를 도출
  window.document.querySelector( CSS셀렉터문자열 ); // 노드객체를 1개 얻어내는 방법
  window.document.querySelectorAll( CSS셀렉터문자열 ); // 노드객체가 들어있는 배열형태의 결과를 도출
```

<br>

##### 노드 조작하기

```javascript

노드객체.tagName // 태그이름
노드객체.id // ID속성값
노드객체.className // class속성값
노드객체.style // style속성값 *객체
노드객체.parentNode // 부모노드
노드객체.childNodes // 자식노드를 담은 배열
노드객체.innerHTML // 노드 내부의 HTML 내용을 담은 문자열
노드객체.innerText // 노드 내부의 텍스트 내용을 담은 문자열

노드객체.getAttribute( name ) // HTML태그 속성중에 name속성의 값을 얻어낸다.
노드객체.setAttribute( name, value ) // HTML태그 속성중에 name속성의 값을 value로 설정한다.
노드객체.removeAttribute( name ) // HTML태그 속성중에 name속성을 제거한다.
노드객체.insertBefore( new노드, old노드 ) // 노드객체의 자식노드 중에서 old노드의 바로 위에 new노드가 위치하도록 재배열한다.
```

```Html
<h1 id="intro" class="line" style="font-weight:bold;" data-asdasd="zxczxc">안녕하세요</h1>

<ul>
  <li>짜장면</li>
  <li id="c1">짬뽕</li>
  <li id="c2">탕수육</li>
</ul>
```
```javascript
document.getElementById("intro").setAttribute("data-asdasd", "12345");
console.log( document.getElementById("intro").getAttribute("data-asdasd") );


var p = document.getElementsByTagName("ul")[0];
  var c1 = document.getElementById("c1"); // 짬뽕
  var c2 = document.getElementById("c2"); // 탕수육
  p.insertBefore( c2, c1 ); 
/*
<ul>
  <li>짜장면</li>
  <li id="c2">탕수육</li> //new노드
  <li id="c1">짬뽕</li> //old노드
</ul>
*/

```

<br>

> 스타일
- 대쉬(-)가 포함된 스타일속성명은 대쉬를 제거하고 그 다음 글자를 대문자로 표기하는 카멜케이스로 작성해야 한다.

```javascript
노드객체.style.스타일속성 = 값;
c1.style.backgroundColor = "#efefef"; //background-color -> backgroundColor(카멜표기법)
```

<br>

> 이벤트 (event) //객체

- 이벤트는, 노드나 웹브라우저 자체에 변화가 발생했을 때 웹브라우저가 생성해주는 객체다.

```javascript
a) 노드에 마우스 조작이 가해졌을 때: click, mouse down, mouse, dblclick, mouseenter, mouseleave, mousemove, …
b) 노드에 키보드 조작이 가해졌을 때: keydown, keyup, …
c) 웹문서에 변화가 생겼을 때: change, error, submit, …
d) 웹브라우저에 변화가 생겼을 때: load, resize, scroll, …
```

<br>

> 이벤트리스너(event listener)

- 함수인데, 이벤트객체가 생성되었을 때 자동으로 실행되는 함수를 말한다.
  
- 이벤트리스너 함수는 프로그래머가 만들지만 호출은 프로그래머가 하는게 아니고 웹브라우저에 의해 자동으로 호출된다.
  
- 프로그래머가 할 수 있는 일은, 이벤트리스너 함수를 만든 뒤에 웹브라우저에게 이벤트객체가 생성되었을 때 이 함수를 호출해달라고 맡기는 행동을 할 수 있다.
  
  - 이벤트객체에 이벤트리스너함수를 바인드하는 방법은 노드객체의 addEventListener() 메써드를 사용한다.

- 이벤트는, 자바스크립트 코드를 “특정 시점에” 실행할 수 있는 방법이다.

  - 코드를 읽을 때에는 이벤트를 “~~~했을 때” 라고 읽는게 자연스럽다.

```javascript
document.getElementById("intro").addEventListener("click", function(ev) { // 이벤트리스너함수는 프로그래머가 호출할 필요가 없으므로 보통 익명함수로 만든다.
    console.log( "h1 태그가 클릭되었음" );
    console.log( ev );
  });

  document.addEventListener("keydown", function(ev) {
  console.log( ev );
  })
```
> 이벤트리스너 함수 안에서 이벤트 객체를 사용하기
  
- 이벤트리스너 함수의 인자로 주어지는 이벤트 객체를 다양하게 활용할 수 있다.

```javascript
document.getElementById("intro").addEventListener("click", function(ev) { 
    console.log( ev );
  });

이벤트객체.type // 발생한 이벤트객체의 이름
이벤트객체.target // 이벤트를 발생시킨 노드객체

a) 마우스 이벤트객체
  이벤트객체.screenX / screenY // 화면의 최좌상단점을 원점으로 한 마우스커서의 좌표
  이벤트객체.clientX / clientY // 웹문서가 표시되는 영역을 원점으로 한 마우스커서의 좌표
  이벤트객체.offsetX / offsetY // 타겟노드객체가 차지하는 영역을 원점으로 한 마우스커서의 좌표
```

```javascript
document.addEventListener("keydown", function(ev) {
    console.log( ev );
  })
  
b) 키보드 이벤트객체
이벤트객체.keyCode // 눌린 키가 무엇인지에 대한 정보
```
     
<br>

> 이벤트 버블링 현상
- HTML문서는 부모-자식관계에 있는 태그들이 한 좌표에  겹쳐보이기 때문에,
  특정 좌표를 클릭한 경우 자식노드 뿐만 아니라 부모노드에도 이벤트가 전파된다.<br>
  이러한 현상을 이벤트 버블링 현상이라고 말한다.<br>
  이벤트 버블링 현상을 막고자 할 때에는
  이벤트객체.stopPropagation() 함수를 호출하면 이벤트 버블링이 중단된다.


```html
 <ul>
    <li id="c1" data-price="5000">짜장면</li>
    <li id="c2">짬뽕</li>
    <li id="c3">탕수육</li>
  </ul>
```
```javascript
 document.getElementById("c1").addEventListener("click", function(ev) {
      console.log( "LI태그가 클릭되었음" );
    })
// #c1태그를 클릭했을때 부모태그ul 그위에 부모태그 body까지 클릭되는 현상

document.getElementsByTagName("ul")[0].addEventListener("click", function() {
  console.log( "UL태그가 클릭되었음" );
})
document.addEventListener("click", function() {
  console.log( "BODY태그가 클릭되었음" );
})

// LI태그가 클릭되었음
// UL태그가 클릭되었음
// BODY태그가 클릭되었음


document.getElementById("c1").addEventListener("click", function(ev) {
  console.log( "LI태그가 클릭되었음" );
})
document.getElementsByTagName("ul")[0].addEventListener("click", function(ev) {
  ev.stopPropagation();
  console.log( "UL태그가 클릭되었음" );
})

// LI태그가 클릭되었음
// UL태그가 클릭되었음

//  이벤트객체.stopPropagation() 함수를 호출하면 이벤트 버블링이 중단된다.

//
```

<br>

> HTML태그의 기본동작을 막기

```html
<a> -> location.href 가 변경
<input type=“submit”> -> location.href 가 변경
```

 HTML태그중에 기본동작을 내재하고 있는 태그에 대하여 그 기본동작을 취소할 수 있는 방법이 있는데<br>
    이벤트객체.preventDefault() 함수를 호출하면 태그의 기본동작을 막을 수 있다.

```javascript
 document.getElementsByTagName("a")[0].addEventListener("click", function(ev) {
    if( confirm("정말 네이버로 가시겠습니까?") ) { }
    else {
      ev.preventDefault();
    }
  })
```