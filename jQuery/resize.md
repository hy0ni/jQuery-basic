```javascript
$(function(){

    - 브라우저를 리사이즈할 떄마다 현재 브라우저의 넓이값을 구해서
    - 만약 브라우저 폭이 540보다 작아지면 body의 배경색을 orange로 적용
    - 만약 브라우저 폭이 540보다 같거나 크고 1180보다 작으면 배경색을 pink로 적용
    - 1180보다 같거나 크면 배경색을 voilet적용

    1.$(window)
    2.$("body")
    3. "resize"
   

    $(window).on("resize", function () {
        var wid = $(this).width();

        if (wid < 540) {
            $("body").css({ backgroundColor: "orange" });
        }
        if (wid >= 540 && wid < 1180) {
            $("body").css({ backgroundColor: "pink" });
        }
        if (wid >= 1180) {
            $("body").css({ backgroundColor: "violet" });
        }
    })
});

```
