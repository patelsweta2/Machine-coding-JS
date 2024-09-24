let stars = document.querySelectorAll(".stars i");
let ratingValue = document.getElementById("ratingValue");

stars.forEach((star, index) => {
  star.addEventListener("click", function () {
    const rating = this.getAttribute("data-rating");
    console.log("Star clicked with rating:", rating);

    stars.forEach((s) => {
      s.classList.remove("active");
    });
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add("active");
    }

    ratingValue.textContent = rating;
  });
});
