/* Place your JavaScript in this file */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            window.location.href = this.dataset.url;
        });
    });
});

