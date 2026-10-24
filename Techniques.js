/* =========================
       VISITOR COUNT
    ========================= */

    document.getElementById("visitorCount").innerText = "0";


    /* =========================
       NAVBAR ACTIVE
    ========================= */

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


    


    /* =========================
       BACK TO TOP
    ========================= */

    const backTop =
        document.getElementById("backTop");

    window.addEventListener("scroll", function() {

        if (window.scrollY > 400) {

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
