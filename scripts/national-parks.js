"use strict";
console.log("Loading national-parks.js");
//-------------------------------------------------------------------------
const parkDetailRow = document.getElementById("parkDetailRow");
const nationalDataSelectRow = document.getElementById("nationalParkDataSelectRow");
const parkTypeSelectRow = document.getElementById("parkTypeSelectRow")
//-------------------------------------------------------------------------
const parkLocationName = document.getElementById("parkLocationName");
const parkLocationId = document.getElementById("parkLocationId");
const parkAddress = document.getElementById("parkAddress");
const parkCity = document.getElementById("parkCity");
const parkState = document.getElementById("parkState");
const parkZipCode = document.getElementById("parkZipCode");
//-------------------------------------------------------------------------
window.onload = () => {
    console.log("window load");
    parkTypeSelectRow.onchange = onParkTypeChange;
    //nationalParksData.onchange = onNationalParksDataChange;
    
    hideNationalParkDataSelect();
    hideNationalParkDataDetail();

    for(let parkType of parkTypesArray) {
        let newOption = new Option(parkType);
        parkTypeSelectRow.appendChild(newOption);       
    }
    
}
//-------------------------------------------------------------------------
function onParkTypeChange() {
    console.log(parkTypeSelectRow);
};
//-------------------------------------------------------------------------------
//function onLocationChange(){

//}


    // let currentParkType = parkTypes.value;

    // if (currentParkType == "") {
    //     hideNationalParkDataSelect();
    // }
    // else {
    //     console.log(` ${currentParkType} value has been selected for type. `)
    
    // populateNationalParksDataSelect(nationalParksData, currentParkType);
    
    // showNationslParkDataSelect();
    
    // }

    //hideNationalParkDataDetail();

//}
//-------------------------------HELP------------------------------------------
function populateNationalParksDataSelect(listOfParks, selectedType) {

    nationalParksData.innerHTML = "";

    let firstOption = new Option("PLease select a type of park!", "");
    nationalParksData.appendChild(firstOption);

    let typesOfParks = getTypesOfParks(listOfParks, selectedType);

    for (let thisPark of typesOfParks) {
        let theOption = new Option(thisPark.LocationName);
        nationalParksData.appendChild(theOption);
        console.log("The new option has been added to the dropdown.")
    }

}
//----------------------------HELP---------------------------------------------
function getTypesOfParks(listOfParks, LocationName) {
    let result = [];

    for (let thisPark of listOfParks) {
        if (thisPark.LocationName == LocationName) {
            result.push(thisPark)
        }
    }
    return result;
}
//------------------------HELP---------------------------------------
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
//----------------------------HELP--------------------------------------------
// function getParkByType(LocationName) {
//     for (let i = 0; i < nationalParksData.length; 1++) {
//         let thisPark = nationalParksData[i];
//         if (thisPark.LocationName == LocationName) {
//             return thisPark;
//         }
//     }
// }
//-------------------------------------------------------------------------
function hideNationalParkDataDetail() {
    parkDetailRow.style.display = 'none';
}

function showNationalParkDataDetail() {
    parkDetailRow.style.display = 'block';
}

function hideNationalParkDataSelect() {
    nationalDataSelectRow.style.display = "none";
}

function showNationslParkDataSelect() {
    nationalDataSelectRow.style.display = "block";
}