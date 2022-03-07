const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi", "Kwame"];
const daysOfTheWeek =["Sunday","Monday" ,"Tuesday","Wednesday ","Thursday ","Friday","Saturday" ];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

let century = "";
let year = "";
let month = "";
let day = "";
let dayOfTheWeek= "";
let akanName = ""

const getUserInput = function (event) {
    event.preventDefault();
    let dateOfBirth = document.getElementById("birth-date").value;
    let dateDetails = dateOfBirth.split('-')
    century = parseInt(dateDetails[0].slice(0,2));
    year = parseInt(dateDetails[0].slice(2,4));
    month = parseInt(dateDetails[1]);
    day = parseInt(dateDetails[2]);
    dayOfTheWeek = Math.floor(calculateDayOfTheWeek(century,year,month,day).toFixed())
    
}

const getAkanName = (genderArray) => {
    for(let i = 0; i<genderArray.length; i++){
        if(daysOfTheWeek[i]=== daysOfTheWeek[dayOfTheWeek-1]){
            akanName = genderArray[i];
        }
    }
}