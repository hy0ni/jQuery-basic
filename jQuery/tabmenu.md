> 탭메뉴 (높이적용)

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>탭메뉴</title>
    <link rel="stylesheet" href="./css/study3.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/study3.js"></script>
  </head>
  <body>
    <div class="contents">
      <dl class="tabMenu">
        <dt class="on">title</dt>
        <dd class="on">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </dd>
        <dt>title</dt>
        <dd>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </dd>
        <dt>title</dt>
        <dd>
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </dd>
      </dl>
      <div class="con1">
        <h2>title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </body>
</html>

```


```css
/* reset */
*{margin:0;top:0;}

/* layout */
.contents{width:900px;margin:0 auto;}
.tabMenu{position:relative;height:120px;border:5px solid aqua;}
.tabMenu > dt{float:left;height:30px;border:1px solid red;}
.tabMenu > dt.on{background:black;color:#fff;}
.tabMenu > dd{
  position:absolute;
  left:0;top:30px;border:1px solid red;
  opacity:0;
  pointer-events:none;
}
.tabMenu > dd.on{
  opacity:1;
  pointer-events:auto;
}
.con1{border:6px solid red;}

```


```javascript
$(document).ready(function(){

  $(".tabMenu > dt").click(function(){
    $(".tabMenu > dt").removeClass("on");
    $(this).addClass("on");
    $(".tabMenu > dd").removeClass("on");
    $(this).next().addClass("on");
    
    //높이적용
    var dtHeight = $(this).height();
    var ddHeight = $(this).next().height();
    var dlHeight = dtHeight + ddHeight;
    $(".tabMenu").height(dlHeight);

  });

});

```