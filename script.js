window.onscroll = function() {scrollFunction()};
window.scrollTo(0,0)
    document.getElementById("web_name").style.color ="#007294"
    document.getElementById("ele_1").style.color ="#007294"
    document.getElementById("ele_2").style.color ="#007294"
    document.getElementById("ele_3").style.color ="#007294"
    document.getElementById("ele_4").style.color ="#007294"
    document.getElementById("nav_mar").style.marginTop ="1.1rem"


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbarid").style.backgroundColor = "#007294"
    document.getElementById("web_name").style.color ="white"
    document.getElementById("ele_1").style.color ="white"
    document.getElementById("ele_2").style.color ="white"
    document.getElementById("ele_3").style.color ="white"
    document.getElementById("ele_4").style.color ="white"
    document.getElementById("ele_4").style.color ="white"
    document.getElementById("nav_mar").style.marginTop ="0rem"

  } else {
    document.getElementById("navbarid").style.backgroundColor = "transparent";
    document.getElementById("web_name").style.color ="#007294"
    document.getElementById("ele_1").style.color ="#007294"
    document.getElementById("ele_2").style.color ="#007294"
    document.getElementById("ele_3").style.color ="#007294"
    document.getElementById("ele_4").style.color ="#007294"
    document.getElementById("nav_mar").style.marginTop ="1.1rem"

  }
}

