

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
  alert("input valid month");
} else if (day < 1 || day > 31) {
  alert("input valid day")
}else if (male.checked){
("You were born on " + days[dayOfWeek] + "you are " + maleNames[dayOfWeek])
// } else if ((male.checked) && (dayOfWeek == 0)) {
//     alert("You were born on " + days[dayOfWeek] + " you are  " + maleNames[0]);
//   }else if ((male.checked) && (dayOfWeek == 1)) {
//     alert("You were born on " + days[dayOfWeek] + " you are  " + maleNames[1]);
//   } else if ((male.checked) && (dayOfWeek == 2)) {
//     alert("You were born on " + days[dayOfWeek] + " you are  " + maleNames[2]);
//   } else if ((male.checked) && (dayOfWeek == 3)) {
//     alert("You were born on " + days[dayOfWeek] + " you are  " + maleNames[3]);
//   } else if ((male.checked) && (dayOfWeek == 4)) {
//     alert("You were born on " + days[dayOfWeek] + " you are  " + maleNames[4]);
//   } else if ((male.checked) && (dayOfWeek == 5)) {
//     alert("You were born on " + days[dayOfWeek] + " you are  " + maleNames[5]);
//   } else if ((male.checked) && (dayOfWeek == 6)) {
//     alert("You were born on " + days[dayOfWeek] + " you are  " + maleNames[6]);
  } else if (female.checked) {
      alert("You were born on " + days[dayOfWeek] + "you are " + femaleNames[dayOfWeek]);
  } else {
   alert( "Kindly input your details correctly")
 }
 
}

// 

