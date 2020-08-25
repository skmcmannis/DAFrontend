//Front-end Javascript
//Author: Shawn McMannis
//Last Update: 8/25/2020

function loadLoginPopup() {
    document.getElementById('popup').style.display = "block";
    document.getElementById('loginPopupButton').style.display = "none";
}

function hideLoginPopup() {
    document.getElementById('popup').style.display = "none";
    document.getElementById('loginPopupButton').style.display = "block";
}