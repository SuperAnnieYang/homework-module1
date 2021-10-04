$(document).ready(function(){
  
    $("tr td.clickit").css("cursor","pointer");
    $("tr td.clickit").click(function(){
      $(this).toggleClass("afterclick");
    }) 




    //User interaction with table cells

    $("td").click(function () {
        var content = $(this).text();

        if (content != "Not Available") {
            $("tr.clickit").toggleClass("afterclick");
            
            if ($(this).hasClass("afterclick")) {
                $('#displaySelected').css("visibility" ,"visible");
                $('#displaySelected').css("margin-top", "2em");
                $('#result').append("<p>" + content + "</p>");
            } else {
               $('#result p:contains('+content+')').remove();

               if ($('#result').has('p').length == false) {
                   $('#displaySelected').css("visibility", "hidden");
                   $('#displaySelected').css("margin-top", "0");
               }
            }
        }
    });
    
  });

  