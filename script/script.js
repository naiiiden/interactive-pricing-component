document.getElementById("toggle").addEventListener("click", () => {
    document.getElementById("show").classList.toggle("show_monthly");
});

const values = [8, 12, 16, 24, 36];
const input = document.getElementById("range");
const output = document.getElementById("output");
const pageviews = document.getElementById("pageviews");
const pageviewsMobile = document.getElementById("pageviewsMobile");

input.oninput = function(){
    output.textContent = values[this.value];
    
    if (values[this.value] == 8) {
        pageviews.textContent = "10K pageviews";
        output.textContent = "$8.00";
    } else if (values[this.value] == 12) {
        pageviews.textContent = "50K pageviews";
        output.textContent = "$12.00";
    } else if (values[this.value] == 16) {
        pageviews.textContent = "100K pageviews";
        output.textContent = "$16.00";
    } else if (values[this.value] == 24) {
        pageviews.textContent = "500K pageviews";
        output.textContent = "$24.00";
    } else if (values[this.value] == 36) {
        pageviews.textContent = "1M pageviews";
        output.textContent = "$36.00";
    }

    if (values[this.value] == 8) {
        pageviewsMobile.textContent = "10K pageviews";
    } else if (values[this.value] == 12) {
        pageviewsMobile.textContent = "50K pageviews";
    } else if (values[this.value] == 16) {
        pageviewsMobile.textContent = "100K pageviews";
    } else if (values[this.value] == 24) {
        pageviewsMobile.textContent = "500K pageviews";
    } else if (values[this.value] == 36) {
        pageviewsMobile.textContent = "1M pageviews";
    }
};
input.oninput();

const valuesYearly = [6, 9, 12, 18, 27];
const inputYearly = document.getElementById("rangeYearly");
const outputYearly = document.getElementById("outputYearly");
const pageviewsYearly = document.getElementById("pageviewsYearly");
const pageviewsYearlyMobile = document.getElementById("pageviewsYearlyMobile");

inputYearly.oninput = function(){
    outputYearly.textContent = valuesYearly[this.value];

    if (valuesYearly[this.value] == 6) {
        pageviewsYearly.textContent = "10K pageviews";
        outputYearly.textContent = "$6.00";
    } else if (valuesYearly[this.value] == 9) {
        pageviewsYearly.textContent = "50K pageviews";
        outputYearly.textContent = "$9.00";
    } else if (valuesYearly[this.value] == 12) {
        pageviewsYearly.textContent = "100K pageviews";
        outputYearly.textContent = "$12.00";
    } else if (valuesYearly[this.value] == 18) {
        pageviewsYearly.textContent = "500K pageviews";
        outputYearly.textContent = "$18.00";
    } else if (valuesYearly[this.value] == 27) {
        pageviewsYearly.textContent = "1M pageviews";
        outputYearly.textContent = "$27.00";
    }

    if (valuesYearly[this.value] == 6) {
        pageviewsYearlyMobile.textContent = "10K pageviews";
    } else if (valuesYearly[this.value] == 9) {
        pageviewsYearlyMobile.textContent = "50K pageviews";
    } else if (valuesYearly[this.value] == 12) {
        pageviewsYearlyMobile.textContent = "100K pageviews";
    } else if (valuesYearly[this.value] == 18) {
        pageviewsYearlyMobile.textContent = "500K pageviews";
    } else if (valuesYearly[this.value] == 27) {
        pageviewsYearlyMobile.textContent = "1M pageviews";
    }
};
inputYearly.oninput();


// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month