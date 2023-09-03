//Trips Array

const arrTrips = [
    {
        "name": "Moorea",
        "price": 3200,
        "description": "Enjoy the luxurious and fine island of Moorea where there are a varied coral reef ecosystems and a colorful marine life.",
        "image": "Page 2 Card 1.jpg",
        "duration": "short",
        "addedDate": "2023-04-22"
    },
    {
        "name": "Mamanuca Islands",
        "price": 800,
        "description": "Best known for our flawless beaches and showstopping sunsets and we can add our long clear lagoon to the list of charms.",
        "image": "Page 2 Card 2.png",
        "duration": "short",
        "addedDate": "2023-02-19"
    },
    {
        "name": "Bora Bora/Mamanuca islands",
        "price": 1900,
        "description": "Its allure comes from its unmatched landscape beauty and the richness of Tahitian culture.The people of Bora Bora embrace visitors with the aromatic tiare leis and welcome them with warm smiles and traditional music and dance.",
        "image": "Page 2 Card 3.png",
        "duration": "short",
        "addedDate": "2023-10-25"
    },
    {
        "name": "Bora Bora/Mamanuca/Tahiti",
        "price": 2100,
        "description": "The island of Tahiti is known for its stunning clear blue waters, beautiful over-the-water bungalows, numerous waterfalls, and world-famous surfing.",
        "image": "Page 2 Card 4.png",
        "duration": "long",
        "addedDate": "2022-03-25"
    },
    {
        "name": "Samoa/Fiji/Cook Islands",
        "price": 7999,
        "description": "The Cook Islands is a tropical oasis in the South Pacific, a Polynesian archipelago made up of 15 islands. People are friendly, the water is stunning and you can stay at some pretty amazing hotels and romantic resorts.",
        "image": "Page Two card5.png",
        "duration": "long",
        "addedDate": "2023-09-20"
    },
    {
        "name": "Cook islands/Fiji/Bora Bora",
        "price": 9999,
        "description": "However, you'll discover on arrival that this is an easy and straightforward place to visit. The Cook Islanders are famously welcoming and friendly, English is widely spoken, and you'll find an easygoing mix of 21st-century sophistication and traditional Polynesian values.",
        "image": "Page Two Card 6.png",
        "duration": "long",
        "addedDate": "2023-11-25"
    }
];

let appliedFilter = "";
let appliedSort = "date added";



//When the document loads

$(document).ready(function(){

    //Browse Page
    $("#descriptionText").hide();
    $("#purchaseTicketButton").hide();
    loadTrips();

});

//Load all trips

function loadTrips(){

    //Run through the list of trips
    for (let i = 0; i < arrTrips.length; i++) {
        const trips = arrTrips[i];

        console.log(trips);

        //1: Select the trips container
        $("#tripsContainer").append($("#tripsCardTemplate").html());

        //2: Create a variable that contains the most recently added trip card
        let currentChild = $("#tripsContainer").children().eq(i+1);

        //3: Set the content for the current card from the trips list array
        $(currentChild).find("#descriptionText").attr('src', 'assets/'+ trips.image);
        $(currentChild).find("#nameText").text(trips.name);
        $(currentChild).find("#priceText").text(trips.price);
        $(currentChild).find("#purchaseTicketButton")
        
      

        //4: Hide the description text from the current card item
        $(currentChild).find("#descriptionText").hide();
        $(currentChild).find("#purchaseTicketButton").hide();
        
    };
};

// When a filter or sort button is clicked
$("input[name = 'filterRadio']").click(function(){
    appliedFilter = $(this).attr('value');

    filterSortTrips();
});

$("input[name = 'sortRadio']").click(function(){
    appliedFilter = $(this).attr('value');

    filterSortTrips();
});

function filterSortTrips() {

    let filteredSortedArrTrips = [];

    console.log(appliedFilter);
    console.log(appliedSort);

    //Filter cruise Trips

    if (appliedFilter) {
        filteredSortedArrTrips = arrTrips.filter(trips => trips.duration == appliedFilter);
        
    }else {
        filteredSortedArrTrips = arrTrips;
    }

    //Sort cruise Trips
    if (appliedSort == "Shortest to longest") {

        //Sort trips from the shortest to the longest
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a, b) => {
            return a.price -b.price;
        });
        
    }else if (appliedSort === "date added") {
        
        //Sort plants newest to oldest
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a, b) => {
            let da = new Date(a.addedDate);
            let db = new Date(b.addedDate);

            return db - da;
        });
    }

    console.log(filteredSortedArrTrips)

    loadTrips(filteredSortedArrTrips)
}


//When card is clicked

$("#tripsContainer").on('click','.card', function(){

    //Toggle price and description and the purchase ticket button
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();
    $(this).find("#purchaseTicketButton").toggle();


});


//Purchase Page
//When the remove button is clicked

$("#removeButton").click(function(){

    //When the remove button is clicked is clicked
    $(".wholeRowOne").remove();

});


$("#removeAllButton").click(function(){

    //When the remove all button is clicked
    $(".wholeRowOne").remove();
    $(".wholeRowTwo").remove();
    $(".wholeRowThree").remove();
    $(".wholeRowFour").remove();

});