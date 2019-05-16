function menuCtrlMbl(ID) {
  var ul_id = ID;
  var dropdownMega = document.querySelectorAll(".mega-menu-mbl");
  var i;
  var status;
  for (i = 0; i < dropdownMega.length; i++) {
    if (dropdownMega[i].getAttribute("data-id") == ul_id) {
      var curState = window
        .getComputedStyle(dropdownMega[i], null)
        .getPropertyValue("display");
      if (curState === "block") {
        dropdownMega[i].style.display = "none";
        status = 0;
      } else {
        dropdownMega[i].style.display = "block";
        status = 1;
      }
    } else {
      dropdownMega[i].style.display = "none";
    }
  }
  return status;
}

var mblMenuArea = document.querySelector(".mobile-menu-box");
mblMenuArea.addEventListener(
  "click",
  function(e) {
    e.preventDefault();
    var status;
    if (
      (e.target && e.target.matches("a.menu-parent-mbl")) ||
      (e.target && e.target.matches("span.menu-parent-mbl")) ||
      (e.target && e.target.matches("i.menu-parent-mbl"))
    ) {
      console.log(e.target);
      var menuID = e.target.getAttribute("data-id");
      status = menuCtrlMbl(menuID);
    } else if (
      (e.target && e.target.matches("div")) ||
      (e.target && e.target.matches("i.fa")) ||
      (e.target && e.target.matches("p")) ||
      (e.target && e.target.matches("h4")) ||
      (e.target && e.target.matches("ul.dropdown")) ||
      (e.target && e.target.matches("li"))
    ) {
    } else {
      var link = e.target.getAttribute("href");
      console.log(link);
      window.location.replace(link);
    }
  },
  false
);

function mbl_menu_ctrl() {
  var mbl_menu = document.getElementById("menu-box");
  var curState = window
    .getComputedStyle(mbl_menu, null)
    .getPropertyValue("display");

  if (curState === "none") {
    mbl_menu.style.display = "block";
  } else {
    mbl_menu.style.display = "none";
  }
}

document.getElementById("mbl-menu-ctrl").addEventListener(
  "click",
  function() {
    //alert('working');
    mbl_menu_ctrl();
  },
  false
);
