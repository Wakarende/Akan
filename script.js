
 let daysOfTheWeek = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]

//  let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

// let maleAkanNames = [ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",]

// let gender = document.getElementById
// function  getGender() {

// }
//function getName(event) {
//     event.preventDefault()
//     late date =getElementById('date').value
//     let myBrithday = new Date(date).toDateString()
//     let day = myBrithday.split('')
// }




function getDay(event) {
    event.preventDefault()
    let date = document.getElementById('date').value
    let myBirthday = new Date(date)
    let message = '$(myBirthday)'
    outputTag.innerHTML = message
}