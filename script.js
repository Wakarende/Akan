
 
// // let gender = document.getElementById
// // function  getGender() {

// // }
// //function getName(event) {
// //     event.preventDefault()
// //     late date =getElementById('date').value
// //     let myBrithday = new Date(date).toDateString()
// //     let day = myBrithday.split('')
// // }




// function getDay(event) {
//     event.preventDefault()
//     let date = document.getElementById('date').value
//     let myBirthday = new Date(date)
//     let message = '$(myBirthday)'
//     outputTag.innerHTML = message


//   var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   var maleNames = ["Kwasi", " Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//   var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// }

function akanNames() {
let day = parseInt(document.getElementById("day").value);
let month = parseInt(document.getElementById("month").value);
let year = parseInt(document.getElementById("year").value);
let male = document.getElementById("male");
let female = document.getElementById("female");
// let result = document.getElementById("result");


  let dateOfTheWeek = new Date(year + "/" + month + "/" + day);
  let result= dateOfTheWeek.getDay();
  alert(result);

const daysOfWeek = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
const maleNames = [ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",]

  if (year < 2021 && year > 1900) {
    if (month < 12 && month > 0) {
      if (day < 31 && day > 0) {
        if (male.checked) {
          alert("Your Akan names is " + maleNames[result]+" and born on "+ daysOfWeek[result]);
        } else if (female.checked) {
          alert("Your Akan name is " + femaleNames[result]+" and born on "+ daysOfWeek[result]);
        } else {
          alert("Choose the right gender option");
        }
      } else {
        alert("kindly enter the right day");
      }

    } else {
      alert(" you have entered the wrong month");
    }

  } else {
    alert(" kindly enter the right year");
  }
}
