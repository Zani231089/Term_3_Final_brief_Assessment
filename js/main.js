//When the document loads

$(document).ready(function(){

    console.log("Hello");

    //Browse Page
    $("#descriptionText").hide();
});

//When card is clicked

$(".card").click(function(){

    //Toggle price and description
    $("#priceText").toggle();
    $("#descriptionText").toggle();
})