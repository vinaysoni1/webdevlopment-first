const aboutTab = document.querySelectorAll('.tab');
const aboutContent = document.querySelectorAll('.tab-content');


document.addEventListener('DOMContentLoaded', () => {
    if (aboutTab.length > 0) {
        aboutTab[0].click();
    }
});

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
            const experiences = document.querySelector(".experince-list");

            const experinceList = [{
                id: 1,
                date: "2023 - 2024",
                position: "frontend developer",
                company: "company name",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            }, {
                id: 2,
                date: "2023 - 2024",
                position: "frontend developer",
                company: "company name",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            }, {
                id: 3,
                date: "2023 - 2024",
                position: "frontend developer",
                company: "company name",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            }]

            const experincecontent = experinceList.map((ele) => {
                return `
                <div class="experince-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="comapany-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `;
            }).join("");

            if (experiences) {
                experiences.innerHTML = experincecontent;
            }
        } else if (activeTab === "education") {
            const education = document.querySelector('.education-list');

            const educationList = [{
                id: 1,
                date: "2020-2023",
                degree: "Bachelor of Computer Applications (BCA)",
                institution: "CS University, Dehradun",
                details: "Studied core subjects like Data Structures, Web Development, and Operating Systems. Built multiple academic projects using JavaScript and the MERN stack.",
            }, {
                id: 2,
                date: "2020-2023",
                degree: "Bachelor of Computer Applications (BCA)",
                institution: "CS University, Dehradun",
                details: "Studied core subjects like Data Structures, Web Development, and Operating Systems. Built multiple academic projects using JavaScript and the MERN stack.",

            }, {

                id: 3,
                date: "2020-2023",
                degree: "Bachelor of Computer Applications (BCA)",
                institution: "CS University, Dehradun",
                details: "Studied core subjects like Data Structures, Web Development, and Operating Systems. Built multiple academic projects using JavaScript and the MERN stack.",
            }];

            const educationContent = educationList.map((ele) => {
                return `
         
                 <div class="experince-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.degree}</h3>
                        <div class="comapany-name">
                            <span></span>
                            <p>${ele?.institution}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>

                
                `
            }).join(" ");

            if (education) {
                education.innerHTML = educationContent;
            }
        } else if (activeTab === "skills") {
            const skills = document.querySelector(".skill-list");

            const skillsList = [{
                id: 1,
                name: "HTML-Hyper Text Markup Language",
                icons: "assets/html.png",
            }, {
                id: 2,
                name: "CSS-CasCading Sheet Style",
                icons: "assets/css.png",
            }, {
                id: 3,
                name: "JS-JavaScript",
                icons: "assets/js.png",
            }, {
                id: 4,
                name: "BootStrap",
                icons: "assets/bootstrap.png",
            }, {
                id: 5,
                name: "Node JS",
                icons: "assets/node.png",
            }, {
                id: 6,
                name: "React",
                icons: "assets/react.png",
            }, {
                id: 7,
                name: "MongoDB",
                icons: "assets/mongodb.png",
            }];

            const skillContent = skillsList.map((ele) => {
                return`
                  <div class="skill-box" key=${ele?.id} >
                            <img src=${ele?.icons} alt=${ele?.name} title=${ele?.name} loading="lazy" />
                        </div>
                `
            }).join(" ");

            if(skills){
               skills.innerHTML=skillContent;
            }
        }
    })
})