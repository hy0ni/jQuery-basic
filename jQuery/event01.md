jquery이벤트



<br>



<span style="display:inline-block;background:linear-gradient(to top, #E6F8E0 50%, transparent 40%"> 실행 시점 제어하기(자주 사용하는 실행 시점)</span>
<ul style="font-size:14px;color:#222;">
  <li>특정 요소에 마우스 포인터를 올려놓는 시점</li>
  <li>특정 요소에서 마우스 포인터가 벗어나는 시점</li>
  <li>특정요소를 클릭하는 시점</li>
  <li>마우스를 움직이는 시점</li>
  <li>창 크기가 바뀌는 시점</li>
  <li>스크롤 시점</li>
</ul>

```jquery

//실행 지점 제어 - event종류 
  // mouseover 요소 위에 마우스가 올라왔을 때 
  // mouseout 요소 밖으로 마우스가 나가면
  // on메서드

  // $('선택자').on('이벤트 종류','할일');
  $(function(){
    

    // $('h1').on('mouseover',function(){   
    //   $('h1').css({background:"green"});
    // });
    // $('h1').on('mouseout',function(){
    //   $('h1').css({background:"#333"});
    // });


    //체인 메서드 : 메서드를 체인처럼 연결해서 작성하고 실행하는 프로그램 방법
    //구문) $('선택자').메서드 A().메서드 B().메서드 C(),
    // $('h1').on('mouseover',function(){   
    //   $('h1').css({background:"green"});
    // })
    // .on('mouseout',function(){
    //   $('h1').css({background:"#333"});
    // });

      //on메서드 생략
    // $('h1').mouseover(function(){   
    //   $('h1').css({background:"green"});
    // })
    // .mouseout(function(){
    //   $('h1').css({background:"#333"});
    // });

      //this 이벤트가 일어난 그 요소. 
    $('h1, h6').mouseover(function(){   
      $(this).css({background:"green"});
    })
    .mouseout(function(){
      $(this).css({background:"white"});
    });

  })
  
```