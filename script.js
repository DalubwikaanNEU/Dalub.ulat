// ==========================
// DALUB-ULAT SCRIPT
// ==========================

// Character Counter
const reportBox = document.getElementById("report");
const counter = document.getElementById("count");

if (reportBox && counter) {
    reportBox.addEventListener("input", function () {
        counter.textContent = this.value.length;
    });
}

// Form
const form = document.getElementById("reportForm");

if (form) {

    form.addEventListener("submit", function () {

        // Gumawa ng Reference Number
        const year = new Date().getFullYear();
        const random = Math.floor(100000 + Math.random() * 900000);
        const reference = `DU-${year}-${random}`;

        // Save sa hidden input (kasama sa email)
        document.getElementById("referenceNumber").value = reference;

        // Save locally para makita sa salamat.html
        localStorage.setItem("dalubUlatReference", reference);

    });

}
