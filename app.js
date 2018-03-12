





var topics = ["Ferrari","Toyota","Lamborghini"];
// Performing our AJAX GET request


function getData (){


    $("#carpics").empty();
    var topic = $(this).attr("data-name");
    console.log(this);
    console.log(topic);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=d4ZMjUfMYUcRt7udxRVr514rzEIHOarg"

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

                var source = response.data

            for (var j=0; j<source.length; j++){

                var imgUrlAnimated = source[j].images.fixed_width.url;
                var imgUrlStill = source[j].images.fixed_width_still.url;
                var rating = $("<p>").html("Rating:"+" "+source[j].rating);

                var imgHolder = $("<div>").attr("class","picAndtext");
                
                imgHolder.append($("<img>").attr({"src":imgUrlStill,"data-state":"still","data-still-url":imgUrlStill,"class":"clickme","data-animated-url":imgUrlAnimated}));

                imgHolder.prepend(rating);


                $("#carpics").append(imgHolder);

                
            }
            createButtons();

            $(".clickme").on("click", function(event){
    
                event.preventDefault();
                var currentState = $(this).attr("data-state");
            
                if(currentState === "still"){
                    $(this).attr("src",$(this).attr("data-animated-url"))
                    $(this).attr("data-state","data-animated")
            
                }else{
                    $(this).attr("src",$(this).attr("data-still-url"));
                    $(this).attr("data-state","still");
            
            
                } 
            });

        });
      }
   

function createButtons(){

        $("#cars").empty();

        for(var i=0; i<topics.length; i++){

            var button = $("<button>").attr({"class":"car btn btn-primary","data-name":topics[i], "type":button});
            button.text(topics[i]);

            $("#cars").append(button);

        }
};

$("#submitBrand").on("click", function(event){

    event.preventDefault();

    var newCar = $("#brand-input").val().trim();

    topics.push(newCar);
    $("#brand-input").val("");

    createButtons();

}) 




$(document).on("click", ".car", getData);

createButtons();




