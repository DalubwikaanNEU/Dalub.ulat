/* ==========================
   DALUB-ULAT SCRIPT.JS
   Dalubwikaan Reporting System
========================== */


/* ==========================
   CHARACTER COUNTER
========================== */

const reportBox = document.getElementById("report");
const counter = document.getElementById("count");


if(reportBox && counter){

    reportBox.addEventListener("input", function(){

        counter.textContent = this.value.length;

    });

}



/* ==========================
   REFERENCE NUMBER GENERATOR
========================== */


function generateReference(){

    let year = new Date().getFullYear();

    let randomNumber = Math.floor(
        100000 + Math.random() * 900000
    );


    return "DU-" + year + "-" + randomNumber;

}



/* ==========================
   SAVE REFERENCE NUMBER
========================== */


const form = document.getElementById("reportForm");


if(form){

form.addEventListener("submit", function(){


    let reference = generateReference();


    localStorage.setItem(
        "dalubUlatReference",
        reference
    );


    localStorage.setItem(
        "dalubUlatDate",
        new Date().toLocaleDateString("tl-PH")
    );


});


}
