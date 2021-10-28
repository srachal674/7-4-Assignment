//Author: Shannon Rachal
//Date:   10/24/21

"use strict";

var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");

//Function to process delivery info
function processDeliveryInfo() {
    var prop;

    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;

    for (prop in delivInfo) {
        delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
    }
}

//Function to preview order
function previewOrder() {
    processDeliveryInfo();
    document.getElementById("section").style.display = "block";
}

function createEventListner() {
    var previewButton = document.getElementById("previewBtn");
    if (previewButton.addEventListner) {
        previewButton.addEventListner("click", previewOrder, false);
    } else if (previewButton.attachEvent) {
        previewButton.attachEvent("onclick", previewOrder);
    }
}

if (window.addEventListner) {
    window.addEventListner("load", createEventListner, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListner);
}

