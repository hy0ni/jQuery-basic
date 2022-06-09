 /*
    console.log( NaN == NaN ); // false
    console.log( isNaN(NaN) ); // true
    */

    /*
    var answer = confirm("계속 진행하시겠습니까?");
    console.log( answer );
    */

    /*
    var name = prompt("이름을 입력하세요.");
    if( name == "조인성" )
      console.log( "배우입니다." );
    else if( name == "이세돌" )
      console.log( "바둑기사입니다." );
    else if( name == "아이유" )
      console.log( "가수입니다." );
    else
      console.log( "직업을 알 수 없습니다." );
    */


    /*
    var name = prompt("이름을 입력하세요.");
    switch( name )
    {
    case "조인성":
      console.log( "배우입니다." );
      break;

    case "이세돌":
      console.log( "바둑기사입니다." );
      break;

    case "아이유":
      console.log( "가수입니다." );
      break;

    default:
      console.log( "직업을 알 수 없습니다." );
      break;
    }
    */


    /*
    var count = 0; // 루프의 반복횟수를 셀 변수
    while( count < 5 )
    {
      console.log( "안녕하세요" );
      count += 1;
    }
    console.log( count ); // 5
    */


    /*
    var count = 0;
    for( ; ; )
    {
      console.log( "반갑습니다." );
      count += 1;
      if( count == 7 ) {
        break;
      }
    }
    console.log( count );
    */



    /*
    console.log("효니님 안녕하세요");
    console.log("효니님 안녕하세요.");
    try {
      console.Log("효니님 반갑습니다.");
    }
    catch(e) {
      console.log("어.. 인사해야되는데.. 오류네?");
    }
    console.log("효니님 안녕하세요.");
    console.log("효니님 반갑습니다.");
    */



    /*
    console.log( typeof 15 ); // "number"
    console.log( typeof "효니" ); // "string"
    console.log( typeof undefined ); // "undefined"
    console.log( typeof false ); // "boolean"
    */

    // console.log( ("효니"=="예쁘다") ? "진실" : "거짓" );



    /*///////////////// 문제 풀이 //////////////////////*/
    /*
    var str = prompt("계산할 수식을 입력하세요.");
    var opPos, op;
    // 연산자의 위치를 찾는다.
    opPos = str.indexOf("+");
    if(opPos==-1) opPos = str.indexOf("-");
    if(opPos==-1) opPos = str.indexOf("*");
    if(opPos==-1) opPos = str.indexOf("/");
    // 연산자를 찾는다.
    op = str.substr(opPos, 1);
    // 앞숫자와 뒷숫자를 찾는다.
    var num1, num2;
    num1 = parseInt(str.substr(0, opPos));
    num2 = parseInt(str.slice(opPos+1));
    // 연산자에 따라서 계산을 수행한다.
    switch( op ) {
    case "+":
      console.log( num1+" + "+num2+" = "+(num1+num2) );
      break;
    case "-":
      console.log( num1+" - "+num2+" = "+(num1-num2) );
      break;
    case "*":
      console.log( num1+" * "+num2+" = "+(num1*num2) );
      break;
    case "/":
      console.log( num1+" / "+num2+" = "+(num1/num2) );
      break;
    }
    */


    /*
    var num = prompt("콤마를 찍어 출력할 숫자를 입력하세요.");
    var result = "", count = 0;
    for(var i=num.length-1; i>=0; i-=1) {
      result = num.substr(i,1) + result;
      count += 1;
      if( count % 3 == 0 && i!=0 ) {
        result = "," + result;
      }
    }
    console.log( result );
    */


    /*
    var k;
    do {
      k = prompt("별을 출력할 행 수를 입력하세요.");
    } while( isNaN(parseInt(k)) || parseInt(k)<=0 );
    for(var i=0; i<k; i+=1) {
      var str = "";
      // 앞공백
      for(var n=0; n<(k-i-1); n+=1) {
        str += " ";
      }
      // 별
      str += "*";
      // 중간공백
      for(var n=0; n<(i*2-1); n+=1) {
        str += " ";
      }
      // 별
      if(i) {
        str += "*";
      }
      console.log( str );
    }


      *      // i=0  앞공백=(k-i-1)=3   별=1     중간공백=(i*2-1)=-1 = 0      별=0
      * *     // i=1  앞공백=(k-i-1)=2   별=1     중간공백=(i*2-1)=1           별=1
     *   *    // i=2  앞공백=(k-i-1)=1   별=1     중간공백=(i*2-1)=3           별=1
    *     *   // i=3  앞공백=(k-i-1)=0   별=1     중간공백=(i*2-1)=5           별=1
    */


