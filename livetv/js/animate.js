function checkView(classSet, animationClass) {
  var winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  var winTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  var winBottom = winTop + winheight;

  var x = classSet;
  var i;
  for (i = 0; i < x.length; i++) {
    //alert(x.length);
    var elementHeight = x[i].offsetHeight + 500;
    var elementTop = x[i].offsetTop + 500;
    var elementBottom = elementTop + elementHeight;

    if (winTop >= elementTop && elementBottom <= winBottom) {
      x[i].classList.add(animationClass);
    } else {
      x[i].classList.remove(animationClass);
    }
  }
}

function checkViewX(classSet, animationClass) {
  var winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  var winTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  var winBottom = winTop + winheight;

  var x = classSet;
  var i;
  for (i = 0; i < x.length; i++) {
    //alert(x.length);
    var elementHeight = x[i].offsetHeight;
    var elementTop = x[i].offsetTop - 500;
    var elementBottom = elementTop + elementHeight;

    if (winTop >= elementTop && elementBottom <= winBottom) {
      x[i].classList.add(animationClass);
    } else {
      x[i].classList.remove(animationClass);
    }
  }
}

function checkViewY(classSet, animationClass) {
  var winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  var winTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  var winBottom = winTop + winheight;

  var x = classSet;
  var i;
  for (i = 0; i < x.length; i++) {
    //alert(x.length);
    var elementHeight = x[i].offsetHeight - 300;
    var elementTop = x[i].offsetTop - 300;
    var elementBottom = elementTop + elementHeight;

    if (winTop >= elementTop && elementBottom <= winBottom) {
      x[i].classList.add(animationClass);
    } else {
      x[i].classList.remove(animationClass);
    }
  }
}

var animateLeft = document.querySelectorAll(".animateLeft");
var slideInleft = "slideInLeft";

var animateRight = document.querySelectorAll(".animateRight");
var slideInRight = "slideInRight";

var animateUp = document.querySelectorAll(".animateUp");
var animateDown = document.querySelectorAll(".animateDown");
var upDown = "upDown";

var animateLeftY = document.querySelectorAll(".animateLeftY");
var animateRightY = document.querySelectorAll(".animateRightY");

window.onscroll = function() {
  checkView(animateLeft, slideInleft);
  checkView(animateRight, slideInRight);
  checkViewX(animateUp, upDown);
  checkViewX(animateDown, upDown);
  checkViewY(animateLeftY, slideInleft);
  checkViewY(animateRightY, slideInRight);

  var topOffset = document.body.scrollTop;
  if (topOffset > 500) {
    /*document.getElementById("scrollTopBtn").style.display = "block";
    document.getElementById("scrollTopBtn").addEventListener(
      "click",
      function() {
        window.scrollTop = 0;
      },
      false
    );
  } else {
    document.getElementById("scrollTopBtn").style.display = "none";
  }*/
  }
};
