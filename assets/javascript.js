var Click = $("button")
var fetchButton = document.getElementById('submitBtn')
// var cityInputEL = $("cityinput")


function getApi() {
    var cityInputEl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key)';
    
//     fetch(cityInputEl)
//     .then(function(response)){
//         return response.json()
//     }
// }
console.log(textcontent)

fetchButton.click(function () {

    let CityInput = $(".CityInput").val();
});
}
fetchButton.addEventListener("click", getApi);