document.addEventListener("DOMContentLoaded", function () {
    /* =========================
       VISITOR COUNT (ALWAYS 0)
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

    /* ==========================================
       GADGET FILTERING AND SEARCH
    ========================================= */
    const filterButtons = document.querySelectorAll(".filter-btn");
    const gadgetItems = document.querySelectorAll(".gadget-item");
    const gadgetSearch = document.getElementById("gadgetSearch");
    const noResults = document.getElementById("noResults");

    let activeFilter = "all";

    function filterGadgets() {
        if (!gadgetSearch) return;
        const searchTerm = gadgetSearch.value.toLowerCase().trim();
        let visibleCount = 0;

        gadgetItems.forEach(function (item) {
            const categories = item.dataset.category.split(" ");
            const text = item.textContent.toLowerCase();

            const matchesCategory =
                activeFilter === "all" || categories.includes(activeFilter);
            const matchesSearch = text.includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                item.style.display = "";
                visibleCount++;
            } else {
                item.style.display = "none";
            }
        });

        if (noResults) {
            noResults.style.display = visibleCount === 0 ? "block" : "none";
        }
    }

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");
            activeFilter = button.dataset.filter;

            filterGadgets();
        });
    });

    if (gadgetSearch) {
        gadgetSearch.addEventListener("input", filterGadgets);
    }

    /* ==========================================
       PACKING CHECKLIST PROGRESS
    ========================================= */
    const packingChecks = document.querySelectorAll(".packing-check");
    const checkProgressText = document.getElementById("checkProgressText");
    const checkProgressBar = document.getElementById("checkProgressBar");

    function updateChecklistProgress() {
        const total = packingChecks.length;
        let completed = 0;

        packingChecks.forEach(function (checkbox) {
            if (checkbox.checked) {
                completed++;
            }
        });

        const percentage = total > 0 ? (completed / total) * 100 : 0;

        if (checkProgressText) {
            checkProgressText.textContent = completed + " of " + total + " completed";
        }
        if (checkProgressBar) {
            checkProgressBar.style.width = percentage + "%";
        }
    }

    packingChecks.forEach(function (checkbox) {
        checkbox.addEventListener("change", updateChecklistProgress);
    });

    const resetChecklistBtn = document.getElementById("resetChecklist");
    if (resetChecklistBtn) {
        resetChecklistBtn.addEventListener("click", function () {
            packingChecks.forEach(function (checkbox) {
                checkbox.checked = false;
            });
            updateChecklistProgress();
        });
    }

    updateChecklistProgress();

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================= */
    const backTop = document.getElementById("backTop");

    if (backTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 400) {
                backTop.style.display = "flex";
            } else {
                backTop.style.display = "none";
            }
        });

        backTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* ==========================================
       CURRENT YEAR
    ========================================= */
    const currentYearEl = document.getElementById("currentYear");
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
});