const ratingContainer = document.querySelector("#rating-box");
const thankYouContainer = document.querySelector("#thank-you-box");
const submit = document.querySelector(".submit-btn");
const ratingSolution = document.querySelector("#rating");
const ratingButton = document.querySelector(".btn");


submit.addEventListener("click", () => {
    ratingContainer.style.display = "none";
    thankYouContainer.style.display = "block";

    ratingButton.forEach((rating) => {
        rating.addEventListener("click", () => {
          ratingSolution.innerHTML = rating.innerHTML
        })
      })

})
