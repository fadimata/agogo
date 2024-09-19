/* let H = document.querySelector('.heure');
                               
//====================================function 20secs=====================================
let interval0;
function secs() {
    let tempt = 20;
// proprieté setInterval et function fleché    
    interval0 = setInterval(() => {
//proprieté parseInt permet de convertire en entier
        let seconde = parseInt(tempt % 60);
 // opperateur ternaire(?) pour condition       
        seconde = seconde < 10 ? '0' + seconde : seconde;
        H.textContent = `00:00:${seconde}`;
        //decrementation 
        tempt = tempt <= 0 ? 0 : tempt - 1;

    }, 1000);

    clearThe()
    clearPetitDejeuner()
    clearDejeuner()
    clearCappucino()
    inputElem()
}
function clearSecs() {
    clearInterval(interval0);
}
//====================================function 5min=====================================
let interval1;
function cappucino() {
    let departMinute = 5;
    let tempt = departMinute * 60;
// proprieté setInterval et function fleché    
    interval1 = setInterval(() => {
//proprieté parseInt permet de convertire en entier
        let minute = parseInt(tempt / 60);
        let seconde = parseInt(tempt % 60);
 // opperateur ternaire(?) pour condition       
        minute = minute < 10 ? "0" + minute :  minute;
        seconde = seconde < 10 ? '0' + seconde : seconde;
        H.textContent = `00:${minute}:${seconde}`;
//decrementation 
        tempt = tempt <= 0 ? 0 : tempt - 1;
    }, 1000);
    clearThe()
    clearPetitDejeuner()
    clearDejeuner()
    clearSecs()
    inputElem()
}
function clearCappucino() {
    clearInterval(interval1);
}
//=======================================function pour 15min==========================
let interval2;
function the() {
    let departMinute = 15;
    let tempt = departMinute * 60;
// proprieté setInterval et function fleché    
    interval2 = setInterval(() => {
//proprieté parseInt permet de convertire en entier
        let minute = parseInt(tempt / 60);
        let seconde = parseInt(tempt % 60);
 // opperateur ternaire(?) pour condition       
        minute = minute < 10 ? "0" + minute :  minute;
        seconde = seconde < 10 ? '0' + seconde : seconde;
        H.textContent = `00:${minute}:${seconde}`;
        //decrementation 
        tempt = tempt <= 0 ? 0 : tempt - 1;
    }, 1000);
    clearCappucino()
    clearPetitDejeuner()
    clearDejeuner()
    clearSecs()
    inputElem()
}
function clearThe() {
    clearInterval(interval2)
}
//=======================================function pour 20min==========================
let interval3;
function petitDejeuner() {
    let departMinute = 20;
    let tempt = departMinute * 60;
// proprieté setInterval et function fleché    
    interval3 = setInterval(() => {
//proprieté parseInt permet de convertire en entier
        let minute = parseInt(tempt / 60);
        let seconde = parseInt(tempt % 60);
 // opperateur ternaire(?) pour condition       
        minute = minute < 10 ? "0" + minute :  minute;
        seconde = seconde < 10 ? '0' + seconde : seconde;
        H.textContent = `00:${minute}:${seconde}`;
        //decrementation 
        tempt = tempt <= 0 ? 0 : tempt - 1;
    }, 1000);
    clearCappucino()
    clearThe()
    clearDejeuner()
    clearSecs()
    inputElem()
}
function clearPetitDejeuner() {
    clearInterval(interval3)
}
//=======================================function pour 30min==========================
let interval4;
function Dejeuner() {
    let departMinute = 30;
    let tempt = departMinute * 60; 
    interval4 = setInterval(() => {
        let minute = parseInt(tempt / 60);
        let seconde = parseInt(tempt % 60);       
        minute = minute < 10 ? "0" + minute :  minute;
        seconde = seconde < 10 ? '0' + seconde : seconde;
        H.textContent = `00:${minute}:${seconde}`;
        tempt = tempt <= 0 ? 0 : tempt - 1;
    }, 1000);
    clearCappucino()
    clearThe()
    clearPetitDejeuner()
    clearSecs()
    inputElem()
}
function clearDejeuner() {
    clearInterval(interval4)
}
//=======================================function pour input==========================
let interval5;
function setDuree() {
    let departMinute = Number(document.getElementById("input").value);
    if (departMinute > 0) {
        let tempt = departMinute * 60;
             interval5 = setInterval(() => {
                let minute = parseInt(tempt / 60);
                let seconde = parseInt(tempt % 60);
                minute = minute < sah0 ? "0" + minute :  minute;
                seconde = seconde < 10 ? '0' + seconde : seconde;
                H.textContent = `00:${minute}:${seconde}`;
                tempt = tempt <= 0 ? 0 : tempt - 1;
            }, 1000);
    } else {
        H.textContent = "undefined";
    }
    clearCappucino()
    clearThe()
    clearPetitDejeuner()
    clearSecs()
    clearDejeuner()
}
function inputElem() {
    clearInterval(interval5)
}
document.getElementById("input").addEventListener("change", setDuree)
//=======================================function be back==========================
let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();
console.log(h);
console.log(m);
console.log(s);


let actuellement = h + ":" + m + ":" + s;

document.getElementsByClassName('heureActuel').textContent = actuellement;
 


 */

