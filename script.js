

function akanNames() {
let day = parseInt(document.getElementById("day").value);
let month = parseInt(document.getElementById("month").value);
let year = parseInt(document.getElementById("year").value);
let male = document.getElementById("male");
let female =document.getElementById("female");



let date = new Date(year + "/" + month + "/" + day);
let dayOfWeek= date.getDay();

const days = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
const maleNames = [ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",]


if ( month < 1 || month > 12) {
  alert("input valid month e.g 12");
} else if (day < 1 || day > 31) {
  alert("input valid day e.g")
}else if (male.checked){
    document.getElementById("name").innerHTML = ("You were born on " + days[dayOfWeek] + " your name is " + maleNames[dayOfWeek]);
  } else if (female.checked) {
      document.getElementById("name").innerHTML = ("You were born on " + days[dayOfWeek] + " your name is " + femaleNames[dayOfWeek]);
  } else {
   alert( "Kindly input your details correctly")
 }
 
}


