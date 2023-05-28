"use strict";
const parkLocationDropdown = document.getElementById("parkLocationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");
//radio options
const locationOption = document.getElementById("locationOption");
const parkTypeOption = document.getElementById("parkTypeOption");
//selec one of the dropdowns
const parkTypeSelect = document.getElementById("parkTypeSelect");
const locationSelect = document.getElementById("locationSelect");

const dropDownSelects = document.getElementById("dropDownSelects");

const parkDetailRow = document.getElementById("parkDetailRow");
//-------------------------------------------------------------------------
window.onload = () => {
    
    dropDownSelectsFunction();
    
    console.log("window load");
    
    parkLocationDropdown.onchange = parkLocationChange;
    parkTypeDropdown.onchange = parkTypeChange;

    locationOption.onchange = onLocationOptionChange;
    parkTypeOption.onchange = onParkTypeOptionChange;

    for(let parkState of locationDataArray) {
        let newOption = new Option(parkState);
        parkLocationDropdown.appendChild(newOption);       
    }
    
    for (let type of parkTypesArray) {
        let newOption = new Option(type);
        parkTypeDropdown.appendChild(newOption);
    }
    
}
//-------------------------------------------------------------------------
function dropDownSelectsFunction() {
    if (locationOption.checked)
        onLocationOptionChange();
}
//-------------------------------------------------------------------------
function onLocationOptionChange() {
    if (locationOption.checked) {
        
        //show location items
        locationSelect.style.display = "block";
        
        parkTypeSelect.style.display = "none";
        parkDetailRow.innerHTML = "";
        parkLocationDropdown.selectedIndex = 0;
        
    } else {
        //hide location items
        locationSelect.style.display = "none";
    }
}
//-------------------------------------------------------------------------
function onParkTypeOptionChange() {

    console.log("parkType");
    if (parkTypeOption.checked) {
        
        parkTypeSelect.style.display = "block";

        locationSelect.style.display = "none"
        parkDetailRow.innerHTML = "";
        parkTypeDropdown.selectedIndex = 0;

    } else {
        parkTypeSelect.style.display = "block";
    }

}
//-------------------------------------------------------------------------
function parkLocationChange() {
    let selectedState = parkLocationDropdown.value;
    const parksFilter =  nationalParksArray.filter(park => park.State === selectedState)
    console.log(parksFilter);

        parkDetailRow.innerHTML = "";

        if(parksFilter.length > 0) {
            for (let park of parksFilter) {
                makeParkCard(park);
            }
        }
        
    }
    //-------------------------------------------------------------------------
    function parkTypeChange() {
        let selectedType = parkTypeDropdown.value;
        const parksType = nationalParksArray.filter(park => park.LocationName.includes(selectedType));
        console.log(parksType);
        
        parkDetailRow.innerHTML = "";
        
        if(parksType.length > 0){
            for(let park of parksType){
                makeParkCard(park)
            }
            
        }
        
    }
    
//-----------------------COL------------------------------------------------------------
function makeParkCard(park) {

    let col = document.createElement("div");
    col.className = "col-6 my-5";
    parkDetailRow.appendChild(col);
//-----------------------CARD-------------------------------------------------------------
    let card = document.createElement("div");
    card.className = "card";
    col.appendChild(card);
//-----------------------CARD BODY-------------------------------------------------------------
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);
//--------------------------H4-------------------------------------------------------------
    let h4parkName = document.createElement("h4");
    h4parkName.className = "card-title";
    h4parkName.innerHTML = park.LocationName;
    cardBody.appendChild(h4parkName);
//------------------------------------------------------------------------------------
    let ulList = document.createElement("ul");
    ulList.className = "ul";
    h4parkName.appendChild(ulList);
//------------------------------------------------------------------------------------
    let listId = document.createElement("li");
    listId.className = "parkId";
    listId.innerHTML = "Id: " + park.LocationID;
    ulList.appendChild(listId);
//------------------------------------------------------------------------------------
let listAddress = document.createElement("li");
listAddress.className = "parkId";
listAddress.innerHTML = "Address: " + park.Address;
    listId.appendChild(listAddress);
//------------------------------------------------------------------------------------
    let listCity = document.createElement("li");
    listCity.className = "parkCity";
    listCity.innerHTML = "City: " + park.City;
    listAddress.appendChild(listCity);
//------------------------------------------------------------------------------------
    let listState = document.createElement("li");
    listState.className = "parkState";
    listState.innerHTML = "State: " + park.State;
    listCity.appendChild(listState);
//------------------------------------------------------------------------------------
    let listZipCode = document.createElement("li");
    listZipCode.className = "parkId";
    listZipCode.innerHTML = "Zip Code: " + park.ZipCode;
    ulList.appendChild(listZipCode);
}

// function populateNationalParksDataSelect(listOfParks, selectedType) {

//     nationalParksData.innerHTML = "";

//     let firstOption = new Option("PLease select a type of park!", "");
//     nationalParksData.appendChild(firstOption);

//     let typesOfParks = getTypesOfParks(listOfParks, selectedType);

//     for (let thisPark of typesOfParks) {
//         let theOption = new Option(thisPark.LocationName);
//         nationalParksData.appendChild(theOption);
//         console.log("The new option has been added to the dropdown.")
//     }

// }
// //----------------------------HELP---------------------------------------------
// function getTypesOfParks(listOfParks, LocationName) {
//     let result = [];

//     for (let thisPark of listOfParks) {
//         if (thisPark.LocationName == LocationName) {
//             result.push(thisPark)
//         }
//     }
//     return result;
// }
// //------------------------HELP---------------------------------------
// function onNationalParksDataChange() {

//     let selectedParkId = nationalParksData.value;

//     if(selectedParkId == "") {
//         hideNationalParkDataDetail();

//     }
//     else {

//         let selectedPark = getParkByType(selectedParkId);

//         parkLocationName.innerHTML = selectedPark.LocationName
//         parkLocationId.innerHTML = selectedPark.LocationID
//         parkAddress.innerHTML = selectedPark.parkAddress
//         parkCity.innerHTML = selectedPark.parkCity
//         parkState.innerHTML = selectedPark.State
//         parkZipCode.innerHTML = selectedPark.ZipCode

//         showNationalParkDataDetail();

//     }

// }
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
// function hideNationalParkDataDetail() {
//     parkDetailRow.style.display = 'none';
// }

// function showNationalParkDataDetail() {
//     parkDetailRow.style.display = 'block';
// }

// function hideNationalParkDataSelect() {
//     nationalDataSelectRow.style.display = "none";
// }

// function showNationslParkDataSelect() {
//     nationalDataSelectRow.style.display = "block";
// }