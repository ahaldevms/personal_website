window.onscroll = function() {scrollFunction()};
window.scrollTo(0,0)
    document.getElementById("web_name").style.color ="#00a271"
    document.getElementById("ele_1").style.color ="#00a271"
    document.getElementById("ele_2").style.color ="#00a271"
    document.getElementById("ele_3").style.color ="#00a271"
    document.getElementById("ele_4").style.color ="#00a271"
    document.getElementById("nav_mar").style.marginTop ="1.2rem"

    
    
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbarid").style.backgroundColor = "#00a271"
    document.getElementById("web_name").style.color ="white"
    document.getElementById("ele_1").style.color ="white"
    document.getElementById("ele_2").style.color ="white"
    document.getElementById("ele_3").style.color ="white"
    document.getElementById("ele_4").style.color ="white"
    document.getElementById("ele_4").style.color ="white"
    document.getElementById("nav_mar").style.marginTop ="0rem"

  } else {
    document.getElementById("navbarid").style.backgroundColor = "transparent";
    document.getElementById("web_name").style.color ="#00a271"
    document.getElementById("ele_1").style.color ="#00a271"
    document.getElementById("ele_2").style.color ="#00a271"
    document.getElementById("ele_3").style.color ="#00a271"
    document.getElementById("ele_4").style.color ="#00a271"
    document.getElementById("nav_mar").style.marginTop ="1.2rem"

  }
}

function card_1_o(){
  document.getElementById("card_1").style.scale="1.06"
  document.getElementById("card_1_bg").style.background="#00a271"
  document.getElementById("card_1_ico").style.color="white"
  document.getElementById("card_1_but").style.backgroundColor="white"
  document.getElementById("card_1_but").style.color="#00a271"
  
}
function card_1_l(){
  document.getElementById("card_1").style.scale="1"
  document.getElementById("card_1_bg").style.background="#2e2e2e"
  document.getElementById("card_1_ico").style.color="#00a271"
  document.getElementById("card_1_but").style.backgroundColor="#00a271"
  document.getElementById("card_1_but").style.color="white"
  
  
}

function card_2_o(){
  document.getElementById("card_2").style.scale="1.06"
  document.getElementById("card_2_bg").style.background="#00a271"
  document.getElementById("card_2_ico").style.color="white"
  document.getElementById("card_2_but").style.backgroundColor="white"
  document.getElementById("card_2_but").style.color="#00a271"
  
}
function card_2_l(){
  document.getElementById("card_2").style.scale="1"
  document.getElementById("card_2_bg").style.background="#2e2e2e"
  document.getElementById("card_2_ico").style.color="#00a271"
  document.getElementById("card_2_but").style.backgroundColor="#00a271"
  document.getElementById("card_2_but").style.color="white"
  
  
}

function card_3_o(){
  document.getElementById("card_3").style.scale="1.06"
  document.getElementById("card_3_bg").style.background="#00a271"
  document.getElementById("card_3_ico").style.color="white"
  document.getElementById("card_3_but").style.backgroundColor="white"
  document.getElementById("card_3_but").style.color="#00a271"
  
}
function card_3_l(){
  document.getElementById("card_3").style.scale="1"
  document.getElementById("card_3_bg").style.background="#2e2e2e"
  document.getElementById("card_3_ico").style.color="#00a271"
  document.getElementById("card_3_but").style.backgroundColor="#00a271"
  document.getElementById("card_3_but").style.color="white"
  
  
}


const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Web Desinger";
            }, 4000);
            setTimeout(() => {
                text.textContent = "video Editor";
            }, 8000); //1s = 1000 milliseconds
            setTimeout(() => {
                text.textContent = "photo Editor";
            }, 12000); //1s = 1000 milliseconds
            
        }

        textLoad();
        setInterval(textLoad, 16000);
