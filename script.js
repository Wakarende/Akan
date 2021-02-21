
//  const daysOfTheWeek = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]

// //  const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

// // const maleAkanNames = [ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",]

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
// }
function akanNames() {
//   var day = parseInt(document.getElementById("d").value);
//   var month = parseInt(document.getElementById("m").value);
//   var year = parseInt(document.getElementById("y").value);
let dateOfBirth = parseInt(document.getElementById("date").value);
let male = document.getElementById("male");
let female = document.getElementById("female");
let result = document.getElementById("result");


  var dateOfTheWeek = new Date(year + "/" + month + "/" + day);
  var r = dateOfTheWeek.getDay();
  alert(result);



  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames = ["Kwasi", " Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if (year < 2020 && year > 1900) {
    if (month < 13 && month > 0) {
      if (day < 32 && day > 0) {
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
