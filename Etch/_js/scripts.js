var frank = function(){
    var a = prompt("is this for realz?");
};

var count = 5;



var setColors = function(){
    $("#container").css({
        "background-color" : "yellow",
        "width": "1000px",
        "margin": "25px auto"
        
    });
    
    $("#pixel").css({
        "background-color":"red",
        "width" : "50px",
        "height" : "50px",
        "display" : "inline-block",
        "float" : "left"
        
    });
    
 
    $("#pixel").hover(function(){
        $("#pixel").css("background-color","green");
    });
    
    
    
    
};





var grid = function(){
    $('#container').append("<div id = pixal></div>");
   };

var generateGrid = function(number){
  for(i=0; i <= number; i++) {
     grid();
  }; 
};


setColors();
generateGrid(25); 


