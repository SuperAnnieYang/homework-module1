$(document).ready(function(){
  
    $("tr td.clickit").css("cursor","pointer");
    $("tr td.clickit").click(function(){
      $(this).toggleClass("afterclick");
    }) 
  });