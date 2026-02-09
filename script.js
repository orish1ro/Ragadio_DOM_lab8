//include 

const title = document.querySelector('.title');
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const outpupt = document.getElementById("output");

//
const decription = document.querySelector(".description");
const button = document.querySelector("#btnClick");

//
button.addEventListener("click", function() {
    //
    button.textContent = "Clicked!";

    let name = nameInput.value;
    let age = ageInput.value;

    outpupt.innerHTML = "<p style ='color: red;'> Button was Clicked!</p>";

    //loose equality
    if (age == "18"){
        outpupt.innerHTML += "<p style ='color: green;'> You are an 18 years old!</p>";
    }    
     else{ 
        outpupt.innerHTML += "<p style ='color: red;'> You are a minor!</p>";
    }

    //Strict equality
    if (age === "18"){
        outpupt.innerHTML += "<p style ='color: green;'> You are 18 years old (STRICT)</p>";
    }
     else{
        outpupt.innerHTML += "<p style ='color: red;'> You are not 18 years old (STRICT)</p>";
    }   

    if (name != ""){
        outpupt.innerHTML += "<p style ='color: purple;'> Hello " + name +"! you are " + age + " years old.</p>";
    }
     else{
        outpupt.innerHTML += "<p style ='color: orange;'> Please enter your name!</p>";
    }

});    