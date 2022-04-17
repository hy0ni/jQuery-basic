FAQ 토글 메뉴(아코디언)



<br>




```html
<!DOCTYPE html>
  <html lang="ko">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ 토글 메뉴(아코디언)</title>
  </head>
  <body>
    <div id="wrap">
      <dl>
        <dt>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </dt>
        <dd> eveniet laborum magni voluptas voluptates! Nobis molestiae .</dd>

        <dt>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </dt>
        <dd> eveniet laborum magni voluptas voluptates! Nobis molestiae s.</dd>

        <dt>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </dt>
        <dd> eveniet laborum magni voluptas voluptates! Nobis molestiae bus.</dd>

        <dt>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </dt>
        <dd> eveniet laborum magni voluptas voluptates! Nobis molestiae .</dd>

        <dt>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </dt>
        <dd> eveniet laborum magni voluptas voluptates! Nobis molesti.</dd>
      </dl>
    </div>
  </body>
</html>
```
<br>

```css
 * {
    margin: 0;
    padding: 0;
  }

  #wrap {
    width: 40%;
    height: 300px;
    margin: 100px auto;
  }

  dl {
    width: 100%;
    height: 100%;

  }

  dt {
    width: 100%;
    height: calc(100% / 5);
    border: 1px solid #fff;
    box-sizing: border-box;
    text-align: center;
    line-height: 60px;
    font-weight: bold;
    background-color: burlywood;
    color: #fff;
    cursor: pointer;
  }

  #wrap dt.on {
    background-color: rgb(35, 169, 169);
  }

  dd {
    width: 100%;
    height: 80px;
    display: none;
    background-color: beige;
    text-align: center;
    line-height: 80px;
  }
```
<br>

```jquery

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
  
  $(function () {

    var $wrap = $('#wrap'),
      $btns = $wrap.find('dt'),
      $boxs = $wrap.find('dd');

    $btns.click(function () {
      var isOn = $(this).hasClass('on');

      $btns.removeClass('on');
      $boxs.slideUp();

      if (isOn) {
        // on클래스가 있다면
        $(this).removeClass('on');
        $(this).next('dd').slideUp();
        // return
      } else {
        // on클래스가 없다면
        $(this).addClass('on');
        $(this).next('dd').slideDown();
        // return
      }
    });

  });

</script>
```