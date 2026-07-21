// DALUB-ULAT SCRIPT


// Character Counter

const reportBox = document.getElementById("report");
const counter = document.getElementById("count");


if(reportBox && counter){

    reportBox.addEventListener("input", function(){

        counter.textContent = this.value.length;

    });

}



// Generate Reference Number

function generateReference(){

    let year = new Date().getFullYear();

    let random = Math.floor(
        100000 + Math.random() * 900000
    );

    return "DU-" + year + "-" + random;

}



// Form Submission

const form = document.getElementById("reportForm");


if(form){

form.addEventListener("submit", function(){


    let reference = generateReference();


    localStorage.setItem(
        "dalubUlatReference",
        reference
    );


    let refInput = document.getElementById(
        "referenceNumber"
    );


    if(refInput){

        refInput.value = reference;

    }


});


}
