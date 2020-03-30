var jCream = ["pistachio", "Pendleton whisky maple custard", "salted caramel", "peach"]
var eCream = ["vanilla", "chocolate", "cookie dough", "cookies & cream"]

$(document).ready(function(event){
  let allCream = jCream.concat(eCream)  
  $("#flavorButton").submit(function(event){
      $("#flavorList").show();

      event.preventDefault();
    });
});