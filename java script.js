// script.js

document.addEventListener("DOMContentLoaded", function () {
    const cars = document.querySelectorAll(".car");

    cars.forEach((car) => {
        car.addEventListener("click", () => {
            alert(`Vous avez sélectionné : ${car.querySelector("h3").textContent}`);
        });
    });
});
