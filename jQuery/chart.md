> circle-text-progress

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>circle-text-progress</title>
</head>
<link rel="stylesheet" href="./css/style.css">
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<body>
  <div class="chart">
    <div class="Lmskout">
      <div class="Lmskin">
        <div class="Lcbody"></div>
      </div>
    </div>

    <div class="Rmskout">
      <div class="Rmskin">
        <div class="Rcbody"></div>
      </div>
    </div>

    <div class="ccont">
      <p class="text">
        AI<br><span class="pnum">80</span><span class="psymb">%</span>
      </p>
    </div>
  </div>

  <div class="chart">
    <div class="Lmskout">
      <div class="Lmskin">
        <div class="Lcbody"></div>
      </div>
    </div>

    <div class="Rmskout">
      <div class="Rmskin">
        <div class="Rcbody"></div>
      </div>
    </div>

    <div class="ccont">
      <p class="text">
        CSS<br><span class="pnum">90%</span><span class="psymb">%</span>
      </p>
    </div>
  </div>
</body>

</html>
```

```css
*{margin:0;padding:0;}
/*스킬퍼센티올라가는 곳*/
.chart{float:left;position:relative;top:35px;margin:10px;width:120px;height:120px;}

.chart .Lmskout{overflow:hidden;position:absolute;left:0;width:60px;height:120px;}/* 보이는 부분 */
.chart .Rmskout{overflow:hidden;position:absolute;right:0;width:60px;height:120px;}

.Lmskout .Lmskin{overflow:hidden;position:absolute;left:100%;width:60px;height:120px; /* 회전하는 부분 */
  -webkit-transform-origin:0 50%;
            transform-origin:0 50%;}


.Rmskout .Rmskin{overflow:hidden;position:absolute;right:100%;width:60px;height:120px;
    -webkit-transform-origin:100% 50%;
            transform-origin:100% 50%;
}


.Lmskin .Lcbody{border-radius:50%;position:absolute;right:0;width:120px;height:120px;background:orange;}
.Rmskin .Rcbody{border-radius:50%;position:absolute;left:0;width:120px;height:120px;background:orange;}


.chart .ccont{position:absolute;left:50%;top:50%;margin-left:-50px;margin-top:-50px;width:100px;height:100px;
    background-color:skyblue;border-radius:50%;
    text-align: center;box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    /* -webkit-backface-visibility: hidden; */
    /* display:none; */
  }

.text {
  top: 6px;
  color: orange;
  text-align: center;
  line-height: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.pnum{font-size:25px;font-weight:bold;}
.psymb{font-size:15px;}

```

```javascript
<script>
  $(document).ready(function () {
    function chartAni() {
      // 원형 차트 당 처리
      $('.chart').each(function () {
        var $chart = $(this),
          // "마스크"를 저장하고 각도 0으로 지정
          $cLeft = $chart.find('.Lmskin').css({ transform: 'rotate(0)' }),
          $cRight = $chart.find('.Rmskin').css({ transform: 'rotate(0)' }),
          // 백분율 값을 취득
          $pNumber = $chart.find('.pnum'),
          pData = $pNumber.text();

        // 백분율 표시를 일단 0
        $pNumber.text(0);

        // 각도 애니메이션
        $({ percent: 0 }).animate({ percent: pData }, {
          duration: 2000, //animate 옵션 duration,progress
          progress: function () {
            var now = this.percent;
            deg = now * 360 / 100;
            degRight = Math.min(Math.max(deg, 0), 180);
            console.log(degRight)
            degLeft = Math.min(Math.max(deg - 180, 0), 180);
            $cRight.css({ transform: 'rotate(' + degRight + 'deg)' });
            $cLeft.css({ transform: 'rotate(' + degLeft + 'deg)' });
            $pNumber.text(Math.floor(now));
          }
        });
      });
    }
    chartAni();
  });

</script>

```