//Function to toggle values of to and fro city.
function replace(){
 const from= document.getElementById("from").value
 const to =document.getElementById("to").value;
 console.log(from);
 console.log(to);
 document.getElementById("from").value=to
 document.getElementById("to").value=from
}

function disableReturn(){

    
    document.getElementById("returnL").style.visibility="hidden"
    document.getElementById("return").style.visibility="hidden"

     }
    
     function enableReturn(){

        document.getElementById("returnL").style.visibility="visible"
        document.getElementById("return").style.visibility="visible"
    
    }

    function refresh(){
        document.location.reload()
    }


    function payOption(){

       console.log(document.getElementById("cc").value)
    }

    apik = "a959cba7d0343b06a45feecb6166e0d3"
//can get free api keys from https://home.openweathermap.org/api_keys



    window.onload = function() {

        
      
        document.getElementById("paySection").style.visibility='hidden'
        document.getElementById("ppay").style.visibility='hidden'
        document.getElementById("weather").style.visibility='hidden'
        console.log("in load")
       
        }
        
        //kelvin to celcious
        function convertion(val){
            return (val - 273).toFixed(2)
        }

function fromCity(){

    const fromCity = document.getElementById('from').value 
       console.log(fromCity)
  //Fetching the weather info from openweathermap.org by passing city name and API key .

       fetch('https://api.openweathermap.org/data/2.5/weather?q='+fromCity+'&appid='+apik)
       .then(res => res.json())
        
       .then(data => {
           console.log(data)
           let cityName = data['name']
           let description1 = data['weather']['0']['description']
           let temp = data['main']['temp']
           let windSpeed = data['wind']['speed']
       //Assigning the values from fetch object values and displaying it in HTML.

           city.innerHTML=`City: ${cityName}`
           temp1.innerHTML = `Temperature: ${ convertion(temp)} C`
           description.innerHTML = `Conditions: ${description1}`
           wind.innerHTML = `Wind Speed: ${windSpeed} km/h`
           document.getElementById("weather").style.visibility='visible'
       
       })
       .catch(err => alert('You have Wrong city name'))
       
      



}
//Setting localstorage variable  name aand email so that thay can be accesed in other pages..
        function myName(){
           const fName= document.getElementById("fullN").value
            const email1=document.getElementById("email").value
           document.getElementById("hello").innerHTML =`Hello  ${fName} !! `
           localStorage.setItem("Name",fName)
           localStorage.setItem("Email",email1)

        }
//Function to display payment options.
        function getOption(){
         const val =document.getElementById('payType').value
         if (val ==='cc'){
          document.getElementById('paySection').style.visibility="visible"
          document.getElementById('ppay1').style.visibility="hidden"

         }
         else if(val === 'ppay'){
         document.getElementById('ppay1').style.visibility="visible"
         document.getElementById('paySection').style.visibility="hidden"

         }
         else if(val === ''){
            document.getElementById('ppay1').style.visibility="hidden"
            document.getElementById('paySection').style.visibility="hidden"
   
            }
   
   
       }

//to disable  dates on calender  for depart and retunr dates.
       let today = new Date();
       let dd = String(today.getDate()).padStart(2, '0');
       let mm = String(today.getMonth() + 1).padStart(2, '0');
       let yyyy = today.getFullYear();

       today = yyyy + '-' + mm + '-' + (dd);

      //Disabling the dates before today 
       $('#depart').attr('min',today);

    
  function departD(){
  let maxDate =document.getElementById('depart').value
  //disabling the dates before departing date (maxDate )
  $('#return').attr('min',maxDate);

  }

function addCode(){
    const a =document.getElementById('adult').value
    const b= document.getElementById('child').value
    const c = document.getElementById('infant').value
    const d= Number(a)+Number(b)+Number(c)
    
 if(d>3)   {
  
//Adding elements dynamically to html.
    document.getElementById("addCode").innerHTML =`<details><summary> <b>Passenger4</b></summary>
    Full Name:<input type="text" id="P3fullN" placeholder="Full Name" > Gender:  <input type="radio"   name="gender4" value ="male"> Male
    <input type="radio" name="gender4" value ="female"> Female	<br>

    Date of Birth:<input type="date" id="input-group1" placeholder="Date of Birth">
    Age:<input type="number" min ="0" id="input-group1" placeholder="Age"><br>
    Meal Pref: <select name ="Meal Pref" id="input-group">
       <option value=""></option>
       <option value="">Veg</option>
       <option value="">Non-Veg</option>                
        </select> <br>
        Check-in Luggage: <select name ="Luggage Pref" id="input-group">
            <option value="">25Kg</option>
            <option value="">30Kg</option>
            <option value="">35kg</option>                
             </select><button id="removeMe" onclick ="remove()">RemoveMe</button> <br>
        
  </details>`

  document.getElementById("addCode1").innerHTML =`<details><summary> <b>Passenger5</b></summary>
    Full Name:<input type="text" id="P3fullN" placeholder="Full Name" > Gender:  <input type="radio"   name="gender5" value ="male"> Male
    <input type="radio" name="gender5" value ="female"> Female	<br>

    Date of Birth:<input type="date" id="input-group1" placeholder="Date of Birth">
    Age:<input type="number" min ="0" id="input-group1" placeholder="Age"><br>
    Meal Pref: <select name ="Meal Pref" id="input-group">
       <option value=""></option>
       <option value="">Veg</option>
       <option value="">Non-Veg</option>                
        </select> <br>
        Check-in Luggage: <select name ="Luggage Pref" id="input-group">
            <option value="">25Kg</option>
            <option value="">30Kg</option>
            <option value="">35kg</option>                
             </select><button id="removeMe" onclick ="remove1()">RemoveMe</button> <br>
        
  </details>`
  
  document.getElementById("addCode2").innerHTML =`<details><summary> <b>Passenger6</b></summary>
    Full Name:<input type="text" id="P3fullN" placeholder="Full Name" > Gender:  <input type="radio"   name="gender6" value ="male"> Male
    <input type="radio" name="gender6" value ="female"> Female	<br>

    Date of Birth:<input type="date" id="input-group1" placeholder="Date of Birth">
    Age:<input type="number" min ="0" id="input-group1" placeholder="Age"><br>
    Meal Pref: <select name ="Meal Pref" id="input-group">
       <option value=""></option>
       <option value="">Veg</option>
       <option value="">Non-Veg</option>                
        </select> <br>
        Check-in Luggage: <select name ="Luggage Pref" id="input-group">
            <option value="">25Kg</option>
            <option value="">30Kg</option>
            <option value="">35kg</option>                
             </select><button id="removeMe" onclick ="remove2()">RemoveMe</button><br>
        
  </details>`
  
}
}
//Functions to remove elments dynamically using Jquery
function remove2(){

    $('#addCode2').remove()
}

function remove1(){

    $('#addCode1').remove()
}
function remove(){

    $('#addCode').remove()
}

