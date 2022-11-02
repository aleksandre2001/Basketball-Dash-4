let homePP = 0
let homeP = document.getElementById("home-p")
homeP.textContent = homePP;
 
let guestPP = 0
let guestP = document.getElementById("guest-p")
guestP.textContent = guestPP

let rematchButton = document.getElementById("rematch-button")

let homeResult =0;
function homeAdd1(){
    homeResult = homeResult+ homePP + 1;
    homeP.textContent = homeResult;
 }

 function homeAdd2(){
    homeResult = homeResult+ homePP + 2;
    homeP.textContent = homeResult;
 }
 function homeAdd3(){
    homeResult = homeResult+ homePP + 3;
    homeP.textContent = homeResult;
 }

let guestResult = 0 
function guestAdd1(){
    guestResult = guestResult + guestPP + 1
    guestP.textContent = guestResult 
 }
 function guestAdd2(){
    guestResult = guestResult + guestPP + 2
    guestP.textContent = guestResult 
 }
 function guestAdd3(){
    guestResult = guestResult + guestPP + 3
    guestP.textContent = guestResult 
 }


function rematch(){
    homeResult = 0
    guestResult = 0
    homeP.textContent = homeResult
    guestP.textContent = guestResult 
}