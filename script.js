// ============================
// DALUB-ULAT SCRIPT
// ============================


// CHARACTER COUNTER

const reportBox = document.getElementById("report");
const counter = document.getElementById("count");


if(reportBox && counter){

    reportBox.addEventListener("input", function(){

        counter.textContent = this.value.length;

    });

}



// GENERATE REFERENCE NUMBER

function generateReference(){

    const date = new Date();

    const year = date.getFullYear();

    const random =
    Math.floor(
        100000 +
        Math.random() * 900000
    );


    return "DU-" + year + "-" + random;

}



// FORM SUBMISSION

const form = document.getElementById("reportForm");


if(form){

form.addEventListener("submit", function(){


    let reference =
    generateReference();


    document.getElementById(
        "referenceNumber"
    ).value = reference;



    localStorage.setItem(
        "dalubUlatReference",
        reference
    );



});

}
