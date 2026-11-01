const aboutTab = document.querySelectorAll('.tab');
const aboutContent = document.querySelectorAll('.tab-content');


// document.addEventListener('DOMContentLoaded', () => {
//     if (aboutTab) {
//         aboutTab[0].click();
//     }
// });

aboutTab.forEach((tab) => {

    tab.addEventListener('click', (e) => {
        e.preventDefault();
        aboutTab.forEach((a) => {
            a.classList.remove("active");

        })
        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });


        const activeTab = tab.dataset.section;
        document.getElementById(activeTab).classList.add("active");

        if (activeTab === "experience") {
            const experiences = document.querySelector("experience-list");

            const experinceList = [{
                id: 1,
                date: 2023 - 2024,
                position: "frontend developer",
                company: "company name",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            }, {
                id: 1,
                date: 2023 - 2024,
                position: "frontend developer",
                company: "company name",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            }, {
                id: 1,
                date: 2023 - 2024,
                position: "frontend developer",
                company: "company name",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            }]
        }
    })
})