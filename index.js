/* =====================================================
   VISITOR COUNTER
===================================================== -->

// Visitor count starts at zero. A real multi-user visitor counter
// requires a server/database; this page does not fake visitor numbers.
document.getElementById("visitorCount").innerText = "0";



/* =====================================================
   DATE & TIME
===================================================== */

function updateDateTime() {

    const now = new Date();

    const date = now.toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const time = now.toLocaleTimeString();

    document.getElementById("currentDate").innerText = date;

    document.getElementById("currentTime").innerText = time;
}

setInterval(updateDateTime, 1000);

updateDateTime();



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});



/* =====================================================
   SCROLL ACTIVE NAV
===================================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   FADE IN ANIMATION
===================================================== */

const fadeSections =
    document.querySelectorAll(".fade-section");


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


fadeSections.forEach(function(section) {

    observer.observe(section);

});



/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        backTop.style.display = "flex";

    } else {

        backTop.style.display = "none";

    }

});


backTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

document
    .querySelectorAll(".navbar-nav .nav-link")
    .forEach(function(link) {

        link.addEventListener("click", function() {

            const nav =
                document.getElementById("mainNav");

            if (nav.classList.contains("show")) {

                bootstrap.Collapse
                    .getOrCreateInstance(nav)
                    .hide();

            }

        });

    });

function openLogin() {
    document.getElementById("loginOverlay").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginOverlay").style.display = "none";
}

function togglePassword() {
    const password = document.getElementById("loginPassword");
    const eye = document.getElementById("passwordEye");

    if (password.type === "password") {
        password.type = "text";
        eye.classList.remove("bi-eye");
        eye.classList.add("bi-eye-slash");
    } else {
        password.type = "password";
        eye.classList.remove("bi-eye-slash");
        eye.classList.add("bi-eye");
    }
}

// Custom Alert Function (With Custom Color)
function showCustomAlert(message) {
    const customAlert = document.createElement("div");
    customAlert.className = "custom-alert-box";
    customAlert.innerText = message;

    document.body.appendChild(customAlert);

    setTimeout(function() {
        customAlert.remove();
    }, 3000);
}

// Form Submit Handler
const loginFormElement = document.getElementById("loginFormElement");

if (loginFormElement) {
    loginFormElement.addEventListener("submit", function(event) {
        event.preventDefault();

        // Close login modal
        closeLogin();

        // Show custom colored alert
        showCustomAlert("Login successful! Welcome to Ever Peak!");
    });
}