> ||(OR)

```javascript
alert( false || false ); // false
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
```
> &&(AND)

```javascript
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```

```javascript
&&의 우선순위가 ||보다 높습니다.
AND 연산자 &&의 우선순위는 OR 연산자 ||보다 높습니다.

따라서 a && b || c && d는 (a && b) || (c && d)와 동일하게 동작합니다.
```




아래 표현식에서 어떤 alert가 실행될까요?

if(...) 안에 표현식이 있으면 어떤 일이 일어날까요?
```javascript
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
```
```javascrit
// -1 || 0 은 -1 이므로 truthy입니다.
// 따라서 alert가 실행됩니다.
if (-1 || 0) alert( 'first' );

// -1 && 0 은 0 이므로 falsy입니다.
// 따라서 alert가 실행되지 않습니다.
if (-1 && 0) alert( 'second' );

// 연산자 &&는 ||보다 우선순위가 높습니다.
// 따라서 -1 && 1 이 먼저 실행되어 아래와 같이 표현식이 순차적으로 바뀝니다.
// null || -1 && 1  ->  null || 1  ->  1
// 결과적으로 alert가 실행됩니다.
if (null || -1 && 1) alert( 'third' );
```
