const mobileMenuIcon = document.querySelector(".menu-icon");
const mobileMainList = document.querySelector(".mobile-menu");
const content = document.querySelector(".content");
const x = window.matchMedia("(max-width: 737px)")
mobileMenuIcon.addEventListener("click", () => {
    if (mobileMainList.style.display == "block") {
        mobileMainList.style.display = "none";
        mobileMenuIcon.src = "../images/icon-hamburger.svg";
        content.style.display = "flex"
    } else {
        mobileMainList.style.display = "block";
        mobileMenuIcon.src = "../images/icon-close.svg"
        content.style.display = "none"
    }

})