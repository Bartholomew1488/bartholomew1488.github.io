const fed = document.getElementById("fed")
const lexus = document.getElementById("lexus")
var error_msg = "Некорректно заполнены поля: ";

document.addEventListener("keydown", function(event){
    jump();
});




function viewDiv(){
  document.getElementById("game_window").style.display = "block";
};



function jump (){
    if (fed.classList != "jump") {
        fed.classList.add("jump")
        }
    setTimeout(function(){
        fed.classList.remove("jump")
    }, 1000)
}

let isAlive = setInterval (function() {
    let fedTop = parseInt(window.getComputedStyle(fed).getPropertyValue("top"));
    let lexusleft = parseInt(window.getComputedStyle(lexus).getPropertyValue("left"));
    
    if (lexusleft < 350 && lexusleft > 100 && fedTop >= 220) {
       
    document.getElementById("text").style.display = "block";
        
    }
})

