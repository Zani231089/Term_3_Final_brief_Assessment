// Trips Array

const arrTrips = [
    {
        name: "Moorea",
        price: 3200,
        description: "Enjoy the luxurious and fine island of Moorea where there are a varied coral reef ecosystems and a colorful marine life.",
        image: "Page 2 Card 1.jpg",
        duration: 3,
        addedDate: "2023-03-25"
    },

    {
        name: "Mamanuca islands",
        price: 800,
        description: "Best known for our flawless beaches and showstopping sunsets and we can add our long clear lagoon to the list of charms.",
        image: "Page 2 Card 2.png",
        duration: 3,
        addedDate: "2023-04-20"

    },

    {
        name: "Bora Bora/Mamanuca",
        price: 1900,
        description: "Its allure comes from its unmatched landscape beauty and the richness of Tahitian culture.The people of Bora Bora embrace visitors with the aromatic tiare leis and welcome them with warm smiles and traditional music and dance.",
        image: "Page 2 Card 3.png",
        duration: 4,
        addedDate: "2023-01-20"
    },

    {
        name: "Bora Bora/Mamanuca/Tahiti",
        price: 2100,
        description: "The island of Tahiti is known for its stunning clear blue waters, beautiful over-the-water bungalows, numerous waterfalls, and world-famous surfing. ",
        image: "Page 2 Card 4.png",
        duration: 5,
        addedDate: "2023-08-14"
    },

    {
        name: "Samoa/Fiji/Cook islands",
        price: 7999,
        description: "The Cook Islands is a tropical oasis in the South Pacific, a Polynesian archipelago made up of 15 islands. People are friendly, the water is stunning and you can stay at some pretty amazing hotels and romantic resorts.",
        image: "Page Two card5.png",
        duration: 6,
        addedDate: "2023-04-27"
    },

    {
        name: "Cook islands/Fiji/Bora Bora",
        price: 9999,
        description: "However, you'll discover on arrival that this is an easy and straightforward place to visit. The Cook Islanders are famously welcoming and friendly, English is widely spoken, and you'll find an easygoing mix of 21st-century sophistication and traditional Polynesian values.",
        image: "Page Two card 6.png",
        duration: 8,
        addedDate: "2023-03-10"
    },
];

let appliedFilter = "";
let appliedSort = "";

//When the document loads

$(document).ready(function(){

    console.log("Hello");

    //Browse

    filterSortTrips();
});

function loadTrips(tripsToShow) {

    //Clear all elements in trips card

    $("#plantsContainer").empty();

    //Loop through trips

    for(let i = 0; i<plantsToShow.lengh; i++){
        let plant = plantsToShow[i];

        console.log(trips.name);

        //1: Select the trips container add the trip to it
        $("#plantsContainer").append($("#plantCardTemplate").html());

        //2: Create a variable that contains the most recently added trip card
        let currentChild = $("#plantsContainer").children().eq(i);

        //3: Set the content for the current trip from the trips array
        $(currentChild).find("#nameText").text(trip.name);
        $(currentChild).find("#priceText").text("R" + trip.price);
        $(currentChild).find("#descriptionText").text(trip.description);
        $(currentChild).find(".card-img-top").attr('src','assets/' + plant.image);
        $(currentChild).find("#durationText").text(trip.duration + "nights");
        $(currentChild).find("#addedDateText").text(trip.addedDate);

        //4: Hide description text from current card
        $(currentChild).find("#descriptionText").hide()
        $(currentChild).find("#durationText").hide()
    };
};


// When the filter or sort is clicked

$("input[name='filterRadio']").clicked(function(){
    appliedFilter = $(this).attr('value');

    filterSortTrips();
});

function filterSortTrips(){

    let filteredSortedArrTrips = [];

    console.log(appliedFilter);
    console.log(appliedSort);

    //Filter Trips

    if(appliedFilter){
        filteredSortedArrTrips = arrTrips.filter(trip => trip.duration == appliedFilter);
    }else{
        filteredSortedArrTrips = arrTrips;
    }

    //Sort Trips

    if(appliedSort == "singleSort"){

        //Sort trips for single destinations
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a, b) => {
            return a.price - b.price;
        });
    }

    console.log(filteredSortedArrTrips);

    loadTrips(filteredSortedArrTrips);
};

//When a trips card is clicked

$("#plantsContainer").on('click','.card', function(){

    //Toggle the description text
    $(this).find("#descriptionText").toggle();
})