/* 
function cappucino() {
    let departMinute = 5;
    let tempt = departMinute * 60;

interval = setInterval(() => {
    let minute = parseInt(tempt / 60);
    let seconde = parseInt(tempt % 60);
    if (minute < 10 && seconde < 10){
       minute = '0' + minute;
       seconde = '0' + seconde;
    }else{
        minute = minute;
        seconde = seconde;
    }
    H.textContent = `00:${minute}:${seconde}`;

if(tempt <= 0){
    tempt = 0;
}else{
    tempt = tempt - 1;
}

}, 1000)
} */

////////////* -----------------------------  Reprend tout----------------------------------------- */

/* let minutes,
 heures,
 secondes;

 minutes = 150;
heures = parseInt(minutes/60)
 console.log(heures);
 minutes = 150%60;
 console.log(minutes-1);

function temps(){
    second = 59
    second--
    if(seconde === 0){
        minutes--
        secondes = 59
    }else if()
} 

/* let btn20scd = document.getElementById('btn20')

btn20scd.addEventListener('click', ()=>{
  document.querySelector('.heure').innerHTML = '00:00:20'
}) */

let int = null;
let second = 0;
let minute = 0;
let heure = 0;
let btn;

let temps = document.querySelector(".heure");
function timeSetter() {
  second--;
  if (second <= 0) {
    second = 59;
    minute--
  }
  
  if (heure === 0 && minute === 0 && second === 0) {
    clearInterval(int);
    document.querySelector(".heure").innerHTML = ` 00 : 00: 00`;
  }
  document.querySelector(".heure").textContent = `${heure} : ${minute} : ${second}`;
}

let btn20scd = document.getElementById("btn20");
let cappucino = document.getElementById("cappucino");
let the = document.getElementById("the");
let petitDejeuner = document.getElementById("petitDejeuner");
let dejeuner = document.getElementById("dejeuner");
let input = document.getElementById("input");

btn20scd.addEventListener("click", () => {
  clearInterval(int);
  second = 20;
  minute = 0;
  heure = 0;
  int = setInterval(timeSetter(), 1000);
});

cappucino.addEventListener("click", () => {
  clearInterval(int);
  second = 0;
  minute = 2;
  heure = 0;
  int = setInterval(timeSetter, 1000);
});

the.addEventListener("click", () => {
  clearInterval(int);
  second = 0;
  minute = 15;
  heure = 0;
  int = setInterval(timeSetter, 1000);
});

petitDejeuner.addEventListener("click", () => {
  clearInterval(int);
  second = 0;
  minute = 20;
  heure = 0;
  int = setInterval(timeSetter(), 1000);
});

dejeuner.addEventListener("click", () => {
  clearInterval(int);
  second = 0;
  minute = 30;
  heure = 0;
  int = setInterval(timeSetter, 1000);
});

input.addEventListener("keyup", () => {
clearInterval(int);
let time = Number(input.value);
if(time < 0 ){
    alert ("undefined");
let timer = time * 60;
}
document.getElementById("input").addEventListener("change", timeSetter)
int = setInterval(timeSetter, 1000);
});
