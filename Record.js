/* RECORD DATA */
const records = [
    {
        title: "Most Ascents of Mount Everest",
        person: "Kami Rita Sherpa",
        mountain: "Mount Everest",
        place: "Nepal / China",
        year: 2026,
        category: "High Altitude",
        tag: "Repeated Ascents",
        achievement: "Guinness World Records reported 32 Everest ascents for Kami Rita Sherpa in May 2026. Record counts can change as new ascents are completed and verified.",
        url: "https://www.guinnessworldrecords.com/world-records/63829-most-conquests-of-mt-everest"
    },
    {
        title: "Fastest Everest Ascent — South Side, Female",
        person: "Phunjo Jhangmu Lama",
        mountain: "Mount Everest",
        place: "South side, Nepal",
        year: 2024,
        category: "Speed",
        tag: "Female Speed Record",
        achievement: "Recorded an ascent time of 14 hours and 31 minutes on 23 May 2024 under the stated record criteria.",
        url: "https://www.guinnessworldrecords.com/world-records/623483-fastest-ascent-of-everest-south-side-female"
    },
    {
        title: "Fastest Everest Ascent — South Side",
        person: "Lhakpa Gelu Sherpa",
        mountain: "Mount Everest",
        place: "South side, Nepal",
        year: 2003,
        category: "Speed",
        tag: "Speed Record",
        achievement: "Recorded an ascent time of 10 hours, 56 minutes and 46 seconds on 26 May 2003.",
        url: "https://www.guinnessworldrecords.com/world-records/fastest-ascent-of-mt-everest-south-side"
    },
    {
        title: "First Successful Ascent of Mount Everest",
        person: "Edmund Hillary and Tenzing Norgay",
        mountain: "Mount Everest",
        place: "Nepal / China",
        year: 1953,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Reached the summit on 29 May 1953 as members of the successful British expedition.",
        url: "https://www.guinnessworldrecords.com/world-records/first-ascent-of-mount-everest"
    },
    {
        title: "First Ascent of Nanga Parbat",
        person: "Hermann Buhl",
        mountain: "Nanga Parbat",
        place: "Pakistan",
        year: 1953,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Made the first successful ascent of Nanga Parbat on 3 July 1953.",
        url: "https://www.guinnessworldrecords.com/world-records/109058-first-ascent-of-nanga-parbat"
    },
    {
        title: "First Winter Ascent of Nanga Parbat",
        person: "Ali Sadpara, Alex Txikon and Simone Moro",
        mountain: "Nanga Parbat",
        place: "Pakistan",
        year: 2016,
        category: "Winter Climbing",
        tag: "Winter Milestone",
        achievement: "Completed the first winter ascent of Nanga Parbat on 26 February 2016.",
        url: "https://www.guinnessworldrecords.com/world-records/550478-first-winter-ascent-of-nanga-parbat"
    },
    {
        title: "First Ascent of Annapurna I",
        person: "Maurice Herzog and Louis Lachenal",
        mountain: "Annapurna I",
        place: "Nepal",
        year: 1950,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Reached the summit of Annapurna I on 3 June 1950, marking the first ascent of an 8,000-metre peak.",
        url: "https://www.guinnessworldrecords.com/world-records/109056-first-ascent-of-annapurna-i"
    },
    {
        title: "First Woman to Summit Nanga Parbat",
        person: "Liliane Barrard",
        mountain: "Nanga Parbat",
        place: "Pakistan",
        year: 1984,
        category: "First Ascent",
        tag: "Women's Mountaineering",
        achievement: "Reached the summit on 27 June 1984, documented as the first female ascent of Nanga Parbat.",
        url: "https://www.guinnessworldrecords.com/world-records/665357-first-ascent-of-nanga-parbat-female"
    },
    {
        title: "First Climber to Summit All 14 Eight-Thousanders",
        person: "Reinhold Messner",
        mountain: "All 14 eight-thousanders",
        place: "Himalayas and Karakoram",
        year: 1986,
        category: "Eight-Thousanders",
        tag: "Global Milestone",
        achievement: "Completed the fourteen 8,000-metre peaks with Lhotse on 16 October 1986. Summit verification criteria have evolved over time.",
        url: "https://www.guinnessworldrecords.com/world-records/first-person-to-climb-all-8000-m-peaks"
    },
    {
        title: "First Confirmed True-Summit Ascents of All 14 Eight-Thousanders Without Supplemental Oxygen",
        person: "Ed Viesturs",
        mountain: "All 14 eight-thousanders",
        place: "Himalayas and Karakoram",
        year: 2005,
        category: "Oxygen Records",
        tag: "No Supplemental Oxygen",
        achievement: "Completed the fourteen true-summit ascents without supplemental oxygen on 12 May 2005.",
        url: "https://www.guinnessworldrecords.com/world-records/746531-first-true-summit-ascent-of-the-8-000ers"
    },
    {
        title: "Fastest Climb of All 14 Eight-Thousanders",
        person: "Kristin Harila and Tenjen Lama Sherpa",
        mountain: "All 14 eight-thousanders",
        place: "Himalayas and Karakoram",
        year: 2023,
        category: "Eight-Thousanders",
        tag: "Speed Milestone",
        achievement: "Completed the fourteen 8,000-metre peaks in 92 days, finishing on 27 July 2023. Record definitions and team categories should be checked in the source.",
        url: "https://www.guinnessworldrecords.com/world-records/746545-fastest-true-summit-ascent-of-the-8000ers"
    },
    {
        title: "Youngest Male to Climb All 14 Eight-Thousanders",
        person: "Mingma Gyabu Sherpa (David)",
        mountain: "All 14 eight-thousanders",
        place: "Himalayas and Karakoram",
        year: 2019,
        category: "Age Records",
        tag: "Age Milestone",
        achievement: "Completed the fourteen peaks at the age of 30 years and 166 days on 29 October 2019 under the cited record criteria.",
        url: "https://www.guinnessworldrecords.com/world-records/383416-youngest-person-to-climb-all-8-000-m-mountains"
    },
    {
        title: "Fastest Everest–Lhotse Traverse",
        person: "Mingma Dorchi Sherpa",
        mountain: "Everest and Lhotse",
        place: "Nepal",
        year: 2019,
        category: "Speed",
        tag: "Double Summit",
        achievement: "Recorded a traverse time of 6 hours and 1 minute on 27 May 2019 under the cited record rules.",
        url: "https://guinnessworldrecords.de/world-records/623437-fastest-everest-lhotse-traverse-male"
    },
    {
        title: "Everest and Lhotse Without Supplemental Oxygen",
        person: "Nirmal 'Nims' Purja",
        mountain: "Everest and Lhotse",
        place: "Nepal",
        year: 2022,
        category: "Oxygen Records",
        tag: "No Supplemental Oxygen",
        achievement: "Recorded a combined Everest–Lhotse achievement without supplemental oxygen on 15–16 May 2022. See the source for exact timing criteria.",
        url: "https://guinnessworldrecords.de/world-records/743074-fastest-time-to-climb-everest-and-lhotse-without-supplementary-oxygen"
    },
    {
        title: "Youngest Male to Climb Everest and Lhotse",
        person: "Nima Rinji Sherpa",
        mountain: "Everest and Lhotse",
        place: "Nepal",
        year: 2023,
        category: "Age Records",
        tag: "Age Milestone",
        achievement: "Achieved the paired summit milestone at 17 years and 36 days on 24 May 2023, according to the cited record listing.",
        url: "https://guinnessworldrecords.de/world-records/702117-youngest-person-to-climb-everest-and-lhotse-male"
    },
    {
        title: "First Male to Climb Everest and K2 Without Supplemental Oxygen",
        person: "Reinhold Messner",
        mountain: "Everest and K2",
        place: "Nepal / Pakistan–China region",
        year: 1979,
        category: "Oxygen Records",
        tag: "No Supplemental Oxygen",
        achievement: "Summited Everest in 1978 and K2 in 1979 without supplemental oxygen, as documented in the cited record.",
        url: "https://www.guinnessworldrecords.com/world-records/454437-first-ascent-of-everest-and-k2-without-supplementary-oxygen-male"
    },
    {
        title: "Highest Mountain Above Sea Level",
        person: "Mount Everest",
        mountain: "Mount Everest",
        place: "Nepal / China",
        year: 2020,
        category: "High Altitude",
        tag: "Geographic Record",
        achievement: "The officially announced height is 8,848.86 metres above sea level.",
        url: "https://www.guinnessworldrecords.com/world-records/highest-mountain"
    },
    {
        title: "First Winter Ascent of an Eight-Thousander",
        person: "Krzysztof Wielicki and Leszek Cichy",
        mountain: "Mount Everest",
        place: "Nepal / China",
        year: 1980,
        category: "Winter Climbing",
        tag: "Winter Milestone",
        achievement: "Completed the first winter ascent of Mount Everest on 17 February 1980.",
        url: "https://www.britannica.com/place/Mount-Everest"
    },
    {
        title: "First Winter Ascent of K2",
        person: "Nirmal Purja, Mingma Gyalje Sherpa, Gelje Sherpa, and team",
        mountain: "K2",
        place: "Pakistan / China region",
        year: 2021,
        category: "Winter Climbing",
        tag: "Winter Milestone",
        achievement: "A Nepalese team reached the summit of K2 in winter on 16 January 2021, a historic achievement on one of the world's most challenging mountains.",
        url: "https://www.britannica.com/place/K2"
    },
    {
        title: "First Ascent of K2",
        person: "Achille Compagnoni and Lino Lacedelli",
        mountain: "K2",
        place: "Pakistan / China region",
        year: 1954,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Reached the summit of K2 on 31 July 1954 as part of an Italian expedition.",
        url: "https://www.britannica.com/place/K2"
    },
    {
        title: "First Ascent of Kangchenjunga",
        person: "Joe Brown and George Band",
        mountain: "Kangchenjunga",
        place: "Nepal / India border region",
        year: 1955,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Reached the summit of Kangchenjunga on 25 May 1955. The expedition stopped just short of the exact summit in respect of local beliefs.",
        url: "https://www.britannica.com/place/Kangchenjunga"
    },
    {
        title: "First Ascent of Lhotse",
        person: "Fritz Luchsinger and Ernst Reiss",
        mountain: "Lhotse",
        place: "Nepal / China",
        year: 1956,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Made the first ascent of Lhotse on 18 May 1956.",
        url: "https://www.britannica.com/place/Lhotse"
    },
    {
        title: "First Ascent of Makalu",
        person: "Lionel Terray and Jean Couzy",
        mountain: "Makalu",
        place: "Nepal / China",
        year: 1955,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Reached the summit of Makalu on 15 May 1955 as members of a French expedition.",
        url: "https://www.britannica.com/place/Makalu"
    },
    {
        title: "First Ascent of Cho Oyu",
        person: "Herbert Tichy, Joseph Jöchler and Pasang Dawa Lama",
        mountain: "Cho Oyu",
        place: "Nepal / China",
        year: 1954,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Reached the summit of Cho Oyu on 19 October 1954.",
        url: "https://www.britannica.com/place/Cho-Oyu"
    },
    {
        title: "First Ascent of Dhaulagiri I",
        person: "Kurt Diemberger, Peter Diener, Albin Schelbert, Ernst Forrer, Nawang Dorje and Nima Dorje",
        mountain: "Dhaulagiri I",
        place: "Nepal",
        year: 1960,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "A Swiss-Austrian-Nepalese expedition achieved the first ascent on 13 May 1960.",
        url: "https://www.britannica.com/place/Dhaulagiri"
    },
    {
        title: "First Ascent of Manaslu",
        person: "Toshio Imanishi and Gyalzen Norbu",
        mountain: "Manaslu",
        place: "Nepal",
        year: 1956,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Reached the summit of Manaslu on 9 May 1956.",
        url: "https://www.britannica.com/place/Manaslu"
    },
    {
        title: "First Ascent of Gasherbrum I",
        person: "Pete Schoening and Andy Kauffman",
        mountain: "Gasherbrum I",
        place: "Karakoram",
        year: 1958,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Reached the summit of Gasherbrum I on 5 July 1958.",
        url: "https://www.britannica.com/place/Gasherbrum-I"
    },
    {
        title: "First Ascent of Broad Peak",
        person: "Fritz Wintersteller, Marcus Schmuck, Kurt Diemberger and Hermann Buhl",
        mountain: "Broad Peak",
        place: "Karakoram",
        year: 1957,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "Reached the summit of Broad Peak on 9 June 1957.",
        url: "https://www.britannica.com/place/Broad-Peak"
    },
    {
        title: "First Ascent of Shishapangma",
        person: "Xu Jing and Chinese expedition team",
        mountain: "Shishapangma",
        place: "Tibet, China",
        year: 1964,
        category: "First Ascent",
        tag: "Historic First",
        achievement: "A Chinese expedition achieved the first ascent in May 1964.",
        url: "https://www.britannica.com/place/Shishapangma"
    }
];

