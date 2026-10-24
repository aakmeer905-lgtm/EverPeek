document.addEventListener("DOMContentLoaded", function () {
    /* =========================
       VISITOR COUNT
       ALWAYS 0
    ========================= */
    const visitorCountEl = document.getElementById("visitorCount");
    if (visitorCountEl) {
        visitorCountEl.innerText = "0";
    }

    /* =========================
       ACTIVE NAVIGATION
    ========================= */
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    /* =========================
       MESSAGE CHARACTER COUNTER
    ========================= */
    const messageInput = document.getElementById("message");
    const messageCount = document.getElementById("messageCount");

    if (messageInput && messageCount) {
        messageInput.addEventListener("input", function () {
            messageCount.textContent = this.value.length;
        });
    }

    /* =========================
       FRONT-END FORM VALIDATION
    ========================= */
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm && formFeedback) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            formFeedback.classList.remove(
                "d-none",
                "alert-danger",
                "alert-success"
            );

            formFeedback.classList.add("alert-success");

            formFeedback.textContent =
                "Your form has passed validation. To actually send this message, " +
                "connect the form to a backend or email form service.";

            formFeedback.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        });
    }

    /* =========================
       BACK TO TOP
    ========================= */
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 400) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* =========================
       FOOTER YEAR
    ========================= */
    const currentYearEl = document.getElementById("currentYear");
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
});