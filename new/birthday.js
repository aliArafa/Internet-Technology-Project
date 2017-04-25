$(document).ready(function()
{
  $(".girls").click(function(){
    $(".girlschar").toggle(3000 , function() {$(".girlsmenu").toggle(3000);});
  });
  
  $(".boys").click(function(){
    $(".boyschar").toggle(3000 ,function() {$(".boysmenu").toggle(3000);});
  });
  
  
});