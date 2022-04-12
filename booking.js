
apik = "a959cba7d0343b06a45feecb6166e0d3"
//can get free api keys from https://home.openweathermap.org/api_keys


window.onload =function() {
//Getting parameters from URL params and localstorage items and assigning the values to pName , ref(innerHtml )
  const params =(new URL(document.location)).searchParams;
  const toCity =params.get('to')
  console.log(toCity)
  console.log(localStorage.getItem("Name"))
  document.getElementById('pName').innerHTML=localStorage.getItem("Name")
    document.getElementById("ref").innerHTML= Math.random().toString(36) +" ,  has been sent to your email " +localStorage.getItem("Email")

    //Fetching the weather info from openweathermap.org by passing city name and API key .
fetch('https://api.openweathermap.org/data/2.5/weather?q='+toCity+'&appid='+apik)
.then(res => res.json())
 
.then(data => {
    console.log(data)
    let cityName = data['name']
    let description1 = data['weather']['0']['description']
    let temp1 = data['main']['temp']
    let windSpeed = data['wind']['speed']
//Assigning the values from fetch object values and displaying it in HTML.
    city.innerHTML=`City: ${cityName}`
    temp.innerHTML = `Temperature: ${ convertion(temp1)} C`
    description.innerHTML = `Conditions: ${description1}`
    wind.innerHTML = `Wind Speed: ${windSpeed} km/h`
    document.getElementById("weather").style.visibility='visible'


})
.catch(err => alert('You have Wrong city name'))

}

//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
    
}