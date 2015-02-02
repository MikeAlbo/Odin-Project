
 
var clear = function(){
    $('#container').empty();
}; 

var pixelGenerator = function(){
     var pixel = document.createElement("div");
     var container = document.getElementById("container");
     container.appendChild(pixel);
     
     $(pixel).css({
        "background-color": "lightgray",
         "height": "20px",
         "width": "20px",
         "display": "inline-block",
         "margin": "0px",
         "padding": "0px"
     });
     
     $(pixel).hover(function(){
        $(pixel).css("background-color", "black"); 
     });
 };
 
var grid = function(nuumber){
    for(i = 0; i < nuumber; i++){
        pixelGenerator();
    };
};

var small = function(){
    clear();
    grid(500);
};

var medium = function(){
    clear();
    grid(800);
};

var large = function(){
    clear();
    grid(1000);
}




$(document).ready(function(){
    
    medium();
    
//buttons
   document.getElementById("clearButton").onclick= function(){
       clear();
   };
    
    document.getElementById("smallButton").onclick= function(){
        clear();
        small();
    };
    
    document.getElementById("mediumButton").onclick= function(){
        clear();
        medium();
    };
    
    document.getElementById("largeButton").onclick= function(){
        clear();
        large();
    };
    
   
});









