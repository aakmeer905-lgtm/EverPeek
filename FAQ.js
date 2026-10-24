document.addEventListener("DOMContentLoaded", function () {
    // Current Year Update
    const currentYearEl = document.getElementById("currentYear");
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // FAQ Search functionality
    const searchInput = document.getElementById("faqSearch");
    const faqItems = document.querySelectorAll(".accordion-item");
    const categories = document.querySelectorAll(".faq-category");
    const noResults = document.getElementById("noResults");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchText = this.value.toLowerCase().trim();
            let visibleCount = 0;

            faqItems.forEach(function (item) {
                const matches = item.textContent.toLowerCase().includes(searchText);
                item.style.display = matches ? "" : "none";

                if (matches) {
                    visibleCount++;
                }
            });

            categories.forEach(function (category) {
                const accordion = category.nextElementSibling;
                const visibleQuestions = accordion
                    ? accordion.querySelectorAll('.accordion-item:not([style*="display: none"])')
                    : [];

                category.style.display = visibleQuestions.length > 0 ? "" : "none";
            });

            if (noResults) {
                noResults.style.display = visibleCount === 0 ? "block" : "none";
            }
        });
    }

    // Visitor Count (Explicitly 0 as requested)
    const visitorCountEl = document.getElementById("visitorCount");
    if (visitorCountEl) {
        visitorCountEl.innerText = "0";
    }
});