// Write your Pizza Builder JavaScript in this file.

var list = {
  chessePizza: 10,
  mushroom: 1,
  pepperonni: 1,
  greenPeppers: 1,
  sauceWhite: 3,
  crustGlutenFree: 5,
}
var cart = [
  "chessePizza",
  "mushroom",
  "pepperonni",
  "greenPeppers",
  "sauceWhite",
  "crustGlutenFree"
]

function find(item){
  for ( var i = 0; i < cart.length; i++){
    if ( cart[i] === item ) {
      return i
    }
  }
  return undefined;
}

function calculateTotalPrice () {
  var total = 0;
  cart.forEach(function(ingridient){
    total += list[ingridient]
  })
  return total
}

function addItem(item) {
  cart.push(item);
  console.log(cart)
};

function removeItem(item) {
  var position = find(item)
  if ( position != undefined ) {
    cart.splice(position,1);
  }
  console.log(cart)
};

$(document).ready(function(){

  $(".btn-pepperonni").click(function(){
    $(this).toggleClass('active');
    $(".pep").toggle();
    $(".price ul li:nth-child(1)").toggle();
    if($(this).hasClass("active")){
      addItem("pepperonni");

    }else{
      removeItem("pepperonni");

    }
    $("strong").html("$" + calculateTotalPrice());

  });

  $(".btn-mushrooms").click(function(){
    $(this).toggleClass('active');
    $(".mushroom").toggle();
    $(".price ul li:nth-child(2)").toggle();
    if($(this).hasClass("active")){
      addItem("mushroom");
    }else{
      removeItem("mushroom");
    }
    console.log("total", calculateTotalPrice());
    $("strong").html("$" +calculateTotalPrice());
  });

  $(".btn-green-peppers").click(function(){
    $(this).toggleClass('active');
    $(".green-pepper").toggle();
    $(".price ul li:nth-child(3)").toggle();
    if($(this).hasClass("active")){
      addItem("greenPeppers");
    }else{
      removeItem("greenPeppers");
    }
    $("strong").html("$" +calculateTotalPrice());
  });

//End of Iteration 1

  $( ".btn-sauce" ).click(function() {
    $(this).toggleClass('active');
    $( ".sauce" ).toggleClass( "sauce-white" );
    $(".price ul li:nth-child(4)").toggle();
    if($(this).hasClass("active")){
      addItem("sauceWhite");
    }else{
      removeItem("sauceWhite");
    }
    $("strong").html("$" +calculateTotalPrice());
  });

  $( ".btn-crust" ).on("click",function() {
    $(this).toggleClass('active');
    $( ".crust" ).toggleClass( "crust-gluten-free" );
    $(".price ul li:nth-child(5)").toggle();
    if($(this).hasClass("active")){
      addItem("crustGlutenFree");
    }else{
      removeItem("crustGlutenFree");
    }
    $("strong").html("$" + calculateTotalPrice());
  });

  //End of Iteration 2 // En of Iteration 3




});
