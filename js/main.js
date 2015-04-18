$(document).ready( function () {

//BACKSTRETCH
  $('header').backstretch([
    "img/chicken.jpg",
    "img/breadcheese2.jpg",
    "img/fish.jpg",
    "img/pighead.jpg",
    "img/octopussalad.jpg"
  ], {duration: 3000, fade: 750});

//DRAWER
      $(".drawer").drawer();

//ORDER FORM
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var menu = document.getElementById('form_menu');
    var amount = document.getElementById('amount');
    
    (function (){
        if (document.contains(document.getElementById('orderform'))){
            fname.addEventListener('change', MenuFunction);
            lname.addEventListener('change', MenuFunction);
            menu.addEventListener('change', MenuFunction);
            amount.addEventListener('change', MenuFunction);
        }
    })();
    
    function MenuFunction() {
        var fullName = fname.value + " " + lname.value;
        var numOrdered = amount.value;
        var itemCost = menu.options[menu.selectedIndex].value;
        var itemName = menu.options[menu.selectedIndex].text;
        var total = numOrdered*itemCost;
        document.getElementById('order_info').innerHTML = fullName + ", you have ordered " + numOrdered + " of the " + itemName + " for a total of " + total + " sickles.";
    
    }
    
    $('#orderform').submit(function( event ) {
        event.preventDefault();
        $('form').hide('slow');
        $('#order_info').text('Thank you for your order. It will be ready for pickup in 30 minutes.');
    });



});