// DOM elements
const recordsGrid = document.getElementById('recordsGrid');
const recordSearch = document.getElementById('recordSearch');
const recordCategory = document.getElementById('recordCategory');
const recordSort = document.getElementById('recordSort');
const noResults = document.getElementById('noResults');
const resultCount = document.getElementById('resultCount');

const totalRecordsElem = document.getElementById('totalRecords');
const totalClimbersElem = document.getElementById('totalClimbers');
const totalMountainsElem = document.getElementById('totalMountains');
const visitorCountElem = document.getElementById('visitorCount');

// Function to render records
function displayRecords(items) {
    if (!recordsGrid) return;
    
    recordsGrid.innerHTML = '';
    
    if (items.length === 0) {
        if (noResults) noResults.style.display = 'block';
        if (resultCount) resultCount.textContent = 'Showing 0 records';
        return;
    }

    if (noResults) noResults.style.display = 'none';
    if (resultCount) resultCount.textContent = `Showing ${items.length} records`;

    items.forEach(record => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        col.innerHTML = `
            <div class="record-card h-100">
                <div class="record-card-top">
                    <span class="record-tag">${record.tag || record.category}</span>
                    <h3>${record.title}</h3>
                </div>
                <div class="record-card-body d-flex flex-column justify-content-between">
                    <div>
                        <p class="mb-2"><strong>Climber:</strong> ${record.person}</p>
                        <p class="mb-2"><strong>Mountain:</strong> ${record.mountain} (${record.place})</p>
                        <p class="mb-2"><strong>Year:</strong> ${record.year}</p>
                        <p class="record-description">${record.achievement}</p>
                    </div>
                    <a class="record-source mt-3" href="${record.url}" target="_blank" rel="noopener noreferrer">
                        View reference <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>
            </div>
        `;
        recordsGrid.appendChild(col);
    });
}

