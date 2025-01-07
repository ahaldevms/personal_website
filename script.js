window.onscroll = function() {scrollFunction()};
window.scrollTo(0,0)
    document.getElementById("web_name").style.color ="#00a271"
    document.getElementById("ele_1").style.color ="#00a271"
    document.getElementById("ele_2").style.color ="#00a271"
    document.getElementById("ele_3").style.color ="#00a271"
    document.getElementById("ele_4").style.color ="#00a271"
    document.getElementById("nav_mar").style.marginTop ="1.2rem"
    document.getElementById("ele_5").style.color ="#00a271"
    

    
    
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbarid").style.backgroundColor = "#00a271"
    document.getElementById("web_name").style.color ="white"
    document.getElementById("ele_1").style.color ="white"
    document.getElementById("ele_2").style.color ="white"
    document.getElementById("ele_3").style.color ="white"
    document.getElementById("ele_4").style.color ="white"
    document.getElementById("nav_mar").style.marginTop ="0rem"
    document.getElementById("ele_5").style.color ="white"
    document.getElementById("Home").style.backgroundSize = "cover * 2"
    Delete()
  

    

  } else {
    document.getElementById("navbarid").style.backgroundColor = "transparent";
    document.getElementById("web_name").style.color ="#00a271"
    document.getElementById("ele_1").style.color ="#00a271"
    document.getElementById("ele_2").style.color ="#00a271"
    document.getElementById("ele_3").style.color ="#00a271"
    document.getElementById("ele_4").style.color ="#00a271"
    document.getElementById("nav_mar").style.marginTop ="1.2rem"
    document.getElementById("ele_5").style.color ="#00a271"
    document.getElementById("Home").style.backgroundSize = "cover*2"

    
    

  }
  



}

function Delete(){
  const Element = document.getElementById("del");
  Element.remove();
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

function card_4_o(){
  document.getElementById("card_4").style.scale="1.06"
  document.getElementById("card_4_bg").style.background="#00a271"
  document.getElementById("card_4_ico").style.color="white"
  document.getElementById("card_4_but").style.backgroundColor="white"
  document.getElementById("card_4_but").style.color="#00a271"
  
}
function card_4_l(){
  document.getElementById("card_4").style.scale="1"
  document.getElementById("card_4_bg").style.background="#2e2e2e"
  document.getElementById("card_4_ico").style.color="#00a271"
  document.getElementById("card_4_but").style.backgroundColor="#00a271"
  document.getElementById("card_4_but").style.color="white"
  
  
}


function mo_pho_l(){

  document.getElementById("pho_l").style.color="#00a271"
  document.getElementById("pho_l").style.scale="1.3"
  document.getElementById("pho_l").className="fa-solid fa-phone fa-beat-fade"
  

}

function ml_pho_l(){

  document.getElementById("pho_l").style.color="#3c3f3e"
  document.getElementById("pho_l").style.scale="1"
  document.getElementById("pho_l").className="fa-solid fa-phone"

}
function mo_mail_l(){

  document.getElementById("mail_l").style.color="#00a271"
  document.getElementById("mail_l").style.scale="1.3"
  document.getElementById("mail_l").className="fa-solid fa-envelope fa-beat-fade"

}

function ml_mail_l(){

  document.getElementById("mail_l").style.color="#3c3f3e"
  document.getElementById("mail_l").style.scale="1"
  document.getElementById("mail_l").className="fa-solid fa-envelope"

}


function mo_skill_1(){

  document.getElementById("skill_1").style.scale="1.05"

}
function ml_skill_1(){

  document.getElementById("skill_1").style.scale="1"

}
/*hi*/
function mo_skill_2(){

  document.getElementById("skill_2").style.scale="1.05"

}
function ml_skill_2(){

  document.getElementById("skill_2").style.scale="1"

}

function mo_skill_3(){

  document.getElementById("skill_3").style.scale="1.05"

}
function ml_skill_3(){

  document.getElementById("skill_3").style.scale="1"

}

function mo_skill_4(){

  document.getElementById("skill_4").style.scale="1.05"

}
function ml_skill_4(){

  document.getElementById("skill_4").style.scale="1"


}

function mo_skill_5(){

  document.getElementById("skill_5").style.scale="1.05"

}
function ml_skill_5(){

  document.getElementById("skill_5").style.scale="1"

}

function mo_skill_6(){

  document.getElementById("skill_6").style.scale="1.05"

}
function ml_skill_6(){

  document.getElementById("skill_6").style.scale="1"

}

function mo_skill_7(){

  document.getElementById("skill_7").style.scale="1.05"

}
function ml_skill_7(){

  document.getElementById("skill_7").style.scale="1"

}



function insta_o(){

  document.getElementById("insta").style.color="#E1306C"

}
function insta_l(){

  document.getElementById("insta").style.color="#000704"

}

function git_o(){

  document.getElementById("git").style.color="#1f883d"

}
function git_l(){

  document.getElementById("git").style.color="#000704"

}

function face_o(){

  document.getElementById("face").style.color="#17A9FD"

}
function face_l(){

  document.getElementById("face").style.color="#000704"

}

function click_project(){

  alert("Currently Not Avilable");

}

function about_o(){

  document.getElementById("about_but").style.backgroundColor="rgb(247, 247, 247)"
  document.getElementById("about_but").style.color="#00a271"
  document.getElementById("about_but").style.borderStyle="solid"
  document.getElementById("about_but").style.borderWidth=".1rem"
  document.getElementById("about_but").style.borderColor="#00a271"

}
function about_l(){

  document.getElementById("about_but").style.color="rgb(247, 247, 247)"
  document.getElementById("about_but").style.backgroundColor="#00a271"
  document.getElementById("about_but").style.borderStyle="solid"
  document.getElementById("about_but").style.borderWidth=".05rem"
  document.getElementById("about_but").style.borderColor="#00a271"

}

function submit_o(){

  document.getElementById("submit_but").style.backgroundColor="rgb(247, 247, 247)"
  document.getElementById("submit_but").style.color="#00a271"
  document.getElementById("submit_but").style.borderStyle="solid"
  document.getElementById("submit_but").style.borderWidth=".1rem"
  document.getElementById("submit_but").style.borderColor="#00a271"

}
function submit_l(){

  document.getElementById("submit_but").style.color="rgb(247, 247, 247)"
  document.getElementById("submit_but").style.backgroundColor="#00a271"
  document.getElementById("submit_but").style.borderStyle="solid"
  document.getElementById("submit_but").style.borderWidth=".05rem"
  document.getElementById("submit_but").style.borderColor="#00a271"

}







const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Graphic Designer";
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


$(document).ready(function(){
  $(".TEXT").waypoint(function(){
    $(".TEXT").addClass("animate__animated animate__bounceInDown")
  }, {offset: "80%"});
});
