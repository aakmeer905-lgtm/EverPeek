/* MOUNTAINEERING GADGET DATA */
const gadgets = [
    {
        name: "Alpenstock",
        category: "Historical",
        era: 1500,
        period: "Medieval and Early Alpine Travel",
        image: "images pro/images 14.jpg",
        alt: "Walking terrain in a mountain environment",
        description: "A long wooden staff with a pointed metal tip, used by early mountain travellers, shepherds and climbers.",
        use: "Support and balance on snow, ice and rough ground.",
        fact: "An important ancestor of the modern ice axe."
    },
    {
        name: "Technical Insulated Jacket",
        category: "Clothing",
        era: 1980,
        period: "Modern Mountain Clothing",
        image: "images pro/images (14).jpg",
        alt: "Outdoor jacket",
        description: "Insulated jackets use down or synthetic materials to help retain warmth in cold mountain environments.",
        use: "Thermal protection during stops, camps and cold conditions.",
        fact: "A complete layering system also needs wind and moisture protection."
    },
    {
        name: "Wooden Walking Staff",
        category: "Historical",
        era: 1000,
        period: "Ancient and Traditional Travel",
        image: "images pro/images (16).jpg",
        alt: "Forest trail",
        description: "A simple staff made from wood. Walking sticks have been used across many cultures for travel over uneven terrain.",
        use: "Balance, support and testing ground ahead.",
        fact: "A simple tool with many regional designs."
    },
    {
        name: "Traditional Rope",
        category: "Historical",
        era: 1700,
        period: "Early Mountaineering",
        image: "images pro/Image 20.jpeg",
        alt: "Climbing rope and climbing equipment",
        description: "Early climbing teams used natural-fibre ropes. Modern climbing ropes are engineered and tested for specific uses.",
        use: "Rope travel and protection when used with proper technique.",
        fact: "Old natural-fibre ropes are not substitutes for modern certified climbing ropes."
    },
    {
        name: "Oil Lantern",
        category: "Historical",
        era: 1800,
        period: "Traditional Camps",
        image: "images pro/images (11).jpg",
        alt: "Camping equipment outdoors",
        description: "Fuel-burning lanterns were used for light in camps before modern battery-powered headlamps became common.",
        use: "Lighting tents and camps.",
        fact: "Modern LED lighting is generally easier to carry and safer for tent interiors."
    },
    {
        name: "Pocket Compass",
        category: "Traditional",
        era: 1800,
        period: "Traditional Navigation",
        image: "images pro/image34.jpg",
        alt: "Outdoor wilderness landscape",
        description: "A magnetic compass helps users determine direction and follow a bearing when used with a map and navigation skills.",
        use: "Navigation in forests, valleys and remote mountain terrain.",
        fact: "It does not need a phone signal or battery."
    },
    {
        name: "Classic Ice Axe",
        category: "Traditional",
        era: 1840,
        period: "Nineteenth-Century Alpine Climbing",
        image: "images pro/image32.jpg",
        alt: "Snowy mountain slope",
        description: "The modern ice axe evolved from separate tools including a long alpenstock and a small axe.",
        use: "Self-arrest, support and climbing on snow and ice when the correct axe and technique are used.",
        fact: "The appropriate axe depends on terrain and climbing activity."
    },
    {
        name: "Metal Crampons",
        category: "Traditional",
        era: 1908,
        period: "Early Twentieth-Century Alpine Climbing",
        image:"images pro/image31.jpg",
        alt: "Snow and ice-covered mountain",
        description: "Crampons attach to suitable boots and provide metal points for grip on snow and ice.",
        use: "Steep snow, glacier travel and ice climbing.",
        fact: "Crampons must be compatible with boots and appropriate for the route."
    },
    {
        name: "Mountaineering Helmet",
        category: "Safety",
        era: 1900,
        period: "Modern Climbing Safety",
        image: "images pro/image25.jpg",
        alt: "Climbing equipment",
        description: "Climbing helmets are designed to reduce certain head-injury risks from impacts and falling debris.",
        use: "Protection on rock routes, climbing walls and alpine terrain.",
        fact: "Choose a certified helmet suitable for the activity."
    },
    {
        name: "Carabiner",
        category: "Traditional",
        era: 1910,
        period: "Technical Climbing",
        image: "images pro/Image 24.jpeg",
        alt: "Climbing rope and equipment",
        description: "A metal connector used in climbing systems, available in different shapes and locking mechanisms.",
        use: "Connecting compatible climbing equipment and protection systems.",
        fact: "Use only climbing-rated connectors and follow manufacturer instructions."
    },
    {
        name: "Modern Climbing Harness",
        category: "Safety",
        era: 1960,
        period: "Modern Technical Climbing",
        image: "images pro/Image30.jpeg",
        alt: "Climbing gear",
        description: "A fitted harness distributes load around the body and connects a climber to a rope system.",
        use: "Rope climbing, belaying and mountaineering systems.",
        fact: "Correct fitting and knot or connector checks are essential."
    },
    {
        name: "Modern Headlamp",
        category: "Modern",
        era: 1990,
        period: "Battery-Powered Lighting",
        image: "images pro/image29.png",
        alt: "Outdoor camping equipment",
        description: "LED headlamps provide hands-free lighting and often include different brightness and beam settings.",
        use: "Night approaches, camp tasks and unexpected delays.",
        fact: "Carry backup power for long trips."
    },
    {
        name: "Digital Altimeter",
        category: "Modern",
        era: 1990,
        period: "Electronic Navigation",
        image: "images pro/images 19.jpg",
        alt: "High mountain peaks",
        description: "An altimeter estimates elevation, often using air pressure or satellite positioning.",
        use: "Monitoring elevation gain and comparing position with a route plan.",
        fact: "Barometric readings can change with weather and need calibration."
    },
    {
        name: "Handheld GPS",
        category: "Modern",
        era: 1990,
        period: "Satellite Navigation",
        image: "images pro/images (9).jpg",
        alt: "Remote mountain terrain",
        description: "Handheld GPS units calculate position from satellite signals and may support topographic maps and track recording.",
        use: "Position finding and route navigation away from roads.",
        fact: "A GPS receiver does not guarantee a safe route."
    },
    {
        name: "GPS Smartwatch",
        category: "Modern",
        era: 2010,
        period: "Wearable Navigation",
        image: "images pro/image28.jpg",
        alt: "Wearable watch",
        description: "Outdoor watches can track routes, elevation, activity and weather-related information depending on the model.",
        use: "Navigation support, tracking and monitoring activity.",
        fact: "Check battery life and offline map support before an expedition."
    },
    {
        name: "Satellite Messenger",
        category: "Safety",
        era: 2000,
        period: "Off-Grid Communication",
        image: "images pro/image38.jpg",
        alt: "Electronic devices",
        description: "Satellite messengers can send messages and, on supported services, emergency SOS alerts beyond ordinary mobile coverage.",
        use: "Emergency communication and check-ins in remote areas.",
        fact: "Features, coverage and subscription requirements vary by device and region."
    },
    {
        name: "Personal Locator Beacon",
        category: "Safety",
        era: 1990,
        period: "Emergency Location Technology",
        image: "images pro/images (17).jpg",
        alt: "Electronic safety technology",
        description: "A PLB transmits a distress signal through a dedicated satellite rescue system when activated.",
        use: "Calling for rescue during serious emergencies in remote areas.",
        fact: "Register the beacon where required and learn how to activate it."
    },
    {
        name: "Avalanche Transceiver",
        category: "Safety",
        era: 1970,
        period: "Avalanche Rescue Technology",
        image: "images pro/images (18).jpg",
        alt: "Snowy outdoor environment",
        description: "An avalanche transceiver transmits and receives signals to help locate a buried person wearing a compatible device.",
        use: "Partner rescue in avalanche terrain.",
        fact: "Training and practice are necessary; carrying one alone is not enough."
    },
    {
        name: "Avalanche Probe",
        category: "Safety",
        era: 1970,
        period: "Snow Rescue Equipment",
        image: "images pro/download (110).jpg",
        alt: "Snowy mountain landscape",
        description: "A collapsible probe is used to pinpoint the location and depth of a person buried in snow after a transceiver search.",
        use: "Locating a buried person before digging.",
        fact: "Used with an avalanche transceiver and shovel."
    },
    {
        name: "Avalanche Shovel",
        category: "Safety",
        era: 1970,
        period: "Snow Rescue Equipment",
        image: "images pro/images (21).jpg",
        alt: "Snow-covered terrain",
        description: "A compact shovel is designed for digging in snow and is an essential part of avalanche rescue equipment.",
        use: "Digging snow pits and rescuing buried companions.",
        fact: "Practise efficient shovelling techniques before travelling in avalanche terrain."
    },
    {
        name: "Satellite Communicator with SOS",
        category: "Modern",
        era: 2020,
        period: "Modern Backcountry Technology",
        image: "images pro/image38.jpg",
        alt: "Modern electronic technology",
        description: "Newer satellite communicators may offer two-way messaging, location sharing and emergency features.",
        use: "Communication when travelling beyond normal mobile networks.",
        fact: "A current equipment guide discusses devices such as satellite communicators."
    },
    {
        name: "Solar Power Bank",
        category: "Modern",
        era: 2010,
        period: "Portable Power",
        image: "images pro/image37.jpg",
        alt: "Electronic devices and accessories",
        description: "A portable power bank stores energy for recharging compatible devices. Solar panels can supplement charging in suitable conditions.",
        use: "Keeping phones, GPS devices and headlamps powered.",
        fact: "Solar charging can be slow in cloudy weather and short winter days."
    },
    {
        name: "Digital Weather Meter",
        category: "Modern",
        era: 2000,
        period: "Weather Monitoring",
        image: "images pro/image36.jpg",
        alt: "Weather conditions",
        description: "Portable instruments can measure selected environmental conditions such as temperature, pressure or wind.",
        use: "Supporting weather observations and expedition planning.",
        fact: "A small meter cannot replace official forecasts or mountain-weather knowledge."
    },
    {
        name: "Action Camera",
        category: "Modern",
        era: 2010,
        period: "Adventure Recording",
        image: "images pro/images (12).jpg",
        alt: "Camera equipment",
        description: "Small action cameras can record hands-free video and photographs in challenging outdoor environments.",
        use: "Documenting climbing trips and training sessions.",
        fact: "Recording should never distract from safe climbing."
    },
    {
        name: "Modern Mountaineering Boots",
        category: "Clothing",
        era: 2000,
        period: "Technical Footwear",
        image: "images pro/image26.png",
        alt: "Outdoor footwear",
        description: "Modern mountain boots vary from flexible trekking footwear to insulated boots designed for crampons and technical terrain.",
        use: "Foot protection, warmth, support and traction.",
        fact: "Boots must fit correctly and match the route and crampons."
    },
    {
        name: "Four-Season Mountain Tent",
        category: "Clothing",
        era: 1970,
        period: "High-Altitude Camping",
        image: "images pro/images.jpg",
        alt: "Camping outdoors",
        description: "Expedition tents are designed for stronger winds and harsher conditions than ordinary recreational tents.",
        use: "Shelter at exposed camps and in severe weather.",
        fact: "Site selection, anchoring and weather judgement remain essential."
    },
    {
        name: "Trekking Poles",
        category: "Traditional",
        era: 1970,
        period: "Modern Trekking",
        image: "images pro/images (22).jpg",
        alt: "Hikers on a mountain trail",
        description: "Modern adjustable poles are lightweight supports used during hiking and trekking.",
        use: "Balance and reducing some of the load on legs during walking.",
        fact: "Poles are helpful on many trails but may need to be stowed during technical climbing."
    },
    {
        name: "Paper Topographic Map",
        category: "Traditional",
        era: 1800,
        period: "Traditional Navigation",
        image: "images pro/image35.jpg",
        alt: "Outdoor terrain",
        description: "Topographic maps show terrain features, contour lines, elevation and geographic information.",
        use: "Route planning, identifying landforms and navigating with a compass.",
        fact: "Carry a map that covers the intended route and know how to read it."
    },
    {
        name: "Emergency Whistle",
        category: "Safety",
        era: 1900,
        period: "Emergency Signalling",
        image: "images pro/images (3).jpg",
        alt: "Outdoor camping equipment",
        description: "A small whistle can produce a loud signal without using a battery.",
        use: "Attracting attention and signalling to nearby team members.",
        fact: "Keep it accessible rather than buried deep in a backpack."
    },
    {
        name: "First-Aid Kit",
        category: "Safety",
        era: 1900,
        period: "Expedition Medical Supplies",
        image: "images pro/Image 22.jpeg",
        alt: "Medical supplies",
        description: "A mountain first-aid kit contains suitable supplies for common injuries and medical situations.",
        use: "Basic injury care while awaiting professional help.",
        fact: "The contents should match the expedition, group needs and training."
    }
];

