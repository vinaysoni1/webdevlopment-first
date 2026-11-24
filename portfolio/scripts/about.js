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
                date: "2025-Present",
                position: "Frontend developer",
                company: "Personal projects",
                details: "Developing modern and responsive websites using HTML, CSS, JavaScript, and Tailwind CSS. Focused on clean UI design and user experience."
            }, {
                id: 2,
                date: "2026-Present",
                position: "React Developer",
                company: "Personal projects",
                details: "Building interactive web applications using React.js and reusable components. Focused on dynamic interfaces and efficient development."
            }, {
                id: 3,
                date: "2026-Present",
                position: "Java Programmer",
                company: "Self Learning & Practice",
                details: "Practicing Java, OOP concepts, and Data Structures & Algorithms. Improving logical thinking and problem-solving skills."
            },
            {
                id: 4,
                date: "2025-Present",
                position: "web Designer",
                company: "Personal Project",
                details: "Creating attractive and user-friendly website layouts with responsive designs. Focused on visual appearance, accessibility, and usability."
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
                date: "2024-2028 (Expected)",
                degree: "Bachelor of Technology (B.Tech)",
                institution: "Baderia Gloabal institute of Engineering & Management, Jabalpur",
                details: "Currently pursuing B.Tech in CSE, focusing on programming, web development, and software engineering.",
            }, {
                id: 2,
                date: "2024",
                degree: "High Secondary (12th)",
                institution: "Govt. H.S.S. Pahadi Niwar Dist. katni MP (483442)",
                details: "Successfully completed Class 12th with 80% marks.",

            }, {

                id: 3,
                date: "2022",
                degree: "High School (10th)",
                institution: "Govt. H.S.S. Pahadi Niwar Dist. katni MP (483442)",
                details: "Successfully completed Class 10th with 75% marks.",
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
                return `
                  <div class="skill-box" key=${ele?.id} >
                            <img src=${ele?.icons} alt=${ele?.name} title=${ele?.name} loading="lazy" />
                        </div>
                `
            }).join(" ");

            if (skills) {
                skills.innerHTML = skillContent;
            }
        } else if (activeTab === "about-me") {
            const myinfo = document.querySelector(".my-info");
            const infoList = [{
                id: 1,
                key: "Name: ",
                value: " Vinay Soni",
            }, {
                id: 2,
                key: "Country: ",
                value: " India",
            }, {
                id: 3,
                key: "Industry: ",
                value: "SoftWare & IT",
            }, {
                id: 4,
                key: "Experience: ",
                value: "Fresher",
            }, {
                id: 5,
                key: "Address: ",
                value: "Jabalpur [482002], (MP)",
            }];

            const infoContent = infoList.map((ele) => {
                return `
                <div class="info-box" key=${ele?.id}>
                <span>${ele?.key}</span>
                <span>${ele?.value}</span>
                </div>

                `
            }).join(" ");

            if (myinfo) {
                myinfo.innerHTML = infoContent;
            }
        }
    })
})