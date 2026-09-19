// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// Simple scroll effect for the header

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.06)";
    } else {
        header.style.boxShadow = "none";
    }

});