// Function to filter and sort records
function filterAndSortRecords() {
    let filtered = [...records];
    
    const searchTerm = recordSearch ? recordSearch.value.toLowerCase().trim() : '';
    const categoryVal = recordCategory ? recordCategory.value : 'all';
    const sortVal = recordSort ? recordSort.value : 'newest';

    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(r => 
            r.title.toLowerCase().includes(searchTerm) ||
            r.person.toLowerCase().includes(searchTerm) ||
            r.mountain.toLowerCase().includes(searchTerm) ||
            r.achievement.toLowerCase().includes(searchTerm) ||
            r.year.toString().includes(searchTerm)
        );
    }

    // Category filter
    if (categoryVal !== 'all') {
        filtered = filtered.filter(r => r.category === categoryVal);
    }

    // Sorting
    filtered.sort((a, b) => {
        if (sortVal === 'newest') return b.year - a.year;
        if (sortVal === 'oldest') return a.year - b.year;
        if (sortVal === 'az') return a.person.localeCompare(b.person);
        if (sortVal === 'za') return b.person.localeCompare(a.person);
        return 0;
    });

    displayRecords(filtered);
}

// Initialize stats
function initStats() {
    if (totalRecordsElem) totalRecordsElem.textContent = records.length;
    if (totalClimbersElem) totalClimbersElem.textContent = "50+";
    if (totalMountainsElem) totalMountainsElem.textContent = "15+";
    
    // Visitor counter set to 0 directly
    if (visitorCountElem) visitorCountElem.textContent = "0";
}

// Event Listeners
if (recordSearch) recordSearch.addEventListener('input', filterAndSortRecords);
if (recordCategory) recordCategory.addEventListener('change', filterAndSortRecords);
if (recordSort) recordSort.addEventListener('change', filterAndSortRecords);

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    initStats();
    displayRecords(records);
});