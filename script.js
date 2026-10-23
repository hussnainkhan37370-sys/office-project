// MOBILE NAVBAR
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    const isOpen = navbar.classList.toggle("open");

    // Three lines change into cross
    menuToggle.classList.toggle("active", isOpen);

    // Accessibility
    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


// CLOSE MENU WHEN A LINK IS CLICKED
const navLinks = navbar.querySelectorAll("a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});


// AUTOMATIC COPYRIGHT YEAR
const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// SCROLL REVEAL ANIMATION
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observerInstance.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealItems.forEach((item) => {
        observer.observe(item);
    });

} else {

    revealItems.forEach((item) => {
        item.classList.add("visible");
    });

}