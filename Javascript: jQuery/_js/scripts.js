// global vars

var size = 0;

    

/*var container = function(){
    var box  = document.createElement("div");
    $(box).css({
        "background-color": "#F0F0F0",
        "width": "600px",
        "height": "600px",
        "margin": "30px auto",
        
    });
    document.body.appendChild(box);

} */

var grid = function(){
   /* var pixel = document.createElement("div");
    $(pixel).css({
        "background-color": "red",
        "height": "3px",
        "width": "3px",
        "display":"inline-block",
        "margin": "0px",
        "padding": "0px",
        
    }); 
    // $("#container").append(pixel); */
    $("#container").append("<div id= pixel></div>");
   };

var clear = function(){
    $('#container').empty();

}

/*var clearNoReturn = function(){
    $("#container").empty();
}*/

var userCreate = function(number){
    size = prompt("pick a size!");
    generateGrid(size);
    
}

var generateGrid = function(number){
    for(i=1; i <= number; i++){
        grid();
    }
    
     

var small = function(){
    clear();
    generateGrid(100);
   
}

var medium = function(){
    clear();
    generateGrid(300);
}

var large = function(){
    clear();
    generateGrid(500);
}

/*var changeColor = function(){
   $("pixel").css("background-color": document.getElementById("color"));
}*/

 $("#pixel").hover(function(){
    $(this).css("background-color", "blue");
})






$(document).ready(function(){
    
    
    medium();
    
   
    document.getElementById("btn1").onclick= function(){
        clear();
    }
    document.getElementById("btn2").onclick= function(){
        clear();
        small();
    }
    document.getElementById("btn3").onclick= function(){
        clear();
        medium();
    }
    document.getElementById("btn4").onclick= function(){
        clear();
        large();
    }
    
    
    
   
    
});


    
    



