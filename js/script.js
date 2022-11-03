const form = document.getElementsByTagName("form");
const ratingCard = document.getElementById("rating-state");
const tyCard = document.getElementById("ty-state");
let ratingOutput = document.getElementById("rating-output");

/* Get rating and Show it in ratingOutput */
function setRating() {
    const rating = document.querySelector('input[name="rate"]:checked').value;

    ratingOutput.textContent = rating;
}

/* Submit Form and Change Card */
function sub() {
    ratingCard.style.display = "none"; // Hide rating form card

    tyCard.style.display = null; // Delete display style because it will hinder css from style.css
    setRating(); // show rating
}
