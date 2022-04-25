> 생성자 함수



함수의 첫 글자는 대문자
new와 함께 호출



```javascript

function Member(name) {
  this.name = name;
  this.age = 29;
}

let member = new Member("Jin");

alert(member.name); // Jin
alert(member.age); // 29

```


```javascript

function Member(name) {
  // this = {}; 빈 객체가 임시로 만들어진다.
  
  // 새로운 프로퍼티를 this에 추가한다.
  this.name = name;
  this.age = 29;
  
  // return this; this가 임시로 반환된다.
}

let member = new Member("Jin"); // 아래 코드와 같다.
// let member = {
//   name: 'Jin',
//   age: 29
// };

alert(member.name); // Jin
alert(member.age); // 29

```


재사용할 목적이 아니라면 new Member(...); 대신 new function(){...} 을 사용할 수 있다.


```javascript

let member = new function() {
  this.name = 'Jin',
  this.age = 29
}

alert(member.name); // Jin
alert(member.age) // 29

```


일반적인 생성자 함수는 return문이 없다. 반환할 값은 모두 this에 저장되고, this는 자동으로 반환되기 때문이다.
그럼에도 return문을 사용하면 아래와 같은 결과가 나온다.

```javascript

function Member() {
  this.name = "Jin";
  return {name: "bad Guy"};
}

alert( new Member().name );  // bad Guy

```

return문에 아무것도 반환하지 않으면 다음과 같다.


```javascript

function Member() {
  this.name = "Jin";
  return;
}

alert( new Member().name );  // Jin

```
그러므로 대부분의 경우 return을 작성할 필요가 없다.
