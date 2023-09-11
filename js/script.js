// var myDiv = document.getElementById("follow");
// function changeContent() 
// {  
//     var paragraph = document.querySelector("#follow b");
//     paragraph.textContent = "متابع"; 


//   } 
// function replaceContent() {
   
//     var newText = document.createElement("p");
//     newText.textContent = "متابع";
//     newText.style.marginBottom ="0";
//     var newIcon = document.createElement("i");
//     newIcon.classList.add("fas", "fa-circle-check");    
//     var Followed = document.getElementById("first-follow");
//     var secondFollowed = document.getElementById("second-follow");
//     var thirdFollowed = document.getElementById("third-follow");
//     Followed.innerHTML = '';
//     Followed.appendChild(newText);
//     Followed.appendChild(newIcon);
//     Followed.style.display = "flex" ; 
//     Followed.style.alignItems = "flex end" ;
//     Followed.style.justifyContent= "center";
//     Followed.style.verticalAlign= "baseline";

//     secondFollowed.innerHTML = '';
//     secondFollowed.appendChild(newText);
//     secondFollowed.appendChild(newIcon);
//     secondFollowed.style.display = "flex" ; 
//     secondFollowed.style.alignItems = "flex end" ;
//     secondFollowed.style.justifyContent= "center";
//     secondFollowed.style.verticalAlign= "baseline";

//     thirdFollowed.innerHTML = '';
//     thirdFollowed.appendChild(newText);
//     thirdFollowed.appendChild(newIcon);
//     thirdFollowed.style.display = "flex" ; 
//     thirdFollowed.style.alignItems = "flex end" ;
//     thirdFollowed.style.justifyContent= "center";
//     thirdFollowed.style.verticalAlign= "baseline";
//   }
  
function changeContent(div) {
   
    var paragraph = div.querySelector("b");
  
    
    var icon = div.querySelector("i");
  
    
    if (paragraph.textContent === "قم بالمتابعة") {
      paragraph.textContent = "متابع";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-check"); 
    } else {
      paragraph.textContent = "قم بالمتابعة";
      icon.classList.remove("fa-check");
      icon.classList.add("fa-plus"); 
    }
  }