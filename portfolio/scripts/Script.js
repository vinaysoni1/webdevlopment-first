const toggle = document.getElementById('menu-toggle');
if (toggle) {
    toggle.addEventListener('changed', () => {
        document.body.classList.toggle("no-scroll", toggle.checked);
    })
}

const word = ["WebDevLoper", "JavaDevLoper", "ProblemSolver", "an Aspiring Software Engineer"];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isTypingDelay = 100;
let erasigndelay = 100;
let nextWorddelay = 1000;


const type = () => {
    const currentWord = word[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;


        if (charIndex == currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWorddelay);
        } else {
            setTimeout(type, isTypingDelay);
        }
    }
    else {
        typingText.textContent = currentWord.substring(0, charIndex - 1)
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % word.length;
            setTimeout(type, 500);

        }
        else {
            setTimeout(type, erasigndelay);
        }
    }
};
document.addEventListener("DOMContentLoaded", () => {
    if (word.length) type();
});



const navlink = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        link.classList.add("active");


        navlink.forEach((l) => {
            if (l == link) {
                l.classList.add("active");

            } else {
                l.classList.remove("active");
            }
        });

        const tabName = link.dataset.tab;
        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active")
            } else {
                tab.classList.remove("active")
            }
        })
        if (tabName === "services") {
            const serviceList = [{
                id: 1,
                icon: "ph-code",
                text: "Frontend Development",
                para: "I build interactive and user-friendly websites using HTML, CSS and JavaScript..."

            },
            {
                id: 2,
                icon: "ph-paint-brush",
                text: "React Development",
                para: "I develop reusable components and dynamic user interfaces using React...",
            },
            {
                id: 3,
                icon: "ph-trend-up",
                text: "Responsive Web Design",
                para: "I create responsive websites that work across mobile, tablet and desktop devices...",
            },
            {
                id: 4,
                icon: "ph-palette",
                text: "PortFolio Website Development",
                para: "I create modern portfolio websites to showcase skills, projects and professional achievements...",
            },
            {
                id: 5,
                icon: "ph-video",
                text: "Java Programming",
                para: "I write Java programs and practice object-oriented programming and problem-solving...",
            },
            {
                id: 6,
                icon: "ph-camera",
                text: "Database Management",
                para: "I work with MongoDB to understand database structures and manage application data...",
            },
            ];

            const services = document.getElementsByClassName("service-list")

            const innercontent = serviceList.map((l) => {
                return `
              <div class="box" key=${l?.id}>

                <div class="head-icon">
                <i class="ph ${l?.icon}"></i>
                <span>
                <i class="ph ph-arrow-down-right"></i>
                </span>
                </div>
                <h3>${l?.text}</h3>
                <span class="spacer"></span>

                <p>${l?.para}</p>
              
              </div>
                `;
            }).join("");
            Array.from(services).forEach((ele) => {
                ele.innerHTML = innercontent;
            })
        }
        toggle.checked=false;

    })

});