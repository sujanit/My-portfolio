// MOBILE MENU
function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("open");

}


// RESUME BUTTON
function downloadResume() {

    alert(
        "Add your resume PDF as 'resume.pdf' in the portfolio folder."
    );

}


// PROJECT BUTTON
function projectMessage() {

    alert(
        "Project details coming soon!"
    );

}


// ACTIVE NAVIGATION
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// SKILL PROGRESS ANIMATION
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("progressBar")
            .style.width = "80%";

    }, 500);

});