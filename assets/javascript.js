var Click = $("button")
var fetchButton = document.getElementById('submitBtn')
// var cityInputEL = $("cityinput")
var APIkey = "c9ecfd644095a0e64da1f579c55a340b"
let cityName = $("#cityInput").val();
var searchResultEl = document.querySelector("#searchResult")
console.log(searchResultEl)

function getApi(cityName) {
    console.log(cityName)
    var cityInputEl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${APIkey}`;
    
  
    fetch(cityInputEl)
    .then(function(response){
        if(response.ok){
            response.json()
            .then(function(data){
                console.log(data)
                var lat = data[0].lat
                console.log(lat)
                var lon = data[0].lon
                console.log(lon)
                var lonLat = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`;

                fetch(lonLat)
                .then(function(response){
                    if(response.ok){
                        response.json()
                        .then(function(data1){
                            console.log(data1)
                            // data1 = searchResultEl (trying to get INFO to populate in the searchResult id and populate on the page)
                            searchResultEl.textContent = data1
                            console.log(data1)
                            // function appendData(data) {
                                
                            //     for (var i = 0; i < data.length; i++) {
                            //       var div = document.createElement("div");
                            //       div.innerHTML = 'City: ' + data[i].firstName + ' ' + data[i].lastName;
                            //       searchResultEl.appendChild(div);
                        })
                    }
                })

            })
        }
       
    });


    // https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}
}

function searchedCity(event) {
    event.preventDefault();
   

 var  cityName = $("#cityInput").val();
 console.log(cityName)
    if (cityName){
        getApi(cityName);
    };
    
    
}
// console.log(textcontent)

fetchButton.addEventListener("click", searchedCity);