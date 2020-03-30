var jCream = ["pistachio", "Pendleton whisky maple custard", "salted caramel", "peach"]
var eCream = ["vanilla", "chocolate", "cookie dough", "cookies & cream"]
var flavors = jCream.concat(eCream)

$(document).ready(function(event){
  $("#flavorButton").submit(function(event){
    event.preventDefault();
    flavors.forEach(function(flavor) {
        $("#creamList").append("<li> flavor </li>");


    });
   
    $("#allTheFlavors").empty().append(flavors);
    $("#flavorList").show();

    });
  
  });

