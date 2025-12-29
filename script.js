const signupBtn = document.querySelector(".hero-section .button");
const cta = document.querySelector("#cta");

if (signupBtn && cta) {
    signupBtn.addEventListener("click", () => {
        cta.scrollIntoView({ behavior: "smooth" });
    });
} else {
    console.log("Missing button or #cta section");
}


const toggle = document.querySelector(".theme-toggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        const isDark = document.documentElement.dataset.theme === "dark";
        document.documentElement.dataset.theme = isDark ? "light" : "dark";
    });
}
