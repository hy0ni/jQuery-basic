> 배열

 ```javascript
 const target = ['a', 'b', 'c', 'd', 'e'];
  arr[arr.length - 1] // 배열의 마지막 요소
  target[5] = 'f' // 요소 추가하기
  console.log(target);
  
  배열 마지막에 추가하기 target[target.length] = '바'
  
  배열 요소 수정하기 target[0] = '가' a->가

  target.pop(); 배열 마지막 요소 제거
  target.push(); 배열 마지막 요소 추가

  target.shift(); 배열 첫번째 요소 제거
  target.unshift(); 배열 첫번째 요소 추가
```

```javascript
  //배열에 특정 요소가 있는지 찾기(일종의 검색 기능)includes
    includes에 주어진 값이 배열 내부에 존재하면 true / 존재하지 않으면 false
      const target = ['가', '나', '다', '라', '마'];
      const result = target.includes('다'); // true
      const result2 = target.includes('카'); //false
      console.log(result2) 
```

```javascript
  //검색하고 싶은 값이 몇 번째 인덱스에 위치하는지 확인하기 indexOf / lastIndexOf
   const target = ['라','나','다','라','다'];
   const result = target.indexOf('다');// 앞에서 부터 찾음
   const result2 = target.lastIndexOf('라'); //뒤에서 부터 찾음
   const result3 = target.indexOf('가') // 요소가 없으면 -1 나옴
```

```javascript
 // 배열 반복하기
    const target = ['가', '나', '다', '라', '마']; //'가나다라마'문자열도 동일
    let i = 0;
    while (i < target.length) {
      console.log(target[i]); // 첫 요소부터 마지막 요소까지 console.log
      i++;
    }
    for (let i = 0; i < target.length; i++) {
      console.log(target[i]);
    }
```

```javascript
const target = ['가', '나', '다', '라', '마'];
target.splice(2,2); // 인덱스 2부터 2개를 지우겠다는 의미
// => ['가','나','마']

//숫자를 하나만 넣는 경우 // 해당 인덱스부터 끝까지 모든 요소를 제거하겠다는 의미
target.splice(1);
// => ['가']

//지워진 자리게 다른 값 넣기
target.splice(1,3,'타','파');
// => ['가','타','파','마']

//지우지 않고 요소 추가하기 //'나'와'다'사이에 '파'추가하기
target.splice(2,0,'파');
```

```javascript
 //'라' 제거하기 .indexOf .splice 이용해서
  const arr = ['가', '라', '다', '라', '마', '라'];
    // arr.indexOf('라')
    // arr.splice(1, 1);
    // arr.indexOf('라')
    // arr.splice(2, 1);
    // arr.indexOf('라')
    // arr.splice(3, 1);
     let index = arr.indexOf('라');
    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf('라');
    }
    // => ['가','다','마']
```