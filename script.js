var toggled = false;

var instruction = document.getElementById("instruction");
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.querySelector("#toggle").addEventListener("click", function() {
    if(!toggled) {
        instruction.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        circle.style.marginLeft = "100px";
        instruction.innerText = "Toggle to enter light mode";
        toggled = true;
    } 
    else{
        instruction.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.style.marginLeft = "1px";
        instruction.innerText = "Toggle to enter dark mode";
        toggled = false;
    }
});