





var topics = ["ferrari","toyota","lamborghini"];



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

                var imgUrl = source[j].images.fixed_width.url;
                console.log(imgUrl);

                var imgHolder = $("<img>").attr("src",imgUrl);
                console.log(imgHolder);

                $("#carpics").append(imgHolder);
                
            }
            createButtons();

        });
      }



   

function createButtons(){

        $("#cars").empty();

        for(var i=0; i<topics.length; i++){

            var button = $("<button>").attr({"class":"car","data-name":topics[i]});
            button.text(topics[i]);

            $("#cars").append(button);

        }
};

function userInput(){

    var newCar = $("#brand-input").val().trim();
    

}





$(document).on("click", ".car", getData);

createButtons();


