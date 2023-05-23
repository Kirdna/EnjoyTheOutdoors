"use strict";
console.log("Loading national-parks.js");
//-------------------------------------------------------------------------
const nationalDataDetailRow = document.getElementById("nationalParkDataDetailRow");
const nationalDataSelectRow = document.getElementById("nationalParkDataSelectRow");
//-------------------------------------------------------------------------
const parkTypes = document.getElementById("parkTypeSelect");
const nationalParksData = document.getElementsById("nationalParkData");
//-------------------------------------------------------------------------
const parkLocationName = document.getElementById("parkLocationName");
const parkLocationId = document.getElementById("parkLocationId");
const parkAddress = document.getElementById("parkAddress");
const parkCity = document.getElementById("parkCity");
const parkState = document.getElementById("parkState");
const parkZipCode = document.getElementById("parkZipCode");
//-------------------------------------------------------------------------
window.onload = function () {
    
    parkTypes.onchange = onParkTypeChange;
    nationalParksData.onchange = onNationalParksDataChange;

    hideNationalParkDataSelect();
    hideNationalParkDataDetail();

}
//-------------------------------------------------------------------------
function onParkTypeChange(){
    let currentParkType = parkTypes.value;

    if (currentParkType == "") {
        hideNationalParkDataSelect();
    }
    else {
        console.log(` ${currentParkType} value has been selected for type. `)
    
    populateNationalParksDataSelect(nationalParksData, currentParkType);
    
    showNationslParkDataSelect();
    
    }

    hideNationalParkDataDetail();

}
//-------------------------------------------------------------------------
function populateNationalParksDataSelect(listOfParks, selectedType) {

    nationalParksData.innerHTML = "";

    let firstOption = new Option("PLease select a type of park!", "");
    nationalParksData.appendChild(firstOption);

    let typesOfParks = getTypesOfParks(listOfParks, selectedType);

    for (let thisPark of typesOfParks) {
        let theOption = new Option(thisPark.LocationName, thisPark.State);
        nationalParksData.appendChild(theOption);
        console.log("The new option has been added to the dropdown.")
    }

}
//-------------------------------------------------------------------------
function getTypesOfParks(listOfParks, LocationName) {
    let result = [];

    for (let thisPark of listOfParks) {
        if (thisPark.LocationName == LocationName) {
            result.push(thisPark)
        }
    }
    return result;
}
//----------------------------------------------------------------
function onNationalParksDataChange() {

    let selectedParkId = nationalParksData.value;

    if(selectedParkId == "") {
        hideNationalParkDataDetail();

    }
    else {

        let selectedPark = getParkByType(selectedParkId);

        parkLocationName.innerHTML = selectedPark.LocationName
        parkLocationId.innerHTML = selectedPark.LocationID
        parkAddress.innerHTML = selectedPark.parkAddress
        parkCity.innerHTML = selectedPark.parkCity
        parkState.innerHTML = selectedPark.State
        parkZipCode.innerHTML = selectedPark.ZipCode

        showNationalParkDataDetail();

    }

}
//-------------------------------------------------------------------------
function getParkByType(LocationName) {
    for (let i = 0; i < nationalParksData.length; 1++) {
        let thisPark = nationalParksData[i];
        if (thisPark.LocationName == LocationName) {
            return thisPark;
        }
    }
}
//-------------------------------------------------------------------------
function hideNationalParkDataDetail() {
    nationalDataDetailRow.style.display = 'none';
}

function showNationalParkDataDetail() {
    nationalDataDetailRow.style.display = 'block';
}

function hideNationalParkDataSelect() {
    nationalDataSelectRow.style.display = "none";
}

function showNationslParkDataSelect() {
    nationalDataSelectRow.style.display = "block";
}