document.addEventListener("DOMContentLoaded", function () {
    /* FILTER AND DISPLAY */
    const gadgetSearch = document.getElementById("gadgetSearch");
    const gadgetCategory = document.getElementById("gadgetCategory");
    const gadgetSort = document.getElementById("gadgetSort");
    const gadgetsGrid = document.getElementById("gadgetsGrid");
    const resultCount = document.getElementById("resultCount");
    const noResults = document.getElementById("noResults");

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            const map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };
            return map[character];
        });
    }

    function getFilteredGadgets() {
        const query = gadgetSearch ? gadgetSearch.value.trim().toLowerCase() : "";
        const category = gadgetCategory ? gadgetCategory.value : "all";

        let filtered = gadgets.filter(function (gadget) {
            const searchableText = [
                gadget.name,
                gadget.category,
                gadget.period,
                gadget.description,
                gadget.use,
                gadget.fact,
                gadget.era
            ].join(" ").toLowerCase();

            const matchesSearch = searchableText.includes(query);
            const matchesCategory =
                category === "all" || gadget.category === category;

            return matchesSearch && matchesCategory;
        });

        if (gadgetSort) {
            switch (gadgetSort.value) {
                case "az":
                    filtered.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case "za":
                    filtered.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case "oldest":
                    filtered.sort((a, b) => a.era - b.era);
                    break;
                case "newest":
                    filtered.sort((a, b) => b.era - a.era);
                    break;
            }
        }

        return filtered;
    }

    function renderGadgets() {
        if (!gadgetsGrid) return;
        const filtered = getFilteredGadgets();

        if (resultCount) {
            resultCount.textContent =
                "Showing " + filtered.length + " of " + gadgets.length +
                " equipment entries.";
        }

        if (noResults) {
            noResults.style.display = filtered.length ? "none" : "block";
        }

        gadgetsGrid.innerHTML = filtered.map(function (gadget) {
            return `
                <div class="col-md-6 col-lg-4">
                    <article class="gadget-card">
                        <div class="gadget-image-wrap">
                            <img
                                class="gadget-image"
                                src="${escapeHTML(gadget.image)}"
                                alt="${escapeHTML(gadget.alt)}"
                                loading="lazy"
                            >
                            <span class="gadget-era">
                                ${escapeHTML(gadget.category)}
                            </span>
                        </div>

                        <div class="gadget-card-body">
                            <h3>${escapeHTML(gadget.name)}</h3>

                            <p>${escapeHTML(gadget.description)}</p>

                            <div class="gadget-use">
                                <strong>Mountain Use:</strong><br>
                                ${escapeHTML(gadget.use)}
                            </div>

                            <div class="gadget-use">
                                <strong>Interesting Fact:</strong><br>
                                ${escapeHTML(gadget.fact)}
                            </div>

                            <div class="gadget-footer">
                                <i class="bi bi-clock-history"></i>
                                ${escapeHTML(gadget.period)}
                            </div>
                        </div>
                    </article>
                </div>
            `;
        }).join("");
    }

    [gadgetSearch, gadgetCategory, gadgetSort].forEach(function (element) {
        if (element) {
            element.addEventListener("input", renderGadgets);
            element.addEventListener("change", renderGadgets);
        }
    });

    renderGadgets();

    /* VISITOR COUNT */
    const visitorCountEl = document.getElementById("visitorCount");
    if (visitorCountEl) {
        visitorCountEl.innerText = "0";
    }

    /* ACTIVE NAVIGATION */
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    /* BACK TO TOP */
    const backTop = document.getElementById("backTop");
    if (backTop) {
        window.addEventListener("scroll", function () {
            backTop.style.display = window.scrollY > 500 ? "flex" : "none";
        });

        backTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* CLOSE MOBILE NAV AFTER CLICK */
    document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            const nav = document.getElementById("mainNav");
            if (nav && nav.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(nav).hide();
            }
        });
    });
});