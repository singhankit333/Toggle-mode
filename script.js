var toggled = false;

var instruction = $("#instruction");
var bodyTag = $("body");
var circle = $("#circle");

$("#toggle").click(function() {
    if(!toggled) {
        instruction.addClass("color-white");
        bodyTag.addClass("bck-color-black");
        circle.css('marginLeft', "100px");
        instruction.html("Toggle to enter light mode");
        toggled = true;
    } 
    else{
        instruction.removeClass("color-white");
        bodyTag.removeClass("bck-color-black");
        circle.css('marginLeft', "1px");
        instruction.html("Toggle to enter dark mode");
        toggled = false;
    }
});