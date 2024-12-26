

var field1=document.getElementById('name')
var field2=document.getElementById('email')
var field3=document.getElementById('password')
var pName=document.getElementById('pName')
var pEmail=document.getElementById('pEmail')
var pPassword=document.getElementById('pPassword')
var pGender=document.getElementById('pGender')
var pSport=document.getElementById('pSport')
var pCountry=document.getElementById('pCountry')

var male = document.getElementById('male');
var female = document.getElementById('female');
var tennis = document.getElementById('tennis');
var running = document.getElementById('running');
var football = document.getElementById('football');
var country = document.getElementById('country');

function validation(){
    if (field1.value === '') {
        pName.innerText = "Name is required"; 
        field1.style.border='solid 2px red'
        pName.style.color='red'
        return  
    }

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(field2.value)) {
        pEmail.innerText = "Email is not valid"; 
        field2.style.border = 'solid 2px red';
        pEmail.style.color = 'red';
        return;
    }
    if (field3.value.length<8) {
        pPassword.innerText = "passord must be 8 char at least"; 
        field3.style.border='solid 2px red'
        pPassword.style.color='red'
        return  
    }

    if (!male.checked && !female.checked) {
       pGender.innerText = "please select your gender";
       pGender.style.color='red'
        return;
    }

    var selectedSports = 0;
    if (tennis.checked) selectedSports++;
    if (running.checked) selectedSports++;
    if (football.checked) selectedSports++;

    if (selectedSports < 2) {
        pSport.innerText="please check at least two"
        pSport.style.color='red'
        return;
    }

    if (country.value === '') {
        pCountry.innerText = "country is required"; 
        pCountry.style.color='red'
        return  
    }



}


function rmove(){
    field1.value='';
    field2.value='';
    field3.value='';

    male.checked=false
    female.checked=false
    tennis.checked=false
    football.checked=false
    running.checked=false
    country.value=''

}