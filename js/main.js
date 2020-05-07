$(document).ready(function(){

  // Pressing the button returns to the top of the page.

   $(".up").on('click', function(scroll){
        scroll.preventDefault();
        $('body,html').animate({scrollTop: 0}, 1000);    
    });

   // stop button animation 

  $(".stop-btn-animation").click(function(){
    $(".btn-animation").stop();
  });

  // If you click on me, I will disappear.

  $(".hide").click(function(){
    $(this).hide(1000);
  });

  // Point at me and I will turn red.

  $(".color").click(function(){
  	$(this).css("color", "darkred");
  });

  // Click or move the mouse pointer over this paragraph.

  $(".on").on({
  	mouseenter: function() {
  		$(this).css("color", "lightgray");
  	},
  	mouseleave: function() {
  		$(this).css("color", "lightblue");
  	},
  	click: function(){
  		$(this).css("color", "yellow");
  	}
  });

  $("#hide").click(function(){
  	$(".hide-show").hide(1000);
  });

  $("#show").click(function(){
  	$(".hide-show").show(1000);
  });

  $("#toggle").click(function(){
  	$(".toggle").toggle(1000);
  });

  $("#fade").click(function(){
  	$("#div1").fadeToggle(1000);
  	$("#div2").fadeToggle(2000);
  	$("#div3").fadeToggle(3000);
  });

  $("#flip").click(function(){
  	$("#panel").slideToggle("slow");
  });

  $("#animate").click(function(){
    var div = $(".animate-block");
    div.animate({height: '300px', opacity: '0.4'}, 1000);
    div.animate({width: '300px', opacity: '0.8'}, 1000);
    div.animate({height: '100px', opacity: '0.4'}, 1000);
    div.animate({width: '100px', opacity: '0.8'}, 1000);
  });

  $("#stop").click(function(){
    $(".animate-block").stop();
  });

  $("#chaining").click(function(){
    $("#p1").css("color", "white")
      .slideUp(2000)
      .slideDown(2000);
  });

   $("#btn1").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
  });

   $("#btn-callback-1").click(function(){
    $("#test-callback-1").text(function(i, origText){
      return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
    });
  });

  $("#btn-callback-2").click(function(){
    $("#test-callback-2").html(function(i, origText){
      return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
    });
  });

  $("#attr").click(function(){
    $("#w3s-attr").attr({
      "href" : "https://www.w3schools.com/jquery/",
      "title" : "W3Schools jQuery Tutorial"
    });
  });

  $("#callback-attr").click(function(){
    $("#w3s-callback-attr").attr("href", function(i, origValue){
      return origValue + "/jquery/"; 
    });
  });

  $("#btn-append-1").click(function(){
    $(".append").append(" <b>Appended text</b>.");
  });

  $("#btn-append-2").click(function(){
    $(".append-ol").append("<li>Appended item</li>");
  });

  $("#btn-prepend-1").click(function(){
    $(".prepend").prepend("<b>Prepended text</b>. ");
  });
  $("#btn-prepend-2").click(function(){
    $(".prepend-ol").prepend("<li>Prepended item</li>");
  });

$("#btn-a_b-1").click(function(){
    $(".img-a_b").before("<b>Before</b>");
  });

  $("#btn-a_b-2").click(function(){
    $(".img-a_b").after("<i>After</i>");
  });
});

function appendText() {
  var txt1 = "<p>Text.</p>";        // Create text with HTML
  var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
  var txt3 = document.createElement("p");
  txt3.innerHTML = "Text.";         // Create text with DOM
  $(".append-text").append(txt1, txt2, txt3);   // Append new elements
}

function afterText() {
  var txt1 = "<b>I </b>";           // Create element with HTML
  var txt2 = $("<i></i>").text("love ");  // Create with jQuery
  var txt3 = document.createElement("b");   // Create with DOM
  txt3.innerHTML = "jQuery!";
  $(".img-after").after(txt1, txt2, txt3);    // Insert new elements after img
}  