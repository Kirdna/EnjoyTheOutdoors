"use strict";
console.log("Loading national-parks.js");

const nationalParkDataRow = document.getElementById("nationalParkDataRow");

const parkTypesArray = document.getElementById("parkTypeDataSelect");
const nationalParksDataArray = document.getElementsById("nationalParkData");

const locationsArray;



window.onload = function () {
    
    parkTypesArray.onchange = onPartTypesArrayChange;
    nationalParksDataArray.onchange = onNationalParksDataArrayChange;

    hideNationalParkDataArraySelect();
    hideNationalParkDataArrayDetail();



}

function onPartTypesArrayChange(){
    let currentParkType = parkTypesArray.value

}

function onNationalParksDataArrayChange(){
    let currentParkData
}







function hideNationalParkDataArrayDetail() {
    activityDetailRow.style.display = 'none';
}

function showActivityDetail() {
    activityDetailRow.style.display = 'block';
}

function hideNationalParkDataArraySelect() {
    nationalParkDataRow.style.display = "none";
}

function showNationslParkDataArraySelect() {
    nationalParkDataRow.style.display = "block";
}