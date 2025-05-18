
// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Fade In on Scroll
const fadeIns = document.querySelectorAll(".fade-in");
function handleScroll() {
    fadeIns.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// Loader Effect
window.addEventListener("load", () => {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.style.opacity = 0;
    setTimeout(() => loaderWrapper.style.display = "none", 500);
});
